# FOCO Works Pathway Explorer: Forsyth County

A Forsyth County version of the Georgia Pathway Explorer. It uses the same layout and sections, focused on Forsyth County's five top industries:
- Advanced Manufacturing
- Healthcare
- Bio & Life Sciences
- Professional Services + HQs
- Technology + IT

It's a static site with no build step. Open `index.html`, or deploy this `forsyth/` folder on its own (for example, drag it onto Netlify).

## Sections

- **Dream bigger.** Start from a familiar job and see the careers around it. Careers marked "Hiring in Forsyth" have local pay ranges and employers.
- **Meet recent grads.** Short videos, with labeled sample slots until real videos are added.
- **Top industries.** Five cards. Each opens a detail sheet with:
  - growth
  - careers
  - programs at Forsyth County Schools, Lanier Tech, and UNG, including which high schools offer each pathway
  - local employers
- **Career library.** All careers, filterable by industry, training time, hidden gems, or hiring in Forsyth.
- **Schools & employers.** A Forsyth County map, a high school picker showing each school's pathways, Lanier Tech and UNG programs, and a searchable employer list. When a student picks a career, matching programs, schools, and employers are highlighted.
- **For parents.** Dual Enrollment, HOPE, Zell Miller, Georgia Match, and CTAE pathways.

## Files

| File | Purpose |
|------|---------|
| `js/data-forsyth.js` | Industries, programs, high schools, employers, careers, and "Dream bigger" groupings. Edit this to change content. |
| `js/data-videos.js` | Recent grad videos and sample slots |
| `js/forsyth-map.js` | Generated county outlines (U.S. Census boundaries via `us-atlas`) |
| `js/app.js` | Interactivity |
| `css/styles.css` | Styles |
| `videos/` | Self-hosted video files |
| `img/logos/` | School and college logos. To add a technical college logo, save it here and set `"logo": "img/logos/<file>.png"` on that college in `tcsgPrograms`. Add `"logoFill": true` for a logo that should fill its tile edge to edge, or `"logoBg": "#hex"` to fit a logo whole on its own background color. |

## Where the data comes from

Industries, school programs, high-school pathways, employers, and the 43 careers with Forsyth pay ranges come from the FOCO Works Pathway Explorer (focoworkspathwayexplorer.com), a Forsyth County Chamber of Commerce resource.

The other 40 careers are statewide roles. They're there so "Dream bigger" can show the whole team around a familiar job (anesthesiologist, perfusionist, surgical tech, and so on), and their pay is an approximate Georgia median.

Campus map locations are approximate.
