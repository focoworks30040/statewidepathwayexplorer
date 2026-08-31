/* Renders the target industries section from the county's data file.
   Two views share one section: the grid of industry cards, and the detail
   for a single industry. The address bar carries which one is showing
   (#industry-health-care), so a specific industry can be linked to directly
   and the browser's back button works. */
(function () {
  "use strict";

  var data = window.PATHWAY_DATA;
  var root = document.getElementById("industry-root");
  if (!root || !data || !data.industries) return;

  var LISTS = [
    { key: "ctae", title: "High school CTAE pathways",
      empty: "No CTAE pathways listed yet." },
    { key: "technical", title: "Technical college programs",
      empty: "No technical college programs listed yet." },
    { key: "university", title: "University programs in the county",
      empty: "No university programs listed yet." }
  ];

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function programCount(ind) {
    if (typeof ind.programs === "number") return ind.programs;
    return LISTS.reduce(function (n, l) {
      return n + ((ind[l.key] || []).length);
    }, 0);
  }

  function stat(label, value) {
    var shown = (typeof value === "number") ? value.toLocaleString("en-US") : "&mdash;";
    return '<div class="stat"><dt>' + esc(label) + "</dt>" +
           '<dd>' + shown + "</dd></div>";
  }

  function stats(ind) {
    return '<dl class="ind-stats">' +
      stat("Local companies", ind.companies) +
      stat("Aligned programs", programCount(ind)) +
      "</dl>";
  }

  function card(ind) {
    return '<a class="ind-card" href="#industry-' + esc(ind.id) + '">' +
      "<h3>" + esc(ind.name) + "</h3>" +
      (ind.blurb ? '<p class="ind-blurb">' + esc(ind.blurb) + "</p>" : "") +
      stats(ind) +
      '<span class="ind-go">See pathways</span>' +
      "</a>";
  }

  function figure(ind) {
    if (ind.image) {
      return '<figure class="ind-figure">' +
        '<img src="' + esc(ind.image) + '" alt="' + esc(ind.name) +
        " in " + esc(data.county) + ' County">' +
        (ind.imageCaption ? "<figcaption>" + esc(ind.imageCaption) + "</figcaption>" : "") +
        "</figure>";
    }
    // No photo yet: hold the space so the layout does not shift when one arrives.
    return '<figure class="ind-figure is-empty" aria-hidden="true">' +
      '<span class="ind-figure-label">' + esc(ind.name) + "</span></figure>";
  }

  function programItem(p) {
    var name = esc(p.name);
    if (p.url) name = '<a href="' + esc(p.url) + '">' + name + "</a>";
    return "<li>" +
      '<span class="p-name">' + name + "</span>" +
      '<span class="p-org">' + esc(p.org) + "</span>" +
      (p.award ? '<span class="p-award">' + esc(p.award) + "</span>" : "") +
      "</li>";
  }

  function programList(ind, spec) {
    var items = ind[spec.key] || [];
    var body = items.length
      ? "<ul>" + items.map(programItem).join("") + "</ul>"
      : '<p class="p-empty">' + esc(spec.empty) + "</p>";
    return '<section class="ind-list">' +
      "<h4>" + esc(spec.title) +
      (items.length ? ' <span class="p-count">' + items.length + "</span>" : "") +
      "</h4>" + body + "</section>";
  }

  function detail(ind) {
    return '<div class="ind-detail">' +
      '<a class="ind-back" href="#industries">All target industries</a>' +
      '<div class="ind-detail-head">' +
        "<h3 tabindex=\"-1\" id=\"ind-detail-title\">" + esc(ind.name) + "</h3>" +
        (ind.blurb ? "<p>" + esc(ind.blurb) + "</p>" : "") +
        stats(ind) +
      "</div>" +
      figure(ind) +
      '<div class="ind-lists">' + LISTS.map(function (l) {
        return programList(ind, l);
      }).join("") + "</div>" +
      "</div>";
  }

  function grid() {
    var notice = data.sample
      ? '<p class="sample-notice"><strong>Sample figures.</strong> Company counts ' +
        "and program lists are placeholders. Replace them in " +
        "<code>assets/data/" + esc(data.slug || "") + ".js</code>, then set " +
        "<code>sample</code> to <code>false</code> to remove this notice.</p>"
      : "";
    return notice + '<div class="ind-grid">' +
      data.industries.map(card).join("") + "</div>";
  }

  function current() {
    var m = /^#industry-(.+)$/.exec(window.location.hash);
    if (!m) return null;
    for (var i = 0; i < data.industries.length; i++) {
      if (data.industries[i].id === m[1]) return data.industries[i];
    }
    return null;
  }

  var first = true;
  function route() {
    var ind = current();
    var initial = first;
    first = false;
    root.innerHTML = ind ? detail(ind) : grid();

    // A plain page load stays where the browser put it. Anything else — a card
    // click, the back button, or a link straight to one industry — moves the
    // viewport and the keyboard to the view that just appeared.
    if (initial && !ind) return;

    var heading = document.getElementById("ind-detail-title");
    if (heading) heading.focus({ preventScroll: true });
    var section = document.getElementById("industries");
    if (section) {
      section.scrollIntoView({ block: "start", behavior: initial ? "auto" : "smooth" });
    }
  }

  window.addEventListener("hashchange", route);
  route();
})();
