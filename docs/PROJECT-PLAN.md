# Statewide Pathway Explorer — Project Plan

**Georgia workforce development alignment platform**
Version 0.1 · Draft for review · August 2026

---

## 1. What we are building

A statewide web platform that answers one question for every Georgia county:

> *"For the industries we are trying to grow here, what education and training programs already exist near us — and who do we send to them?"*

The platform connects three things that today live in separate silos:

| Silo | Who owns it | Where it lives now |
|---|---|---|
| County target industries | Local EDAs, Regional Commissions, GDEcD | PDF target-industry studies, strategic plans |
| Training programs | 22 TCSG colleges (88+ campuses, 600+ programs), 26 USG institutions | Dozens of separate college catalogs |
| Who needs to know | K-12 / CTAE, employers, job seekers | Nowhere — this is the gap |

We make that a single, searchable, county-branded resource — and we give each county an admin panel so their page reflects *their* employers, *their* photos, and *their* local programs.

### 1.1 Primary audiences

1. **County / EDA staff** — register their county, curate their page, get a shareable resource that makes them look prepared to site selectors.
2. **K-12 & CTAE partners** — see which local CTAE pathways feed which local postsecondary programs, which feed which local jobs.
3. **Employers** — see the talent pipeline for their roles; find the college to partner with.
4. **Job seekers / students / parents** — "here are the programs near me that lead to real jobs here."

### 1.2 Funding posture

There is **no specific grant identified yet** — the goal is to be ready when something surfaces. That changes the strategy in an important way.

Without a named funder and deadline, the strongest possible position is not a polished mockup. It is **a live product with real registered counties using it.** Traction is fundable in a way that a prototype is not: "23 counties have registered and 8 have published pages" survives any reviewer's scrutiny, works for *any* funder, and can be assembled into an application in days rather than months.

So we optimize for a working, adoptable product — and build a generic grant-readiness layer alongside it:

- **Statewide from day one** — all 159 counties present, not a pilot.
- **Standards-based data** — CIP → SOC → NAICS crosswalks (see §4.3), so alignment claims are auditable rather than editorial.
- **Measurable by default** — instrument registrations, engagement, and distribution from launch, so that whenever a funder appears we already have a real time series rather than a promise. Metrics stay generic until a funder's required performance measures are known.
- **Sustainable** — county self-service means the content maintains itself after any grant period.

Practical consequence: we do **not** build a reporting module against a hypothetical funder's framework. We capture clean event data now and shape it into whatever format is required later.

---

## 2. Decisions locked (this round)

| # | Decision | Choice | Consequence |
|---|---|---|---|
| D1 | Program catalog data | **Curated seed + admin CRUD** | We hand-curate ~300–600 industry-aligned programs. No scrapers to maintain. Refresh is an annual editorial task. |
| D2 | County target industries | **Seed from public data, counties refine** | All 159 counties are useful on day one. Registration improves a page rather than creating it. |
| D3 | Tenancy | **Branded county pages on one shared site** | `/counties/gwinnett`. County admins edit only their county. Data model stays tenant-aware so subdomains remain a later config change, not a rewrite. |
| D4 | Scope posture | **Demo-ready ASAP** | All 159 counties visible; 4 showcase counties built deep; polished public UX; working admin panel. Depth follows funding. |
| D5 | Funding target | **No specific grant yet — build for readiness** | Optimize for a live product with real county traction, not a mockup. Capture generic metrics; shape to a funder's framework later. |
| D6 | GaDOE CTAE pathways | **Deferred, but leave the seam** | Not built now. Schema reserves the join so pathways can be added later without a migration or rework. |
| D7 | Showcase counties | **Forsyth, Ware, Houston, Jackson** | See §2.1. Four regions, four distinct economy types. |
| D8 | Employer job postings | **Permanently out of scope** | This is a pathways tool, not a job board. EmployGeorgia already does postings; matching it is a maintenance treadmill. |
| D9 | Data curation team | **You + an intern, working spreadsheet already exists** | Schema should conform to their existing sheet where reasonable, not force a rewrite. Import path matters more than a blank template. |
| D10 | Showcase county access | **Direct relationships with all four EDAs** | Major unlock. Run discovery calls *before* Phase 0 and treat the four as design partners, not just content. See `EDA-DISCOVERY-GUIDE.md`. |

