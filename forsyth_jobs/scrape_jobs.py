#!/usr/bin/env python3
"""Collect job postings near Forsyth County, GA ZIP codes.

Sources: Indeed, LinkedIn and ZipRecruiter (through python-jobspy) plus a
best-effort Monster scraper. Results are de-duplicated and written to a CSV.

Examples:
    python scrape_jobs.py
    python scrape_jobs.py --search "nurse" --hours-old 72
    python scrape_jobs.py --sites indeed linkedin --results 100 --strict
"""

from __future__ import annotations

import argparse
import logging
import re
import sys
import time
from datetime import datetime
from pathlib import Path

import pandas as pd

from monster import scrape_monster

DEFAULT_ZIPS = ["30028", "30040", "30041"]

# All three default ZIPs are Cumming addresses. --strict keeps only postings
# whose location mentions one of these places or ZIP codes.
FORSYTH_PLACES = ["cumming", "forsyth county", "coal mountain", "silver city"]

ALL_SITES = ["indeed", "linkedin", "zip_recruiter", "monster"]

COLUMNS = [
    "site",
    "title",
    "company",
    "location",
    "date_posted",
    "job_type",
    "min_amount",
    "max_amount",
    "interval",
    "is_remote",
    "job_url",
    "searched_zip",
]

log = logging.getLogger("forsyth_jobs")


def scrape_jobspy_site(site, search_term, zip_code, radius, results, hours_old):
    """Scrape one site supported by python-jobspy; return a DataFrame."""
    from jobspy import scrape_jobs  # imported lazily so --help works without it

    kwargs = dict(
        site_name=[site],
        search_term=search_term or None,
        location=f"Cumming, GA {zip_code}",
        distance=radius,
        results_wanted=results,
        country_indeed="usa",
        hours_old=hours_old,
        verbose=0,
    )
    df = scrape_jobs(**kwargs)
    if df is None or df.empty:
        return pd.DataFrame(columns=COLUMNS)
    df = df.copy()
    df["searched_zip"] = zip_code
    return df


def normalize(df: pd.DataFrame) -> pd.DataFrame:
    for col in COLUMNS:
        if col not in df.columns:
            df[col] = None
    df = df[COLUMNS].copy()
    df["date_posted"] = df["date_posted"].astype(str).str.slice(0, 10)
    df.loc[df["date_posted"].isin(["None", "NaT", "nan"]), "date_posted"] = ""
    for col in ("title", "company", "location", "job_url"):
        df[col] = df[col].fillna("").astype(str).str.strip()
    return df


def _key(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", " ", text.lower()).strip()


def dedupe(df: pd.DataFrame) -> pd.DataFrame:
    """Drop repeats: same URL, or same title + company on any site.

    The searched ZIPs overlap, so one posting is usually found several
    times. Rows found under several ZIPs keep a combined searched_zip list,
    and postings listed on several sites keep a combined site list.
    """
    if df.empty:
        return df
    df = df[(df["job_url"] != "") & (df["title"] != "")].copy()
    df["_key"] = df["title"].map(_key) + "|" + df["company"].map(_key)
    agg = {c: "first" for c in COLUMNS if c not in ("site", "searched_zip")}
    agg["site"] = lambda s: ", ".join(sorted(set(s)))
    agg["searched_zip"] = lambda s: ", ".join(sorted(set(s)))
    out = df.groupby("_key", sort=False).agg(agg).reset_index(drop=True)
    return out[COLUMNS]


def strict_filter(df: pd.DataFrame, zips: list[str]) -> pd.DataFrame:
    terms = FORSYTH_PLACES + zips
    pattern = "|".join(re.escape(t) for t in terms)
    return df[df["location"].str.contains(pattern, case=False, na=False)]


def parse_args(argv=None):
    p = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    p.add_argument("--zips", nargs="+", default=DEFAULT_ZIPS, help="ZIP codes to search")
    p.add_argument("--sites", nargs="+", default=ALL_SITES, choices=ALL_SITES)
    p.add_argument("--search", default="", help='Keyword, e.g. "warehouse" (blank = all jobs)')
    p.add_argument("--radius", type=int, default=5, help="Miles around each ZIP (default 5)")
    p.add_argument("--results", type=int, default=50, help="Max results per site per ZIP")
    p.add_argument("--hours-old", type=int, default=None, help="Only jobs posted in the last N hours")
    p.add_argument("--strict", action="store_true", help="Keep only jobs located in Cumming / Forsyth ZIPs")
    p.add_argument("--delay", type=float, default=3.0, help="Seconds to wait between requests")
    p.add_argument("--out", default=None, help="Output CSV path (default: output/forsyth_jobs_<timestamp>.csv)")
    return p.parse_args(argv)


def main(argv=None) -> int:
    args = parse_args(argv)
    logging.basicConfig(level=logging.INFO, format="%(levelname)s %(message)s")
    zips = list(dict.fromkeys(args.zips))  # drop duplicate ZIPs, keep order

    frames = []
    for zip_code in zips:
        for site in args.sites:
            log.info("Searching %s near %s ...", site, zip_code)
            try:
                if site == "monster":
                    rows = scrape_monster(args.search, zip_code, args.radius, args.results)
                    df = pd.DataFrame(rows, columns=COLUMNS)
                else:
                    df = scrape_jobspy_site(
                        site, args.search, zip_code, args.radius, args.results, args.hours_old
                    )
            except Exception as exc:  # one blocked site shouldn't stop the run
                log.warning("%s near %s failed: %s", site, zip_code, exc)
                df = pd.DataFrame(columns=COLUMNS)
            log.info("  %d results", len(df))
            if not df.empty:
                frames.append(normalize(df))
            time.sleep(args.delay)

    if not frames:
        log.error("No jobs found. See README.md > Troubleshooting.")
        return 1

    raw = pd.concat(frames, ignore_index=True)
    jobs = dedupe(raw)
    if args.strict:
        jobs = strict_filter(jobs, zips)
    jobs = jobs.sort_values("date_posted", ascending=False)

    out = Path(args.out) if args.out else (
        Path(__file__).parent / "output" / f"forsyth_jobs_{datetime.now():%Y%m%d_%H%M}.csv"
    )
    out.parent.mkdir(parents=True, exist_ok=True)
    jobs.to_csv(out, index=False)

    print(f"\n{len(raw)} postings collected, {len(jobs)} unique saved to {out}")
    print(jobs["site"].str.split(", ").explode().value_counts().to_string())
    return 0


if __name__ == "__main__":
    sys.exit(main())
