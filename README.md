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
assets/js/map.js            optional polish; the site works without it
assets/img/locator-*.svg    small "you are here" map on each county page
tools/build_maps.py         regenerates all map geometry
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

## The four communities

| Community | Page | Region |
|---|---|---|
| Forsyth County | `counties/forsyth.html` | Piedmont |
| Houston County | `counties/houston.html` | Fall Line |
| Thomas County | `counties/thomas.html` | Coastal Plain |
| Glynn County | `counties/glynn.html` | Coast |

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
3. Add a card in `index.html` and a list item in the "Other communities"
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

Everything essential works without JavaScript. `map.js` only sizes the
draw-on animation and moves keyboard focus after the button is pressed;
`prefers-reduced-motion` turns the animation off entirely.