### 2.1 Showcase counties

These four are built deep: real photography, employer logos, local programs, success stories, fully verified program alignment. They are the proof that the model works in *any* Georgia county, not just prosperous ones.

| County | Seat / Region | Economy | Primary TCSG | Primary USG (nearby) |
|---|---|---|---|---|
| **Forsyth** | Cumming · Metro Atlanta | Affluent, fast-growing exurb; professional services, HQ relocation, tech | Lanier Technical College — **Forsyth Campus**, 3410 Ronald Reagan Blvd, Cumming | University of North Georgia |
| **Ware** | Waycross · Southeast GA | Rural; rail/logistics (CSX), forest products, regional healthcare hub | Coastal Pines Technical College — **main campus**, 1701 Carswell Ave, Waycross | South Georgia State College (Waycross) |
| **Houston** | Warner Robins · Middle GA | Defense/aerospace anchored by Robins AFB; cyber; contractor ecosystem | Central Georgia Technical College — **Warner Robins main campus**, 80 Cohen Walker Dr | Middle Georgia State University (Warner Robins, ½ mi from Robins AFB) |
| **Jackson** | Jefferson · Northeast GA | Booming I-85 advanced manufacturing; EV battery production, logistics | Lanier Technical College — **Jackson Campus**, Commerce (opened 2003) | University of North Georgia; Athens Technical College nearby |

**Why this set works:** metro-affluent (Forsyth), deep rural (Ware), mid-size defense economy (Houston), and exurban manufacturing boom (Jackson) — across four different service delivery regions. A skeptical reviewer cannot dismiss it as an Atlanta-metro tool.

**The standout case study is Jackson County.** SK Battery America partnered with **Georgia Quick Start and Lanier Technical College** to train roughly 2,600 workers for its EV battery plant in Commerce — Quick Start refurbished a Lanier Tech satellite campus with production-scale equipment for the training. That is precisely the county-target-industry → technical-college-program → jobs chain this platform exists to make visible, and it already happened. It should be the flagship success story on the site.

**Known gap:** Bio & Life Sciences is thin across all four. Options: (a) accept it and let the proximity radius surface Athens-area programs for Jackson and North Fulton/Alpharetta programs for Forsyth — which honestly demonstrates the radius feature working; or (b) add a fifth showcase county in Georgia's bio corridor (Newton County/Covington is the obvious candidate). Recommend (a) for now; it costs nothing and the cluster still gets represented statewide via `/industries/bio-life-sciences`.

---

## 3. Technology stack

| Layer | Choice | Notes |
|---|---|---|
| Frontend | **Next.js (App Router)**, TypeScript, React Server Components | Server-rendered county pages for SEO — critical, since EDAs will link to these. |
| Styling | Tailwind CSS + shadcn/ui | Fast, accessible primitives; theming per county via CSS variables. |
| Backend / DB | **Supabase** — Postgres, Auth, Row Level Security, Storage (docs only), Edge Functions | RLS is what makes multi-county editing safe. |
| Media | **ImageKit** — all images and video | Upload, transformation, trimming, delivery, DAM. See §6. |
| Hosting | Vercel | Native Next.js; ISR for county pages. |
| Analytics | Vercel Analytics + custom events → Supabase | Custom events matter for grant reporting. |
| Email | Resend | Registration approvals, invitations. |

**Principle:** Supabase owns *records*, ImageKit owns *bytes*. The database stores ImageKit `fileId` + `filePath` — never a hardcoded full URL — so the delivery endpoint can change without a migration.

---

## 4. Data model

### 4.1 Core reference tables (statewide, read-only to counties)

