# Forsyth County, GA job scraper

Searches **Indeed, LinkedIn, ZipRecruiter and Monster** for jobs near Forsyth
County ZIP codes **30028, 30040 and 30041** (all Cumming addresses). It
removes duplicates and saves one CSV you can open in Excel or Google Sheets.

## Setup (once)

You need Python 3.10 or newer.

```bash
cd forsyth_jobs
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

## Run it

```bash
python scrape_jobs.py
```

The CSV is saved to `output/forsyth_jobs_<date>_<time>.csv` with these
columns: site, title, company, location, date posted, job type, pay range,
remote flag, link, and which ZIP searches found it.

### Useful options

| Option | What it does | Default |
|---|---|---|
| `--search "nurse"` | Only jobs matching a keyword | all jobs |
| `--hours-old 72` | Only jobs posted in the last N hours | any age |
| `--radius 10` | Miles around each ZIP | 5 |
| `--results 100` | Max results per site per ZIP | 50 |
| `--sites indeed linkedin` | Pick sites | all four |
| `--zips 30028 30040 30041 30024` | Change ZIPs | 30028 30040 30041 |
| `--strict` | Keep only jobs whose location says Cumming / Forsyth or one of the ZIPs | off |
| `--delay 5` | Seconds between requests (raise if you get blocked) | 3 |

Example: warehouse jobs posted this week, Forsyth locations only:

```bash
python scrape_jobs.py --search warehouse --hours-old 168 --strict
```

## How duplicates are handled

The three ZIPs are next to each other, so most jobs show up in every search,
and many employers post on several sites. Jobs with the same title and
company are merged into one row; the `site` and `searched_zip` columns list
everywhere it was found.

## Troubleshooting

- **Run it from your own computer.** These sites block most cloud servers.
- **LinkedIn returns few or no results / error 429:** LinkedIn limits
  anonymous searches. Wait an hour, use `--delay 10`, or lower `--results`.
- **Monster returns 0 results with an HTTP 403 warning:** Monster blocks
  automated requests more aggressively than the others. Monster support is
  best-effort; the other sites still run. You can try copying the `apikey`
  value Monster's own site uses (browser DevTools > Network > search jobs >
  the `samsearch` request) into an environment variable:
  `export MONSTER_API_KEY=...`
- **Indeed and ZipRecruiter** are generally the most reliable.

## Be a good citizen

Scraping goes against these sites' terms of service. Keep it to personal or
small-scale research use, keep the delays in place, and don't republish their
listings. For anything commercial, use official partner/feed programs.

## Tests

```bash
pip install pytest
python -m pytest
```
The tests use fake data and don't touch the network.
