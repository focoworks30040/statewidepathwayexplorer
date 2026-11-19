"""Offline tests: the scrapers are faked so no network is needed."""

import pandas as pd

import scrape_jobs


def fake_jobspy(site, search_term, zip_code, radius, results, hours_old):
    rows = [
        {"site": site, "title": "Cashier", "company": "Publix",
         "location": "Cumming, GA, US", "date_posted": "2026-11-18",
         "job_url": f"https://{site}.example/cashier"},
        {"site": site, "title": "Forklift Operator", "company": "Acme",
         "location": "Gainesville, GA, US", "date_posted": "2026-11-17",
         "job_url": f"https://{site}.example/forklift"},
    ]
    df = pd.DataFrame(rows)
    df["searched_zip"] = zip_code
    return df


def fake_monster(search_term, zip_code, radius, results):
    return [{"site": "monster", "title": "Cashier", "company": "Publix",
             "location": "Cumming, GA 30041", "date_posted": "2026-11-18",
             "job_url": "https://monster.example/cashier", "searched_zip": zip_code}]


def run(monkeypatch, tmp_path, *extra):
    monkeypatch.setattr(scrape_jobs, "scrape_jobspy_site", fake_jobspy)
    monkeypatch.setattr(scrape_jobs, "scrape_monster", fake_monster)
    out = tmp_path / "jobs.csv"
    code = scrape_jobs.main(
        ["--zips", "30028", "30040", "30040", "30041", "--delay", "0", "--out", str(out), *extra]
    )
    assert code == 0
    return pd.read_csv(out, dtype=str)


def test_dedupes_across_sites_and_zips(monkeypatch, tmp_path):
    df = run(monkeypatch, tmp_path)
    assert len(df) == 2
    cashier = df[df["title"] == "Cashier"].iloc[0]
    assert cashier["site"] == "indeed, linkedin, monster, zip_recruiter"
    assert cashier["searched_zip"] == "30028, 30040, 30041"


def test_strict_keeps_only_forsyth(monkeypatch, tmp_path):
    df = run(monkeypatch, tmp_path, "--strict")
    assert df["title"].tolist() == ["Cashier"]


def test_monster_parser():
    from monster import _parse

    row = _parse({
        "jobId": "abc",
        "jobPosting": {
            "title": "Teller", "hiringOrganization": {"name": "Bank"},
            "jobLocation": [{"address": {"addressLocality": "Cumming",
                                         "addressRegion": "GA", "postalCode": "30040"}}],
            "datePosted": "2026-11-10T12:00:00Z",
        },
    }, "30040")
    assert row["location"] == "Cumming, GA 30040"
    assert row["date_posted"] == "2026-11-10"
    assert row["job_url"] == "https://www.monster.com/job-openings/abc"