```
counties               159 rows — fips, name, slug, region_id, lat/lng, geometry,
                       population, seat, lwda_id
regions                12 State Service Delivery Regions (GDEcD/GDOL/TCSG-aligned)
industry_clusters      the 5 target clusters (see §4.2)
institutions           TCSG colleges + USG institutions — type, system, website
campuses               institution_id, county_id, address, lat/lng  ← enables "near me"
programs               institution_id, name, cip_code, credential_type, award_level,
                       length_months, delivery_mode, hope_career_grant_eligible,
                       description, catalog_url
occupations            SOC code, title, GA median wage, GA projected openings,
                       typical entry education
```

### 4.2 The five clusters

Fixed taxonomy, each with a NAICS definition so cluster membership is defensible:

1. Advanced Manufacturing
2. Healthcare
3. Bio & Life Sciences
4. Professional Services & Headquarters
5. Technology & IT

Each cluster gets sub-sectors (e.g. Advanced Manufacturing → automotive/EV, aerospace, food processing, industrial machinery) because a county's real target is usually a sub-sector, not the whole cluster.

### 4.3 The alignment engine — the heart of the product

Alignment is **not** a hand-drawn line from program to county. It is a chain of standard crosswalks:

```
program (CIP code)
   └─ CIP→SOC crosswalk (NCES) ──► occupation (SOC code)
         └─ occupation→NAICS staffing pattern ──► industry sub-sector
               └─ sub-sector ──► industry_cluster (one of 5)

county ──► county_target_industries (cluster + sub-sector + priority)

ALIGNMENT = programs whose cluster ∈ county's targets,
            at campuses within N miles of the county,
            ranked by county priority × proximity × credential demand
```

Join tables:

```
program_occupations      program_id, soc_code, relevance (primary/related)
occupation_clusters      soc_code, cluster_id, weight
county_target_industries county_id, cluster_id, sub_sector_id, priority (1..n),
                         rationale, source, is_county_edited
program_clusters         materialized/cached rollup for fast querying
```

**Why this matters:** it lets us say *"Bulloch County targets Advanced Manufacturing; 14 programs at 3 campuses within 45 minutes feed 9 occupations in that cluster with a median wage of $X"* — and show the work. That sentence is the grant application.

The `is_county_edited` flag preserves the distinction between our seeded data and county-supplied overrides — important for data provenance in reporting.

### 4.4 Tenant / county-owned content

```
county_profiles        county_id, tagline, narrative, hero_media_id, brand_color,
                       contact info, published_at, status
county_employers       county_id, name, logo_media_id, cluster_id, description,
                       website, is_hiring, employee_count_band
county_programs        locally-unique training not in the statewide catalog —
                       employer academies, apprenticeships, Quick Start projects
county_media           county_id, imagekit_file_id, file_path, type, alt_text,
                       credit, consent_on_file, transformation_preset
county_resources       uploaded PDFs / one-pagers for K-12 and employer partners
county_success_stories person or employer narratives + media
```

### 4.5 Auth & roles

```
profiles          extends auth.users — full_name, org, phone, role
county_members    profile_id, county_id, role (owner | editor), invited_by, status
registrations     county_id, requester, org, message, status (pending/approved/denied)
```

Roles:

| Role | Can |
|---|---|
| `super_admin` (you) | Everything statewide — reference data, approvals, all county content |
| `county_owner` | Edit their county, invite editors |
| `county_editor` | Edit their county's content only |
| `public` | Read published content |

**RLS policy shape:** every county-owned table carries `county_id`; the write policy is *"exists a `county_members` row for `auth.uid()` and this `county_id`"*. Read policy is *"published = true OR member OR super_admin."* This is the security boundary — it gets written once, tested deliberately, and never bypassed with a service-role key in user-facing paths.

---

## 5. Site structure

### 5.1 Public

```
/                                  Statewide map + value prop + cluster overview
/counties                          All 159, filterable by region/cluster/registered
/counties/[slug]                   ★ The county page (branded, the core deliverable)
/counties/[slug]/k12               Curated view for CTAE/school partners
/counties/[slug]/employers         Curated view for employers
/counties/[slug]/careers           Curated view for job seekers
/industries/[cluster]              Statewide cluster view — programs, wages, geography
/programs                          Searchable program explorer (filters below)
/programs/[id]                     Program detail → occupations, wages, campuses, apply
/institutions/[slug]               College profile + its aligned programs
/about, /methodology                ← methodology page matters for credibility
```

