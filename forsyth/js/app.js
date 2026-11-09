/* FOCO Works Pathway Explorer — Forsyth County. Interactive behavior, no build step or dependencies. */
(function () {
  "use strict";

  const D = window.FOCO;
  const MAP = window.FORSYTH_MAP;
  const CAREERS = D.careers;
  const INDUSTRIES = D.industries;
  const EDU = D.eduLevels;
  const DREAMS = D.dreams;
  const SCHOOLS = D.schools;
  const HIGH_SCHOOLS = D.highSchools;

  const indById = Object.fromEntries(INDUSTRIES.map((i) => [i.id, i]));
  // Careers whose occupation code is on the Georgia High-Demand Career List.
  const HIGH_DEMAND = new Set(((D.highDemand || {}).occupations || []).map((o) => o.soc));
  const isHighDemand = (c) => !!c.soc && HIGH_DEMAND.has(c.soc);

  // Approximate campus locations, used only to place markers on the map.
  const PLACES = [
    { kind: "city", name: "Cumming", lat: 34.2073, lon: -84.1402 },
    { kind: "tcsg", name: "Lanier Technical College, Forsyth Campus", lat: 34.1575, lon: -84.1755 },
    { kind: "usg", name: "University of North Georgia, Cumming Campus", lat: 34.1985, lon: -84.1555 }
  ];
  // Where to print each neighbor's name so it sits just outside Forsyth's edge.
  const NEIGHBOR_LABELS = { Cherokee: [95, 250], Dawson: [255, 52], Hall: [470, 120], Gwinnett: [430, 470], Fulton: [130, 455] };

  const state = {
    dream: DREAMS[0].id,
    sector: "all",
    edu: "all",
    gems: false,
    localOnly: false,
    hdOnly: false,
    sort: "az",
    query: "",
    career: null,
    hs: null,
    empInd: "all",
    empQuery: "",
    saved: loadSaved(),
  };

  // ── Helpers ─────────────────────────────────────────────
  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const money = (n) => (n >= 239000 ? "$239K+" : "$" + Math.round(n / 1000) + "K");
  const pay = (c) => (c.local ? c.payShort : money(c.wage));
  const payLabel = (c) => (c.local ? "Forsyth pay" : "typical GA pay");
  const indName = (c) => indById[c.inds[0]].name;
  const SVGNS = "http://www.w3.org/2000/svg";

  // Every company, by name. Chamber members come from each industry's employer list;
  // the rest are local community companies listed by category.
  const EMP = {};
  const addEmp = (name, fields) => {
    const e = (EMP[name] ||= { name, url: null, member: false, inds: [], cats: [] });
    if (fields.url) e.url = fields.url;
    if (fields.member) e.member = true;
    (fields.inds || []).forEach((i) => { if (!e.inds.includes(i)) e.inds.push(i); });
    if (fields.cat && !e.cats.includes(fields.cat)) e.cats.push(fields.cat);
    return e;
  };
  INDUSTRIES.forEach((ind) => {
    ind.employers.forEach((e) => addEmp(e.name, { url: e.url, member: true, inds: [ind.id, ...e.also] }));
    Object.entries(ind.community).forEach(([cat, names]) => names.forEach((n) => addEmp(n, { inds: [ind.id], cat })));
  });
  // Careers can name employers that aren't in either list.
  Object.values(CAREERS).forEach((c) => (c.employers || []).forEach((n) => { if (!EMP[n]) addEmp(n, { inds: c.inds }); }));
  // "https://www.example.com/path" → "example.com"
  const siteLabel = (url) => { try { return new URL(url).hostname.replace(/^www\./, ""); } catch (e) { return url; } };
  const employerLink = (name) =>
    `<button class="emp-link${EMP[name] && EMP[name].member ? " is-member" : ""}" type="button" data-employer="${esc(name)}">${esc(name)}</button>`;
  const schoolUrl = (school, p) => p.url || SCHOOLS[school].programsUrl || SCHOOLS[school].site;
  const communityCount = (ind) => Object.values(ind.community).reduce((a, x) => a + x.length, 0);
  const programCount = (ind) => Object.values(ind.programs).reduce((a, x) => a + x.length, 0);

  // ── Videos ──────────────────────────────────────────────
  const VIDEOS = (window.VIDEOS || []).filter((v) => CAREERS[v.career]);
  const SAMPLES = window.SHOW_SAMPLE_VIDEOS ? (window.SAMPLE_VIDEOS || []).filter((v) => CAREERS[v.career]) : [];
  // A real video takes the place of the sample slot for the same career, keeping its position.
  const usedVideos = new Set();
  const slotted = SAMPLES.map((s) => {
    const v = VIDEOS.find((x) => x.career === s.career && !usedVideos.has(x));
    if (!v) return s;
    usedVideos.add(v);
    return v;
  });
  const ALL_VIDEOS = [...VIDEOS.filter((v) => !usedVideos.has(v)), ...slotted].map((v, i) => ({ ...v, idx: i }));
  // Inside an embedded viewer, third-party players can't load, so videos open on their own site.
  const FRAMED = (() => { try { return window.self !== window.top; } catch (e) { return true; } })();
  const videosFor = (careerId) => ALL_VIDEOS.filter((v) => !v.sample && v.career === careerId);
  const hasVideo = (careerId) => VIDEOS.some((v) => v.career === careerId);
  function videoUrl(v) {
    if (!v.video) return null;
    if (v.video.type === "youtube") return "https://www.youtube.com/watch?v=" + encodeURIComponent(v.video.id);
    if (v.video.type === "vimeo") return "https://vimeo.com/" + encodeURIComponent(v.video.id);
    return v.video.src;
  }
  function ytSearch(careerId) {
    return "https://www.youtube.com/results?search_query=" + encodeURIComponent("day in the life " + CAREERS[careerId].title);
  }

  function loadSaved() {
    try { return JSON.parse(localStorage.getItem("foco-saved") || "[]").filter((id) => CAREERS[id]); } catch (e) { return []; }
  }
  function persistSaved() {
    try { localStorage.setItem("foco-saved", JSON.stringify(state.saved)); } catch (e) { /* storage unavailable */ }
  }
  function isSaved(id) { return state.saved.includes(id); }
  function toggleSaved(id) {
    state.saved = isSaved(id) ? state.saved.filter((x) => x !== id) : [...state.saved, id];
    persistSaved();
    $("#savedCount").textContent = state.saved.length;
    document.querySelectorAll(`[data-save="${id}"]`).forEach((b) => {
      b.classList.toggle("is-saved", isSaved(id));
      b.setAttribute("aria-pressed", isSaved(id));
      if (b.classList.contains("save-btn")) b.textContent = isSaved(id) ? "♥" : "♡";
      else b.textContent = isSaved(id) ? "Saved to my list" : "Save to my list";
    });
  }

  // ── Map ─────────────────────────────────────────────────
  function project(lat, lon) {
    const x = MAP.scale * (lon * Math.PI / 180) + MAP.tx;
    const y = -MAP.scale * Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360)) + MAP.ty;
    return [x, y];
  }
  function buildMap(container, { labels }) {
    const el = (tag, attrs, text) => {
      const n = document.createElementNS(SVGNS, tag);
      Object.entries(attrs).forEach(([k, v]) => n.setAttribute(k, v));
      if (text) n.textContent = text;
      return n;
    };
    const svg = el("svg", { viewBox: `0 0 ${MAP.w} ${MAP.h}`, class: "fmap", "aria-hidden": "true" });
    // Neighboring counties run far past the frame; clip them to it.
    const clipId = "fclip-" + container.id;
    const defs = el("defs", {});
    const clip = el("clipPath", { id: clipId });
    clip.appendChild(el("rect", { x: 0, y: 0, width: MAP.w, height: MAP.h, rx: 28 }));
    defs.appendChild(clip);
    svg.appendChild(defs);
    const g = el("g", { "clip-path": `url(#${clipId})` });
    svg.appendChild(g);
    MAP.counties.filter((c) => !c.home).forEach((c) => g.appendChild(el("path", { d: c.d, class: "fcounty" })));
    const home = MAP.counties.find((c) => c.home);
    g.appendChild(el("path", { d: home.d, class: "fcounty is-home" }));
    MAP.counties.filter((c) => !c.home && NEIGHBOR_LABELS[c.name]).forEach((c) => {
      const [x, y] = NEIGHBOR_LABELS[c.name];
      g.appendChild(el("text", { x, y, class: "flabel" }, c.name));
    });
    if (!labels) g.appendChild(el("text", { x: home.cx, y: home.cy + 58, class: "flabel flabel--home" }, "Forsyth County"));
    PLACES.forEach((p, i) => {
      const [x, y] = project(p.lat, p.lon);
      if (p.kind === "city") {
        g.appendChild(el("circle", { cx: x.toFixed(1), cy: y.toFixed(1), r: 14, class: "pulse" }));
        g.appendChild(el("rect", { x: (x - 4).toFixed(1), y: (y - 4).toFixed(1), width: 8, height: 8, class: "mk-city" }));
      } else {
        g.appendChild(el("circle", { cx: x.toFixed(1), cy: y.toFixed(1), r: p.kind === "usg" ? 7 : 6, class: (p.kind === "usg" ? "mk-usg" : "mk-tcsg") + (labels ? "" : " is-animated"), style: labels ? "" : `animation-delay:${0.6 + i * 0.2}s` }));
      }
      if (labels) {
        const [dx, dy, anchor] = { city: [12, -8, "start"], usg: [-12, 20, "end"], tcsg: [12, 5, "start"] }[p.kind];
        g.appendChild(el("text", { x: (x + dx).toFixed(1), y: (y + dy).toFixed(1), class: "flabel flabel--place", style: `text-anchor:${anchor}` },
          p.kind === "city" ? "Cumming" : p.kind === "tcsg" ? "Lanier Tech" : "UNG Cumming"));
      }
    });
    container.innerHTML = "";
    container.appendChild(svg);
  }

  // ── Dream constellation ─────────────────────────────────
  function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function renderDreamChips() {
    const wrap = $("#dreamChips");
    wrap.innerHTML = DREAMS.map((d) => `
      <button class="chip" role="tab" type="button" data-dream="${d.id}" aria-selected="${d.id === state.dream}">
        <span class="chip__emoji" aria-hidden="true">${d.emoji}</span>${esc(capitalize(d.label))}
      </button>`).join("");
    wrap.addEventListener("click", (e) => {
      const b = e.target.closest("[data-dream]");
      if (!b) return;
      state.dream = b.dataset.dream;
      wrap.querySelectorAll("[data-dream]").forEach((x) => x.setAttribute("aria-selected", x.dataset.dream === state.dream));
      renderConstellation();
    });
  }

  function renderConstellation() {
    const dream = DREAMS.find((d) => d.id === state.dream);
    const word = $("#dreamWord");
    word.style.opacity = 0;
    setTimeout(() => { word.textContent = dream.label; word.style.opacity = 1; }, 180);

    const ids = dream.careers;
    const n = ids.length;
    const innerCount = n <= 8 ? n : Math.min(7, Math.ceil(n * 0.42));
    const positions = ids.map((id, i) => {
      const inner = i < innerCount;
      const k = inner ? i : i - innerCount;
      const count = inner ? innerCount : n - innerCount;
      const offset = inner ? -Math.PI / 2 : -Math.PI / 2 + Math.PI / count;
      const ang = offset + (k / count) * Math.PI * 2;
      const rx = n <= 8 ? 32 : inner ? 22 : 40;
      const ry = n <= 8 ? 34 : inner ? 26 : 42;
      return { id, x: 50 + rx * Math.cos(ang), y: 50 + ry * Math.sin(ang) };
    });

    const box = $("#constellation");
    const lines = positions.map((p) => `<line x1="50" y1="50" x2="${p.x.toFixed(2)}" y2="${p.y.toFixed(2)}" vector-effect="non-scaling-stroke"/>`).join("");
    box.innerHTML = `
      <svg class="lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <ellipse cx="50" cy="50" rx="${n <= 8 ? 32 : 22}" ry="${n <= 8 ? 34 : 26}" fill="none" stroke="var(--control)" stroke-dasharray="2 6" vector-effect="non-scaling-stroke" />
        ${lines}
      </svg>
      <div class="c-center"><span class="emoji" aria-hidden="true">${dream.emoji}</span><div><small>I want to be</small><strong>${esc(dream.label)}</strong></div></div>
      ${positions.map((p) => {
        const c = CAREERS[p.id];
        return `<button class="c-node${c.local ? " is-local" : ""}" type="button" data-career="${p.id}" style="left:${p.x.toFixed(2)}%;top:${p.y.toFixed(2)}%">
          ${c.gem ? '<span class="c-node__gem">Hidden gem</span>' : ""}
          <span class="c-node__title">${hasVideo(p.id) ? '<span class="play-dot" aria-label="Has video">▶</span> ' : ""}${esc(c.title)}</span>
          <span class="c-node__meta"><i class="dot dot--edu-${c.edu}" aria-hidden="true"></i>${esc(c.years)} · ${esc(pay(c))}</span>
          ${c.local ? '<span class="c-node__local">Hiring in Forsyth</span>' : ""}
        </button>`;
      }).join("")}`;
    requestAnimationFrame(() => {
      box.querySelectorAll(".c-node").forEach((el, i) => setTimeout(() => el.classList.add("is-in"), 40 + i * 45));
    });
  }

  // ── Top industries ──────────────────────────────────────
  const icon = (paths) => `<svg viewBox="0 0 32 32" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
  const IND_ICONS = {
    mfg: icon('<circle cx="16" cy="16" r="4.5"/><path d="M16 4v4M16 24v4M4 16h4M24 16h4M7.5 7.5l2.8 2.8M21.7 21.7l2.8 2.8M7.5 24.5l2.8-2.8M21.7 10.3l2.8-2.8"/>'),
    health: icon('<path d="M12 5h8v7h7v8h-7v7h-8v-7H5v-8h7z"/>'),
    bio: icon('<path d="M12 4h8M13 4v8L6.5 24.5A2.3 2.3 0 0 0 8.6 28h14.8a2.3 2.3 0 0 0 2.1-3.5L19 12V4"/><path d="M9.5 20h13"/>'),
    pro: icon('<rect x="6" y="5" width="14" height="23" rx="1.5"/><path d="M20 12h6v16H4M10 10h2M14 10h2M10 15h2M14 15h2M10 20h2M14 20h2"/>'),
    tech: icon('<rect x="5" y="7" width="22" height="15" rx="2"/><path d="M3 26h26M13 12l-3 3 3 3M19 12l3 3-3 3"/>')
  };
  function renderIndustries() {
    $("#sectorRail").innerHTML = INDUSTRIES.map((ind) => `
      <button class="sector-card ind-card" type="button" data-industry="${ind.id}" style="--ind:${ind.color}">
        <span class="ind-card__top">
          <span class="sector-card__icon ind-icon">${IND_ICONS[ind.id] || ""}</span>
          ${ind.growth ? `<span class="growth" title="${esc(ind.growthSource)}">${esc(ind.growth)} growth</span>` : ""}
        </span>
        <span class="ind-card__tag">${esc(ind.tag)}</span>
        <h3>${esc(ind.name)}</h3>
        <p>${esc(ind.blurb)}</p>
        <span class="ind-card__stats">
          <span><strong>${ind.careers.length}</strong>careers</span>
          <span><strong>${programCount(ind)}</strong>programs</span>
          <span><strong>${ind.employers.length + communityCount(ind)}</strong>companies</span>
        </span>
        <span class="sector-card__go">Explore ${esc(ind.name)} ›</span>
      </button>`).join("");
  }

  let indOpen = null, indTab = "members", indQuery = "";

  function learnSection(ind, school) {
    const list = ind.programs[school];
    if (!list.length) return "";
    const S = SCHOOLS[school];
    return `<section class="learn-school" style="--school:${S.color}">
      <header class="learn-school__head">
        ${S.logo ? `<span class="school-logo${S.logoFill ? " school-logo--fill" : ""}"><img src="${esc(S.logo)}" alt="${esc(S.name)} logo"></span>` : `<span class="learn-school__badge" aria-hidden="true">${esc(S.short)}</span>`}
        <div><p class="learn-school__stage">${esc(S.stage)}</p><h4>${esc(S.name)}</h4></div>
        <a class="link learn-school__all" href="${esc(S.programsUrl || S.site)}" target="_blank" rel="noopener">All programs ›</a>
      </header>
      <ul class="learn-grid">${list.map((p) => `<li class="learn-tile">
        <a class="learn-tile__name" href="${esc(schoolUrl(school, p))}" target="_blank" rel="noopener">${esc(p.name)}</a>
        ${p.desc ? `<p class="learn-tile__desc">${esc(p.desc)}</p>` : ""}
        ${p.highSchools && p.highSchools.length ? `<p class="learn-tile__label">Offered at</p>
          <div class="learn-tile__chips">${p.highSchools.map((k) => `<span>${esc(HIGH_SCHOOLS[k].name.replace(" High School", ""))}</span>`).join("")}</div>` : ""}
        ${p.careers.length ? `<p class="learn-tile__label">Leads to</p>
          <div class="learn-tile__chips">${p.careers.map((cid) => `<button class="mini-chip" type="button" data-career="${cid}">${esc(CAREERS[cid].title)}</button>`).join("")}</div>` : ""}
      </li>`).join("")}</ul>
    </section>`;
  }

  function renderIndEmployers() {
    const ind = indById[indOpen];
    const q = indQuery.toLowerCase();
    const tabs = [{ id: "members", label: "Chamber members", names: ind.employers.map((e) => e.name) }]
      .concat(Object.entries(ind.community).map(([cat, names]) => ({ id: cat, label: cat, names })));
    const tab = tabs.find((t) => t.id === indTab) || tabs[0];
    const names = tab.names.filter((n) => !q || n.toLowerCase().includes(q)).sort((x, y) => x.localeCompare(y));
    $("#indEmployers").innerHTML = `
      <div class="emp-tabs" role="tablist" aria-label="Employer groups">${tabs.map((t) => `<button class="emp-tab${t.id === tab.id ? " is-on" : ""}${t.id === "members" ? " emp-tab--members" : ""}" role="tab" aria-selected="${t.id === tab.id}" type="button" data-ind-tab="${esc(t.id)}">${esc(t.label)} <span>${t.names.length}</span></button>`).join("")}</div>
      <p class="emp-tab-note">${tab.id === "members"
        ? `Forsyth County Chamber of Commerce members in ${esc(ind.name)}. Members often partner with schools on internships, apprenticeships, and work-based learning.`
        : `Local ${esc(tab.label.toLowerCase())} companies in Forsyth County.`} Select a company to learn more.</p>
      <ul class="emp-cards">${names.map((n) => `<li>${employerLink(n)}</li>`).join("") || `<li class="empty-note">No companies match “${esc(indQuery)}”.</li>`}</ul>`;
  }

  function openIndustry(id) {
    const ind = indById[id];
    indOpen = id; indTab = "members"; indQuery = "";
    const careerIds = ind.careers.slice().sort((a, b) => CAREERS[a].title.localeCompare(CAREERS[b].title));
    const total = ind.employers.length + communityCount(ind);
    $("#industryDialogBody").innerHTML = `
      <button class="sheet__close" type="button" data-close aria-label="Close">✕</button>
      <p class="dlg-sector" style="color:${esc(ind.color)}">${esc(ind.tag)}</p>
      <h2 class="dlg-title" id="indTitle">${esc(ind.name)}</h2>
      <p class="dlg-summary">${esc(ind.blurb)}</p>
      <div class="stats">
        <div class="stat"><small>Projected growth</small><strong>${esc(ind.growth || "—")}</strong></div>
        <div class="stat"><small>Careers to explore</small><strong>${ind.careers.length}</strong></div>
        <div class="stat"><small>School programs</small><strong>${programCount(ind)}</strong></div>
        <div class="stat"><small>Forsyth companies</small><strong>${total}</strong></div>
      </div>
      ${ind.growthSource ? `<p class="fine">Growth: ${esc(ind.growthSource)}.</p>` : ""}

      <h3 class="dlg-h dlg-h--center">Careers in ${esc(ind.name)}</h3>
      ${careerIds.some((cid) => isHighDemand(CAREERS[cid])) ? `<p class="center-note"><span class="hd-key"><i class="hd-dot" aria-hidden="true"></i>Georgia High-Demand Career</span></p>` : `<p class="center-note">${careerIds.length} careers, A to Z.</p>`}
      <div class="career-cols">${careerIds.map((cid) => {
        const hd = isHighDemand(CAREERS[cid]);
        return `<button class="career-btn${hd ? " is-hd" : ""}" type="button" data-career="${cid}"${hd ? ' aria-label="' + esc(CAREERS[cid].title) + ', Georgia High-Demand Career"' : ""}>${hd ? '<i class="hd-dot" aria-hidden="true"></i>' : ""}${esc(CAREERS[cid].title)}</button>`;
      }).join("")}</div>

      <h3 class="dlg-h dlg-h--center">Where you can learn it</h3>
      <p class="center-note">Start in high school, keep going after graduation. Select a program to visit the school's page.</p>

      <div class="learn">${learnSection(ind, "fcs")}${learnSection(ind, "lanier")}${learnSection(ind, "ung")}</div>
      ${TCSG_PROGRAMS[ind.id] ? (() => {
        const t = TCSG_PROGRAMS[ind.id];
        const n = t.colleges.reduce((a, c) => a + c.programs.length, 0);
        return `<section class="more-options">
          <h3 class="dlg-h dlg-h--center">Additional education options across the Technical College System of Georgia</h3>
          <p class="center-note">${t.colleges.length} technical colleges offer ${n} ${esc(ind.name.toLowerCase())} programs across the state.</p>
          <p class="center-btn"><button class="pill pill--blue pill--lg" type="button" data-programs="tcsg" data-ind="${ind.id}">Explore technical college programs ›</button></p>
        </section>`;
      })() : ""}
      ${USG_PROGRAMS[ind.id] ? (() => {
        const u = USG_PROGRAMS[ind.id];
        const pub = u.colleges.filter((c) => c.group === "usg");
        const n = pub.reduce((a, c) => a + c.programs.length, 0);
        const priv = u.colleges.length - pub.length;
        return `<section class="more-options">
          <h3 class="dlg-h dlg-h--center">Additional education options across the University System of Georgia</h3>
          <p class="center-note">${pub.length} public universities and colleges offer ${n} ${esc(ind.name.toLowerCase())} programs${priv ? `, plus ${priv} private colleges in Georgia` : ""}.</p>
          <p class="center-btn"><button class="pill pill--blue pill--lg" type="button" data-programs="usg" data-ind="${ind.id}">Explore university programs ›</button></p>
        </section>`;
      })() : ""}

      <h3 class="dlg-h dlg-h--center">Where you could work</h3>
      <p class="center-note">${total} Forsyth County companies in ${esc(ind.name)}.</p>
      <label class="search search--small emp-search"><span class="sr-only">Search companies</span><input type="search" id="indEmpSearch" placeholder="Search ${esc(ind.name)} companies" autocomplete="off"></label>
      <div id="indEmployers"></div>

      <div class="dlg-actions">
        <button class="pill pill--blue pill--lg" type="button" data-library="${ind.id}">See all ${ind.careers.length} careers</button>
        <button class="pill pill--outline pill--lg" type="button" data-employers="${ind.id}">Find local employers</button>
      </div>`;
    renderIndEmployers();
    const dlg = $("#industryDialog");
    if (!dlg.open) dlg.showModal();
    dlg.scrollTop = 0;
  }

  // ── Statewide program lists (technical colleges, universities) ──
  const TCSG_PROGRAMS = D.tcsgPrograms || {};
  const USG_PROGRAMS = D.usgPrograms || {};
  // Quick filters: label → words a program name can contain.
  const PROGRAM_LISTS = {
    tcsg: {
      data: TCSG_PROGRAMS,
      kicker: "Technical College System of Georgia",
      title: (ind) => `${ind.name} programs across Georgia`,
      summary: (ind) => `Beyond Lanier Tech, every technical college in Georgia offers ${ind.name.toLowerCase()} programs. Colleges are listed closest to Forsyth County first. Select a program to visit its page.`,
      unit: "college",
      filters: { health: [
        ["Nursing", ["nurs"]], ["Dental", ["dental", "coronal"]],
        ["Imaging", ["radiolog", "radiograph", "tomography", "resonance", "sonograph", "mammograph", "echocardiograph", "vascular", "cardiovascular", "electrocardiograph"]],
        ["EMS & Paramedic", ["ems", "emergency", "paramedic", "emt", "aemt"]],
        ["Surgical & Sterile", ["surgical", "sterile", "central processing", "endoscope"]],
        ["Lab & Phlebotomy", ["phlebotom", "laborator", "bioscience", "hemodialysis"]],
        ["Pharmacy", ["pharmac"]],
        ["Therapy", ["therap", "respiratory", "occupational"]],
        ["Medical office & records", ["health information", "coding", "medical office", "medical information", "patient account", "practice management", "health care management", "healthcare management", "data analytics"]],
        ["Medical assisting & aides", ["medical assist", "nurse aide", "health care assistant", "healthcare assistant", "geriatric", "cna"]]
      ] }
    },
    usg: {
      data: USG_PROGRAMS,
      kicker: "University System of Georgia",
      title: (ind) => `${ind.name} degrees across Georgia`,
      summary: (ind) => `Beyond UNG's Cumming campus, public universities and colleges across Georgia offer ${ind.name.toLowerCase()} degrees. University System of Georgia schools come first, then private colleges, each listed closest to Forsyth County first.`,
      unit: "school",
      filters: { health: [
        ["Nursing", ["nurs"]],
        ["Medicine, PA & dentistry", ["medicine", "medical (", "physician", "dentist", "(md)", "(dmd)", "m.d.", "pre-med", "pre-dent", "osteopath"]],
        ["Therapy & rehab", ["therap", "rehabilit", "athletic training", "prosthetic", "occupational", "respiratory"]],
        ["Exercise & kinesiology", ["exercise", "kinesiolog", "sport", "physical activity", "fitness", "human performance"]],
        ["Public health", ["public health", "epidemiolog", "global health", "health promotion", "environmental health", "community"]],
        ["Lab & science", ["laborator", "biolog", "biomedical", "chemistry", "microbio", "genetic", "toxicolog", "physiolog", "neuroscien", "biochem", "biotech", "histolog", "biostatist"]],
        ["Imaging", ["radiolog", "sonograph", "nuclear medicine", "radiation", "imaging", "tomography"]],
        ["Dental", ["dental"]],
        ["Pharmacy", ["pharma"]],
        ["Mental health & counseling", ["psycholog", "counsel", "mental", "social work", "behavior", "human services", "family therapy"]],
        ["Health administration", ["management", "administration", "informatics", "leadership", "health services", "health care (", "health systems", "health policy"]],
        ["Nutrition", ["nutrition", "dietetic", "food"]],
        ["Communication sciences", ["communication", "speech", "audiolog", "hearing"]],
        ["Pre-professional", ["pre-"]]
      ] }
    }
  };
  let progSys = null, progInd = null, progFilter = null, progQuery = "";

  function programMatches(name) {
    const n = name.toLowerCase();
    if (progQuery && !progQuery.toLowerCase().split(/\s+/).every((w) => n.includes(w))) return false;
    if (progFilter) {
      const terms = (PROGRAM_LISTS[progSys].filters[progInd] || []).find(([label]) => label === progFilter)[1];
      if (!terms.some((t) => n.includes(t))) return false;
    }
    return true;
  }

  function collegeTile(c) {
    return c.logo
      ? `<span class="school-logo tcsg-logo${c.logoBg ? " school-logo--bg" : c.logoFill ? " school-logo--fill" : ""}"${c.logoBg ? ` style="background:${esc(c.logoBg)}"` : ""}><img src="${esc(c.logo)}" alt="${esc(c.name)} logo"></span>`
      : `<span class="school-logo tcsg-logo tcsg-logo--initials" aria-hidden="true">${esc(c.short || c.name.replace(/&/g, "").split(/\s+/).filter((w) => !/^(of|and|the)$/i.test(w)).map((w) => w[0]).join("").slice(0, 4))}</span>`;
  }

  function renderPrograms() {
    const list = PROGRAM_LISTS[progSys];
    const data = list.data[progInd];
    const filtering = !!(progQuery || progFilter);
    const cols = data.colleges.map((c) => ({ ...c, hits: c.programs.filter((p) => programMatches(p.name)) })).filter((c) => !filtering || c.hits.length);
    const total = cols.reduce((a, c) => a + c.hits.length, 0);
    const plural = (n, w) => `${n} ${w}${n === 1 ? "" : "s"}`;
    document.querySelectorAll("[data-prog-filter]").forEach((b) => b.classList.toggle("is-on", b.dataset.progFilter === (progFilter || "")));
    $("#tcsgCount").textContent = filtering
      ? `${plural(total, "program")} at ${plural(cols.length, list.unit)}`
      : `${plural(data.colleges.length, list.unit)} · ${plural(data.colleges.reduce((a, c) => a + c.programs.length, 0), "program")} · closest first`;
    let lastGroup = null;
    $("#tcsgList").innerHTML = cols.map((c, i) => {
      const head = data.groups && c.group !== lastGroup
        ? `<h3 class="prog-group">${esc(data.groups[c.group] || c.group)}</h3>${c.group === "private" ? `<p class="prog-group-note">Not part of the University System of Georgia. Tuition and HOPE amounts differ, so check with each school.</p>` : ""}`
        : "";
      lastGroup = c.group;
      return `${head}
      <details class="tcsg-college"${filtering || i < 3 ? " open" : ""}>
        <summary class="has-logo">
          ${collegeTile(c)}
          <span class="tcsg-college__name">${esc(c.name)}</span>
          <span class="tcsg-college__meta">Closest campus: ${esc(c.nearestCampus)} · ${c.miles} mi from Forsyth</span>
          <span class="tcsg-college__count">${filtering ? `${c.hits.length} match${c.hits.length === 1 ? "" : "es"}` : plural(c.programs.length, "program")}</span>
        </summary>
        <ul class="tcsg-programs">${c.hits.map((p) => `<li><a href="${esc(p.url || c.site)}" target="_blank" rel="noopener">${esc(p.name)}</a></li>`).join("")}</ul>
        <a class="link small-link" href="${esc(c.site)}" target="_blank" rel="noopener">Visit ${esc(c.name)} ›</a>
      </details>`;
    }).join("") || `<p class="empty-note">No programs match. Try a different word or clear the filter.</p>`;
  }

  function openPrograms(sys, indId) {
    const list = PROGRAM_LISTS[sys];
    const data = list && list.data[indId];
    if (!data) return;
    progSys = sys; progInd = indId; progFilter = null; progQuery = "";
    const ind = indById[indId];
    $("#tcsgDialogBody").innerHTML = `
      <button class="sheet__close" type="button" data-close aria-label="Close">✕</button>
      <p class="dlg-sector">${esc(list.kicker)}</p>
      <h2 class="dlg-title" id="tcsgTitle">${esc(list.title(ind))}</h2>
      <p class="dlg-summary">${esc(list.summary(ind))}</p>
      <label class="search tcsg-search"><span class="sr-only">Search programs</span><input type="search" id="tcsgSearch" placeholder="Search programs, like “nursing” or “therapy”" autocomplete="off"></label>
      <div class="filter-row tcsg-filters" role="group" aria-label="Program types">
        <button class="chip is-on" type="button" data-prog-filter="">All programs</button>
        ${(list.filters[indId] || []).map(([label]) => `<button class="chip" type="button" data-prog-filter="${esc(label)}">${esc(label)}</button>`).join("")}
      </div>
      <p class="tcsg-count" id="tcsgCount" aria-live="polite"></p>
      <div id="tcsgList"></div>
      <p class="fine">Source: ${esc(data.source)}. ${esc(data.note)}</p>`;
    renderPrograms();
    const dlg = $("#tcsgDialog");
    if (!dlg.open) dlg.showModal();
    dlg.scrollTop = 0;
  }

  // ── Employer sheet ──────────────────────────────────────
  function openEmployer(name) {
    const e = EMP[name];
    if (!e) return;
    const inds = e.inds.length ? e.inds : ["pro"];
    const indNames = inds.map((i) => indById[i].name);
    const hiring = Object.keys(CAREERS).filter((id) => (CAREERS[id].employers || []).includes(name));
    const related = hiring.length ? hiring : Object.keys(CAREERS).filter((id) => CAREERS[id].local && CAREERS[id].inds.some((i) => inds.includes(i))).slice(0, 8);
    // Up to three programs from each school, so high school, Lanier Tech, and UNG all show.
    const feeders = [];
    ["fcs", "lanier", "ung"].forEach((school) => {
      const list = [];
      inds.forEach((i) => indById[i].programs[school].forEach((p) => { if (!list.some((x) => x.name === p.name)) list.push(p); }));
      list.slice(0, 3).forEach((p) => feeders.push({ p, school }));
    });
    const why = e.member
      ? `A Forsyth County Chamber of Commerce member in ${indNames.join(" and ")}. Local companies like this one partner with schools on internships, apprenticeships, and work-based learning.`
      : `A ${e.cats.length ? e.cats[0].toLowerCase() + " " : ""}company in our community working in ${indNames.join(" and ")}. Companies like this show the range of local opportunity these pathways can lead to.`;
    const maps = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(name + " Forsyth County GA");
    $("#employerDialogBody").innerHTML = `
      <button class="sheet__close" type="button" data-close aria-label="Close">✕</button>
      <p class="dlg-sector${e.member ? " member-kind" : ""}">${e.member ? "Forsyth County Chamber of Commerce Member" : "Local community company"}</p>
      <h2 class="dlg-title dlg-title--sm" id="empTitle">${esc(name)}</h2>
      <p class="emp-meta">Forsyth County${e.cats.length ? " · " + esc(e.cats.join(", ")) : ""} · ${esc(indNames.join(" · "))}</p>
      ${e.url ? `<p class="emp-website"><span>Website</span><a class="link" href="${esc(e.url)}" target="_blank" rel="noopener">${esc(siteLabel(e.url))} ↗</a></p>` : ""}
      <div class="tag-list">${inds.map((i) => `<span><i class="ind-dot" style="--ind:${indById[i].color}"></i>${esc(indById[i].name)}</span>`).join("")}${e.cats.map((c) => `<span>${esc(c)}</span>`).join("")}</div>
      <h3 class="dlg-h">Why it's here</h3>
      <p class="dlg-text">${esc(why)}</p>
      <h3 class="dlg-h">${hiring.length ? "Careers listed with this employer" : "Careers in this industry"}</h3>
      <div class="related">${related.map((id) => `<button class="chip" type="button" data-career="${id}">${esc(CAREERS[id].title)}</button>`).join("")}</div>
      <h3 class="dlg-h">Programs that can lead here</h3>
      <ul class="feeder-list">${feeders.map(({ p, school }) => `<li style="--school:${SCHOOLS[school].color}">
        <a class="link" href="${esc(schoolUrl(school, p))}" target="_blank" rel="noopener">${esc(p.name)}</a><span>${esc(SCHOOLS[school].name)}</span></li>`).join("")}</ul>
      <div class="dlg-actions">
        ${e.url ? `<a class="pill pill--blue pill--lg" href="${esc(e.url)}" target="_blank" rel="noopener">Visit website ↗</a>` : ""}
        <a class="pill pill--outline pill--lg" href="${esc(maps)}" target="_blank" rel="noopener">Find on Google Maps ↗</a>
      </div>`;
    const dlg = $("#employerDialog");
    if (!dlg.open) dlg.showModal();
    dlg.scrollTop = 0;
  }

  // ── Recent grad videos ──────────────────────────────────
  let gradSector = "all";

  function gradCard(v) {
    const c = CAREERS[v.career];
    const poster = v.video && v.video.type === "file" && v.video.poster ? ` style="background-image:linear-gradient(to top, rgba(0,0,0,.75), rgba(0,0,0,0) 55%), url('${esc(v.video.poster)}')"` : "";
    if (v.sample) {
      return `<article class="grad-card grad-card--sample" aria-label="Sample video slot: ${esc(c.title)}">
        <span class="grad-card__badge">Sample · video coming soon</span>
        <div class="grad-card__body">
          <p class="grad-card__quote">“${esc(v.quote)}”</p>
          <p class="grad-card__name">${esc(c.title)}</p>
          <p class="grad-card__meta">${esc(v.program)} · ${esc(v.school)}</p>
        </div>
      </article>`;
    }
    return `<button class="grad-card${poster ? " has-poster" : ""}" type="button" data-video="${v.idx}"${poster} aria-label="Play ${v.example ? "example " : ""}video: ${v.name ? esc(v.name) + ", " : ""}${esc(c.title)}">
      ${v.example ? '<span class="grad-card__badge grad-card__badge--example">Example</span>' : ""}
      <span class="grad-card__play" aria-hidden="true">▶</span>
      ${v.duration ? `<span class="grad-card__time">${esc(v.duration)}</span>` : ""}
      <span class="grad-card__body">
        <span class="grad-card__quote">“${esc(v.quote)}”</span>
        <span class="grad-card__name">${v.name ? esc(v.name) + " · " : ""}${esc(c.title)}</span>
        ${v.gradYear || v.school ? `<span class="grad-card__meta">${[v.gradYear && "Class of " + esc(v.gradYear), v.school && esc(v.school)].filter(Boolean).join(" · ")}</span>` : ""}
        ${v.employer ? `<span class="grad-card__meta">Now at ${esc(v.employer)}</span>` : ""}
      </span>
    </button>`;
  }

  function renderGradFilters() {
    const used = [...new Set(ALL_VIDEOS.map((v) => CAREERS[v.career].inds[0]))];
    const box = $("#gradFilters");
    box.innerHTML = [`<button class="chip" type="button" data-g-sector="all">All</button>`]
      .concat(INDUSTRIES.filter((s) => used.includes(s.id)).map((s) => `<button class="chip" type="button" data-g-sector="${s.id}">${esc(s.name)}</button>`)).join("");
    box.addEventListener("click", (e) => {
      const b = e.target.closest("[data-g-sector]");
      if (!b) return;
      gradSector = b.dataset.gSector;
      renderGrads();
    });
  }

  function renderGrads() {
    document.querySelectorAll("[data-g-sector]").forEach((b) => b.classList.toggle("is-on", b.dataset.gSector === gradSector));
    const list = ALL_VIDEOS.filter((v) => gradSector === "all" || CAREERS[v.career].inds.includes(gradSector));
    $("#gradRail").innerHTML = list.map(gradCard).join("") + `
      <div class="grad-card grad-card--invite">
        <div class="grad-card__body">
          <p class="grad-card__name">Know a recent grad?</p>
          <p class="grad-card__meta">Students learn the most from people only a few years ahead of them. Tell FOCO Works about a Forsyth County graduate with a story to share.</p>
        </div>
      </div>`;
  }

  function playVideo(idx) {
    const v = ALL_VIDEOS[idx];
    if (!v || v.sample) return;
    const c = CAREERS[v.career];
    const url = videoUrl(v);
    let player;
    if (v.video.type === "file") {
      player = `<video class="player" controls playsinline autoplay ${v.video.poster ? `poster="${esc(v.video.poster)}"` : ""} src="${esc(v.video.src)}"></video>`;
    } else if (FRAMED) {
      player = `<a class="player player--link" href="${esc(url)}" target="_blank" rel="noopener"><span class="grad-card__play" aria-hidden="true">▶</span><span>Watch on ${v.video.type === "vimeo" ? "Vimeo" : "YouTube"} ›</span></a>`;
    } else {
      const src = v.video.type === "vimeo"
        ? `https://player.vimeo.com/video/${encodeURIComponent(v.video.id)}?autoplay=1`
        : `https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.video.id)}?autoplay=1&rel=0&playsinline=1`;
      player = `<iframe class="player" src="${src}" title="${esc(v.name || c.title)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
    }
    const where = v.employer ? (v.county ? `${esc(v.employer)}, ${esc(v.county)} County` : esc(v.employer)) : (v.county ? `${esc(v.county)} County` : "");
    $("#videoDialogBody").innerHTML = `
      <button class="sheet__close" type="button" data-close aria-label="Close">✕</button>
      <div class="video-layout">
        <div class="player-frame">${player}</div>
        <div class="video-story">
          <p class="dlg-sector">${esc(indName(c))}${v.example ? ' · <span class="gem-label">Example video</span>' : ""}</p>
          <h2 class="dlg-title dlg-title--sm" id="vidTitle">${esc(v.name || c.title)}</h2>
          <p class="dlg-summary">“${esc(v.quote)}”</p>
          <ol class="path">
            ${v.hometown ? `<li><strong>High school</strong><span>${esc(v.hometown)}</span></li>` : ""}
            ${v.school ? `<li><strong>Trained at ${esc(v.school)}</strong><span>${[v.program && esc(v.program), v.gradYear && "Class of " + esc(v.gradYear)].filter(Boolean).join(" · ")}</span></li>` : ""}
            <li><strong>Now: ${esc(c.title)}</strong>${where ? `<span>${where}</span>` : ""}</li>
          </ol>
          <div class="dlg-actions">
            <button class="pill pill--blue pill--lg" type="button" data-career="${v.career}">Explore this career</button>
          </div>
        </div>
      </div>`;
    const dlg = $("#videoDialog");
    if (!dlg.open) dlg.showModal();
  }

  // ── Library ─────────────────────────────────────────────
  function renderFilters() {
    const sf = $("#sectorFilters");
    sf.innerHTML = [`<button class="chip" type="button" data-f-sector="all">All top industries</button>`]
      .concat(INDUSTRIES.map((s) => `<button class="chip" type="button" data-f-sector="${s.id}">${esc(s.name)}</button>`)).join("");
    sf.addEventListener("click", (e) => {
      const b = e.target.closest("[data-f-sector]");
      if (b) setSector(b.dataset.fSector);
    });

    const ef = $("#eduFilters");
    ef.innerHTML = [`<button type="button" data-f-edu="all">Any training</button>`]
      .concat(Object.entries(EDU).map(([k, v]) => `<button type="button" data-f-edu="${k}">${esc(v.time)}</button>`)).join("");
    ef.addEventListener("click", (e) => {
      const b = e.target.closest("[data-f-edu]");
      if (!b) return;
      state.edu = b.dataset.fEdu;
      renderLibrary();
    });

    $("#gemsOnly").addEventListener("change", (e) => { state.gems = e.target.checked; renderLibrary(); });
    $("#localOnly").addEventListener("change", (e) => { state.localOnly = e.target.checked; renderLibrary(); });
    $("#hdOnly").addEventListener("change", (e) => { state.hdOnly = e.target.checked; renderLibrary(); });
    $("#sort").addEventListener("change", (e) => { state.sort = e.target.value; renderLibrary(); });
    $("#search").addEventListener("input", (e) => { state.query = e.target.value.trim().toLowerCase(); renderLibrary(); });
  }
  function setSector(id) { state.sector = id; renderLibrary(); }

  function careerCard(id) {
    const c = CAREERS[id];
    return `<article class="career-card" data-career="${id}" tabindex="0" role="button" aria-label="${esc(c.title)}">
      <span class="career-card__sector">${esc(indName(c))}${c.gem ? ' · <span class="gem-label">Hidden gem</span>' : ""}</span>
      <h3>${esc(c.title)}</h3>
      <p>${esc(c.summary)}</p>
      ${isHighDemand(c) ? `<span class="hd-label"><i class="hd-dot" aria-hidden="true"></i>Georgia High-Demand Career</span>` : ""}
      ${c.local ? `<span class="local-label">Hiring in Forsyth · ${c.employers.length} local employer${c.employers.length === 1 ? "" : "s"}</span>` : ""}
      <div class="career-card__stats">
        <span><strong>${esc(pay(c))}</strong> ${payLabel(c)}</span>
        <span><i class="dot dot--edu-${c.edu}" aria-hidden="true"></i> ${esc(c.years)}</span>
      </div>
      <button class="save-btn ${isSaved(id) ? "is-saved" : ""}" type="button" data-save="${id}" aria-pressed="${isSaved(id)}" aria-label="Save ${esc(c.title)}">${isSaved(id) ? "♥" : "♡"}</button>
    </article>`;
  }

  function renderLibrary() {
    document.querySelectorAll("[data-f-sector]").forEach((b) => b.classList.toggle("is-on", b.dataset.fSector === state.sector));
    document.querySelectorAll("[data-f-edu]").forEach((b) => b.classList.toggle("is-on", b.dataset.fEdu === state.edu));
    const q = state.query;
    let ids = Object.keys(CAREERS).filter((id) => {
      const c = CAREERS[id];
      if (state.sector !== "all" && !c.inds.includes(state.sector)) return false;
      if (state.edu !== "all" && c.edu !== state.edu) return false;
      if (state.gems && !c.gem) return false;
      if (state.localOnly && !c.local) return false;
      if (state.hdOnly && !isHighDemand(c)) return false;
      if (q) {
        const hay = [c.title, c.summary, ...c.inds.map((i) => indById[i].name), c.learn, c.dayText, c.tcsg, c.usg, ...(c.day || []), ...(c.hs || []), ...(c.employers || [])].join(" ").toLowerCase();
        if (!q.split(/\s+/).every((w) => hay.includes(w))) return false;
      }
      return true;
    });
    if (state.sort === "pay") ids.sort((a, b) => CAREERS[b].wage - CAREERS[a].wage);
    else if (state.sort === "fast") ids.sort((a, b) => EDU[CAREERS[a].edu].order - EDU[CAREERS[b].edu].order || CAREERS[b].wage - CAREERS[a].wage);
    else ids.sort((a, b) => CAREERS[a].title.localeCompare(CAREERS[b].title));

    $("#resultCount").textContent = `${ids.length} career${ids.length === 1 ? "" : "s"}`;
    $("#careerGrid").innerHTML = ids.length
      ? ids.map(careerCard).join("")
      : `<div class="empty">No careers match those filters yet. Try a different search or clear a filter.</div>`;
  }

  // ── Career dialog ───────────────────────────────────────
  function pathSteps(c) {
    const steps = [];
    if (c.local) {
      const by = (school) => c.programs.filter((p) => p.school === school).map((p) => p.name);
      const fcs = by("fcs"), lanier = by("lanier"), ung = by("ung");
      const hsFor = (name) => {
        for (const ind of INDUSTRIES) {
          const p = ind.programs.fcs.find((x) => x.name === name);
          if (p && p.highSchools && p.highSchools.length) return p.highSchools.map((k) => HIGH_SCHOOLS[k].name.replace(" High School", "")).join(", ");
        }
        return "";
      };
      steps.push({ h: "In high school · Forsyth County Schools", t: fcs.length
        ? fcs.map((n) => `${n} pathway${hsFor(n) ? ` (${hsFor(n)})` : ""}`).join("; ") + ". Ask about Dual Enrollment to earn college credit early."
        : "Ask your counselor about related CTAE pathways and Dual Enrollment." });
      if (lanier.length) steps.push({ h: "Lanier Technical College", t: lanier.join(" · ") });
      if (ung.length) steps.push({ h: "University of North Georgia", t: ung.join(" · ") });
      steps.push({ h: "Start your career", t: `${c.title}. Recommended route: ${c.learn}.` });
    } else {
      steps.push({ h: "In high school", t: (c.hs || []).join(" · ") + ". Ask about Dual Enrollment to earn college credit early." });
      if (c.tcsg) steps.push({ h: "Technical college", t: `${c.tcsg}. Ask Lanier Technical College what it offers.` });
      if (c.usg) steps.push({ h: "University", t: c.usg });
      steps.push({ h: "Start your career", t: `${c.title}, about ${c.years} of training after high school.` });
    }
    return steps;
  }

  function openCareer(id) {
    const c = CAREERS[id];
    if (!c) return;
    $("#careerDialogBody").innerHTML = `
      <button class="sheet__close" type="button" data-close aria-label="Close">✕</button>
      <p class="dlg-sector">${c.inds.map((i) => esc(indById[i].name)).join(" · ")}${c.gem ? ' · <span class="gem-label">Hidden gem</span>' : ""}</p>
      ${isHighDemand(c) ? `<p class="hd-badge"><i class="hd-dot" aria-hidden="true"></i>Georgia High-Demand Career</p>` : ""}
      <h2 class="dlg-title" id="dlgTitle">${esc(c.title)}</h2>
      <p class="dlg-summary">${esc(c.summary)}</p>
      <div class="stats">
        <div class="stat"><small>${c.local ? "Forsyth pay range" : "Typical GA pay"}</small><strong>${esc(c.local ? c.payShort : money(c.wage))}</strong></div>
        <div class="stat"><small>Training after HS</small><strong>${esc(c.years)}</strong></div>
        <div class="stat"><small>Education</small><strong>${esc(EDU[c.edu].label)}</strong></div>
        <div class="stat"><small>Demand</small><strong>${esc(c.demand)}</strong></div>
      </div>
      ${c.local ? "" : `<p class="fine">This is a statewide role shown so you can see the whole team around a familiar job. Pay is an approximate Georgia median.</p>`}
      <h3 class="dlg-h">A day on the job</h3>
      ${c.local ? `<p class="dlg-text">${esc(c.dayText)}</p>` : `<ul class="dlg-list">${c.day.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>`}
      <h3 class="dlg-h">Your path in Forsyth County</h3>
      <ol class="path">${pathSteps(c).map((s) => `<li><strong>${esc(s.h)}</strong><span>${esc(s.t)}</span></li>`).join("")}</ol>
      ${c.local && c.employers.length ? `<h3 class="dlg-h">Forsyth employers that hire for this</h3>
        <ul class="emp-grid">${c.employers.map((n) => `<li>${employerLink(n)}</li>`).join("")}</ul>` : ""}
      <h3 class="dlg-h">Meet a recent grad</h3>
      ${videosFor(id).length
        ? `<div class="grad-strip">${videosFor(id).map(gradCard).join("")}</div>`
        : `<p class="muted-note">We're still collecting videos from recent ${esc(c.title.toLowerCase())} grads. In the meantime, <a class="link" href="${ytSearch(id)}" target="_blank" rel="noopener">watch day-in-the-life videos on YouTube ›</a></p>`}
      ${c.also.length ? `<h3 class="dlg-h">Careers next door</h3>
      <div class="related">${c.also.map((a) => `<button class="chip${CAREERS[a].local ? " chip--local" : ""}" type="button" data-career="${a}">${esc(CAREERS[a].title)}${CAREERS[a].gem ? ' <span class="gem-label">· gem</span>' : ""}</button>`).join("")}</div>` : ""}
      <div class="dlg-actions">
        <button class="pill pill--blue pill--lg" type="button" data-near="${id}">See Forsyth schools &amp; employers</button>
        <button class="pill pill--outline pill--lg ${isSaved(id) ? "is-saved" : ""}" type="button" data-save="${id}" aria-pressed="${isSaved(id)}">${isSaved(id) ? "Saved to my list" : "Save to my list"}</button>
      </div>`;
    const dlg = $("#careerDialog");
    if (!dlg.open) dlg.showModal();
    dlg.scrollTop = 0;
  }

  function openSaved() {
    const body = $("#savedDialogBody");
    body.innerHTML = `
      <button class="sheet__close" type="button" data-close aria-label="Close">✕</button>
      <p class="dlg-sector">Your shortlist</p>
      <h2 class="dlg-title" id="savedTitle">My list</h2>
      ${state.saved.length ? `<ul class="saved-list">${state.saved.map((id) => {
        const c = CAREERS[id];
        return `<li><button class="linkish" type="button" data-career="${id}"><span class="name">${esc(c.title)}</span><span class="meta">${esc(pay(c))} · ${esc(c.years)} · ${esc(indName(c))}</span></button>
          <button class="pill pill--outline" type="button" data-unsave="${id}">Remove</button></li>`;
      }).join("")}</ul>` : `<p class="dlg-summary">Tap the ♡ on any career to save it here. It's a great list to bring to a school counselor meeting.</p>`}`;
    const dlg = $("#savedDialog");
    if (!dlg.open) dlg.showModal();
  }

  // ── Schools & employers ─────────────────────────────────
  // pathways offered at each high school; a pathway listed under two industries appears once
  const hsPathways = {};
  INDUSTRIES.forEach((ind) => ind.programs.fcs.forEach((p) => (p.highSchools || []).forEach((k) => {
    const list = (hsPathways[k] ||= []);
    let item = list.find((x) => x.name === p.name);
    if (!item) list.push((item = { name: p.name, inds: [], careers: [] }));
    item.inds.push(ind.id);
    p.careers.forEach((c) => { if (!item.careers.includes(c)) item.careers.push(c); });
  })));
  // Does the selected career's training list include this program?
  const matches = (school, name) => {
    const c = state.career ? CAREERS[state.career] : null;
    return !!(c && c.local && c.programs.some((x) => x.school === school && x.name === name));
  };

  function schoolCard(school) {
    const c = state.career ? CAREERS[state.career] : null;
    const seen = new Set();
    const groups = INDUSTRIES.map((ind) => {
      const list = ind.programs[school].filter((p) => (seen.has(p.name) ? false : seen.add(p.name)));
      return [ind, list];
    }).filter(([, l]) => l.length);
    const hits = c ? groups.flatMap(([, l]) => l.filter((p) => matches(school, p.name))) : [];
    return `<div class="panel-card">
      <div class="panel-school-head">
        ${SCHOOLS[school].logo ? `<span class="school-logo${SCHOOLS[school].logoFill ? " school-logo--fill" : ""}"><img src="${esc(SCHOOLS[school].logo)}" alt="${esc(SCHOOLS[school].name)} logo"></span>` : ""}
        <div><p class="sub">${esc(SCHOOLS[school].stage)} · ${esc(SCHOOLS[school].sub)}</p>
        <h4>${esc(SCHOOLS[school].name)}</h4></div>
      </div>
      ${c ? `<p class="match-line">${hits.length ? `For <strong>${esc(c.title)}</strong>: ${hits.map((p) => `<a class="link" href="${esc(schoolUrl(school, p))}" target="_blank" rel="noopener">${esc(p.name)}</a>`).join(", ")}` : `No ${esc(SCHOOLS[school].name)} program is listed for ${esc(c.title)} yet.`}</p>` : ""}
      <details class="prog-groups"${c ? "" : " open"}><summary>All ${groups.reduce((a, [, l]) => a + l.length, 0)} programs</summary>
        ${groups.map(([ind, list]) => `<p class="cat-h"><i class="ind-dot" style="--ind:${ind.color}"></i>${esc(ind.name)}</p>
          <ul class="prog-tags prog-tags--links">${list.map((p) => `<li${matches(school, p.name) ? ' class="is-match"' : ""}><a href="${esc(schoolUrl(school, p))}" target="_blank" rel="noopener">${esc(p.name)}</a></li>`).join("")}</ul>`).join("")}
      </details>
      <a class="link small-link" href="${esc(SCHOOLS[school].programsUrl || SCHOOLS[school].site)}" target="_blank" rel="noopener">${esc(SCHOOLS[school].siteLabel || "Website")} ›</a>
    </div>`;
  }

  function highSchoolCard() {
    const c = state.career ? CAREERS[state.career] : null;
    const keys = Object.keys(HIGH_SCHOOLS);
    const chips = keys.map((k) => {
      const offers = c && (hsPathways[k] || []).some((p) => matches("fcs", p.name));
      return `<button class="chip${state.hs === k ? " is-on" : ""}${offers ? " chip--match" : ""}" type="button" data-hs="${k}">${esc(HIGH_SCHOOLS[k].name.replace(" High School", ""))}</button>`;
    }).join("");
    let body = `<p class="muted-note">Pick your high school to see its career pathways.${c ? ` Schools with a pathway toward ${esc(c.title)} are outlined in blue.` : ""}</p>`;
    if (state.hs) {
      const hs = HIGH_SCHOOLS[state.hs];
      const list = hsPathways[state.hs] || [];
      body = `<p class="hs-name"><a class="link" href="${esc(hs.url)}" target="_blank" rel="noopener">${esc(hs.name)} ›</a></p>
        <p class="muted-note">${list.length} career pathway${list.length === 1 ? "" : "s"} in Forsyth's top industries. Tap a career to learn more.</p>
        <ul class="pathway-list">${list.map((p) => `<li class="${matches("fcs", p.name) ? "is-match" : ""}">
          <span class="name">${esc(p.name)}</span>
          <span class="pathway-inds">${p.inds.map((i) => `<span><i class="ind-dot" style="--ind:${indById[i].color}"></i>${esc(indById[i].name)}</span>`).join("")}</span>
          ${p.careers.length ? `<span class="pathway-careers">${p.careers.map((cid) => `<button class="mini-chip" type="button" data-career="${cid}">${esc(CAREERS[cid].title)}</button>`).join("")}</span>` : ""}
        </li>`).join("")}</ul>`;
    }
    return `<div class="panel-card">
      <div class="panel-school-head">
        ${SCHOOLS.fcs.logo ? `<span class="school-logo"><img src="${esc(SCHOOLS.fcs.logo)}" alt="Forsyth County Schools logo"></span>` : ""}
        <div><p class="sub">${esc(SCHOOLS.fcs.stage)} · Career, technical &amp; agricultural education</p>
        <h4>Forsyth County Schools</h4></div>
      </div>
      <div class="hs-chips" role="group" aria-label="High schools">${chips}</div>
      ${body}
    </div>`;
  }

  function employerCard() {
    const c = state.career ? CAREERS[state.career] : null;
    const q = state.empQuery.toLowerCase();
    const rows = [];
    const seen = new Set();
    INDUSTRIES.forEach((ind) => ind.employers.forEach((e) => {
      if (seen.has(e.name)) return;
      seen.add(e.name);
      rows.push({ name: e.name, inds: [ind.id, ...e.also.filter((a) => a !== ind.id)] });
    }));
    const hiring = c && c.local ? new Set(c.employers) : null;
    if (hiring) c.employers.forEach((n) => { if (!seen.has(n)) { seen.add(n); rows.push({ name: n, inds: c.inds }); } });
    let list = rows.filter((r) => (state.empInd === "all" || r.inds.includes(state.empInd)) && (!q || r.name.toLowerCase().includes(q)));
    list.sort((a, b) => (hiring ? (hiring.has(b.name) - hiring.has(a.name)) : 0) || a.name.localeCompare(b.name));
    const shown = 12;
    const more = INDUSTRIES.filter((ind) => state.empInd === "all" || ind.id === state.empInd).reduce((a, ind) => a + communityCount(ind), 0);
    return `<div class="panel-card">
      <p class="sub">Where you could work</p>
      <h4>Forsyth County employers</h4>
      <div class="filter-row emp-filters">
        <button class="chip${state.empInd === "all" ? " is-on" : ""}" type="button" data-emp-ind="all">All</button>
        ${INDUSTRIES.map((ind) => `<button class="chip${state.empInd === ind.id ? " is-on" : ""}" type="button" data-emp-ind="${ind.id}">${esc(ind.name)}</button>`).join("")}
      </div>
      <label class="search search--small"><span class="sr-only">Search employers</span><input type="search" id="empSearch" value="${esc(state.empQuery)}" placeholder="Search employers" autocomplete="off"></label>
      ${hiring ? `<p class="match-line">${c.employers.length} employer${c.employers.length === 1 ? "" : "s"} listed for <strong>${esc(c.title)}</strong> are marked and shown first.</p>` : ""}
      <ul class="row-list" id="empList">${list.map((r, i) => `<li class="${hiring && hiring.has(r.name) ? "is-match" : ""}" ${i >= shown ? "hidden" : ""}>
        <span>${employerLink(r.name)}<span class="meta">${EMP[r.name] && EMP[r.name].member ? "Chamber member · " : ""}${esc(r.inds.map((x) => indById[x].name).join(" · "))}</span></span></li>`).join("") || `<li><span class="meta">No employers match that search.</span></li>`}</ul>
      ${list.length > shown ? `<button class="toggle-more" type="button" data-more="empList">Show all ${list.length} ›</button>` : ""}
      ${more ? `<p class="fine">Plus ${more} more Forsyth companies in ${state.empInd === "all" ? "these industries" : esc(indById[state.empInd].name)}. Open an industry in Top industries to browse them by category.</p>` : ""}
    </div>`;
  }

  function renderLocal({ keepFocus } = {}) {
    const c = state.career ? CAREERS[state.career] : null;
    const localVideos = ALL_VIDEOS.filter((v) => !v.sample && v.county === "Forsyth");
    $("#localPanel").innerHTML = `
      <div class="panel-card">
        <p class="sub">Cumming · Metro Atlanta</p>
        <h3 class="county-title">Forsyth County</h3>
        <ul class="tag-list">${INDUSTRIES.map((i) => `<li><i class="ind-dot" style="--ind:${i.color}"></i>${esc(i.name)}</li>`).join("")}</ul>
        ${c ? `<div class="match-banner"><span>Showing matches for <strong>${esc(c.title)}</strong></span><button type="button" data-clear-career>Clear</button></div>` : ""}
      </div>
      ${highSchoolCard()}
      ${schoolCard("lanier")}
      ${schoolCard("ung")}
      ${employerCard()}
      ${localVideos.length ? `<div class="panel-card"><h4>Recent grads working in Forsyth</h4><div class="grad-strip">${localVideos.map(gradCard).join("")}</div></div>` : ""}`;
    if (keepFocus) {
      const inp = $("#empSearch");
      inp.focus();
      inp.setSelectionRange(inp.value.length, inp.value.length);
    }
  }

  // ── Global events ───────────────────────────────────────
  function closeDialogs() { document.querySelectorAll("dialog[open]").forEach((d) => d.close()); }
  function wireEvents() {
    document.addEventListener("click", (e) => {
      const t = e.target;
      const save = t.closest("[data-save]");
      if (save) { e.stopPropagation(); toggleSaved(save.dataset.save); return; }
      const unsave = t.closest("[data-unsave]");
      if (unsave) { toggleSaved(unsave.dataset.unsave); openSaved(); return; }
      const close = t.closest("[data-close]");
      if (close) { close.closest("dialog").close(); return; }
      const progBtn = t.closest("[data-programs]");
      if (progBtn) { openPrograms(progBtn.dataset.programs, progBtn.dataset.ind); return; }
      const pf = t.closest("[data-prog-filter]");
      if (pf) { progFilter = pf.dataset.progFilter || null; renderPrograms(); return; }
      const emp = t.closest("[data-employer]");
      if (emp) { openEmployer(emp.dataset.employer); return; }
      const tab = t.closest("[data-ind-tab]");
      if (tab) { indTab = tab.dataset.indTab; renderIndEmployers(); return; }
      const industry = t.closest("[data-industry]");
      if (industry) { openIndustry(industry.dataset.industry); return; }
      const lib = t.closest("[data-library]");
      if (lib) { closeDialogs(); setSector(lib.dataset.library); $("#library").scrollIntoView({ behavior: "smooth" }); return; }
      const emps = t.closest("[data-employers]");
      if (emps) { closeDialogs(); state.empInd = emps.dataset.employers; renderLocal(); $("#local").scrollIntoView({ behavior: "smooth" }); return; }
      const near = t.closest("[data-near]");
      if (near) {
        state.career = near.dataset.near;
        closeDialogs();
        renderLocal();
        $("#local").scrollIntoView({ behavior: "smooth" });
        return;
      }
      const clear = t.closest("[data-clear-career]");
      if (clear) { state.career = null; renderLocal(); return; }
      const hs = t.closest("[data-hs]");
      if (hs) { state.hs = state.hs === hs.dataset.hs ? null : hs.dataset.hs; renderLocal(); return; }
      const empInd = t.closest("[data-emp-ind]");
      if (empInd) { state.empInd = empInd.dataset.empInd; renderLocal(); return; }
      const more = t.closest("[data-more]");
      if (more) {
        document.querySelectorAll(`#${more.dataset.more} li[hidden]`).forEach((li) => li.removeAttribute("hidden"));
        more.remove();
        return;
      }
      const vid = t.closest("[data-video]");
      if (vid) { playVideo(Number(vid.dataset.video)); return; }
      const rail = t.closest("[data-rail]");
      if (rail) {
        const el = document.getElementById(rail.dataset.rail);
        el.scrollBy({ left: Number(rail.dataset.dir) * Math.min(640, el.clientWidth * 0.8), behavior: "smooth" });
        return;
      }
      const card = t.closest("[data-career]");
      if (card) {
        ["#savedDialog", "#videoDialog", "#industryDialog", "#employerDialog", "#tcsgDialog"].forEach((sel) => { const d = $(sel); if (d.open) d.close(); });
        openCareer(card.dataset.career);
      }
    });
    document.addEventListener("input", (e) => {
      if (e.target.id === "empSearch") { state.empQuery = e.target.value.trim(); renderLocal({ keepFocus: true }); }
      if (e.target.id === "indEmpSearch") { indQuery = e.target.value.trim(); renderIndEmployers(); }
      if (e.target.id === "tcsgSearch") { progQuery = e.target.value.trim(); renderPrograms(); }
    });
    document.addEventListener("keydown", (e) => {
      if ((e.key === "Enter" || e.key === " ") && e.target.matches("article[data-career]")) {
        e.preventDefault();
        openCareer(e.target.dataset.career);
      }
    });
    document.querySelectorAll("dialog").forEach((d) =>
      d.addEventListener("click", (e) => { if (e.target === d) d.close(); })
    );
    $("#openSaved").addEventListener("click", openSaved);
    $("#videoDialog").addEventListener("close", () => { $("#videoDialogBody").innerHTML = ""; });
  }

  // ── Init ────────────────────────────────────────────────
  function init() {
    buildMap($("#heroMap"), { labels: false });
    buildMap($("#localMap"), { labels: true });
    const programs = INDUSTRIES.reduce((a, i) => a + programCount(i), 0);
    const companies = new Set(INDUSTRIES.flatMap((i) => [...i.employers.map((e) => e.name), ...Object.values(i.community).flat()])).size;
    $("#heroCallout").textContent = `${INDUSTRIES.length} top industries. ${Object.keys(CAREERS).length} careers.`;
    $("#heroCalloutSub").textContent = `${programs} school programs · ${companies} Forsyth companies`;
    $("#savedCount").textContent = state.saved.length;
    renderDreamChips();
    renderConstellation();
    renderGradFilters();
    renderGrads();
    renderIndustries();
    renderFilters();
    renderLibrary();
    renderLocal();
    wireEvents();
  }

  init();
})();
