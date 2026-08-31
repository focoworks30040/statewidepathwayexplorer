# Georgia Statewide Pathway Explorer

A static site. No build step, no dependencies, no framework. Open
`index.html` in a browser and it works — including from the file system.

```
index.html                  landing page: title, state map, button
counties/<slug>.html        one page per community
counties/_template.html     copy this to add a fifth community
assets/css/base.css         colors, type, shared shell
assets/css/landing.css      landing page only
assets/css/county.css       county pages only
assets/js/map.js            optional polish on the landing page
assets/js/industries.js     draws the target industries section
assets/data/<slug>.js       each community's industries and programs
assets/img/locator-*.svg    small "you are here" map on each county page
assets/img/industries/      photos for the industry detail views
tools/build_maps.py         regenerates all map geometry
tools/import_county.py      turns a county workbook into a data file
tools/stamp_assets.py       cache-busts asset links after an edit
```

## Running it locally

Double-clicking `index.html` works. If you would rather serve it:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Publishing

This is plain HTML, so anything that serves files will host it. The shortest
path is GitHub Pages: repository **Settings → Pages → Source: Deploy from a
branch**, pick the branch and the `/ (root)` folder.

**After editing anything under `assets/`, run:**

```sh
python3 tools/stamp_assets.py
```

It rewrites each asset link with a hash of that file's contents
(`base.css?v=6c9ff1d9`). GitHub Pages serves CSS and JavaScript with a
ten-minute CDN cache, so without this a deploy can go live while browsers
still show the previous stylesheet — the page looks unchanged, or half
changed, even after a hard refresh. The stamp makes each version its own
address, so an update shows up as soon as it deploys.

## The four communities

| Community | Page | Region |
|---|---|---|
| Forsyth County | `counties/forsyth.html` | Piedmont |
| Houston County | `counties/houston.html` | Fall Line |
| Thomas County | `counties/thomas.html` | Coastal Plain |
| Glynn County | `counties/glynn.html` | Coast |

## Target industries

Each county page lists that community's target industries as cards showing two
numbers: how many local companies work in the industry, and how many aligned
education programs are available. Opening a card replaces the grid with that
industry's detail — a picture, and three lists of programs that lead into it:
high school CTAE pathways, technical college programs, and university programs
offered in the county.

All of it comes from one file per community, `assets/data/<slug>.js`. That is
the only file to edit to change what a county page shows; the page markup does
not change. The file's own comments describe every field. In short:

```js
{
  id: "health-care",              // used in the page address
  name: "Health Care",
  blurb: "One sentence on why this industry matters here.",
  companies: ["Archbold", "…"],   // the card shows how many
  image: "../assets/img/industries/forsyth-health-care.jpg",
  ctae:       [ { name: "…", org: "West Forsyth High School" } ],
  technical:  [ { name: "…", org: "Lanier Technical College", award: "Diploma" } ],
  university: [ { name: "…", org: "UNG — Cumming", award: "Bachelor's" } ]
}
```

Both numbers on a card are counted from the lists below them, so neither can
drift out of step with what the page shows. The named employers are folded away
behind the count in the detail view. Set `programs:` explicitly only if you need
that number to say something else, and give `companies` a plain number if you
have a count but not the names. Any program can take a `url` and its name
becomes a link, and a CTAE pathway can take `courses: [...]`.

**Pictures.** Put them in `assets/img/industries/` and point `image` at them:

```js
image: "../assets/img/industries/thomas-forestry-and-logging.jpg",
imageAlt: "A stack of cut logs at a landing beside a forest track",
imageCaption: "optional line printed under the picture"
```

They are shown at 3:2 and cropped to fill, so roughly 1200×800 works well.
`imageAlt` is what a screen reader reads and what shows if the picture fails
to load — describe what is in the photo. Until a file is there, a labelled
empty frame holds the same space, so adding one later moves nothing; a path
pointing at a file that is not there yet falls back to that same frame rather
than a broken image, so the path can be set in advance.

**The sample-data notice.** Every county file currently ships with placeholder
counts and program lists so the page has something to show. Replace them with
your figures, then set `sample: false` at the top of the file to remove the
notice above the cards.

**Links on programs.** A program with a `url` becomes a clickable row that
opens the institution's page in a new tab. There are two ways to add them:

- *In the workbook.* Hyperlink the cell in Excel and re-import — the link is
  carried straight onto the page. This is the way to add a lot of them at once.
- *In the data file.* Add `url: "https://…"` to any program by hand. A link
  added this way survives a re-import, unless the workbook now carries one of
  its own for that program.

Where a program has no link, the reader still gets somewhere useful: the
`institutions` block at the top of the data file gives each column a link to
that institution's own list of programs, shown at the foot of the column. Fill
in a `url` there for any institution that has one.

**Linking to one industry.** Each industry has its own address, so
`counties/glynn.html#industry-marine-trades` opens straight to it. The back
button returns to the grid.

## Importing a county workbook

Thomas County's data came from a spreadsheet, and the importer that read it
works for any county laid out the same way:

