/* ==========================================================
   VERSION FRANÇAISE DU CONTENU
   Same order as js/data.js. Only the text that changes is here:
   images, links and tool names come from js/data.js.
   When you edit a text in data.js, edit the same item here too.
   Text inside [[double brackets]] is a placeholder (shown in yellow).
   ========================================================== */
const DATA_FR = {
  PROJECTS: {
    personal: [
      {
        context: "La base de données de Rafeeq, une plateforme de garde d'animaux entre particuliers (« le Airbnb des animaux ») pensée pour le marché égyptien.",
        problem: "Les propriétaires d'animaux qui voyagent n'ont pas de moyen fiable de trouver un pet-sitter près de chez eux. Rafeeq doit gérer de façon sûre les propriétaires, les pet-sitters, les animaux, les réservations, les paiements et les avis.",
        did: "Modélisation du MCD en notation Chen (d'abord à la main, puis en version numérique), création du schéma SQL Server autour de 6 entités et jeu de données de test avec plus de 10 lignes par table.",
        stack: ["SQL Server", "T-SQL", "MCD (Chen)", "Git"],
        outcome: "Un schéma finalisé avec des choix de conception clairs : une seule table Users avec des rôles, un paiement et un avis par réservation, et des filtres par espèce sur les profils des pet-sitters.",
      },
      {
        title: "Pipeline ETL EUR-EGP",
        context: "Un petit pipeline ETL qui suit l'évolution du taux de change euro / livre égyptienne.",
        problem: "Le taux EUR/EGP change chaque jour, et je voulais mon propre historique propre au lieu de consulter des sites à la main.",
        did: "Extraction du taux quotidien depuis l'API open.er-api.com, ajout dans un fichier CSV initialisé avec un mois d'historique, puis nettoyage, tri et visualisation avec pandas et matplotlib.",
        outcome: "Un jeu de données qui s'enrichit chaque jour et un graphique de tendance : le taux est passé d'environ 48,6 à 52 EGP entre août et septembre 2026.",
      },
      {
        title: "Projet final CS50P",
        context: "Convertisseur EUR → EGP en temps réel : projet final du cours CS50's Introduction to Programming with Python de Harvard.",
        problem: "Un taux de change codé en dur est obsolète en un jour. Le convertisseur doit utiliser des données en direct et résister aux saisies invalides et aux pannes réseau.",
        did: "Développement d'une application en ligne de commande modulaire (get_rate, convert, format_output) qui interroge une API en direct, gère proprement les erreurs et est couverte par des tests unitaires pytest.",
        stack: ["Python", "requests", "pytest", "Ligne de commande"],
        outcome: "CS50P validé (neuf séries d'exercices et ce projet final) et certificat Harvard CS50 obtenu en 2026.",
      },
    ],
    year1: [
      {
        title: "Tableau de bord Netflix sous Tableau",
        context: "Exploration du catalogue Netflix (7 787 titres) dans un tableau de bord interactif sous Tableau.",
        problem: "Un tableau de 7 787 lignes ne dit pas au spectateur ce que Netflix propose vraiment. Quels pays, genres, formats et classifications dominent ?",
        did: "Exploration et nettoyage des données (réalisateurs et pays manquants, cellules à valeurs multiples, durées en unités mixtes), puis création de cinq vues réunies dans un seul tableau de bord.",
        stack: ["Tableau", "Nettoyage de données", "CSV"],
        outcome: "Le catalogue est dominé par les États-Unis (2 555 titres, devant l'Inde avec 923), composé à 69 % de films, et a connu sa plus forte croissance entre 2016 et 2019, les séries gagnant du terrain.",
      },
      {
        title: "Base de données Rakoda",
        context: "Base de données relationnelle pour Rakoda, un restaurant de fruits de mer (« Taste the ocean's finest »). Projet en groupe de cinq.",
        problem: "Les listes de commandes sur papier répètent les noms des clients, perdent les changements de prix et ne permettent pas de répondre à des questions simples comme « quels plats sont indisponibles aujourd'hui ? »",
        did: "Analyse du scénario écrit, conception du MCD, puis implémentation sous Microsoft Access avec intégrité référentielle, formulaires de saisie, états imprimables et requêtes métier.",
        stack: ["Microsoft Access", "MCD", "Requêtes SQL"],
        outcome: "Une base de données opérationnelle : 9 tables, 8 relations, 7 formulaires, 2 états et 5 requêtes.",
      },
      {
        title: "Startup Dersaty",
        context: "Présentation de Dersaty, une idée d'application pour étudiants, dans le cadre d'un projet de startup en équipe.",
        problem: "[[Le problème que Dersaty résout pour les étudiants]]",
        did: "Réalisation d'une enquête pour tester l'idée, analyse des résultats, puis présentation de l'application et des résultats de l'enquête devant la classe.",
        stack: ["Enquête de marché", "Pitch deck", "Business model"],
        outcome: "[[Note / résultat du pitch]]",
      },
      {
        title: "Portefeuille d'activités de Dina Farms",
        context: "Analyse du portefeuille d'activités de Dina Farms, l'un des plus grands groupes agroalimentaires d'Égypte. Projet en binôme.",
        problem: "Comprendre comment un groupe agricole intégré (cultures, élevage, produits laitiers) crée de la valeur et se développe.",
        did: "Recherche et rédaction de la présentation de l'entreprise, de ses performances financières, de ses gammes de produits, d'études de cas (extension du troupeau laitier, usine d'herbes séchées pour l'export), de ses réussites et de sa direction, puis soutenance orale.",
        stack: ["Analyse d'entreprise", "Recherche", "PowerPoint"],
        outcome: "Un rapport complet et une présentation : Dina Farms fournit environ 70 % du lait frais en Égypte, et sa holding a augmenté son chiffre d'affaires de 51 % en 2023.",
      },
    ],
    year2: [
      {
        context: "Rapport d'analyse des ventes sur le jeu de données revendeurs Adventure Works.",
        problem: "[[Question business à laquelle répond le rapport, ex. ventes par rapport aux objectifs par région et par commercial]]",
        did: "Chargement de 7 tables (Sales, Product, Region, Reseller, Salesperson, SalespersonRegion, Targets) dans un modèle Power BI. [[Ajoutez vos mesures DAX et les pages du rapport]]",
        stack: ["Power BI", "DAX", "Power Query", "Schéma en étoile"],
        outcome: "[[Principal enseignement]]",
      },
      {
        context: "Proposer Rafeeq comme nouveau service de garde d'animaux au sein d'Airbnb, dans l'esprit de sa vision « Belong Anywhere ». Projet en binôme.",
        problem: "Les propriétaires d'animaux qui voyagent ont besoin d'un lieu de confiance, comme à la maison, pour leur animal, et Airbnb a encore une marge de croissance en Égypte.",
        did: "Définition de la cible des deux côtés de la plateforme (propriétaires et hôtes au Caire, à Gizeh et à Alexandrie, catégories A et B supérieure), fixation de quatre objectifs avec indicateurs de réussite, conception de la politique tarifaire (prix selon la taille de l'animal, frais de 5 % pour le propriétaire et commission de 10 % pour l'hôte, fonds de protection), rédaction d'une enquête de 5 questions et création d'une landing page prototype.",
        stack: ["Stratégie marketing", "Segmentation", "Tarification", "Conception d'enquête", "HTML / CSS / JS"],
        outcome: "Une proposition complète de service et de tarification, et une landing page fonctionnelle : « Good care feels like home ».",
      },
      {
        title: "Données temporelles de Breadfast",
        context: "Analyse de données temporelles pour Breadfast, l'application égyptienne de livraison de courses.",
        problem: "[[ex. évolution des commandes dans le temps, prévision de la demande]]",
        did: "[[Ce que vous avez fait]]",
        stack: ["[[Outils]]", "Séries temporelles"],
        outcome: "[[Résultat]]",
      },
      {
        title: "Projet KNIME : décision d'octroi de prêt",
        context: "Systèmes d'information d'aide à la décision : prédire l'acceptation d'un prêt avec KNIME. En cours.",
        problem: "Aider un prêteur à décider quelles demandes de prêt accepter (614 lignes d'entraînement, Loan_Status : 69 % oui / 31 % non) en limitant le coût des mauvaises décisions.",
        did: "Exploration des données et identification des principaux facteurs : 80 % d'acceptation avec un bon historique de crédit contre 8 % sans, et 77 % en zone semi-urbaine. Conception d'un workflow propre avec validation croisée stratifiée, seuil de décision tenant compte des coûts et test d'équité.",
        stack: ["KNIME", "Classification", "Validation croisée"],
        outcome: "[[Résultats du modèle une fois le workflow terminé]]",
      },
      {
        title: "Étude de marché",
        context: "Projet d'étude de marché.",
        problem: "[[Marché / produit étudié]]",
        did: "[[Conception du questionnaire, échantillon, analyse]]",
        stack: ["Conception d'enquête", "Statistiques"],
        outcome: "[[Principal résultat]]",
      },
      {
        title: "Simulation en comportement organisationnel",
        context: "Simulation de comportement organisationnel.",
        problem: "[[Sujet de la simulation]]",
        did: "[[Votre rôle et vos décisions]]",
        stack: ["Travail d'équipe", "Prise de décision"],
        outcome: "[[Résultat / classement]]",
      },
      {
        title: "Front-end de Rafeeq",
        context: "Le site web de Rafeeq : un espace de confiance où les propriétaires d'animaux trouvent un pet-sitter.",
        problem: "Propriétaires et pet-sitters ont besoin d'un moyen simple et fiable de s'inscrire et de se trouver, en commençant par Le Caire, Alexandrie et Gizeh.",
        did: "Création de l'identité visuelle (logo et icône) et des premières pages en HTML et CSS : accueil, connexion, inscription avec choix propriétaire ou pet-sitter, et espaces dédiés pour chacun.",
        stack: ["HTML", "CSS", "Design d'interface", "Identité visuelle"],
        outcome: "Un prototype fonctionnel de 5 pages avec une navigation selon le rôle et un teaser de lancement « bientôt disponible » (@rafeeq.eg).",
      },
    ],
  },

  EVENTS: [
    {
      title: "Journée d'orientation de l'UFE pour les chefs d'établissement",
      org: "Université Française d'Égypte (UFE)",
      when: "Février 2026",
      kind: "Événement universitaire",
      points: ["L'UFE a accueilli des représentants et directeurs d'établissements scolaires pour leur présenter l'université et ses formations.", "[[Votre rôle, ex. étudiant ambassadeur présentant la licence BIDA]]"],
    },
    {
      title: "AI Everything Middle East & Africa, Égypte 2026",
      org: "Salon AI Everything, Le Caire",
      when: "15 février 2026",
      kind: "Salon",
      points: ["Visite du grand salon de l'intelligence artificielle de la région avec d'autres étudiants de l'UFE.", "[[Ce que vous y avez vu ou appris]]"],
    },
    {
      title: "GCI World 2026",
      org: "Matsuo Lab, Université de Tokyo",
      when: "Avril 2026",
      kind: "Programme international",
      points: ["Sélectionné pour la promotion d'avril 2026 de GCI World, le programme de data science en ligne du Matsuo Laboratory de l'Université de Tokyo.", "[[Thèmes abordés et projet final]]"],
    },
    {
      title: "Forum emploi UFE WORX",
      org: "Career Center de l'UFE",
      when: "21 avril 2026",
      kind: "Forum emploi",
      points: ["Forum de recrutement avec des entreprises comme Crédit Agricole, Colas Rail, RATP Dev, Hilton et Schneider Electric.", "[[Votre rôle, ex. équipe d'organisation ou accueil]]"],
    },
    {
      title: "Atelier « L'IA dans l'enseignement supérieur »",
      org: "Université Française d'Égypte (UFE)",
      when: "Mai 2026",
      kind: "Atelier",
      points: ["Atelier à l'UFE sur la façon dont l'intelligence artificielle transforme l'enseignement et l'apprentissage à l'université.", "[[Ce que vous en avez retenu]]"],
    },
    {
      title: "Stage d'été à l'Amreya Petroleum Refining Co. (APRC)",
      org: "Amreya Petroleum Refining Company, Alexandrie",
      when: "Août 2026",
      kind: "Stage de découverte",
      points: ["Un mois de stage d'été, pour découvrir le fonctionnement d'une grande entreprise industrielle.", "Validé par une attestation de « très bonne conduite » délivrée par le service RH de l'APRC.", "[[Ce que vous avez observé, ex. la circulation des données entre les services]]"],
    },
  ],

  SKILLS: [
    { group: "Programmation", items: [{ note: "[[niveau]]" }, { note: "[[niveau]]" }, { note: "[[niveau]]" }] },
    { group: "Data & statistiques", items: [
      { note: "[[niveau]]" },
      { name: "Statistiques descriptives et inférentielles", note: "[[niveau]]" },
      { name: "Séries temporelles", note: "[[niveau]]" },
    ]},
    { group: "BI & visualisation", items: [{ note: "[[niveau]]" }, { note: "[[niveau]]" }, { note: "[[niveau]]" }] },
    { group: "Bases de données", items: [
      { name: "Modélisation relationnelle (MCD)", note: "[[niveau]]" },
      { note: "[[niveau]]" },
      { note: "[[niveau]]" },
    ]},
    { group: "Outils", items: [{ note: "[[niveau]]" }, { note: "[[niveau]]" }, { note: "[[niveau]]" }] },
    { group: "Langues", items: [
      { name: "Arabe", note: "Langue maternelle" },
      { name: "Français", note: "B2 (DELF)" },
      { name: "Anglais", note: "[[niveau]]" },
    ]},
  ],

  CERTIFICATES: [
    { issuer: "CIEP (aujourd'hui France Éducation international)", date: "Juillet 2018" },
    { date: "2026" },
    { title: "Fondamentaux des bases de données", date: "Août 2026" },
    { title: "Requêtes Transact-SQL sous SQL Server", date: "Août 2026" },
    { title: "Bases de la programmation en Python", date: "Août 2026" },
    { title: "AI Fluency for Students", date: "Juin 2026" },
    { title: "Claude 101", date: "Juin 2026" },
  ],
};
