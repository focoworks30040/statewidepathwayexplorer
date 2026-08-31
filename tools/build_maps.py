#!/usr/bin/env python3
"""
Builds the Georgia map geometry used across the site.

Outputs
  assets/img/locator-<slug>.svg   small locator map for each county page
  index.html                      map <g> injected between MAP:START / MAP:END

Usage
  python3 tools/build_maps.py            # rebuild from cached geometry
  python3 tools/build_maps.py --fetch    # re-download source boundaries first

To add a community: add an entry to COUNTIES below (county FIPS code from
https://www.census.gov/library/reference/code-lists/ansi.html), run --fetch
once so the county polygon is cached, then rerun. Star position and county
outline are computed from real boundary data, so nothing is placed by hand.
"""
import json, math, os, sys, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(ROOT, "tools", "cache")

STATE_SRC = "https://raw.githubusercontent.com/glynnbird/usstatesgeojson/master/georgia.geojson"
CTY_SRC = "https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json"

# viewBox of every map on the site
W, H, PAD = 900.0, 1000.0, 12.0

COUNTIES = [
    # dx: where the name sits relative to the star, in viewBox units.
    # Negative places it to the left. Every label is kept inside the state fill.
    {"slug": "forsyth", "name": "Forsyth", "fips": "13117", "dx": 34},
    {"slug": "houston", "name": "Houston", "fips": "13153", "dx": 34},
    {"slug": "thomas",  "name": "Thomas",  "fips": "13275", "dx": 34},
    {"slug": "glynn",   "name": "Glynn",   "fips": "13127", "dx": -44},
]

# The Fall Line: the boundary between the Piedmont and the Coastal Plain,
# traced through Columbus, Macon and Augusta. It is why those cities are
# where they are, and it still separates the state's labor markets.
FALL_LINE = [(-85.00, 32.47), (-84.55, 32.50), (-84.00, 32.63), (-83.63, 32.84),
             (-83.10, 33.00), (-82.50, 33.20), (-81.97, 33.47)]

COL = {"land": "#1D4A3E", "edge": "#7E9C90", "star": "#F2B441", "dim": "#16382F"}


def fetch():
    os.makedirs(CACHE, exist_ok=True)
    for url, name in ((STATE_SRC, "georgia.geojson"), (CTY_SRC, "counties.geojson")):
        print("fetching", name)
        urllib.request.urlretrieve(url, os.path.join(CACHE, name))


def load(name):
    with open(os.path.join(CACHE, name)) as fh:
        return json.load(fh)


def rings_of(geometry):
    polys = geometry["coordinates"] if geometry["type"] == "MultiPolygon" else [geometry["coordinates"]]
    return [r for p in polys for r in p]


def ring_area(r):
    a = 0.0
    for i in range(len(r) - 1):
        a += r[i][0] * r[i + 1][1] - r[i + 1][0] * r[i][1]
    return abs(a) / 2


def make_projection(rings):
    xs = [x for r in rings for x, _ in r]
    ys = [y for r in rings for _, y in r]
    lon0, lon1, lat0, lat1 = min(xs), max(xs), min(ys), max(ys)
    kx = math.cos(math.radians((lat0 + lat1) / 2))  # equirectangular, corrected at mid-latitude
    s = min((W - 2 * PAD) / ((lon1 - lon0) * kx), (H - 2 * PAD) / (lat1 - lat0))
    ox = (W - (lon1 - lon0) * kx * s) / 2
    oy = (H - (lat1 - lat0) * s) / 2
    return lambda lon, lat: (ox + (lon - lon0) * kx * s, oy + (lat1 - lat) * s)


def _dp(pts, tol):
    if len(pts) < 3:
        return pts
    a, b = pts[0], pts[-1]
    dx, dy = b[0] - a[0], b[1] - a[1]
    den = math.hypot(dx, dy)
    best_i, best_d = 0, -1.0
    for i in range(1, len(pts) - 1):
        if den > 1e-6:
            d = abs(dy * (pts[i][0] - a[0]) - dx * (pts[i][1] - a[1])) / den
        else:
            d = math.hypot(pts[i][0] - a[0], pts[i][1] - a[1])
        if d > best_d:
            best_i, best_d = i, d
    if best_d > tol:
        return _dp(pts[:best_i + 1], tol)[:-1] + _dp(pts[best_i:], tol)
    return [a, b]


def simplify(pts, tol):
    """Douglas-Peucker on a closed ring, split at the point farthest from the start."""
    if pts[0] == pts[-1]:
        pts = pts[:-1]
    if len(pts) < 4:
        return pts + [pts[0]]
    a = pts[0]
    far = max(range(len(pts)), key=lambda i: math.hypot(pts[i][0] - a[0], pts[i][1] - a[1]))
    return _dp(pts[:far + 1], tol)[:-1] + _dp(pts[far:] + [pts[0]], tol)


def to_path(ring, proj, tol):
    out = []
    for x, y in simplify([proj(lo, la) for lo, la in ring], tol):
        p = (round(x, 1), round(y, 1))
        if not out or p != out[-1]:
            out.append(p)
    return "M" + " L".join(f"{x} {y}" for x, y in out) + " Z"


