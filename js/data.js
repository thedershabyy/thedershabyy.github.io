/* ==========================================================
   ALL PORTFOLIO CONTENT LIVES HERE.
   Edit this file to update projects, certificates, events and skills.
   Text inside [[double brackets]] is a placeholder: it shows up
   highlighted in yellow on the site until you replace it.
   Links left as "" show as a greyed-out "coming soon" pill.
   ========================================================== */

const PROFILE = {
  name: "Mohamed Fathy El Dershaby",
  short: "Mohamed El Dershaby",
  initials: "ME",
  positioning: "Data Science & BI student turning messy data into clear decisions.",
  email: "thedershaby@gmail.com",
  linkedin: "https://www.linkedin.com/in/thedershaby/",
  github: "https://github.com/thedershaby",
  photo: "assets/img/profile.jpg", // original: "assets/Profile pic/IMG-20260422-WA0134.jpg"
  cvEN: "assets/cv/Mohamed_El_Dershaby_CV_final.pdf",
  cvFR: "",     // e.g. assets/cv/CV_FR.pdf
};

/* ---------- Shared project card template ----------
   title, context (1 line), problem, did (what I did), stack (tags),
   outcome, image (cover photo), gallery (extra photos, optional),
   links { github, live, video, report, pdf }: only filled links are shown.
   ---------------------------------------------------- */
const IMG = "assets/img/projects/";
const Y1 = "assets/projects/BIDA Y1/";

