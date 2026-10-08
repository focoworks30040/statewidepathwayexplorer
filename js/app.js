/* Georgia Pathway Explorer — interactive behavior. No build step or dependencies. */
(function () {
  "use strict";

  const MAP = window.GA_MAP;
  const CAREERS = window.CAREERS;
  const SECTORS = window.SECTORS;
  const EDU = window.EDU_LEVELS;
  const DREAMS = window.DREAMS;
  const REGIONS = window.REGIONS;
  const EMPLOYERS = window.EMPLOYERS;
  const TCSG = window.TCSG;
  const USG = window.USG;

  const sectorById = Object.fromEntries(SECTORS.map((s) => [s.id, s]));
  const countyByName = Object.fromEntries(MAP.counties.map((c) => [c.name, c]));
  const regionOf = {};
  Object.entries(REGIONS).forEach(([id, r]) => r.counties.forEach((n) => (regionOf[n] = id)));

  const state = {
    dream: DREAMS[0].id,
    sector: "all",
    edu: "all",
    gems: false,
    sort: "az",
    query: "",
    county: null,
    career: null,
    saved: loadSaved(),
  };

  // ── Helpers ─────────────────────────────────────────────
  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const money = (n) => (n >= 239000 ? "$239K+" : "$" + Math.round(n / 1000) + "K");
  const SVGNS = "http://www.w3.org/2000/svg";

  function project(lat, lon) {
    const x = MAP.scale * (lon * Math.PI / 180) + MAP.tx;
    const y = -MAP.scale * Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360)) + MAP.ty;
    return [x, y];
  }
  function miles(lat1, lon1, lat2, lon2) {
    const R = 3958.8, rad = Math.PI / 180;
    const dLat = (lat2 - lat1) * rad, dLon = (lon2 - lon1) * rad;
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(dLon / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(a));
  }
  function loadSaved() {
    try { return JSON.parse(localStorage.getItem("gpe-saved") || "[]").filter((id) => CAREERS[id]); } catch (e) { return []; }
  }
  function persistSaved() {
    try { localStorage.setItem("gpe-saved", JSON.stringify(state.saved)); } catch (e) { /* storage unavailable */ }
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

  // ── Maps ────────────────────────────────────────────────
  function buildMap(container, { interactive, animate, onPick }) {
    const svg = document.createElementNS(SVGNS, "svg");
    svg.setAttribute("viewBox", `0 0 ${MAP.w} ${MAP.h}`);
    svg.setAttribute("class", "ga-map");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", "Map of Georgia counties");
    const gCounties = document.createElementNS(SVGNS, "g");
    MAP.counties.forEach((c) => {
      const p = document.createElementNS(SVGNS, "path");
      p.setAttribute("d", c.d);
      p.setAttribute("class", "county");
      p.dataset.name = c.name;
      if (animate) p.style.animationDelay = (c.cy / MAP.h) * 0.9 + "s";
      const t = document.createElementNS(SVGNS, "title");
      t.textContent = c.name + " County";
      p.appendChild(t);
      if (interactive) {
        p.setAttribute("tabindex", "0");
        p.setAttribute("role", "button");
        p.setAttribute("aria-label", c.name + " County");
        p.addEventListener("click", () => onPick(c.name));
        p.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onPick(c.name); } });
      }
      gCounties.appendChild(p);
    });
    svg.appendChild(gCounties);

    const gMarkers = document.createElementNS(SVGNS, "g");
    gMarkers.setAttribute("class", "markers");
    TCSG.campuses.forEach(([, , lat, lon], i) => {
      const [x, y] = project(lat, lon);
      const m = document.createElementNS(SVGNS, "circle");
      m.setAttribute("cx", x.toFixed(1)); m.setAttribute("cy", y.toFixed(1)); m.setAttribute("r", 2.6);
      m.setAttribute("class", "mk-tcsg");
      if (animate) m.style.animationDelay = 1 + i * 0.012 + "s";
      gMarkers.appendChild(m);
    });
    USG.campuses.forEach(([, , lat, lon], i) => {
      const [x, y] = project(lat, lon);
      const m = document.createElementNS(SVGNS, "circle");
      m.setAttribute("cx", x.toFixed(1)); m.setAttribute("cy", y.toFixed(1)); m.setAttribute("r", 3.6);
      m.setAttribute("class", "mk-usg");
      if (animate) m.style.animationDelay = 1.3 + i * 0.015 + "s";
      gMarkers.appendChild(m);
    });
    svg.appendChild(gMarkers);

    const gOverlay = document.createElementNS(SVGNS, "g");
    gOverlay.setAttribute("class", "markers overlay");
    svg.appendChild(gOverlay);

    container.innerHTML = "";
    container.appendChild(svg);
    return { svg, gOverlay };
  }

  function highlightMap(mapObj, countyName, near) {
    const { svg, gOverlay } = mapObj;
    const region = countyName ? regionOf[countyName] : null;
    svg.querySelectorAll(".county").forEach((p) => {
      const n = p.dataset.name;
      p.classList.toggle("is-selected", n === countyName);
      p.classList.toggle("is-region", !!region && n !== countyName && regionOf[n] === region);
    });
    gOverlay.innerHTML = "";
    if (!countyName) return;
    const c = countyByName[countyName];
    const pulse = document.createElementNS(SVGNS, "circle");
    pulse.setAttribute("cx", c.cx); pulse.setAttribute("cy", c.cy); pulse.setAttribute("r", 10);
    pulse.setAttribute("class", "pulse");
    gOverlay.appendChild(pulse);
    (near || []).forEach((n) => {
      const [x, y] = project(n.lat, n.lon);
      const m = document.createElementNS(SVGNS, "circle");
      m.setAttribute("cx", x.toFixed(1)); m.setAttribute("cy", y.toFixed(1)); m.setAttribute("r", 6);
      m.setAttribute("class", n.kind === "tcsg" ? "mk-tcsg" : "mk-usg");
      gOverlay.appendChild(m);
    });
    const label = document.createElementNS(SVGNS, "text");
    label.setAttribute("x", c.cx); label.setAttribute("y", c.cy - 14);
    label.setAttribute("class", "label");
    label.textContent = c.name;
    gOverlay.appendChild(label);
  }

  // ── Dream constellation ─────────────────────────────────
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
  function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

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
        <ellipse cx="50" cy="50" rx="${n <= 8 ? 32 : 22}" ry="${n <= 8 ? 34 : 26}" fill="none" stroke="currentColor" vector-effect="non-scaling-stroke" class="ring" />
        ${lines}
      </svg>
      <div class="c-center"><span class="emoji" aria-hidden="true">${dream.emoji}</span><div><small>I want to be</small><strong>${esc(dream.label)}</strong></div></div>
      ${positions.map((p) => {
        const c = CAREERS[p.id];
        return `<button class="c-node" type="button" data-career="${p.id}" style="left:${p.x.toFixed(2)}%;top:${p.y.toFixed(2)}%">
          ${c.gem ? '<span class="c-node__gem">Hidden gem</span>' : ""}
          <span class="c-node__title">${esc(c.title)}</span>
          <span class="c-node__meta"><i class="dot dot--edu-${c.edu}" aria-hidden="true"></i>${esc(c.years)} · ${money(c.wage)}</span>
        </button>`;
      }).join("")}`;
    box.querySelector(".ring").style.color = "var(--control)";
    box.querySelector(".ring").setAttribute("stroke-dasharray", "2 6");
    requestAnimationFrame(() => {
      box.querySelectorAll(".c-node").forEach((el, i) => setTimeout(() => el.classList.add("is-in"), 40 + i * 45));
    });
  }

  // ── Sectors ─────────────────────────────────────────────
  function renderSectors() {
    const counts = {};
    Object.values(CAREERS).forEach((c) => (counts[c.sector] = (counts[c.sector] || 0) + 1));
    $("#sectorRail").innerHTML = SECTORS.map((s) => `
      <button class="sector-card" type="button" data-sector="${s.id}">
        <span class="sector-card__icon" aria-hidden="true">${s.icon}</span>
        <h3>${esc(s.name)}</h3>
        <p>${esc(s.blurb)}</p>
        <span class="sector-card__foot">
          <span><strong>${counts[s.id] || 0}</strong>careers to explore</span>
          <span class="sector-card__go">Explore ›</span>
        </span>
      </button>`).join("");
    $("#sectorRail").addEventListener("click", (e) => {
      const b = e.target.closest("[data-sector]");
      if (!b) return;
      setSector(b.dataset.sector);
      $("#library").scrollIntoView({ behavior: "smooth" });
    });
    document.querySelectorAll("[data-scroll]").forEach((b) =>
      b.addEventListener("click", () => {
        const rail = $("#sectorRail");
        rail.scrollBy({ left: Number(b.dataset.scroll) * Math.min(640, rail.clientWidth * 0.8), behavior: "smooth" });
      })
    );
  }

  // ── Library ─────────────────────────────────────────────
  function renderFilters() {
    const sf = $("#sectorFilters");
    sf.innerHTML = [`<button class="chip" type="button" data-f-sector="all">All industries</button>`]
      .concat(SECTORS.map((s) => `<button class="chip" type="button" data-f-sector="${s.id}">${esc(s.name)}</button>`)).join("");
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
    $("#sort").addEventListener("change", (e) => { state.sort = e.target.value; renderLibrary(); });
    $("#search").addEventListener("input", (e) => { state.query = e.target.value.trim().toLowerCase(); renderLibrary(); });
  }
  function setSector(id) { state.sector = id; renderLibrary(); }

  function careerCard(id) {
    const c = CAREERS[id];
    return `<article class="career-card" data-career="${id}" tabindex="0" role="button" aria-label="${esc(c.title)}">
      <span class="career-card__sector">${esc(sectorById[c.sector].name)}${c.gem ? ' · <span class="gem-label">Hidden gem</span>' : ""}</span>
      <h3>${esc(c.title)}</h3>
      <p>${esc(c.summary)}</p>
      <div class="career-card__stats">
        <span><strong>${money(c.wage)}</strong> typical GA pay</span>
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
      if (state.sector !== "all" && c.sector !== state.sector) return false;
      if (state.edu !== "all" && c.edu !== state.edu) return false;
      if (state.gems && !c.gem) return false;
      if (q) {
        const hay = [c.title, c.summary, sectorById[c.sector].name, c.tcsg, c.usg, ...(c.day || []), ...(c.hs || [])].join(" ").toLowerCase();
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
  function openCareer(id) {
    const c = CAREERS[id];
    if (!c) return;
    const steps = [];
    steps.push({ h: "In high school", t: (c.hs || []).join(" · ") + ". Ask about Dual Enrollment to earn college credit early." });
    if (c.tcsg) steps.push({ h: "Technical college (TCSG)", t: c.tcsg });
    if (c.usg) steps.push({ h: "University (USG)", t: c.usg });
    steps.push({ h: "Start your career", t: `${c.title} — about ${c.years} of training after high school.` });

    $("#careerDialogBody").innerHTML = `
      <button class="sheet__close" type="button" data-close aria-label="Close">✕</button>
      <p class="dlg-sector">${esc(sectorById[c.sector].name)}${c.gem ? ' · <span class="gem-label">Hidden gem</span>' : ""}</p>
      <h2 class="dlg-title" id="dlgTitle">${esc(c.title)}</h2>
      <p class="dlg-summary">${esc(c.summary)}</p>
      <div class="stats">
        <div class="stat"><small>Typical GA pay</small><strong>${money(c.wage)}</strong></div>
        <div class="stat"><small>Training after HS</small><strong>${esc(c.years)}</strong></div>
        <div class="stat"><small>Education</small><strong>${esc(EDU[c.edu].label)}</strong></div>
        <div class="stat"><small>Demand in Georgia</small><strong>${esc(c.demand)}</strong></div>
      </div>
      <h3 class="dlg-h">A day on the job</h3>
      <ul class="dlg-list">${c.day.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>
      <h3 class="dlg-h">Your path in Georgia</h3>
      <ol class="path">${steps.map((s) => `<li><strong>${esc(s.h)}</strong><span>${esc(s.t)}</span></li>`).join("")}</ol>
      <h3 class="dlg-h">Careers next door</h3>
      <div class="related">${(c.also || []).filter((a) => CAREERS[a]).map((a) => `<button class="chip" type="button" data-career="${a}">${esc(CAREERS[a].title)}${CAREERS[a].gem ? ' <span class="gem-label">· gem</span>' : ""}</button>`).join("")}</div>
      <div class="dlg-actions">
        <button class="pill pill--blue pill--lg" type="button" data-near="${id}">Find employers &amp; schools near me</button>
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
        return `<li><button class="linkish" type="button" data-career="${id}"><span class="name">${esc(c.title)}</span><span class="meta">${money(c.wage)} · ${esc(c.years)} · ${esc(sectorById[c.sector].name)}</span></button>
          <button class="pill pill--outline" type="button" data-unsave="${id}">Remove</button></li>`;
      }).join("")}</ul>` : `<p class="dlg-summary">Tap the ♡ on any career to save it here. It's a great list to bring to a school counselor meeting.</p>`}`;
    const dlg = $("#savedDialog");
    if (!dlg.open) dlg.showModal();
  }

  // ── County explorer ─────────────────────────────────────
  let heroMap, countyMap;

  function nearest(county, campuses, kind, lookup, limit) {
    const best = {};
    campuses.forEach(([id, city, lat, lon]) => {
      const d = miles(county.lat, county.lon, lat, lon);
      if (!best[id] || d < best[id].d) best[id] = { id, city, lat, lon, d, kind, info: lookup[id] };
    });
    return Object.values(best).sort((a, b) => a.d - b.d).slice(0, limit);
  }

  function selectCounty(name, { scroll } = {}) {
    if (!countyByName[name]) return;
    state.county = name;
    $("#countyInput").value = name;
    renderCountyPanel();
    $("#heroCallout").textContent = `${name} County selected.`;
    if (scroll) $("#county").scrollIntoView({ behavior: "smooth" });
  }

  function renderCountyPanel() {
    const panel = $("#countyPanel");
    const name = state.county;
    if (!name) {
      const pending = state.career ? ` We'll highlight matches for <b>${esc(CAREERS[state.career].title)}</b>.` : "";
      panel.innerHTML = `<div class="panel-empty"><strong>Pick a county to begin.</strong>Tap the map or type a county name. You'll see employers, technical colleges, and universities nearby.${pending}</div>`;
      highlightMap(countyMap, null);
      highlightMap(heroMap, null);
      return;
    }
    const county = countyByName[name];
    const regionId = regionOf[name];
    const region = REGIONS[regionId];
    const career = state.career ? CAREERS[state.career] : null;

    const tcsg = nearest(county, TCSG.campuses, "tcsg", TCSG.colleges, 3);
    const usg = nearest(county, USG.campuses, "usg", USG.schools, 4);
    highlightMap(countyMap, name, [...tcsg, ...usg]);
    highlightMap(heroMap, name, []);

    const seen = new Set();
    let employers = [...(EMPLOYERS.counties[name] || []).map((e) => [...e, true]), ...EMPLOYERS.regions[regionId].map((e) => [...e, false])]
      .filter(([n]) => (seen.has(n) ? false : seen.add(n)));
    if (career) employers.sort((a, b) => (b[2].includes(career.sector) ? 1 : 0) - (a[2].includes(career.sector) ? 1 : 0));

    const sectorHits = {};
    employers.forEach((e) => e[2].forEach((s) => (sectorHits[s] = (sectorHits[s] || 0) + 1)));
    const localSectors = new Set(Object.keys(sectorHits).filter((s) => sectorHits[s] >= 2));
    const suggestions = Object.keys(CAREERS)
      .filter((id) => localSectors.has(CAREERS[id].sector) && CAREERS[id].gem)
      .sort((a, b) => hash(name + a) - hash(name + b))
      .slice(0, 6);

    const empRows = employers.map(([n, place, sectors, local], i) => {
      const match = career && sectors.includes(career.sector);
      const cls = [i >= 8 ? "is-extra" : "", match ? "is-match" : "", career && !match ? "is-dim" : ""].join(" ");
      return `<li class="${cls}" ${i >= 8 ? "hidden" : ""}><span><span class="name">${esc(n)}</span><span class="meta">${esc(sectors.map((s) => sectorById[s].name).join(" · "))}</span></span><span class="right">${esc(place)}${local ? "<br>in county" : ""}</span></li>`;
    }).join("");

    const schoolRows = (list, look) => list.map((s) => `
      <li><span><a class="name link" href="${esc(s.info.url)}" target="_blank" rel="noopener">${esc(s.info.name)}</a>
        <span class="meta">${s.info.type ? esc(s.info.type) + " · " : ""}Closest campus: ${esc(s.city)}</span>
        <span class="prog-tags">${s.info.signature.map((p) => `<span>${esc(p)}</span>`).join("")}</span></span>
        <span class="right">${Math.round(s.d)} mi</span></li>`).join("") +
      (look ? `<li><span class="meta" style="margin:0">For <strong>${esc(career.title)}</strong>, look for: ${esc(look)}</span></li>` : "");

    panel.innerHTML = `
      <div class="panel-card">
        <p class="sub">${esc(region.name)} region</p>
        <h3 class="county-title">${esc(name)} County</h3>
        <ul class="tag-list">${region.industries.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
        ${career ? `<div class="match-banner"><span>Showing matches for <strong>${esc(career.title)}</strong></span><button type="button" data-clear-career>Clear</button></div>` : ""}
      </div>
      <div class="panel-card">
        <h4>Employers in your region</h4>
        <p class="sub">Major employers in and around ${esc(name)} County${career ? " — matches for your career are listed first" : ""}.</p>
        <ul class="row-list" id="empList">${empRows}</ul>
        ${employers.length > 8 ? `<button class="toggle-more" type="button" data-more="empList">Show all ${employers.length} ›</button>` : ""}
      </div>
      <div class="panel-card">
        <h4>Closest technical colleges (TCSG)</h4>
        <ul class="row-list">${schoolRows(tcsg, career && career.tcsg)}</ul>
      </div>
      <div class="panel-card">
        <h4>Closest universities (USG)</h4>
        <ul class="row-list">${schoolRows(usg, career && career.usg)}</ul>
      </div>
      ${suggestions.length ? `<div class="panel-card">
        <h4>Hidden gems with local employers</h4>
        <p class="sub">Careers tied to industries hiring around ${esc(name)} County.</p>
        <div class="related">${suggestions.map((id) => `<button class="chip" type="button" data-career="${id}">${esc(CAREERS[id].title)}</button>`).join("")}</div>
      </div>` : ""}`;
  }
  function hash(s) { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return h; }

  function setupCountyInput() {
    $("#countyList").innerHTML = MAP.counties.map((c) => `<option value="${esc(c.name)}">`).join("");
    const input = $("#countyInput");
    const tryPick = () => {
      const v = input.value.trim().replace(/\s+county$/i, "").toLowerCase();
      const hit = MAP.counties.find((c) => c.name.toLowerCase() === v);
      if (hit) selectCounty(hit.name);
    };
    input.addEventListener("change", tryPick);
    input.addEventListener("input", tryPick);
  }

  // ── Global events ───────────────────────────────────────
  function wireEvents() {
    document.addEventListener("click", (e) => {
      const save = e.target.closest("[data-save]");
      if (save) { e.stopPropagation(); toggleSaved(save.dataset.save); return; }
      const unsave = e.target.closest("[data-unsave]");
      if (unsave) { toggleSaved(unsave.dataset.unsave); openSaved(); return; }
      const close = e.target.closest("[data-close]");
      if (close) { close.closest("dialog").close(); return; }
      const near = e.target.closest("[data-near]");
      if (near) {
        state.career = near.dataset.near;
        $("#careerDialog").close();
        if (state.county) selectCounty(state.county);
        else renderCountyPanel();
        $("#county").scrollIntoView({ behavior: "smooth" });
        return;
      }
      const clear = e.target.closest("[data-clear-career]");
      if (clear) { state.career = null; renderCountyPanel(); return; }
      const more = e.target.closest("[data-more]");
      if (more) {
        document.querySelectorAll(`#${more.dataset.more} li[hidden]`).forEach((li) => li.removeAttribute("hidden"));
        more.remove();
        return;
      }
      const card = e.target.closest("[data-career]");
      if (card) {
        const sd = $("#savedDialog");
        if (sd.open) sd.close();
        openCareer(card.dataset.career);
      }
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
  }

  // ── Init ────────────────────────────────────────────────
  function init() {
    heroMap = buildMap($("#heroMap"), { interactive: true, animate: true, onPick: (n) => selectCounty(n, { scroll: true }) });
    countyMap = buildMap($("#countyMap"), { interactive: true, animate: false, onPick: (n) => selectCounty(n) });
    $("#savedCount").textContent = state.saved.length;
    renderDreamChips();
    renderConstellation();
    renderSectors();
    renderFilters();
    renderLibrary();
    setupCountyInput();
    renderCountyPanel();
    wireEvents();
  }

  init();
})();
