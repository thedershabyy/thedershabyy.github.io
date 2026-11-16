/* ==========================================================
   LANGUAGE SWITCH (EN / FR)
   - The site opens in French for visitors whose browser is in French,
     in English otherwise. The EN / FR button in the menu switches it.
   - You can also share a link that forces a language:
       index.html?lang=fr   or   index.html?lang=en
   - French text for projects, events, skills and certificates is in
     js/data-fr.js. French text for the fixed page text is below
     (PAGE_FR): the left side must match the English HTML exactly.
   ========================================================== */
const LANG = (() => {
  const q = new URLSearchParams(location.search).get("lang");
  if (q === "fr" || q === "en") { try { localStorage.setItem("lang", q); } catch (e) {} return q; }
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  if (saved === "fr" || saved === "en") return saved;
  return (navigator.languages || [navigator.language || "en"]).some((l) => /^fr\b/i.test(l)) ? "fr" : "en";
})();
document.documentElement.lang = LANG;

/* ---------- Interface words used by js/main.js ---------- */
const UI = {
  en: {
    "nav.home": "Home", "nav.goals": "Goals", "nav.personal": "Personal Projects", "nav.y1": "Uni · Year 1",
    "nav.y2": "Uni · Year 2", "nav.events": "Events", "nav.skills": "Skills", "nav.certs": "Certificates", "nav.about": "About & Contact",
    "lang.btn": "FR", "lang.label": "Version française", "theme": "Toggle dark mode", "menu": "Open menu",
    "prev": "← Previous", "next": "Next →", "pager": "Page navigation",
    "soon": "soon", "soon.title": "Link not added yet",
    "flagship": "Flagship", "problem": "Problem", "did": "What I did", "outcome": "Outcome", "stack": "Stack",
    "l.github": "GitHub", "l.live": "Live", "l.video": "Video demo", "l.report": "Report", "l.pdf": "PDF",
    "photo": "photo", "photos": "photos", "enlarge": "Enlarge image", "all": "All", "filter": "Filter projects",
    "cat.BI": "BI", "cat.Data": "Data", "cat.Business": "Business", "cat.Web": "Web",
    "ev.details": "Certificate / details", "ev.photo": "photo",
    "verify": "Verify", "view": "View certificate", "code": "Verification code",
    "addlink": "add link in js/data.js", "addfile": "Add the file path in js/data.js",
    "portrait": "Portrait of", "viewer": "Photo viewer", "close": "Close", "prevph": "Previous photo", "nextph": "Next photo",
    "footer.route": "Alexandria · Marseille · Cairo",
  },
  fr: {
    "nav.home": "Accueil", "nav.goals": "Objectifs", "nav.personal": "Projets perso", "nav.y1": "Univ. · L1",
    "nav.y2": "Univ. · L2", "nav.events": "Événements", "nav.skills": "Compétences", "nav.certs": "Certificats", "nav.about": "À propos",
    "lang.btn": "EN", "lang.label": "English version", "theme": "Activer / désactiver le mode sombre", "menu": "Ouvrir le menu",
    "prev": "← Précédent", "next": "Suivant →", "pager": "Navigation entre les pages",
    "soon": "bientôt", "soon.title": "Lien pas encore ajouté",
    "flagship": "Projet phare", "problem": "Problème", "did": "Ce que j'ai fait", "outcome": "Résultat", "stack": "Outils",
    "l.github": "GitHub", "l.live": "En ligne", "l.video": "Démo vidéo", "l.report": "Rapport", "l.pdf": "PDF",
    "photo": "photo", "photos": "photos", "enlarge": "Agrandir l'image", "all": "Tous", "filter": "Filtrer les projets",
    "cat.BI": "BI", "cat.Data": "Data", "cat.Business": "Business", "cat.Web": "Web",
    "ev.details": "Certificat / détails", "ev.photo": "photo",
    "verify": "Vérifier", "view": "Voir le certificat", "code": "Code de vérification",
    "addlink": "lien à ajouter dans js/data.js", "addfile": "Ajouter le chemin du fichier dans js/data.js",
    "portrait": "Portrait de", "viewer": "Visionneuse de photos", "close": "Fermer", "prevph": "Photo précédente", "nextph": "Photo suivante",
    "footer.route": "Alexandrie · Marseille · Le Caire",
  },
};
const t = (k) => (UI[LANG] && UI[LANG][k]) || UI.en[k] || k;