const PROJECTS = {
  personal: [
    {
      title: "Rafeeq DB",
      flagship: true,
      image: IMG + "rafeeq-db.jpg",
      gallery: [IMG + "rafeeq-db-handwritten.jpg", IMG + "rafeeq-db-repo.jpg"],
      context: "The database behind Rafeeq, a peer-to-peer pet boarding platform (\"Airbnb for pets\") for the Egyptian market.",
      problem: "Pet owners who travel have no trusted way to find a local sitter. Rafeeq needs to store owners, sitters, pets, bookings, payments and reviews reliably.",
      did: "Modelled the ERD in Chen notation (by hand first, then digitally), built the SQL Server schema around 6 entities, and wrote seed data with 10+ rows per table.",
      stack: ["SQL Server", "T-SQL", "ERD (Chen)", "Git"],
      outcome: "A finished schema with clear design choices: one Users table with roles, 1-to-1 payments and reviews per booking, and species filters on sitter profiles.",
      links: { github: "" },
    },
    {
      title: "EUR-EGP ETL Pipeline",
      image: IMG + "eur-egp-etl.jpg",
      context: "A small ETL pipeline that tracks the euro to Egyptian pound exchange rate over time.",
      problem: "The EUR/EGP rate moves every day, and I wanted my own clean history of it instead of checking websites by hand.",
      did: "Extract the daily rate from the open.er-api.com API, append it to a running CSV seeded with a month of history, then clean, sort and plot it with pandas and matplotlib.",
      stack: ["Python", "requests", "pandas", "matplotlib", "REST API"],
      outcome: "A growing dataset and a trend chart: the rate rose from about 48.6 to 52 EGP between August and September 2026.",
      links: { github: "https://github.com/thedershaby/EUR-EGP-Exchange-Rate-Tracker" },
    },
    {
      title: "CS50P Final Project",
      image: IMG + "cs50p.jpg",
      context: "EUR to EGP live converter: final project of Harvard's CS50's Introduction to Programming with Python.",
      problem: "A hardcoded exchange rate is out of date within a day. The converter has to use live data and survive bad input or network failures.",
      did: "Built a modular command-line app (get_rate, convert, format_output) that calls a live API, handles errors gracefully, and is covered by pytest unit tests.",
      stack: ["Python", "requests", "pytest", "CLI"],
      outcome: "Passed CS50P (nine problem sets and this final project) and earned the Harvard CS50 certificate in 2026.",
      links: { github: "", video: "https://youtu.be/cTPR6FFIdks" },
    },
  ],

  year1: [
    {
      title: "Netflix Tableau Dashboard",
      image: IMG + "netflix.jpg",
      context: "Exploring the Netflix catalogue (7,787 titles) with one interactive Tableau dashboard.",
      problem: "A 7,787-row table doesn't tell a viewer what Netflix actually offers. Which countries, genres, formats and ratings dominate?",
      did: "Explored and cleaned the data (missing directors and countries, multi-valued cells, mixed duration units), then built five views and combined them into one dashboard.",
      stack: ["Tableau", "Data cleaning", "CSV"],
      outcome: "The catalogue is US-led (2,555 titles, then India with 923), 69% movies, and grew fastest from 2016 to 2019, with TV shows gaining ground.",
      links: { report: Y1 + "Project Netflix Data visualization (tableau)/Netflix_Tableau_Project_Report_Final.docx" },
    },
    {
      title: "Rakoda Database",
      image: IMG + "rakoda.jpg",
      gallery: [IMG + "rakoda-logo.jpg", IMG + "rakoda-team.jpg"],
      context: "Relational database for Rakoda, a seafood restaurant (\"Taste the ocean's finest\"). Group of five.",
      problem: "Paper order lists repeat customer names, lose price changes and can't answer simple questions like \"which dishes are unavailable today?\"",
      did: "Analysed the written scenario, designed the ERD, and built it in Microsoft Access with referential integrity, data-entry forms, printable reports and business queries.",
      stack: ["Microsoft Access", "ERD", "SQL queries"],
      outcome: "A working database: 9 tables, 8 relationships, 7 forms, 2 reports and 5 queries.",
      links: { report: Y1 + "Project Rakoda's Database/Rakoda_Database_Project_Report.docx" },
    },
    {
      title: "Startup Dersaty",
      image: IMG + "dersaty.jpg",
      gallery: [IMG + "dersaty-survey.jpg"],
      context: "Pitching Dersaty, a student app idea, as a team startup project.",
      problem: "[[The problem Dersaty solves for students]]",
      did: "Ran a survey to test the idea, analysed the results, and presented the app and the survey findings to the class.",
      stack: ["Market survey", "Pitch deck", "Business model"],
      outcome: "[[Grade / pitch outcome]]",
      links: { pdf: Y1 + "Startup Dersaty/Blue Yellow and Red Modern Meet and Greet Poster.pdf" },
    },
    {
      title: "Dina Farms Business Portfolio",
      image: IMG + "dina-farms.jpg",
      context: "Business portfolio of Dina Farms, one of Egypt's largest agrifood companies. Pair project.",
      problem: "Understand how an integrated agricultural group (farming, livestock, dairy) creates value and grows.",
      did: "Researched and wrote the company overview, financial performance, product lines, case studies (dairy herd expansion, herb export plant), achievements and leadership, and presented it.",
      stack: ["Business analysis", "Research", "PowerPoint"],
      outcome: "A full report and presentation: Dina Farms supplies about 70% of Egypt's fresh milk, and its holding grew revenue 51% in FY2023.",
      links: { report: Y1 + "Dina Farms's Business protfolio/Dina_Farms_Report[2].docx" },
    },
  ],

  year2: [
    {
      title: "Adventure Works Power BI",
      category: "BI",
      image: IMG + "adventure-works.jpg",
      context: "Sales analytics report on the Adventure Works reseller dataset.",
      problem: "[[Business question the report answers, e.g. sales vs targets by region and salesperson]]",
      did: "Loaded 7 tables (Sales, Product, Region, Reseller, Salesperson, SalespersonRegion, Targets) into a Power BI model. [[Add your DAX measures and report pages]]",
      stack: ["Power BI", "DAX", "Power Query", "Star schema"],
      outcome: "[[Key finding]]",
      links: {},
    },
    {
      title: "Airbnb x Rafeeq",
      category: "Business",
      image: IMG + "airbnb-rafeeq.jpg",
      gallery: [IMG + "airbnb-rafeeq-2.jpg", IMG + "airbnb-rafeeq-logo.jpg"],
      context: "Proposing Rafeeq as a new pet-care service inside Airbnb, built on its \"Belong Anywhere\" vision. Pair project.",
      problem: "Pet owners who travel need a trusted, home-like place for their pets, and Airbnb still has room to grow in Egypt.",
      did: "Defined the two-sided audience (pet owners and hosts in Cairo, Giza and Alexandria, classes A and upper B), set four objectives with success indicators, designed the pricing policy (size-based prices, 5% owner fee and 10% host commission, a protection fund), wrote a 5-question survey, and built a landing-page prototype.",
      stack: ["Marketing strategy", "Segmentation", "Pricing", "Survey design", "HTML / CSS / JS"],
      outcome: "A complete service and pricing proposal, plus a working landing page: \"Good care feels like home\".",
      links: { report: "assets/projects/BIDA Y2/Airbnb x Rafeeq/DERSHABY_MAGHRABY_Report_PROJECT_3_Updated.docx", live: "assets/projects/BIDA Y2/Airbnb x Rafeeq/index.html" },
    },
    {
      title: "Breadfast Temporal Data",
      category: "Data",
      image: IMG + "breadfast.jpg",
      context: "Time-based data analysis for Breadfast, the Egyptian grocery delivery app.",
      problem: "[[e.g. order patterns over time, demand forecasting]]",
      did: "[[What you did]]",
      stack: ["[[Tools]]", "Time series"],
      outcome: "[[Result]]",
      links: {},
    },
    {
      title: "KNIME Loan Decision Project",
      category: "Data",
      image: IMG + "knime.jpg",
      context: "Decision Making Information Systems: predicting loan approval in KNIME. In progress.",
      problem: "Help a lender decide which loan applications to approve (614 training rows, Loan_Status 69% yes / 31% no), keeping the cost of wrong decisions low.",
      did: "Explored the data and found the key drivers: approval is 80% with a good credit history versus 8% without, and 77% in semi-urban areas. Planned a clean workflow with stratified cross-validation, a cost-sensitive threshold and a fairness check.",
      stack: ["KNIME", "Classification", "Cross-validation"],
      outcome: "[[Model results once the workflow is finished]]",
      links: {},
    },
    {
      title: "Market Research",
      category: "Business",
      image: IMG + "market-research.jpg",
      context: "Market research study.",
      problem: "[[Market / product studied]]",
      did: "[[Survey design, sample, analysis]]",
      stack: ["Survey design", "Statistics"],
      outcome: "[[Main finding]]",
      links: {},
    },
    {
      title: "OB Simulation",
      category: "Business",
      image: IMG + "ob-simulation.jpg",
      context: "Organisational behaviour simulation.",
      problem: "[[What the simulation was about]]",
      did: "[[Your role and decisions]]",
      stack: ["Teamwork", "Decision making"],
      outcome: "[[Result / ranking]]",
      links: {},
    },
    {
      title: "Rafeeq Front-end",
      category: "Web",
      image: IMG + "rafeeq-frontend.jpg",
      gallery: [IMG + "rafeeq-logo.jpg"],
      context: "The website for Rafeeq: a trusted place for pet owners to find pet sitters.",
      problem: "Owners and sitters need a simple, trustworthy way to sign up and find each other, starting with Cairo, Alexandria and Giza.",
      did: "Designed the brand (logo and icon) and built the first pages in HTML and CSS: home, sign in, sign up with an owner or sitter choice, and separate owner and sitter dashboards.",
      stack: ["HTML", "CSS", "UI design", "Branding"],
      outcome: "A working 5-page prototype with role-based navigation and a \"coming soon\" launch teaser (@rafeeq.eg).",
      links: {},
    },
  ],
};

