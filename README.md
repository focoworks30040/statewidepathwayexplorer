# Georgia Pathway Explorer

An interactive website where high school students and their parents can explore Georgia's high-demand ("Top State for Talent") careers together. It has no build step and no dependencies.

## What's inside

- **Dream bigger.** Students start from a career they already know ("I want to be a doctor") and see the whole team of related roles around it: anesthesiologist, physician assistant, surgical technologist, perfusionist, sterile processing tech, and more. "Hidden gem" labels mark careers students rarely think of.
- **Top industries.** Twelve high-demand Georgia sectors: healthcare, advanced manufacturing & EV, IT & cyber, logistics, construction trades, energy, aerospace, education, business & FinTech, public safety, agriculture, and film.
- **Career library.** You can search all 100+ careers and filter by industry, training time, or "hidden gems only". You can sort by pay or by how fast you can start. Every career has a detail page with typical Georgia pay, a day on the job, a high school → TCSG → USG path, and related careers.
- **Your county.** All 159 counties are on a clickable map. Each county shows its region's industries, major employers, the closest Technical College System of Georgia campuses, and the closest University System of Georgia institutions. If you pick a career first, matching employers are highlighted.
- **For parents.** Dual Enrollment, the HOPE Grant and HOPE Career Grant, HOPE and Zell Miller, Georgia Match, apprenticeships, and conversation starters.
- **My list.** Careers you save are kept in the browser.

## Run it

Open `index.html` in a browser, or serve the folder with any static host (for example, GitHub Pages).

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure |
| `css/styles.css` | Visual design: white gallery layout, 28px cards, one accent blue, dark mode |
| `js/app.js` | Interactivity |
| `js/data-careers.js` | Careers, sectors, education levels, and "dream" groupings |
| `js/data-places.js` | Regions, employers, TCSG campuses, USG campuses |
| `js/georgia-map.js` | Generated county geometry (U.S. Census boundaries via `us-atlas`) |

## Updating data

- **Add a career:** add an entry to `CAREERS` in `js/data-careers.js` and reference its id in a `DREAMS` group.
- **Add an employer:** add it to a region in `EMPLOYERS.regions`, or to a county in `EMPLOYERS.counties`, in `js/data-places.js`.
- **Pay figures** are approximate Georgia medians rounded from BLS OEWS data. Refresh them as new data comes out.
- **Campus coordinates** are approximate. They're only used to rank the closest campuses.