/* ---------- Page titles (browser tab) and descriptions ---------- */
const META_FR = {
  "index.html": ["Accueil", "Portfolio de Mohamed Fathy El Dershaby, étudiant en Data Science & BI."],
  "goals.html": ["Objectifs", "Mission et calendrier 2026-2028 vers un Master en data science en France."],
  "personal-projects.html": ["Projets personnels", "Projets data personnels : Rafeeq DB, pipeline ETL EUR-EGP et projet final CS50P."],
  "university-year-1.html": ["Projets universitaires : 1re année", "Projets de 1re année : tableau de bord Netflix sous Tableau, base de données Rakoda, startup Dersaty, Dina Farms."],
  "university-year-2.html": ["Projets universitaires : 2e année", "Projets de 2e année : Power BI, Airbnb x Rafeeq, Breadfast, KNIME, étude de marché et plus."],
  "events.html": ["Événements & ateliers", "Événements, ateliers et programmes : AI Everything, UFE WORX, GCI World 2026, APRC."],
  "skills.html": ["Compétences", "Compétences en programmation, data et statistiques, BI, bases de données, outils et langues."],
  "certificates.html": ["Certificats", "Certificats : DELF B2, CS50P, ITI Mahara-Tech, Anthropic."],
  "about.html": ["À propos & contact", "À propos de Mohamed Fathy El Dershaby et comment le contacter."],
};

