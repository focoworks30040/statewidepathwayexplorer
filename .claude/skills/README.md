# Skills

Project-level Claude Code skills. Any session opened on this repo picks them up
automatically from `.claude/skills/`.

## frontend-design

Vendored from [anthropics/claude-code](https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design),
plugin version **1.1.0**. Anthropic's own guidance skill for distinctive visual
design — aesthetic direction, typography pairing, avoiding templated "AI-looking"
output, and writing interface copy. Prose only: no scripts, no data files, no
dependencies. Copied verbatim, with the upstream `LICENSE.md` alongside it
(© Anthropic PBC — use subject to Anthropic's Commercial Terms of Service, a
different licence from the MIT skills below).

Pairs naturally with `ui-ux-pro-max`: this one sets aesthetic direction and
taste, that one supplies the searchable database of concrete styles, palettes,
and stack rules.

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

`banner-design` names four sibling skills as dependencies: `ui-ux-pro-max` and
`frontend-design` (both installed), plus `ai-artist`, `ai-multimodal`, and
`chrome-devtools` — which are **not** part of this repo. Its AI image-generation
and screenshot steps will not run without those; its size/style reference
material is still usable.

### Updating

```bash
git clone --depth 1 https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git /tmp/uupm
rm -rf .claude/skills/{ui-ux-pro-max,design-system,design,brand,ui-styling,slides,banner-design}
cp -R /tmp/uupm/.claude/skills/. .claude/skills/
# then re-apply the CLAUDE_PLUGIN_ROOT rewrite:
sed -i 's|\${CLAUDE_PLUGIN_ROOT}/\.claude/skills/|.claude/skills/|g' .claude/skills/ui-ux-pro-max/SKILL.md
```
