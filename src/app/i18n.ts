export type Lang = 'en' | 'fr';

export interface Heading {
  before: string;
  highlight: string;
}

export interface Bullet {
  label: string;
  text: string;
}

export interface Job {
  title: string;
  date: string;
  text?: string;
  bullets?: Bullet[];
}

export interface Project {
  title: string;
  desc: string;
  tools: string[];
}

export interface Content {
  nav: { about: string; skills: string; experience: string; projects: string; education: string; certifications: string; contact: string };
  themeLight: string;
  themeDark: string;
  hero: { titleLine1: string; titleHighlight: string; intro: string; viewProjects: string; linkedin: string };
  skills: { heading: Heading; cards: { title: string; items: string[] }[] };
  experience: { heading: Heading; jobs: Job[] };
  projects: { heading: Heading; items: Project[] };
  education: { heading: Heading; items: { degree: string; date: string; school: string }[] };
  certifications: { heading: Heading; items: { name: string; issuer?: string }[] };
  contact: { heading: Heading; location: string; name: string; email: string; message: string; send: string };
  footer: string;
}

const PROJECT_TOOLS = {
  chatbot: ['Python', 'FastAPI', 'Gemini', 'WATI (WhatsApp API)', 'Firestore', 'Docker Compose', 'Caddy', "Let's Encrypt", 'Oracle Cloud', 'YAML'],
  pricing: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'LightGBM', 'XGBoost', 'SHAP', 'Joblib', 'Flask', 'Google Cloud Run', 'Firestore'],
  scraping: ['Python', 'SeleniumBase (UC mode)', 'Selenium', 'Requests', 'DataImpulse proxies', 'CapSolver', 'AWS Lambda', 'DynamoDB', 'EC2', 'Cron'],
  pipelines: ['Python', 'Pandas', 'SQL', 'Cron', 'EventBridge', 'PostgreSQL', 'DynamoDB', 'Firestore', 'AWS Lambda', 'Docker'],
  aws: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'EC2', 'EventBridge', 'CloudWatch', 'IAM', 'Boto3', 'Docker', 'Linux', 'Git', 'Bash'],
  vignette: ['Python', 'SeleniumBase', 'CapSolver', 'DataImpulse proxies', 'Requests', 'SSH tunnel (SOCKS)', 'Oracle Cloud', 'AWS EC2', 'Cron', 'Firestore', 'DynamoDB'],
  whatsapp: ['Python', 'WAHA (GOWS engine)', 'Docker', 'n8n', 'Anthropic API', 'Gemini', 'PostgreSQL', 'AWS Lambda', 'S3', 'FastAPI', 'Vercel', 'Tkinter'],
  dashboard: ['Streamlit', 'Python', 'Pandas', 'SQL'],
};