/* ---------- Fixed text of the pages: English HTML → French HTML ---------- */
const PAGE_FR = {
  /* Home */
  "E-portfolio": "E-portfolio",
  "<strong>Data Science &amp; BI</strong> student turning messy data into clear decisions.": "Étudiant en <strong>Data Science &amp; BI</strong>, je transforme des données brutes en décisions claires.",
  "<b>Alexandria</b><i>→</i><b>Marseille</b><i>→</i><b>Cairo</b><i>→</i><b>Paris, 2028</b>": "<b>Alexandrie</b><i>→</i><b>Marseille</b><i>→</i><b>Le Caire</b><i>→</i><b>Paris, 2028</b>",
  "See my projects": "Voir mes projets",
  "Get in touch": "Me contacter",
  "projects, personal and university": "projets personnels et universitaires",
  "certificates: DELF B2, Harvard CS50P, ITI, Anthropic": "certificats : DELF B2, Harvard CS50P, ITI, Anthropic",
  "languages: Arabic, French, English": "langues : arabe, français, anglais",
  "target: French Master's + apprenticeship": "objectif : Master en France en alternance",
  "Explore": "Explorer",
  "Goals": "Objectifs",
  "My road to a French Master's in data science.": "Mon parcours vers un Master en data science en France.",
  "Personal Projects": "Projets personnels",
  "Rafeeq DB, EUR-EGP ETL, CS50P.": "Rafeeq DB, ETL EUR-EGP, CS50P.",
  "University · Year 1": "Université · 1re année",
  "Tableau, databases, business cases.": "Tableau, bases de données, études de cas business.",
  "University · Year 2": "Université · 2e année",
  "Power BI, KNIME, temporal data and more.": "Power BI, KNIME, données temporelles et plus.",
  "Events &amp; Workshops": "Événements &amp; ateliers",
  "AI Everything, UFE WORX, GCI World, APRC.": "AI Everything, UFE WORX, GCI World, APRC.",
  "Skills": "Compétences",
  "Programming, data, BI, databases, languages.": "Programmation, data, BI, bases de données, langues.",
  "Certificates": "Certificats",
  "DELF B2, CS50P, ITI Mahara-Tech, Anthropic.": "DELF B2, CS50P, ITI Mahara-Tech, Anthropic.",
  "About &amp; Contact": "À propos &amp; contact",
  "My story, CV and how to reach me.": "Mon parcours, mon CV et comment me joindre.",

  /* Goals */
  "02 · Goals": "02 · Objectifs",
  "Where I'm heading": "Où je vais",
  "A Master's in data science in France, combined with an apprenticeship, starting September 2028.": "Un Master en data science en France, en alternance, à partir de septembre 2028.",
  "Mission": "Mission",
  "Join a French Master's program in data science and AI as an apprentice (<em>alternant</em>), so I can learn advanced methods while applying them inside a company from day one.": "Intégrer un Master en data science et IA en France en tant qu'<em>alternant</em>, pour apprendre des méthodes avancées tout en les appliquant en entreprise dès le premier jour.",
  "Studying in French with DELF B2 already done, and a background that mixes data, BI and business, I want to work where data meets decisions.": "J'étudie déjà en français, j'ai obtenu le DELF B2, et mon parcours mêle data, BI et business : je veux travailler là où les données rencontrent les décisions.",
  "Target programs": "Masters visés",
  "Timeline 2026 → 2028": "Calendrier 2026 → 2028",
  "L2: Year 2 of my Bachelor's": "L2 : deuxième année de licence",
  "Power BI, KNIME, temporal data and the Rafeeq front-end. Strengthening statistics and programming.": "Power BI, KNIME, données temporelles et front-end de Rafeeq. Renforcement en statistiques et en programmation.",
  "L3: Final Bachelor's year": "L3 : dernière année de licence",
  "Deeper machine learning and databases, flagship projects, and an internship.": "Approfondissement en machine learning et bases de données, projets phares et stage.",
  "During L3": "Pendant la L3",
  "DALF / TCF": "DALF / TCF",
  "Move from DELF B2 to C1-level certification for French-taught Master's programs.": "Passer du DELF B2 à une certification de niveau C1 pour les Masters enseignés en français.",
  "Early 2028": "Début 2028",
  "Applications": "Candidatures",
  "Apply to Paris-Saclay ISD, Dauphine IASD and Sorbonne MOSEF, and find an apprenticeship company.": "Candidater à Paris-Saclay ISD, Dauphine IASD et Sorbonne MOSEF, et trouver une entreprise d'accueil en alternance.",
  "September 2028": "Septembre 2028",
  "Master's + apprenticeship": "Master en alternance",
  "Start the Master's in France, alternating between university and company.": "Début du Master en France, en alternant entre l'université et l'entreprise.",

  /* Projects pages */
  "03 · Personal Projects": "03 · Projets personnels",
  "Things I built on my own": "Ce que j'ai construit par moi-même",
  "Projects I started out of curiosity, each one showing the problem, the stack and the result.": "Des projets lancés par curiosité, chacun présenté avec le problème, les outils et le résultat.",
  "04 · University · Year 1": "04 · Université · 1re année",
  "First-year projects": "Projets de première année",
  "Where I started: visualisation, databases and business thinking.": "Mes débuts : visualisation de données, bases de données et réflexion business.",
  "05 · University · Year 2": "05 · Université · 2e année",
  "Second-year projects": "Projets de deuxième année",
  "More data, more tools, and real companies as case studies.": "Plus de données, plus d'outils, et de vraies entreprises comme études de cas.",

  /* Events / Skills / Certificates */
  "06 · Events &amp; Workshops": "06 · Événements &amp; ateliers",
  "Learning beyond the classroom": "Apprendre au-delà de la salle de classe",
  "Workshops, international programs and professional exposure.": "Ateliers, programmes internationaux et premières expériences professionnelles.",
  "07 · Skills": "07 · Compétences",
  "What I work with": "Mes outils de travail",
  "Grouped by area. Bars show my own estimate of my current level.": "Regroupées par domaine. Les barres indiquent ma propre estimation de mon niveau actuel.",
  "08 · Certificates": "08 · Certificats",
  "Each one with its issuer, date and a link to verify it.": "Chacun avec son organisme, sa date et un lien pour le vérifier.",

  /* About */
  "09 · About &amp; Contact": "09 · À propos &amp; contact",
  "Hi, I'm Mohamed": "Bonjour, je suis Mohamed",
  "Data Science &amp; BI student, between Egypt and France.": "Étudiant en Data Science &amp; BI, entre l'Égypte et la France.",
  "I grew up between the Mediterranean and the Nile. My story so far has three stops, and each one shaped how I think:": "J'ai grandi entre la Méditerranée et le Nil. Mon parcours compte trois étapes, et chacune a façonné ma façon de penser :",
  "Alexandria": "Alexandrie",
  "Cairo": "Le Caire",
  "<mark class=\"todo\">Where it started: childhood, first interests</mark>": "<mark class=\"todo\">Là où tout a commencé : enfance, premiers centres d'intérêt</mark>",
  "<mark class=\"todo\">Life in France, where French became mine</mark>": "<mark class=\"todo\">La vie en France, où le français est devenu ma langue</mark>",
  "<mark class=\"todo\">University, Data Science &amp; BI</mark>": "<mark class=\"todo\">Université, Data Science &amp; BI</mark>",
  "Today I study Data Science &amp; BI, and I'm preparing to come back to France for a Master's with an apprenticeship in 2028. I like projects where a database, a dashboard and a business question meet.": "J'étudie aujourd'hui la Data Science &amp; BI et je prépare mon retour en France pour un Master en alternance en 2028. J'aime les projets où se rencontrent une base de données, un tableau de bord et une question business.",
  "Contact": "Contact",
  "see my code": "voir mon code",
  "Download CV (EN)": "CV en anglais (EN)",
  "Télécharger le CV (FR)": "CV en français (FR)",
};