const EV = "assets/img/events/";
const EVENTS = [
  {
    title: "UFE Orientation Day for School Leaders",
    org: "Université Française d'Égypte (UFE)",
    when: "February 2026",
    kind: "University event",
    points: ["UFE welcomed school representatives and leaders to discover the university and its programs.", "[[Your role, e.g. student ambassador presenting the BIDA program]]"],
    photos: [EV + "ufe-orientation-1.jpg", EV + "ufe-orientation-2.jpg", EV + "ufe-orientation-3.jpg", EV + "ufe-orientation-4.jpg"],
  },
  {
    title: "AI Everything Middle East & Africa, Egypt 2026",
    org: "AI Everything exhibition, Cairo",
    when: "15 February 2026",
    kind: "Conference",
    points: ["Visited the region's large AI exhibition with fellow UFE students.", "[[What you saw or learned there]]"],
    photos: [EV + "ai-everything-1.jpg", EV + "ai-everything-2.jpg", EV + "ai-everything-3.jpg", EV + "ai-everything-4.jpg"],
  },
  {
    title: "GCI World 2026",
    org: "Matsuo Lab, University of Tokyo",
    when: "April 2026",
    kind: "International program",
    points: ["Selected for the April 2026 cohort of GCI World, the online data science program run by the Matsuo Laboratory at the University of Tokyo.", "[[Topics covered and final project]]"],
    photos: [EV + "gci-1.jpg"],
  },
  {
    title: "UFE WORX Job Fair",
    org: "UFE Career Center",
    when: "21 April 2026",
    kind: "Job fair",
    points: ["Career fair with companies such as Crédit Agricole, Colas Rail, RATP Dev, Hilton and Schneider Electric.", "[[Your role, e.g. organising team or welcome desk]]"],
    photos: [EV + "ufe-worx-1.jpg", EV + "ufe-worx-2.jpg", EV + "ufe-worx-3.jpg", EV + "ufe-worx-4.jpg", EV + "ufe-worx-5.jpg"],
  },
  {
    title: "AI in Higher Education Workshop",
    org: "Université Française d'Égypte (UFE)",
    when: "May 2026",
    kind: "Workshop",
    points: ["Workshop at UFE on how artificial intelligence is changing teaching and learning at university.", "[[What you took away from it]]"],
    photos: [EV + "ai-higher-ed-1.jpg"],
  },
  {
    title: "Summer Training at Amreya Petroleum Refining Co. (APRC)",
    org: "Amreya Petroleum Refining Company, Alexandria",
    when: "August 2026",
    kind: "Exposure internship",
    points: ["One month of summer training, framed as exposure to how a large industrial company runs.", "Completed with an \"excellent conduct\" certificate from APRC's HR department.", "[[What you observed, e.g. how data flows between departments]]"],
    photos: [EV + "aprc-1.jpg", EV + "aprc-2.jpg", EV + "aprc-3.jpg", EV + "aprc-4.jpg"],
  },
];