Program explorer filters: cluster, sub-sector, county/radius, institution, credential type, award level, delivery mode (online/hybrid/in-person), program length, HOPE Career Grant eligibility.

### 5.2 County page anatomy

1. Hero — county imagery (ImageKit), name, tagline
2. Target industries — the county's clusters with priority and rationale
3. **Aligned programs** — grouped by cluster, with distance from county seat
4. Local employers — logo wall by cluster
5. Local/unique programs — the county's own additions
6. Pathway visualization — CTAE pathway → postsecondary program → occupation → wage
7. Success stories
8. Partner resources — downloadable one-pagers
9. Contact the EDA

### 5.3 Admin panel `/admin`

- **Super admin:** approve registrations, manage reference data (counties, institutions, programs, occupations, clusters), crosswalk editor, publish controls, global analytics, impersonate-county for support.
- **County admin:** dashboard (profile completeness %), edit profile, manage employers + logos, add local programs, media library (their folder only), confirm/adjust target industries, invite teammates, view their page analytics.

A **completeness score** ("your page is 60% complete — add 3 employer logos") is the single highest-leverage feature for getting counties to actually fill their pages in. It is also a clean grant metric.

---

## 6. ImageKit architecture

All image and video handling goes through ImageKit. Nothing is stored in Supabase Storage except non-media documents (PDFs).

### 6.1 Upload flow (secure, direct-to-ImageKit)

```
Browser ──► Next.js route handler /api/imagekit/auth
              (verifies Supabase session + county membership,
               returns signature/token/expire — private key never leaves server)
       ──► uploads DIRECTLY to ImageKit (bytes never touch our server)
       ──► returns fileId + filePath
       ──► we persist fileId, filePath, metadata to Supabase
```

This avoids serverless request-size limits and bandwidth cost entirely.

Folder convention: `/counties/{fips}-{slug}/{hero|employers|gallery|video}/`
Tags: `county:{slug}`, `cluster:{slug}`, `type:{logo|hero|story}` — makes bulk operations and the DAM search useful later.

### 6.2 Video: trimming and cropping

**Non-destructive by design.** We never re-encode on upload. The trim UI records offsets; the offsets become URL parameters.

- Upload full video → ImageKit
- Admin scrubs a trim UI (start/end handles) and picks an aspect ratio
- We store `start_offset`, `end_offset`, `aspect_ratio` alongside the `fileId`
- Delivery URL applies them as transformations: start offset + duration, plus width/height/aspect with a focus mode for the crop

Result: re-trimming is instantaneous and free, the original is preserved, and there is no encoding job to babysit. If we later want a hard-baked copy, ImageKit can produce one from the same parameters.

Also using:
- **Auto-generated video thumbnails** at a chosen timestamp — no separate poster upload
- **Adaptive bitrate streaming** (HLS/DASH) for hero videos so rural users on poor connections still get playback
- **Webhooks** on encode completion → mark media ready in Supabase

### 6.3 Images: "load super fast"

- `f-auto` (AVIF/WebP negotiation) + `q-auto` on every URL
- **Named transformations** as presets — `hero`, `card`, `logo`, `avatar`, `og` — so sizes are defined once centrally, not scattered through JSX
- ImageKit's official Next.js integration for responsive `srcset` + lazy loading
- LQIP blur placeholders for hero images
- Smart cropping with face/object focus for people photos
- Logo normalization: contained on transparent/padded canvas at fixed dimensions so a logo wall never looks ragged
- Custom metadata fields on every asset: `alt_text`, `credit`, `consent_on_file` — accessibility and photo-release tracking, both of which matter for a public-sector deliverable

### 6.4 Cost control

Bandwidth is the ImageKit cost driver. Named transformations (a bounded set of variants), `q-auto`, and ISR-cached pages keep origin requests and variant explosion low. We should confirm the plan tier against expected traffic before launch.

---

