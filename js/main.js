/* ==========================================================
   Shared behaviour: header, footer, theme, rendering, animation
   ========================================================== */
const PAGES = [
  { href: "index.html", label: t("nav.home") },
  { href: "goals.html", label: t("nav.goals") },
  { href: "personal-projects.html", label: t("nav.personal") },
  { href: "university-year-1.html", label: t("nav.y1") },
  { href: "university-year-2.html", label: t("nav.y2") },
  { href: "events.html", label: t("nav.events") },
  { href: "skills.html", label: t("nav.skills") },
  { href: "certificates.html", label: t("nav.certs") },
  { href: "about.html", label: t("nav.about") },
];

const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
/* Escape, then highlight [[placeholders]] */
const txt = (s = "") => esc(s).replace(/\[\[(.+?)\]\]/g, '<mark class="todo" title="Placeholder: replace in js/data.js">$1</mark>');

const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();

/* ---------- Theme (light/dark, remembered) ---------- */
(function initTheme() {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (saved === "dark" || (!saved && prefersDark)) document.documentElement.dataset.theme = "dark";
})();

function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;
  el.className = "site-header";
  el.innerHTML = `
    <nav class="nav container nav-wide" aria-label="Main">
      <a class="brand" href="index.html"><span class="brand-mark">${esc(PROFILE.initials)}</span><span class="brand-name">${esc(PROFILE.short)}</span></a>
      <ul class="nav-links" id="nav-links">
        ${PAGES.map((p) => `<li><a href="${p.href}"${p.href === current ? ' aria-current="page"' : ""}>${p.label}</a></li>`).join("")}
      </ul>
      <div class="nav-tools">
        <button class="lang-btn" id="lang-btn" lang="${LANG === "fr" ? "en" : "fr"}" aria-label="${t("lang.label")}" title="${t("lang.label")}"><span class="${LANG === "en" ? "on" : ""}">EN</span><span class="${LANG === "fr" ? "on" : ""}">FR</span></button>
        <button class="icon-btn" id="theme-btn" aria-label="${t("theme")}" title="${t("theme")}">☾</button>
        <button class="icon-btn menu-btn" id="menu-btn" aria-label="${t("menu")}" aria-expanded="false" aria-controls="nav-links">☰</button>
      </div>
    </nav>`;
  document.getElementById("theme-btn").addEventListener("click", () => {
    const dark = document.documentElement.dataset.theme === "dark";
    if (dark) delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = "dark";
    localStorage.setItem("theme", dark ? "light" : "dark");
  });
  document.getElementById("lang-btn").addEventListener("click", () => {
    const next = LANG === "fr" ? "en" : "fr";
    try { localStorage.setItem("lang", next); } catch (e) {}
    const u = new URL(location.href);
    u.searchParams.set("lang", next);
    location.href = u.toString();
  });
  /* Collapse the menu into ☰ whenever the links don't fit on one line */
  const nav = el.querySelector(".nav");
  const fit = () => {
    nav.classList.remove("collapsed");
    if (nav.scrollWidth > nav.clientWidth + 1) nav.classList.add("collapsed");
  };
  fit();
  window.addEventListener("resize", fit);
  if (document.fonts) document.fonts.ready.then(fit);
  const menuBtn = document.getElementById("menu-btn");
  const links = document.getElementById("nav-links");
  menuBtn.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
}

function renderFooter() {
  const main = document.querySelector("main");
  const i = PAGES.findIndex((p) => p.href === current);
  if (main && i >= 0) {
    const prev = PAGES[i - 1], next = PAGES[i + 1];
    const pager = document.createElement("nav");
    pager.className = "pager container";
    pager.setAttribute("aria-label", t("pager"));
    pager.innerHTML =
      (prev ? `<a href="${prev.href}"><small>${t("prev")}</small>${prev.label}</a>` : "<span></span>") +
      (next ? `<a href="${next.href}" style="text-align:right"><small>${t("next")}</small>${next.label}</a>` : "<span></span>");
    main.appendChild(pager);
  }
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.className = "site-footer";
  el.innerHTML = `<div class="container">
      <span>© ${new Date().getFullYear()} ${esc(PROFILE.name)}</span>
      <span>${t("footer.route")}</span>
    </div>`;
}

/* ---------- Links helper ---------- */
const href = (u) => (/^https?:/.test(u) ? u : encodeURI(u));
function linkPill(url, label) {
  return url
    ? `<a href="${esc(href(url))}" target="_blank" rel="noopener">${label}</a>`
    : `<span title="${t("soon.title")}">${label} · ${t("soon")}</span>`;
}

