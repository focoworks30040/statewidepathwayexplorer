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

### 1.2 Why this is fundable

A $1–2M ask needs a defensible theory of change, not just a website. The structure below is built to satisfy that:

- **Statewide from day one** — all 159 counties present, not a pilot.
- **Standards-based data** — CIP → SOC → NAICS crosswalks (see §4.3), so alignment claims are auditable rather than editorial.
- **Measurable** — built-in reporting on registrations, engagement, and resource distribution, mapped to performance measures a funder can put in a grant agreement.
- **Sustainable** — county self-service means the content maintains itself after the grant period.

---

## 2. Decisions locked (this round)

| # | Decision | Choice | Consequence |
|---|---|---|---|
| D1 | Program catalog data | **Curated seed + admin CRUD** | We hand-curate ~300–600 industry-aligned programs. No scrapers to maintain. Refresh is an annual editorial task. |
| D2 | County target industries | **Seed from public data, counties refine** | All 159 counties are useful on day one. Registration improves a page rather than creating it. |
| D3 | Tenancy | **Branded county pages on one shared site** | `/counties/gwinnett`. County admins edit only their county. Data model stays tenant-aware so subdomains remain a later config change, not a rewrite. |
| D4 | Scope posture | **Demo-ready ASAP for the grant application** | All 159 counties visible; 3–5 showcase counties built deep; polished public UX; working admin panel. Depth follows funding. |

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

**Reality check:** the two "High" rows are the schedule risk, and neither is an engineering task. Program curation and county target-industry research are research work that can proceed *in parallel* with the build — ideally by someone other than the engineer. Getting a structured spreadsheet template into a researcher's hands in week 1 is the highest-value scheduling move available.

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
3–5 counties built deep with real photography, employer logos, local programs, and success stories. Accessibility audit (WCAG 2.1 AA), SEO/OG images, performance pass, analytics + reporting dashboard.

### Phase 5 — Grant package
Methodology writeup, impact metrics dashboard, demo script, printable one-pagers.

Sequencing note: Phases 1 and 2 are where grant-demo value concentrates. If time compresses, Phase 3's admin panel can ship with fewer content types — but it cannot be cut, because "counties maintain this themselves" is the sustainability argument.

---

## 9. Grant-readiness features

Build these deliberately; they are what distinguishes a funded proposal from a nice website.

- **Registration funnel metrics** — counties registered, % of 159, by region
- **Engagement metrics** — page views by county, program clicks, resource downloads, referrals to college application pages
- **Distribution metrics** — how many K-12/employer partners each county has shared with
- **Equity lens** — rural vs. metro coverage; registration rate in persistent-poverty counties. Nearly every federal and philanthropic funder asks this. Having it built in is a differentiator.
- **Exportable reports** — CSV/PDF for grant reporting periods
- **Public methodology page** — how alignment is computed, sources, refresh cadence

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

---

## 11. Open questions — next round

**Grant & organizational**
1. Which specific funder / grant program is the $1–2M ask aimed at? (EDA, ARC, DOL, Georgia state, philanthropic?) Deadlines and required performance measures shape Phase 5 directly.
2. What entity applies — an EDA, a nonprofit, a regional commission, your company?
3. Do you have letters of support or partnership commitments from TCSG, GDEcD, or specific colleges? These matter more to a reviewer than the site itself.

**Product**
4. Which 3–5 counties are the showcase set? (Ideally: one metro, one mid-size, two rural, spread across regions.)
5. Do job seekers ever create accounts (save programs, get alerts), or is the public side fully anonymous? Accounts add PII scope and a privacy policy obligation.
6. Should we map **GaDOE CTAE career pathways** into the model? Georgia's K-12 career clusters connecting *high school pathway → college program → occupation* would be a standout feature for the K-12 audience — and a meaningful scope addition.
7. Employer job postings — in scope, or explicitly out? (Recommend out for v1; it's a maintenance treadmill.)
8. Spanish translation needed for the job seeker views?

**Brand & operations**
9. Domain name — registered yet? ("Statewide Pathway Explorer" is the working name; is it the final one?)
10. Existing brand identity (logo, colors, fonts), or do we create one?
11. Besides you, who is a super admin at launch?
12. Who owns program-data curation and county research — you, a hire, or should we scope it as grant-funded work?

---

## 12. Immediate next steps

1. Answer §11 — especially Q1, Q4, and Q6, which change scope.
2. I produce the county target-industry research template and the program curation template so data work can start immediately, in parallel.
3. I finalize the database schema as reviewable SQL migrations.
4. Provision accounts: Supabase project, ImageKit account, Vercel project, domain.
5. Begin Phase 0.
