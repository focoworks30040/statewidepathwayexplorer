#!/usr/bin/env python3
"""
Stamps every local asset link with a hash of that file's contents:

    assets/css/base.css  ->  assets/css/base.css?v=8f3a1c2d

GitHub Pages serves CSS, JS and images with a ten-minute CDN cache, so a
push can go live while browsers keep showing the previous stylesheet — the
page looks unchanged, or half-changed, even after a hard refresh. A stamp
that changes with the file makes each version a new address, so an update
is visible the moment it deploys.

Run it after any change to a file under assets/, before committing:

    python3 tools/stamp_assets.py
"""
import hashlib, glob, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LINK = re.compile(r'(?P<attr>(?:href|src)=")(?P<path>[^"]*?assets/[^"?]+)(?:\?v=[0-9a-f]+)?(?P<end>")')


def digest(path):
    with open(path, "rb") as fh:
        return hashlib.sha256(fh.read()).hexdigest()[:8]


def stamp(html_path, cache):
    with open(html_path) as fh:
        text = fh.read()

    missing = []

    def replace(m):
        rel = m.group("path")
        target = os.path.normpath(os.path.join(os.path.dirname(html_path), rel))
        if not os.path.exists(target):
            missing.append(rel)          # placeholders in the template
            return m.group("attr") + rel + m.group("end")
        if target not in cache:
            cache[target] = digest(target)
        return m.group("attr") + rel + "?v=" + cache[target] + m.group("end")

    out = LINK.sub(replace, text)
    changed = out != text
    if changed:
        with open(html_path, "w") as fh:
            fh.write(out)
    return changed, missing


def main():
    pages = [os.path.join(ROOT, "index.html")]
    pages += sorted(glob.glob(os.path.join(ROOT, "counties", "*.html")))

    cache, touched = {}, 0
    for page in pages:
        if os.path.basename(page).startswith("_"):
            continue                     # the template keeps its placeholders
        changed, missing = stamp(page, cache)
        touched += changed
        print("%-28s %s" % (os.path.relpath(page, ROOT),
                            "stamped" if changed else "unchanged"))
        for rel in missing:
            print("    ! no such file:", rel)

    print("%d file(s) updated, %d asset(s) hashed" % (touched, len(cache)))


if __name__ == "__main__":
    sys.exit(main())
