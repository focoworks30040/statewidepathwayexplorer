# Skills

Project-level Claude Code skills. Any session opened on this repo picks them up
automatically from `.claude/skills/`.

## ui-ux-pro-max (and companions)

Vendored from [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
(MIT). Installed at upstream version **2.13.0**.

| Skill | What it covers |
|---|---|
| `ui-ux-pro-max` | Core design intelligence — 84 styles, 192 palettes, 74 font pairings, 98 UX guidelines, 25 chart types, 22 stacks |
| `design-system` | Design token architecture, semantic/primitive/component tokens, Tailwind integration, validators |
| `design` | Logo and brand-mark design search |
| `brand` | Brand color extraction and token sync |
| `ui-styling` | Component styling patterns, shadcn/ui helpers |
| `slides` | Slide/deck generation |
| `banner-design` | Banner sizing and style references |

### Requirements

Python 3.x for the search scripts (standard library only — no network calls, no
installs). Some `design-system` / `brand` helpers are Node `.cjs` scripts.

### Usage

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain <domain>
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system -p "Project Name"
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --stack nextjs
```

### Local modification

Upstream ships this as a Claude Code *plugin*, so `ui-ux-pro-max/SKILL.md`
referenced its scripts through `${CLAUDE_PLUGIN_ROOT}`. Installed here as
project skills instead, that variable is unset, so those paths were rewritten to
be relative to the project root (`.claude/skills/ui-ux-pro-max/scripts/...`).
Nothing else was changed.

### Known upstream gap

`banner-design/SKILL.md` calls out to sibling skills that are **not** part of
this repo (`ai-artist`, `ai-multimodal`, `chrome-devtools`). Its image-generation
steps will not run without those; its size/style reference material is still
usable.

### Updating

```bash
git clone --depth 1 https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git /tmp/uupm
rm -rf .claude/skills/{ui-ux-pro-max,design-system,design,brand,ui-styling,slides,banner-design}
cp -R /tmp/uupm/.claude/skills/. .claude/skills/
# then re-apply the CLAUDE_PLUGIN_ROOT rewrite:
sed -i 's|\${CLAUDE_PLUGIN_ROOT}/\.claude/skills/|.claude/skills/|g' .claude/skills/ui-ux-pro-max/SKILL.md
```
