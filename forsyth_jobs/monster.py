"""Best-effort Monster.com scraper.

Monster has no public API and python-jobspy does not support it, so this
module calls the JSON endpoint that monster.com's own search page uses.
Monster protects that endpoint with bot detection, so it often answers 403.
When that happens we log a warning and return no rows instead of crashing,
so the other sites still produce results.
"""

from __future__ import annotations

import logging
import os
import time
import uuid

import requests

log = logging.getLogger(__name__)

SEARCH_URL = (
    "https://appsapi.monster.io/jobs-svx-service/v2/monster/search-jobs/"
    "samsearch/en-US"
)
# Monster's web app sends an ``apikey`` query parameter with this request.
# If searches fail, copy it from your browser (DevTools > Network, search
# monster.com, click the "samsearch" request) into MONSTER_API_KEY.
API_KEY = os.environ.get("MONSTER_API_KEY", "")

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36"
    ),
    "Accept": "application/json",
    "Content-Type": "application/json; charset=UTF-8",
    "Origin": "https://www.monster.com",
    "Referer": "https://www.monster.com/",
}


def _first(items):
    if isinstance(items, list) and items:
        return items[0]
    return items if isinstance(items, dict) else {}


def _parse(result: dict, zip_code: str) -> dict | None:
    posting = result.get("jobPosting") or {}
    norm = result.get("normalizedJobPosting") or {}
    title = posting.get("title") or norm.get("title")
    if not title:
        return None

    org = posting.get("hiringOrganization") or norm.get("hiringOrganization") or {}
    addr = (_first(posting.get("jobLocation") or norm.get("jobLocation")) or {}).get(
        "address", {}
    )
    city = addr.get("addressLocality", "")
    state = addr.get("addressRegion", "")
    postal = addr.get("postalCode", "")
    location = ", ".join(p for p in (city, state) if p)
    if postal:
        location = f"{location} {postal}".strip()

    job_id = result.get("jobId", "")
    url = posting.get("url") or norm.get("url")
    if not url and job_id:
        url = f"https://www.monster.com/job-openings/{job_id}"

    return {
        "site": "monster",
        "title": title,
        "company": org.get("name", ""),
        "location": location,
        "date_posted": (posting.get("datePosted") or "")[:10],
        "job_type": ", ".join(posting.get("employmentType") or [])
        if isinstance(posting.get("employmentType"), list)
        else (posting.get("employmentType") or ""),
        "min_amount": None,
        "max_amount": None,
        "interval": "",
        "is_remote": None,
        "job_url": url or "",
        "searched_zip": zip_code,
    }


def scrape_monster(
    search_term: str,
    zip_code: str,
    radius_miles: int,
    results_wanted: int,
    session: requests.Session | None = None,
) -> list[dict]:
    """Return up to ``results_wanted`` Monster jobs near ``zip_code``."""
    session = session or requests.Session()
    rows: list[dict] = []
    page_size = 50
    offset = 0
    fingerprint = uuid.uuid4().hex

    while len(rows) < results_wanted:
        payload = {
            "jobQuery": {
                "query": search_term or "",
                "locations": [
                    {
                        "country": "us",
                        "address": zip_code,
                        "radius": {"unit": "mi", "value": radius_miles},
                    }
                ],
            },
            "jobAdsRequest": {
                "position": list(range(1, page_size + 1)),
                "placement": {"component": "JSR_SPLIT_VIEW", "appName": "monster"},
            },
            "fingerprintId": fingerprint,
            "offset": offset,
            "pageSize": page_size,
            "includeJobs": [],
        }
        try:
            resp = session.post(
                SEARCH_URL,
                params={"apikey": API_KEY} if API_KEY else None,
                json=payload,
                headers=HEADERS,
                timeout=20,
            )
        except requests.RequestException as exc:
            log.warning("Monster: request failed for %s: %s", zip_code, exc)
            break

        if resp.status_code != 200:
            log.warning(
                "Monster: HTTP %s for %s (Monster's bot protection likely "
                "blocked the request; other sites are unaffected).",
                resp.status_code,
                zip_code,
            )
            break

        try:
            results = resp.json().get("jobResults") or []
        except ValueError:
            log.warning("Monster: response for %s was not JSON", zip_code)
            break
        if not results:
            break

        for r in results:
            row = _parse(r, zip_code)
            if row:
                rows.append(row)
        offset += page_size
        time.sleep(2)

    return rows[:results_wanted]