## 7. Data acquisition plan

| Dataset | Source | Effort |
|---|---|---|
| 159 counties + geometry | US Census TIGER / Georgia GIS Clearinghouse | Low |
| 12 regions, LWDA mapping | GDEcD / GDOL / Regional Commissions | Low |
| Institutions + campuses | TCSG (22 colleges, 88+ campuses), USG (26 institutions) | Low–Medium |
| Programs (~300–600 curated) | College catalogs, filtered to the 5 clusters | **High — the big lift** |
| CIP→SOC crosswalk | NCES (public) | Low |
| Occupation wages/projections | Georgia DOL Workforce Statistics, BLS OES | Medium |
| County target industries | Regional target-industry studies, GDEcD, existing employer base | **High — research-heavy** |
| County employers | Seeded for showcase counties; counties add their own | Medium |

**Reality check:** the two "High" rows are the schedule risk, and neither is an engineering task. Both proceed *in parallel* with the build.

**Curation is staffed** (D9): you and an intern, with a working spreadsheet already in progress. That changes the approach — we do **not** hand you a blank template and ask you to start over. Instead:

1. Review the existing sheet's columns and conventions.
2. Shape the database schema to accept it, adding only the fields the alignment engine genuinely requires (CIP code being the important one — see below).
3. Build an importer against *your* sheet, so it stays the working surface. Spreadsheets are a better curation UI than any admin panel we would build, and the intern already knows this one.
4. The admin panel becomes the maintenance tool *after* bulk import, not the data-entry tool during it.

**The one field worth insisting on: CIP code per program.** It is what makes the whole alignment chain (§4.3) computable rather than hand-drawn. If the current sheet lacks it, adding it now — while the row count is still small — is far cheaper than backfilling 600 rows later. Everything else in the schema can bend to fit what you already have.

---

## 8. Phased roadmap

### Phase 0 — Foundation
Repo, Next.js + Supabase + ImageKit wiring, schema migrations, RLS policies + tests, design system, deploy pipeline.

### Phase 1 — Statewide skeleton (all 159 counties live)
County/region/institution/program/occupation seed data loaded. Statewide map, county index, basic county pages, program explorer with filters, cluster pages, methodology page. **Every county has a real URL.**

### Phase 2 — Alignment engine
CIP→SOC→cluster crosswalks loaded, alignment queries + ranking, pathway visualization, program detail pages with wage/demand data.

### Phase 3 — Registration + admin panel
Supabase Auth, registration → approval flow, county admin CRUD, ImageKit upload + media library + video trim UI, completeness score, teammate invitations.

### Phase 4 — Showcase counties + polish
Forsyth, Ware, Houston, and Jackson built deep with real photography, employer logos, local programs, and success stories — including the SK Battery / Quick Start / Lanier Tech story in Jackson. Accessibility audit (WCAG 2.1 AA), SEO/OG images, performance pass, analytics dashboard.

### Phase 5 — Launch & recruit counties
Because there is no grant deadline (D5), this phase replaces "assemble grant package." Publish, then actively recruit county registrations: outreach kit, demo script, printable one-pagers, methodology writeup. **Real registrations are the asset** — the grant application gets written later, against live traction, whenever a solicitation appears.

Sequencing note: Phases 1 and 2 are where grant-demo value concentrates. If time compresses, Phase 3's admin panel can ship with fewer content types — but it cannot be cut, because "counties maintain this themselves" is the sustainability argument.

---

## 9. Grant-readiness features

Since no funder is identified yet (D5), the goal here is **a clean event stream starting at launch**, not a reporting module shaped to someone's framework. Metrics you began collecting a year before you applied are worth far more than metrics you designed for the application — you cannot retroactively instrument adoption.

Capture from day one:

- **Registration funnel metrics** — counties registered, % of 159, by region
- **Engagement metrics** — page views by county, program clicks, resource downloads, referrals to college application pages
- **Distribution metrics** — how many K-12/employer partners each county has shared with
- **Equity lens** — rural vs. metro coverage; registration rate in persistent-poverty counties. Nearly every federal and philanthropic funder asks this, so it is worth capturing regardless of who the funder turns out to be.
- **Exportable reports** — CSV/PDF over an arbitrary date range, so any future reporting period can be produced on demand
- **Public methodology page** — how alignment is computed, sources, refresh cadence