/* ---------- Shared project card template ---------- */
function projectCard(p) {
  const l = p.links || {};
  const labels = { github: t("l.github"), live: t("l.live"), video: t("l.video"), report: t("l.report"), pdf: t("l.pdf") };
  let linkHtml = Object.keys(labels).filter((k) => l[k]).map((k) => linkPill(l[k], labels[k])).join("");
  if (!linkHtml) linkHtml = linkPill("", "GitHub");
  const imgs = [p.image, ...(p.gallery || [])].filter(Boolean);
  return `
  <article class="project-card reveal${p.flagship ? " flagship" : ""}" data-category="${esc(p.category || "")}">
    <div class="thumb">${p.image ? `<button class="zoom" data-gallery="${esc(JSON.stringify(imgs))}" data-i="0" aria-label="${t("enlarge")}: ${esc(p.title)}"><img src="${esc(href(p.image))}" alt="${esc(p.title)}" loading="lazy"></button>` : esc(p.title)}
      ${imgs.length > 1 ? `<span class="more-photos">+${imgs.length - 1} ${imgs.length > 2 ? t("photos") : t("photo")}</span>` : ""}</div>
    <div class="body">
      ${p.flagship ? `<span class="badge">${t("flagship")}</span>` : ""}
      <h3>${txt(p.title)}</h3>
      <p class="context">${txt(p.context)}</p>
      <div class="fields">
        <dl class="field"><dt>${t("problem")}</dt><dd>${txt(p.problem)}</dd></dl>
        <dl class="field"><dt>${t("did")}</dt><dd>${txt(p.did)}</dd></dl>
        <dl class="field"><dt>${t("outcome")}</dt><dd>${txt(p.outcome)}</dd></dl>
      </div>
      <ul class="tags" aria-label="${t("stack")}">${(p.stack || []).map((s) => `<li>${txt(s)}</li>`).join("")}</ul>
      <div class="links">${linkHtml}</div>
    </div>
  </article>`;
}

function renderProjects(listKey, mountId, withFilters) {
  const mount = document.getElementById(mountId);
  if (!mount) return;
  const list = PROJECTS[listKey] || [];
  mount.innerHTML = list.map(projectCard).join("");
  if (withFilters) {
    const cats = [...new Set(list.map((p) => p.category).filter(Boolean))];
    const bar = document.createElement("div");
    bar.className = "filters";
    bar.setAttribute("role", "group");
    bar.setAttribute("aria-label", t("filter"));
    bar.innerHTML = ["All", ...cats].map((c, i) => `<button class="chip" aria-pressed="${i === 0}" data-cat="${c}">${c === "All" ? t("all") : t("cat." + c)}</button>`).join("");
    mount.before(bar);
    bar.addEventListener("click", (e) => {
      const b = e.target.closest(".chip");
      if (!b) return;
      bar.querySelectorAll(".chip").forEach((x) => x.setAttribute("aria-pressed", x === b));
      mount.querySelectorAll(".project-card").forEach((card) => {
        card.hidden = !(b.dataset.cat === "All" || card.dataset.category === b.dataset.cat);
      });
    });
  }
}

function renderEvents() {
  const mount = document.getElementById("events");
  if (!mount) return;
  mount.innerHTML = EVENTS.map((e) => `
    <article class="event reveal">
      <div class="when"><span class="kind">${txt(e.kind)}</span>${txt(e.when)}</div>
      <div>
        <h3>${txt(e.title)}</h3>
        <p class="context" style="margin:0">${txt(e.org)}</p>
        <ul>${e.points.map((pt) => `<li>${txt(pt)}</li>`).join("")}</ul>
        ${e.link ? `<div class="links" style="margin-top:.8rem">${linkPill(e.link, t("ev.details"))}</div>` : ""}
        ${(e.photos || []).length ? `<div class="event-photos">${e.photos.map((ph, i) => `<button class="zoom" data-gallery="${esc(JSON.stringify(e.photos))}" data-i="${i}" aria-label="${esc(e.title)}, ${t("ev.photo")} ${i + 1}"><img src="${esc(href(ph))}" alt="${esc(e.title)}, ${t("ev.photo")} ${i + 1}" loading="lazy"></button>`).join("")}</div>` : ""}
      </div>
    </article>`).join("");
}

function renderSkills() {
  const mount = document.getElementById("skills");
  if (!mount) return;
  mount.innerHTML = SKILLS.map((g) => `
    <section class="skill-group reveal" aria-label="${esc(g.group)}">
      <h3><span class="ico" aria-hidden="true">${g.icon}</span>${esc(g.group)}</h3>
      ${g.items.map((s) => `
        <div class="skill">
          <div class="skill-top"><span>${txt(s.name)}</span><span>${txt(s.note)}</span></div>
          <div class="bar${g.lang ? " lang" : ""}" role="meter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${s.level}" aria-label="${esc(s.name)}"><i data-w="${s.level}"></i></div>
        </div>`).join("")}
    </section>`).join("");
}