```sh
pip install openpyxl
python3 tools/import_county.py Glynn_County_Info.xlsx glynn Glynn
```

The workbook needs a sheet with "Industry" in its name, and row 2 carrying
these headings:

| Column | Heading | Contents |
|---|---|---|
| A | Largest Industries | the industry name, once, on its first row |
| B | Local Companies in That Industry | one employer per row |
| C | High School Pathways (District Name) | a cell ending in `Pathway:` opens a pathway; the cells under it are its courses |
| D | *University Name* Majors | one major per row |
| E | *Technical College Name* | one program per row |

Everything below an industry's name belongs to it, down to the next industry.
The institution for each of the last three columns is read out of the heading
itself, so a workbook for another county needs no code changes.

A second sheet with "Education" in its name — a district in column A, its
pathways in column B — becomes the county-wide "CTAE pathways by school
district" list under the cards.

The importer also:

- **Keeps your writing.** Blurbs, images and captions already in the data file
  survive a re-import, so an updated workbook never costs you hand-written copy.
- **Removes repeats.** An employer listed once per site is counted once.
- **Reads award codes.** `Automation Technology, AAS (IS13) / Diploma (IST4)`
  becomes one program with both awards; `Nurse Aide, TCC (CN21) / Nurse Aide
  Accelerated, TCC (NAA1)` becomes two programs, because the second half names
  its own program.
- **Stops shouting.** `HEALTH SCIENCE` becomes `Health Science`, while short
  acronyms stay in capitals. If a workbook uses one it does not know, add it to
  `ACRONYMS` at the top of the script.

## Bringing in pages you have already built

Each county page has a marked slot:

```html
<!-- CONTENT:START -->
   ...
<!-- CONTENT:END -->
```

**If your existing page is plain HTML/CSS**, this is the whole job:

1. Open your existing page and copy everything inside its `<body>` — but *not*
   its own `<header>`, site navigation, or `<footer>`. This site already
   supplies those, and two of each will fight.
2. Paste it between the two markers, replacing the dashed placeholder block.
3. Move that page's CSS into `assets/css/<slug>.css` and link it in the
   `<head>` of the county page, after the two shared stylesheets:
   ```html
   <link rel="stylesheet" href="../assets/css/forsyth.css">
   ```
   Keeping it in its own file means a rule written for one community can never
   quietly restyle another.
4. Images and other files go in `assets/img/`. Paths from a county page point
   up one level: `../assets/img/whatever.png`.

Headings, paragraphs and lists inside the slot are already styled. If your
pasted markup carries its own classes it will keep its own look, which is fine
— the shell only styles bare elements plus the classes listed in
`county.css`.

**If your existing page is a whole separate site** (its own layout, its own
navigation), don't dismantle it. Drop the folder in as
`counties/forsyth/` with its own `index.html`, and change the two links that
point at it — the card in `index.html` and the star's `href` in
`tools/build_maps.py` — to `counties/forsyth/`. You lose the shared header on
that one page and keep everything else.

**If your existing page is React, Next.js or similar**, it can't be pasted in
as-is. Either export it to static HTML and follow the plain-HTML steps above,
or host it separately and point the link at that URL. Say which one you have
and the links can be rewired either way.

## What links to what

Every route into a community goes through the same file name, so there are
exactly three places a link lives:

1. **The star on the map** — generated, so the `href` comes from the `slug` in
   `COUNTIES` in `tools/build_maps.py`.
2. **The card** on the landing page — hand-written in `index.html`.
3. **The "Other communities" list** at the bottom of each county page.

Rename a page and those three need to agree.

## Adding a fifth community

1. Copy `counties/_template.html` to `counties/<slug>.html` and work through
   the find-and-replace list at the top of that file.
2. Add an entry to `COUNTIES` in `tools/build_maps.py` with the county's
   five-digit FIPS code, then run:
   ```sh
   python3 tools/build_maps.py --fetch
   ```
   That downloads the boundary data, computes the star position and county
   outline from it, writes the locator image, and rewrites the map inside
   `index.html`. Nothing is positioned by hand.
3. Copy one of the files in `assets/data/` to `assets/data/<slug>.js` and fill
   in that community's target industries.
4. Add a card in `index.html` and a list item in the "Other communities"
   section of the existing county pages.

`dx` in the `COUNTIES` table nudges the label left or right of the star, in
map units, so names don't collide with the coastline.

## Notes on the design

The map is real geography: county outlines and the state boundary come from
U.S. Census data, and the dashed line is the Fall Line — the geological
boundary running through Columbus, Macon and Augusta that separates the
Piedmont from the Coastal Plain, and still separates the state's labor
markets. Amber is reserved for the four communities and is used for nothing
else on the site.

The landing page, the county headers and every link between pages work without
JavaScript; `map.js` only sizes the draw-on animation and moves keyboard focus,
and `prefers-reduced-motion` turns the animation off entirely. The target
industries section is the one part that needs JavaScript, because it is drawn
from the data file — which is the trade that keeps four counties of programs
editable in one structured list instead of several hundred lines of hand-written
markup. Without it, that section shows a short note saying so.