Deliberately **not** building yet: a funder-specific dashboard, logic model, or performance-measure mapping. Those take days once a real solicitation exists, and building them now means guessing.

---

## 10. Risks

| Risk | Mitigation |
|---|---|
| Program curation slips the schedule | Start it week 1, in parallel, with a fixed spreadsheet template. Ship with fewer programs rather than delay. |
| County target-industry research is subjective | Cite a source per row; let counties override; expose provenance publicly. |
| Counties register but never fill their page | Completeness score, nudge emails, pre-seeded content so a page is never blank. |
| Data goes stale after grant | Annual refresh built into the admin panel; county self-service; documented process. |
| Institution partners object to representation | Link out to official catalogs; show "last verified" dates; give colleges a correction path. |
| Media rights on county photos | `consent_on_file` metadata field + release tracking from day one. |
| ImageKit bandwidth costs at scale | Bounded named transformations, `q-auto`, ISR caching; confirm tier before launch. |
| **No grant deadline → the project drifts** | The most likely failure mode now that D5 removed external urgency. Mitigate with a self-imposed launch date and a fixed Phase 1–3 scope. Ship narrow and live rather than broad and unlaunched; a funder appearing in 6 months should find a running product, not a branch. |

---

## 11. Open questions — next round

**Resolved this round:** funder (D5 — none yet, build for readiness) · showcase counties (D7 — Forsyth, Ware, Houston, Jackson) · CTAE pathways (D6 — deferred, seam preserved) · job postings (D8 — permanently out).

**Highest priority**

1. **Share the working curation spreadsheet** (D9). I need its actual columns before finalizing the schema — the goal is to shape the database around what you and the intern are already doing, not to make you redo it. Column headers alone are enough to start.
2. **Self-imposed launch date?** With no grant deadline, this is the only thing keeping the project on rails (see §10). Still open.
3. **Schedule the four EDA calls** (D10). Guide is written; see `EDA-DISCOVERY-GUIDE.md`. These should happen before Phase 0, and letters of support should be collected while the conversations are warm.

**Product**

4. Do job seekers ever create accounts (save programs, get alerts), or is the public side fully anonymous? Accounts add PII scope and a privacy policy obligation. Recommend anonymous for v1.
5. Spanish translation for job seeker views — v1 or later?
6. Should registration be **open** (any county self-registers, you approve) or **invite-only** at launch? Open scales; invite-only keeps quality high while the product is young.

**Brand & operations**

7. Domain name — registered yet? Is "Statewide Pathway Explorer" the final name?
8. Existing brand identity (logo, colors, fonts), or do we create one?
9. Besides you, who is a super admin at launch?
10. Do you have any relationship yet with TCSG, GDEcD, or the Regional Commissions? Not required to build, but a single TCSG contact would dramatically shorten program curation — and their buy-in is the difference between a useful tool and an official one.

---

## 12. Immediate next steps

**Two tracks, running in parallel.**

### Track A — Discovery (you, starting now)
1. Schedule the four EDA calls using `EDA-DISCOVERY-GUIDE.md`. Ask for letters of support and technical college introductions while you're there.
2. Write each call up the same day; compare all four before Phase 0.

### Track B — Build (blocked on one thing)
3. **Send me the curation spreadsheet's columns.** This is the only thing blocking schema work.
4. I then produce: schema as reviewable SQL migrations (with the D6 CTAE seam), an importer built against your actual sheet, and a short gap list of fields the alignment engine needs added — CIP code chief among them (§7).
5. Provision accounts: Supabase, ImageKit, Vercel, domain.
6. Begin Phase 0.

**Recommended sequencing:** curate the four showcase counties end-to-end *before* attempting all 159. Doing four completely will expose every flaw in the data model while the cost of changing it is still near zero — and it gives the intern a well-defined, finishable first assignment.