function renderCertificates() {
  const mount = document.getElementById("certs");
  if (!mount) return;
  mount.innerHTML = CERTIFICATES.map((c) => `
    <article class="cert reveal">
      <div class="seal" aria-hidden="true">${c.icon}</div>
      <h3>${txt(c.title)}</h3>
      <div class="issuer">${txt(c.issuer)}</div>
      <div class="date">${txt(c.date)}</div>
      ${c.code ? `<div class="issuer" style="font-size:.82rem">${t("code")}${LANG === "fr" ? " :" : ":"} <code>${esc(c.code)}</code></div>` : ""}
      <div class="links">${c.verify ? linkPill(c.verify, t("verify")) : ""}${c.file ? linkPill(c.file, t("view")) : ""}${!c.verify && !c.file ? linkPill("", t("verify")) : ""}</div>
    </article>`).join("");
}

function renderProfileBits() {
  document.querySelectorAll("[data-profile]").forEach((el) => {
    const key = el.dataset.profile;
    const val = PROFILE[key];
    if (el.tagName === "A") {
      if (val && el.classList.contains("btn")) el.href = href(val);
      else if (key === "email") { el.href = "mailto:" + val.replace(/\[\[|\]\]/g, ""); el.querySelector(".val").innerHTML = txt(val); }
      else if (val) el.href = val;
      else {
        el.removeAttribute("href");
        el.removeAttribute("download");
        const v = el.querySelector(".val");
        if (el.classList.contains("btn")) { el.title = t("addfile"); v.innerHTML += ` <mark class="todo">${t("soon")}</mark>`; }
        else v.innerHTML = `<mark class="todo">${t("addlink")}</mark>`;
      }
    } else if (el.tagName === "IMG") {
      if (val) el.src = val; else el.remove();
    } else el.innerHTML = txt(val);
  });
  document.querySelectorAll("[data-photo]").forEach((box) => {
    if (PROFILE.photo) box.innerHTML = `<img src="${esc(href(PROFILE.photo))}" alt="${t("portrait")} ${esc(PROFILE.name)}">`;
  });
}

/* ---------- Reveal on scroll + skill bars ---------- */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  const fill = (root) => root.querySelectorAll(".bar i").forEach((b) => (b.style.width = b.dataset.w + "%"));
  if (!("IntersectionObserver" in window)) { els.forEach((e) => { e.classList.add("in"); fill(e); }); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); fill(en.target); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  els.forEach((e) => io.observe(e));
}

/* ---------- Lightbox for project and event photos ---------- */
function initLightbox() {
  const box = document.createElement("div");
  box.className = "lightbox";
  box.hidden = true;
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.setAttribute("aria-label", t("viewer"));
  box.innerHTML = `<button class="lb-close" aria-label="${t("close")}">✕</button>
    <button class="lb-prev" aria-label="${t("prevph")}">‹</button>
    <img alt="">
    <button class="lb-next" aria-label="${t("nextph")}">›</button>
    <span class="lb-count"></span>`;
  document.body.appendChild(box);
  let list = [], i = 0, opener = null;
  const img = box.querySelector("img");
  const show = () => {
    img.src = href(list[i]);
    box.querySelector(".lb-count").textContent = list.length > 1 ? `${i + 1} / ${list.length}` : "";
    box.querySelectorAll(".lb-prev,.lb-next").forEach((b) => (b.hidden = list.length < 2));
  };
  const close = () => { box.hidden = true; document.body.style.overflow = ""; opener && opener.focus(); };
  const step = (d) => { i = (i + d + list.length) % list.length; show(); };
  document.addEventListener("click", (e) => {
    const z = e.target.closest(".zoom");
    if (!z) return;
    list = JSON.parse(z.dataset.gallery); i = +z.dataset.i; opener = z;
    show(); box.hidden = false; document.body.style.overflow = "hidden";
    box.querySelector(".lb-close").focus();
  });
  box.addEventListener("click", (e) => {
    if (e.target === box || e.target.closest(".lb-close")) close();
    else if (e.target.closest(".lb-prev")) step(-1);
    else if (e.target.closest(".lb-next")) step(1);
  });
  document.addEventListener("keydown", (e) => {
    if (box.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyFrenchData();
  translatePage();
  renderHeader();
  renderProfileBits();
  renderProjects("personal", "projects-personal");
  renderProjects("year1", "projects-year1");
  renderProjects("year2", "projects-year2", true);
  renderEvents();
  renderSkills();
  renderCertificates();
  renderFooter();
  initReveal();
  initLightbox();
});