def centroid(ring, proj):
    a = cx = cy = 0.0
    for i in range(len(ring) - 1):
        x1, y1 = ring[i]
        x2, y2 = ring[i + 1]
        cr = x1 * y2 - x2 * y1
        a += cr
        cx += (x1 + x2) * cr
        cy += (y1 + y2) * cr
    a /= 2
    return proj(cx / (6 * a), cy / (6 * a))


def star_path(r=1.0, inner=0.382, points=5):
    pts = []
    for i in range(points * 2):
        rad = r if i % 2 == 0 else r * inner
        ang = math.radians(-90 + i * 180 / points)
        pts.append((round(rad * math.cos(ang), 4), round(rad * math.sin(ang), 4)))
    return "M" + " L".join(f"{x} {y}" for x, y in pts) + " Z"


def build():
    state_gj = load("georgia.geojson")
    rings = rings_of(state_gj["geometry"])
    proj = make_projection(rings)
    main = max(ring_area(r) for r in rings)
    state_d = " ".join(to_path(r, proj, 0.5) for r in rings if ring_area(r) > main * 4e-4)

    fall_d = "M" + " L".join(f"{x:.1f} {y:.1f}" for x, y in (proj(*c) for c in FALL_LINE))

    wanted = {c["fips"]: c for c in COUNTIES}
    for feat in load("counties.geojson")["features"]:
        fips = feat.get("id")
        if fips in wanted:
            ring = max(rings_of(feat["geometry"]), key=ring_area)
            wanted[fips]["d"] = to_path(ring, proj, 0.3)
            wanted[fips]["x"], wanted[fips]["y"] = (round(v, 1) for v in centroid(ring, proj))

    missing = [c["name"] for c in COUNTIES if "d" not in c]
    if missing:
        sys.exit(f"no boundary found for: {', '.join(missing)} (run with --fetch)")

    star = star_path()
    write_locators(state_d, star)
    inject_landing(state_d, fall_d, star)


def write_locators(state_d, star):
    for c in COUNTIES:
        svg = (
            f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W:.0f} {H:.0f}" '
            f'role="img" aria-label="{c["name"]} County within Georgia">'
            f'<path d="{state_d}" fill="{COL["dim"]}" stroke="{COL["edge"]}" '
            f'stroke-width="4" stroke-linejoin="round" opacity="0.9"/>'
            f'<path d="{c["d"]}" fill="{COL["star"]}" fill-opacity="0.28" '
            f'stroke="{COL["star"]}" stroke-width="9" stroke-linejoin="round"/>'
            f'<path d="{star}" fill="{COL["star"]}" '
            f'transform="translate({c["x"]} {c["y"]}) scale(58)"/>'
            f"</svg>"
        )
        path = os.path.join(ROOT, "assets", "img", f"locator-{c['slug']}.svg")
        with open(path, "w") as fh:
            fh.write(svg)
        print("wrote", os.path.relpath(path, ROOT))


def inject_landing(state_d, fall_d, star):
    parts = [
        '<defs>',
        '  <linearGradient id="landFill" x1="0" y1="0" x2="0.4" y2="1">',
        '    <stop offset="0" stop-color="#245A4B"/><stop offset="1" stop-color="#13342C"/>',
        '  </linearGradient>',
        f'  <path id="star" d="{star}"/>',
        '</defs>',
        f'<path class="land" d="{state_d}"/>',
        f'<path class="fall-line" d="{fall_d}"/>',
        '<text class="fall-label" x="192" y="502">FALL LINE</text>',
    ]
    for i, c in enumerate(COUNTIES):
        dx = c["dx"]
        anchor = "start" if dx > 0 else "end"
        parts += [
            f'<a class="pin" href="counties/{c["slug"]}.html" '
            f'aria-label="{c["name"]} County pathways" style="--i:{i}">',
            f'  <path class="pin-county" d="{c["d"]}"/>',
            f'  <use class="pin-star" href="#star" x="0" y="0" '
            f'transform="translate({c["x"]} {c["y"]}) scale(17)"/>',
            f'  <text class="pin-label" x="{c["x"] + dx}" y="{c["y"] + 7}" '
            f'text-anchor="{anchor}">{c["name"]} County</text>',
            '</a>',
        ]
    block = "\n".join("        " + p for p in parts)

    index = os.path.join(ROOT, "index.html")
    if not os.path.exists(index):
        print("index.html not found — skipping injection")
        return
    with open(index) as fh:
        html = fh.read()
    start, end = "<!-- MAP:START -->", "<!-- MAP:END -->"
    if start not in html or end not in html:
        sys.exit("index.html is missing the MAP:START / MAP:END markers")
    head = html.split(start)[0]
    tail = html.split(end)[1]
    with open(index, "w") as fh:
        fh.write(f"{head}{start}\n{block}\n        {end}{tail}")
    print("injected map into index.html")


if __name__ == "__main__":
    if "--fetch" in sys.argv or not os.path.exists(os.path.join(CACHE, "georgia.geojson")):
        fetch()
    build()