/* Swap the fixed page text to French (called once on load). */
function translatePage() {
  if (LANG !== "fr") return;
  const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const meta = META_FR[page];
  if (meta) {
    document.title = `${meta[0]} · Mohamed Fathy El Dershaby`;
    const d = document.querySelector('meta[name="description"]');
    if (d) d.setAttribute("content", meta[1]);
  }
  const norm = (s) => s.replace(/\s+/g, " ").trim();
  const dict = {};
  for (const k in PAGE_FR) dict[norm(k)] = PAGE_FR[k];
  const sel = "main .route, main h1, main h2, main h3, main p, main time, main small, main .eyebrow, main .btn, main .val, main .stat span, main .target-list span, main .journey strong, main .journey span";
  document.querySelectorAll(sel).forEach((el) => {
    const fr = dict[norm(el.innerHTML)];
    if (fr !== undefined) el.innerHTML = fr;
  });
}

/* Replace English data with the French version from js/data-fr.js. */
function applyFrenchData() {
  if (LANG !== "fr" || typeof DATA_FR === "undefined") return;
  const merge = (target, src) => {
    if (!src) return;
    for (const k in src) {
      if (Array.isArray(src[k]) && Array.isArray(target[k]) && typeof src[k][0] === "object" && src[k][0] !== null) {
        src[k].forEach((item, i) => { if (target[k][i]) merge(target[k][i], item); });
      } else target[k] = src[k];
    }
  };
  merge(PROJECTS, DATA_FR.PROJECTS);
  (DATA_FR.EVENTS || []).forEach((e, i) => EVENTS[i] && merge(EVENTS[i], e));
  (DATA_FR.SKILLS || []).forEach((g, i) => SKILLS[i] && merge(SKILLS[i], g));
  (DATA_FR.CERTIFICATES || []).forEach((c, i) => CERTIFICATES[i] && merge(CERTIFICATES[i], c));
}