export const CONTENT: Record<Lang, Content> = {
  en: {
    nav: { about: 'About', skills: 'Skills', experience: 'Experience', projects: 'Projects', education: 'Education', certifications: 'Certifications', contact: 'Contact' },
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
    hero: {
      titleLine1: 'Data Analyst &',
      titleHighlight: 'ML Engineer',
      intro: "I build interactive dashboards and reports (Power BI, Streamlit) and turn raw, multi-source data into clear, business-oriented insights. Skilled in SQL, data modelling, KPI tracking, ETL workflows and data-quality assurance, processing 10,000+ records daily from 20+ sources. Master's degree in Data Science and Intelligent Systems.",
      viewProjects: 'View Projects',
      linkedin: 'LinkedIn',
    },
    skills: {
      heading: { before: 'Technical', highlight: 'Skills' },
      cards: [
        { title: 'BI & Data Modelling', items: ['Power BI (reports, interactive dashboards), Streamlit', 'Data storytelling for business stakeholders', 'ETL pipeline design & automation, data modelling, KPI tracking', 'Data validation & governance rules, deduplication, data quality monitoring'] },
        { title: 'Databases & Programming', items: ['SQL, PostgreSQL, SQL Server, MySQL', 'MongoDB, DynamoDB (NoSQL)', 'Python, Pandas, NumPy, Git, regex, asynchronous processing'] },
        { title: 'Cloud & Orchestration', items: ['AWS (Lambda, S3, EC2, DynamoDB, EventBridge, CloudWatch)', 'Docker, Linux', 'n8n (workflow automation), job scheduling with cron and EventBridge', 'CI/CD (Git, Bash, cron)'] },
        { title: 'Machine Learning & AI', items: ['Scikit-learn, PyTorch, NLP, computer vision', 'LLM integration (Anthropic API, Gemini Flash, DeepSeek)', 'Prompt engineering, RAG'] },
      ],
    },
    experience: {
      heading: { before: 'Professional', highlight: 'Experience' },
      jobs: [
        {
          title: 'Hasta - Casablanca | Data Analyst & ML Engineer',
          date: 'May 2025 - Present',
          bullets: [
            { label: 'AI customer-service chatbot:', text: 'WhatsApp assistant that answers customers from text, voice notes, images and PDFs with live Firestore data (FastAPI, Gemini, Docker, Oracle Cloud).' },
            { label: 'Vehicle pricing system:', text: 'ML ensemble (LightGBM, XGBoost, Random Forest) trained on 16,000+ cars, about 10% weighted error, served on Google Cloud Run.' },
            { label: 'Dynamic web scraping:', text: '20+ sources, including JavaScript-heavy, bot-protected sites (SeleniumBase, rotating proxies, captcha solving).' },
            { label: 'End-to-end data pipelines:', text: '10,000+ records daily with normalisation, deduplication, quality checks and automatic error repair, scheduled with cron and AWS EventBridge.' },
            { label: 'AWS infrastructure management:', text: 'production platform on Lambda, API Gateway, DynamoDB, S3, EC2, EventBridge, CloudWatch and IAM, with Docker.' },
            { label: 'Vignette & opposition automation:', text: 'vignette.ma processing and daily NARSA opposition checks through an SSH tunnel on Oracle Cloud.' },
            { label: 'WhatsApp data-collection agents:', text: 'WAHA, n8n, Anthropic API and Gemini turn group adverts and chats into structured data in PostgreSQL and AWS, replacing a manual process.' },
            { label: 'Monitoring dashboard:', text: 'Streamlit dashboard tracking pipeline health, data freshness and anomalies across 22 data tables.' },
          ],
        },
        {
          title: 'Auto Reduc - Nador | Data Scientist',
          date: 'March 2024 - September 2024',
          text: 'Developed data-quality monitoring dashboards, built automated data-extraction pipelines with error handling and retry logic, and defined cleaning and validation rules for image datasets (OpenCV, Pandas).',
        },
        {
          title: 'Maktoub Tech - Fes | Data Analyst',
          date: 'May 2023 - August 2023',
          text: 'Produced analytical reports and Power BI dashboards to track KPIs, built ETL pipelines for scraped e-commerce data, and an automated SQL Server scheduling system for daily data extraction.',
        },
      ],
    },
    projects: {
      heading: { before: 'Featured', highlight: 'Projects' },
      items: [
        { title: 'AI Customer-Service Chatbot', desc: "WhatsApp customer-service assistant for Hasta's car auctions. It understands text, voice notes, images and PDFs, follows written business rules and a knowledge base, and answers with live car and auction data read from Firestore. It runs as a Docker Compose stack on Oracle Cloud behind Caddy, with HTTPS (Let's Encrypt) and password protection, plus a browser chat simulator for safe testing.", tools: PROJECT_TOOLS.chatbot },
        { title: 'Vehicle Pricing System', desc: 'Predicts the price of a used car in Morocco from its make, model, year, mileage, body type and source. An ensemble of LightGBM, XGBoost, Random Forest and Gradient Boosting is trained on 16,000+ cars from fleet sellers, dealers and classified ads, with about 10% weighted error on a time-split test set. Quantile models and conformal calibration give a price range, SHAP explains each prediction, and a new model is promoted only when it passes automatic quality gates. Served as a Flask web app on Google Cloud Run; a daily bot prices new auction cars and writes the price back to Firestore.', tools: PROJECT_TOOLS.pricing },
        { title: 'Dynamic Web Scraping', desc: 'Collects car adverts and data from 20+ websites, including JavaScript-heavy pages protected against bots. It uses an undetected Chrome browser, rotating Moroccan proxies and automatic captcha solving, then cleans each record and saves it to DynamoDB through an API. Scrapers run on a schedule on EC2.', tools: PROJECT_TOOLS.scraping },
        { title: 'End-to-End Data Pipelines', desc: 'Moves data from 20+ sources into clean, analysis-ready tables, 10,000+ records a day. Scheduled jobs (cron on EC2 and AWS EventBridge) handle extraction, normalisation, deduplication (one licence plate = one car), quality reports and alerts. Repair rules fix impossible values, such as mileage written in thousands or a price with an extra zero, instead of deleting the rows. The output feeds the pricing model and the dashboards.', tools: PROJECT_TOOLS.pipelines },
        { title: 'AWS Infrastructure Management', desc: "Runs Hasta's production data platform on AWS. Lambda functions behind API Gateway serve and receive data, DynamoDB stores the scraped listings, S3 keeps photos private and shares them with short-lived links, EC2 runs the scheduled scrapers, EventBridge triggers jobs and CloudWatch watches logs and errors. Code is shipped with Git, Bash and cron-based CI/CD.", tools: PROJECT_TOOLS.aws },
        { title: 'Vignette & Opposition Automation', desc: "Automates two vehicle checks. Vignette: a bot opens vignette.ma in an undetected browser, solves the captcha, goes through rotating Moroccan proxies and saves each car's vignette result to Firestore and DynamoDB. Opposition: a daily job asks the NARSA service whether a car has an opposition, through a secure SSH tunnel to an Oracle Cloud server in Casablanca, because the site blocks other networks.", tools: PROJECT_TOOLS.vignette },
        { title: 'WhatsApp Data-Collection Agents', desc: 'Turns WhatsApp messages into structured car data. A listener connects to WhatsApp groups through WAHA, downloads the full history with photos, and groups messages into one advert per car. An LLM splits each advert into brand, model, price and more; photos go to a private S3 bucket and rows go through a Lambda API. A login-protected review page lets the team check and fix each car. A second agent, built with n8n and the Anthropic API, talks with sellers and buyers and saves the conversations in PostgreSQL. Together they replaced a fully manual process.', tools: PROJECT_TOOLS.whatsapp },
        { title: 'Pipeline Monitoring Dashboard', desc: 'One screen to see if the data is healthy. It tracks pipeline health, data freshness and anomalies across 22 data tables, and turns raw operational data into clear KPIs, so problems are seen and fixed fast.', tools: PROJECT_TOOLS.dashboard },
      ],
    },
    education: {
      heading: { before: '', highlight: 'Education' },
      items: [
        { degree: "Master's Degree in Data Science and Intelligent Systems", date: '2022 - 2024', school: 'Faculty of Multidisciplinary Studies of Nador' },
        { degree: 'Bachelor of Computer Science', date: '2019 - 2022', school: 'Faculty of Science and Technology of Settat' },
      ],
    },
    certifications: {
      heading: { before: '', highlight: 'Certifications' },
      items: [
        { name: 'Power BI', issuer: '365 Data Science' },
        { name: 'Data Analysis for Machine Learning', issuer: 'IBM' },
        { name: 'Mastering AWS Serverless: Hands-On with Core AWS Services', issuer: 'Udemy' },
      ],
    },
    contact: {
      heading: { before: 'Get In', highlight: 'Touch' },
      location: 'Casablanca, Morocco',
      name: 'Your Name',
      email: 'Your Email',
      message: 'Your Message',
      send: 'Send Message',
    },
    footer: '© 2026 Ghizlane CHTOUKI. All rights reserved.',
  },

  fr: {
    nav: { about: 'À propos', skills: 'Compétences', experience: 'Expérience', projects: 'Projets', education: 'Formation', certifications: 'Certifications', contact: 'Contact' },
    themeLight: 'Passer en mode clair',
    themeDark: 'Passer en mode sombre',
    hero: {
      titleLine1: 'Data Analyst &',
      titleHighlight: 'ML Engineer',
      intro: "Je crée des tableaux de bord et des rapports interactifs (Power BI, Streamlit) et je transforme des données brutes multi-sources en insights clairs et orientés métier. Compétences en SQL, modélisation de données, suivi de KPI, workflows ETL et assurance qualité des données, avec plus de 10 000 enregistrements traités chaque jour depuis plus de 20 sources. Master en Data Science et Systèmes Intelligents.",
      viewProjects: 'Voir les projets',
      linkedin: 'LinkedIn',
    },
    skills: {
      heading: { before: 'Compétences', highlight: 'techniques' },
      cards: [
        { title: 'BI & modélisation de données', items: ['Power BI (rapports, tableaux de bord interactifs), Streamlit', 'Data storytelling pour les équipes métier', 'Conception et automatisation de pipelines ETL, modélisation de données, suivi de KPI', 'Règles de validation et de gouvernance, déduplication, suivi de la qualité des données'] },
        { title: 'Bases de données & programmation', items: ['SQL, PostgreSQL, SQL Server, MySQL', 'MongoDB, DynamoDB (NoSQL)', 'Python, Pandas, NumPy, Git, regex, traitement asynchrone'] },
        { title: 'Cloud & orchestration', items: ['AWS (Lambda, S3, EC2, DynamoDB, EventBridge, CloudWatch)', 'Docker, Linux', 'n8n (automatisation de workflows), planification des tâches avec cron et EventBridge', 'CI/CD (Git, Bash, cron)'] },
        { title: 'Machine Learning & IA', items: ['Scikit-learn, PyTorch, NLP, vision par ordinateur', 'Intégration de LLM (Anthropic API, Gemini Flash, DeepSeek)', 'Prompt engineering, RAG'] },
      ],
    },
    experience: {
      heading: { before: 'Expérience', highlight: 'professionnelle' },
      jobs: [
        {
          title: 'Hasta - Casablanca | Data Analyst & ML Engineer',
          date: 'Mai 2025 - Aujourd’hui',
          bullets: [
            { label: 'Chatbot IA de service client :', text: 'assistant WhatsApp qui répond aux clients à partir de textes, messages vocaux, images et PDF, avec des données Firestore en temps réel (FastAPI, Gemini, Docker, Oracle Cloud).' },
            { label: 'Système de prix des véhicules :', text: 'ensemble de modèles ML (LightGBM, XGBoost, Random Forest) entraîné sur plus de 16 000 voitures, environ 10 % d’erreur pondérée, déployé sur Google Cloud Run.' },
            { label: 'Web scraping dynamique :', text: 'plus de 20 sources, dont des sites riches en JavaScript et protégés contre les bots (SeleniumBase, proxies rotatifs, résolution de captchas).' },
            { label: 'Pipelines de données de bout en bout :', text: 'plus de 10 000 enregistrements par jour avec normalisation, déduplication, contrôles qualité et correction automatique des erreurs, planifiés avec cron et AWS EventBridge.' },
            { label: 'Gestion de l’infrastructure AWS :', text: 'plateforme de production sur Lambda, API Gateway, DynamoDB, S3, EC2, EventBridge, CloudWatch et IAM, avec Docker.' },
            { label: 'Automatisation vignette & opposition :', text: 'traitement des vignettes sur vignette.ma et vérification quotidienne des oppositions NARSA via un tunnel SSH sur Oracle Cloud.' },
            { label: 'Agents de collecte WhatsApp :', text: 'WAHA, n8n, Anthropic API et Gemini transforment les annonces et conversations de groupes en données structurées dans PostgreSQL et AWS, à la place d’un processus manuel.' },
            { label: 'Tableau de bord de suivi :', text: 'tableau de bord Streamlit qui suit la santé des pipelines, la fraîcheur des données et les anomalies sur 22 tables.' },
          ],
        },
        {
          title: 'Auto Reduc - Nador | Data Scientist',
          date: 'Mars 2024 - Septembre 2024',
          text: 'Création de tableaux de bord de suivi de la qualité des données, de pipelines d’extraction automatisés avec gestion des erreurs et relances, et définition de règles de nettoyage et de validation pour des jeux d’images (OpenCV, Pandas).',
        },
        {
          title: 'Maktoub Tech - Fès | Data Analyst',
          date: 'Mai 2023 - Août 2023',
          text: 'Production de rapports analytiques et de tableaux de bord Power BI pour suivre les KPI, création de pipelines ETL pour des données e-commerce collectées par scraping, et d’un système de planification automatisé (SQL Server) pour l’extraction quotidienne des données.',
        },
      ],
    },
    projects: {
      heading: { before: 'Projets', highlight: 'phares' },
      items: [
        { title: 'Chatbot IA de service client', desc: "Assistant WhatsApp de service client pour les ventes aux enchères de voitures de Hasta. Il comprend les textes, messages vocaux, images et PDF, suit des règles métier écrites et une base de connaissances, et répond avec les données en temps réel des voitures et des enchères lues dans Firestore. Il tourne dans une stack Docker Compose sur Oracle Cloud derrière Caddy, avec HTTPS (Let's Encrypt) et protection par mot de passe, ainsi qu’un simulateur de chat dans le navigateur pour tester sans risque.", tools: PROJECT_TOOLS.chatbot },
        { title: 'Système de prix des véhicules', desc: 'Prédit le prix d’une voiture d’occasion au Maroc à partir de la marque, du modèle, de l’année, du kilométrage, de la carrosserie et de la source. Un ensemble LightGBM, XGBoost, Random Forest et Gradient Boosting est entraîné sur plus de 16 000 voitures (loueurs, concessionnaires et petites annonces), avec environ 10 % d’erreur pondérée sur un jeu de test découpé dans le temps. Des modèles quantiles et une calibration conforme donnent une fourchette de prix, SHAP explique chaque prédiction, et un nouveau modèle n’est mis en production que s’il passe des contrôles qualité automatiques. Application Flask sur Google Cloud Run ; un bot quotidien estime les nouvelles voitures aux enchères et écrit le prix dans Firestore.', tools: PROJECT_TOOLS.pricing },
        { title: 'Web scraping dynamique', desc: 'Collecte les annonces et les données de voitures sur plus de 20 sites, dont des pages riches en JavaScript et protégées contre les bots. Utilise un navigateur Chrome indétectable, des proxies marocains rotatifs et la résolution automatique des captchas, puis nettoie chaque enregistrement et l’enregistre dans DynamoDB via une API. Les scrapers tournent selon un planning sur EC2.', tools: PROJECT_TOOLS.scraping },
        { title: 'Pipelines de données de bout en bout', desc: 'Transfère les données de plus de 20 sources vers des tables propres et prêtes pour l’analyse, plus de 10 000 enregistrements par jour. Des tâches planifiées (cron sur EC2 et AWS EventBridge) gèrent l’extraction, la normalisation, la déduplication (une plaque = une voiture), les rapports qualité et les alertes. Des règles de correction réparent les valeurs impossibles, comme un kilométrage écrit en milliers ou un prix avec un zéro en trop, au lieu de supprimer les lignes. Les résultats alimentent le modèle de prix et les tableaux de bord.', tools: PROJECT_TOOLS.pipelines },
        { title: 'Gestion de l’infrastructure AWS', desc: 'Fait tourner la plateforme de données de production de Hasta sur AWS. Des fonctions Lambda derrière API Gateway servent et reçoivent les données, DynamoDB stocke les annonces collectées, S3 garde les photos privées et les partage avec des liens temporaires, EC2 exécute les scrapers planifiés, EventBridge déclenche les tâches et CloudWatch surveille les logs et les erreurs. Le code est livré avec Git, Bash et une CI/CD basée sur cron.', tools: PROJECT_TOOLS.aws },
        { title: 'Automatisation vignette & opposition', desc: 'Automatise deux vérifications de véhicules. Vignette : un bot ouvre vignette.ma dans un navigateur indétectable, résout le captcha, passe par des proxies marocains rotatifs et enregistre le résultat de chaque voiture dans Firestore et DynamoDB. Opposition : une tâche quotidienne interroge le service de la NARSA pour savoir si une voiture a une opposition, via un tunnel SSH sécurisé vers un serveur Oracle Cloud à Casablanca, car le site bloque les autres réseaux.', tools: PROJECT_TOOLS.vignette },
        { title: 'Agents de collecte WhatsApp', desc: 'Transforme des messages WhatsApp en données structurées sur les voitures. Un listener se connecte aux groupes WhatsApp via WAHA, télécharge tout l’historique avec les photos et regroupe les messages en une annonce par voiture. Un LLM découpe chaque annonce en marque, modèle, prix, etc. ; les photos vont dans un bucket S3 privé et les lignes passent par une API Lambda. Une page de revue protégée par mot de passe permet à l’équipe de vérifier et corriger chaque voiture. Un second agent, construit avec n8n et l’Anthropic API, discute avec les vendeurs et les acheteurs et enregistre les conversations dans PostgreSQL. Ensemble, ils ont remplacé un processus entièrement manuel.', tools: PROJECT_TOOLS.whatsapp },
        { title: 'Tableau de bord de suivi des pipelines', desc: 'Un seul écran pour voir si les données sont saines. Il suit la santé des pipelines, la fraîcheur des données et les anomalies sur 22 tables, et transforme les données opérationnelles brutes en KPI clairs, pour repérer et corriger les problèmes rapidement.', tools: PROJECT_TOOLS.dashboard },
      ],
    },
    education: {
      heading: { before: '', highlight: 'Formation' },
      items: [
        { degree: 'Master en Data Science et Systèmes Intelligents', date: '2022 - 2024', school: 'Faculté Pluridisciplinaire de Nador' },
        { degree: 'Licence en Informatique', date: '2019 - 2022', school: 'Faculté des Sciences et Techniques de Settat' },
      ],
    },
    certifications: {
      heading: { before: '', highlight: 'Certifications' },
      items: [
        { name: 'Power BI', issuer: '365 Data Science' },
        { name: 'Data Analysis for Machine Learning', issuer: 'IBM' },
        { name: 'Mastering AWS Serverless: Hands-On with Core AWS Services', issuer: 'Udemy' },
      ],
    },
    contact: {
      heading: { before: 'Me', highlight: 'contacter' },
      location: 'Casablanca, Maroc',
      name: 'Votre nom',
      email: 'Votre e-mail',
      message: 'Votre message',
      send: 'Envoyer le message',
    },
    footer: '© 2026 Ghizlane CHTOUKI. Tous droits réservés.',
  },

};