/* level: 0-100 (shown as a bar), note: short label next to it */
const SKILLS = [
  { group: "Programming", icon: "⌨", items: [
    { name: "Python", level: 75, note: "[[level]]" },
    { name: "SQL / T-SQL", level: 75, note: "[[level]]" },
    { name: "HTML / CSS / JavaScript", level: 55, note: "[[level]]" },
  ]},
  { group: "Data & Statistics", icon: "∑", items: [
    { name: "pandas / NumPy", level: 70, note: "[[level]]" },
    { name: "Descriptive & inferential stats", level: 65, note: "[[level]]" },
    { name: "Time series", level: 50, note: "[[level]]" },
  ]},
  { group: "BI & Visualisation", icon: "▤", items: [
    { name: "Power BI (DAX, Power Query)", level: 75, note: "[[level]]" },
    { name: "Tableau", level: 65, note: "[[level]]" },
    { name: "matplotlib", level: 65, note: "[[level]]" },
  ]},
  { group: "Databases", icon: "⛁", items: [
    { name: "Relational modelling (ERD)", level: 80, note: "[[level]]" },
    { name: "SQL Server", level: 70, note: "[[level]]" },
    { name: "Microsoft Access", level: 70, note: "[[level]]" },
  ]},
  { group: "Tools", icon: "⚙", items: [
    { name: "KNIME", level: 60, note: "[[level]]" },
    { name: "Git & GitHub", level: 60, note: "[[level]]" },
    { name: "Jupyter / VS Code", level: 75, note: "[[level]]" },
  ]},
  { group: "Languages", icon: "✎", lang: true, items: [
    { name: "Arabic", level: 100, note: "Native" },
    { name: "French", level: 80, note: "B2 (DELF)" },
    { name: "English", level: 85, note: "[[level]]" },
  ]},
];

const CERT = "assets/certificates/";
const CERTIFICATES = [
  { title: "DELF B2", issuer: "CIEP (now France Éducation international)", date: "July 2018", icon: "🇫🇷", verify: "", file: CERT + "Delf_B2.pdf" },
  { title: "CS50's Introduction to Programming with Python", issuer: "Harvard University (CS50)", date: "2026", icon: "🐍", verify: "https://cs50.harvard.edu/certificates/96d90b3e-3c92-43ac-83d9-82eda3fac73e", file: CERT + "CS50P Certificate.pdf" },
  { title: "Database Fundamentals", issuer: "ITI Mahara-Tech", date: "August 2026", code: "SAB9HhFOQa", icon: "🎓", verify: "", file: CERT + "ITI's Database fundementals Cert.pdf" },
  { title: "Transact-SQL Queries using SQL Server", issuer: "ITI Mahara-Tech", date: "August 2026", code: "GU8j19IUYU", icon: "🎓", verify: "", file: CERT + "ITI's Transact SQL queries using SQL server Cert.pdf" },
  { title: "Python Programming Basics", issuer: "ITI Mahara-Tech", date: "August 2026", code: "LrFf2GeyGH", icon: "🎓", verify: "", file: CERT + "ITI's Python Fundementals Cert.pdf" },
  { title: "AI Fluency for Students", issuer: "Anthropic", date: "June 2026", icon: "✦", verify: "", file: CERT + "certificate-AI Fluency for students  -1780843163.pdf" },
  { title: "Claude 101", issuer: "Anthropic", date: "June 2026", icon: "✦", verify: "", file: CERT + "certificate-Claude 101-1780838766.pdf" },
];
