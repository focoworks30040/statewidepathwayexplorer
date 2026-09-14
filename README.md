# Statewide Pathway Explorer — Advanced Manufacturing

Adds a statewide advanced manufacturing page to the FOCO Works Pathway Explorer,
plus the CTA button that links to it from the Advanced Manufacturing industry view.

```
advanced-manufacturing-georgia.html   the new statewide page (standalone, no build step)
snippets/explore-georgia-button.html  drop-in CTA for the existing Pathway Explorer page
data/advanced-manufacturing-programs.json   the underlying college + program data
logos/                                drop college logo files here (see below)
```

## 1. Add the button to the Advanced Manufacturing page

Paste the entire contents of `snippets/explore-georgia-button.html` immediately
before `</body>` in the Pathway Explorer page.

The snippet is **self-contained and additive** — it does not modify or depend on
any existing page JavaScript. On load it:

1. Injects the button directly beneath the `#d-schools` grid, i.e. under the
   **"Where you can learn it"** heading.
2. Watches the detail heading (`#d-title`) and eyebrow (`#d-ey`) with a
   `MutationObserver`, and shows the button **only** while the Advanced
   Manufacturing detail view is open. It stays hidden for Healthcare, Bio &
   Life Sciences, Professional Services and Technology + IT.

Two constants at the top of the script control it:

| Constant | Default | Purpose |
| --- | --- | --- |
| `GEO_HREF` | `/advanced-manufacturing-georgia.html` | Where the button links |
| `GEO_MATCH` | `/advanced\s+manufacturing/i` | Which industry shows the button |

To remove the button, delete the block. Nothing else depends on it.

## 2. Deploy the statewide page (Netlify)

The site is hosted on Netlify. `advanced-manufacturing-georgia.html` is a single
static file with inline CSS and JS — no build step, no dependencies beyond the
Google Fonts link in `<head>`, and no `netlify.toml` changes required.

**Manual deploy:** drop the file into the site folder you deploy, next to the
Pathway Explorer HTML, and redeploy. Netlify serves it at
`/advanced-manufacturing-georgia` (it resolves extensionless paths to `.html`).

**Git-connected deploy:** merge it to the production branch and Netlify publishes
it. Pull requests get a Deploy Preview URL, so the page and the button can be
checked on a real Netlify URL before anything reaches the live site.

Links are root-relative (`/advanced-manufacturing-georgia.html`, and `/` for the
back link) so they hold up whether or not Netlify's Pretty URLs setting is on. If
the Pathway Explorer is not served from `/`, change the two `href="/"` links in
the topbar and footer, and `GEO_HREF` in the snippet.

The page has:

- A navy hero matching the industry detail header, with counts for institutions,
  programs and focus areas.
- Free-text search across program and college names, with match highlighting.
- A region filter and ten focus-area filter chips (Automation & Robotics,
  Machining & CNC, Welding & Joining, and so on).
- One card per college — logo slot, name, city, region, program count, and an
  expandable list of every program, each tagged by focus area.
- Deep links, e.g.
  `advanced-manufacturing-georgia.html?focus=welding-joining&region=Metro%20Atlanta`.

## 3. Add college logos

Each card renders a logo slot that currently falls back to a lettered monogram.
To use a real logo, drop a file into `logos/` named after the college slug:

```
logos/albany-technical-college.png
logos/athens-technical-college.png
logos/georgia-northwestern-technical-college.png
...
```

Slugs are the `slug` field in `data/advanced-manufacturing-programs.json`. Square
or near-square transparent PNGs around 200×200 work best; the slot is 52×52 with
`object-fit: contain`. If a file is missing the `<img>` removes itself and the
monogram shows, so partial coverage is fine.

To use `.svg` instead of `.png`, change the extension in the `<img src>` of the
card markup (or regenerate the page — see below).

## 4. Updating the program data

`data/advanced-manufacturing-programs.json` holds the colleges and their programs.
It was extracted from the TCSG Pathway Explorer advanced manufacturing program
inventory PDF. The HTML page embeds this data as static markup, so after editing
the JSON the page needs to be regenerated — or edit the card markup in the HTML
directly, which is plain readable HTML.

### Data notes

- **20 colleges, 552 programs.** Savannah Technical College and South Georgia
  Technical College do not appear in the source PDF and so are not on the page.
- Central Georgia Technical College is listed twice in the source PDF, with
  different program lists. Both lists are merged into a single card.
- A handful of source entries ran two programs together without a separator
  (e.g. `Construction Management AASConstruction Management Diploma`). These are
  split automatically; a few may still need a manual pass.
- Two source typos are corrected: "Colombus" → Columbus, "Managemen" → Management.
- Cities, regions and college websites were added during extraction — the source
  PDF lists cities only for some colleges.

Confirm program names and availability against each college before publishing
widely; technical college catalogs change every term.
