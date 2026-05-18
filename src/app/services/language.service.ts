import { Injectable, signal, computed } from '@angular/core';

export type Lang = 'en' | 'fr';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private _lang = signal<Lang>('en');
  lang = this._lang.asReadonly();

  toggle() {
    this._lang.update(l => l === 'en' ? 'fr' : 'en');
  }

  t = computed(() => this._lang() === 'en' ? EN : FR);
}

export const EN = {
  nav: { home: 'Home', about: 'About', experience: 'Experience', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
  hero: {
    greeting: "// hello, I'm",
    name: 'Ilyas Abarri',
    tagline: 'Developer. Entrepreneur. Creative.',
    desc: 'Building digital experiences — from Tanger to the world.',
    cta1: 'About Me', cta2: 'View Work',
  },
  about: {
    title: 'About Me',
    p1: "Hi, I'm Ilyas — a 3rd-year International Commerce student at ENCG Tanger with a passion for building things that work. Since 2023, I've launched e-commerce operations across Saudi Arabia, Morocco, and Libya, developed full-stack web solutions for independent clients, and built brands from scratch.",
    p2: "I sit at the crossroads of business, technology, and creativity — whether I'm architecting a Shopify store, running paid campaigns on Meta and TikTok, designing a brand identity, or developing a custom Angular application. I'm not a specialist. I'm a builder.",
    p3: 'Currently open to freelance web development projects and digital strategy consulting.',
    cv: 'Download CV', cta1: 'Get in Touch', cta2: 'View Experience', cta3: 'See Projects',
  },
  exp: {
    title: 'Experience',
    intro: 'From e-commerce to web development, digital marketing to financial analysis — building across disciplines since 2023.',
    cta1: 'See Projects', cta2: 'Work Together',
    roles: [
      { date: '2023 – Present', title: 'E-commerce Entrepreneur & COD Logistics Specialist', company: 'Self-Founded', desc: 'Built and managed end-to-end e-commerce operations across Saudi Arabia, Morocco, and Libya. Handled international sourcing, supplier negotiations, order fulfillment, last-mile delivery, and multi-platform advertising on Meta and TikTok.', tags: ['Shopify', 'Meta Ads', 'TikTok Ads', 'COD Logistics', 'International Sourcing', 'LightFunnels'] },
      { date: '2024', title: 'Accounting Intern', company: 'Oslo Ascenseur', desc: 'Performed daily accounting tasks including journal entries, bank reconciliation, and monthly closings. Applied Moroccan accounting standards and financial analysis techniques.', tags: ['Accounting', 'Advanced Excel', 'Financial Analysis'] },
      { date: '2025', title: 'Full-Stack Web Developer (Freelance)', company: 'Independent', desc: 'Designed and developed multiple websites and web applications for Moroccan and international clients — covering e-commerce stores, landing pages, service platforms, and digital experiences.', tags: ['HTML/CSS', 'JavaScript', 'Angular', 'Shopify Liquid', 'WordPress', 'Responsive Design'] },
      { date: '2026', title: 'Social Media Manager', company: 'Gaming & Coffee Club', desc: 'Managed social media presence and content strategy. Produced visual content, handled community management, and grew engagement through targeted campaigns.', tags: ['Meta Business Suite', 'Content Strategy', 'Community Management', 'Canva'] },
    ],
  },
  projects: {
    title: 'Selected Projects',
    intro: 'A cross-section of platforms, e-commerce stores, and digital experiences — built for clients across Morocco, Libya, and beyond.',
    cta1: 'Work Together', cta2: 'Explore Skills',
    note: 'Plus many more WordPress sites and projects not yet deployed.',
    items: [
      { title: 'Dar Sakkinah', desc: 'A boutique wellness hotel platform in Chefchaouen — digital detox, organic living, and mindful hospitality.', url: 'https://darsakkinah.pages.dev', tags: ['Web Design', 'Cloudflare Pages'] },
      { title: 'Sinosource', desc: "Morocco's digital sourcing & trade platform connecting businesses with international suppliers.", url: 'https://sinosource.ma', tags: ['Web Dev', 'E-commerce'] },
      { title: 'Eco-Brique', desc: 'Platform for an ecological construction brick company presenting sustainable building solutions.', url: 'https://eco-brique.pages.dev', tags: ['Web Design', 'Sustainability'] },
      { title: 'Clean Pro Libya', desc: 'High-converting e-commerce landing page for a smart electric cleaning brush targeting Libya.', url: 'https://product1libya.pages.dev', tags: ['Landing Page', 'COD'] },
      { title: 'StitchPro Libya', desc: 'Product landing page for a portable handheld sewing machine for the Libyan market.', url: 'https://sewing-machine-9n3.pages.dev', tags: ['Landing Page', 'E-commerce'] },
      { title: 'VoltMax Libya', desc: 'Landing page for a 240W fast-charging cable targeting tech-savvy Libyan consumers.', url: 'https://charging-cable.pages.dev', tags: ['Landing Page', 'E-commerce'] },
      { title: 'Dar Sakkinah App', desc: 'Wellness companion web app — stress tracker, breathing tools, and mindfulness features.', url: 'https://darsakkinah-web-app.pages.dev', tags: ['Web App', 'Angular'] },
    ],
  },
  skills: {
    title: 'Skills & Stack',
    intro: 'From code to campaigns — built across the full digital spectrum.',
    cta1: 'Get in Touch', cta2: 'View Projects',
    categories: [
      { name: 'Web Development', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'Angular', 'Shopify Liquid', 'WordPress', 'Responsive Design', 'REST APIs'] },
      { name: 'E-commerce & Logistics', items: ['COD Model', 'International Sourcing', 'Stock Management', 'Last-Mile Delivery', 'Shopify', 'YouCan', 'LightFunnels'] },
      { name: 'Digital Marketing', items: ['Meta Ads', 'TikTok Ads', 'Google Ads', 'Community Management', 'Content Strategy', 'Google Analytics', 'Meta Business Suite'] },
      { name: 'Business & Finance', items: ['Financial Analysis', 'Accounting', 'Advanced Excel', 'Business Planning', 'International Commerce', 'Market Research'] },
      { name: 'Creative & Design', items: ['Photoshop', 'Video Editing', 'Canva', 'CapCut', 'Brand Identity', 'UI/UX Design'] },
      { name: 'Tools & Platforms', items: ['Trello', 'Notion', 'Google Workspace', 'Figma', 'GitHub', 'Cloudflare Pages'] },
    ],
  },
  contact: {
    title: "Let's Work Together",
    intro: "Whether it's a new website, a digital strategy, or an e-commerce build — I'm open to collaboration.",
    name: 'Your Name', email: 'Your Email', msg: 'Your Message', send: 'Send Message',
    or: 'Or reach me directly at', emailAddr: 'abarri.ilyas@gmail.com',
    location: 'Tanger, Morocco',
  },
  footer: {
    tagline: 'Developer. Entrepreneur. Creative.',
    navigate: 'Navigate', connect: 'Connect',
    copy: '© 2026 Ilyas Abarri', built: 'Built with Angular',
  },
};

export const FR: typeof EN = {
  nav: { home: 'Accueil', about: 'À Propos', experience: 'Expérience', projects: 'Projets', skills: 'Compétences', contact: 'Contact' },
  hero: {
    greeting: "// bonjour, je suis",
    name: 'Ilyas Abarri',
    tagline: 'Développeur. Entrepreneur. Créatif.',
    desc: 'Créateur d\'expériences numériques — de Tanger vers le monde.',
    cta1: 'À Propos', cta2: 'Mes Projets',
  },
  about: {
    title: 'À Propos de Moi',
    p1: "Bonjour, je suis Ilyas — étudiant en 3ème année de Commerce International à l'ENCG Tanger, passionné par la création de choses qui fonctionnent. Depuis 2023, j'ai lancé des opérations e-commerce en Arabie Saoudite, au Maroc et en Libye, développé des solutions web pour des clients indépendants, et construit des marques from scratch.",
    p2: "Je me situe à l'intersection du business, de la technologie et de la créativité — que je construise une boutique Shopify, gère des campagnes Meta et TikTok, conçoive une identité de marque ou développe une application Angular. Je ne suis pas un spécialiste. Je suis un bâtisseur.",
    p3: 'Actuellement disponible pour des projets web freelance et des missions de conseil en stratégie digitale.',
    cv: 'Télécharger CV', cta1: 'Me Contacter', cta2: 'Mon Expérience', cta3: 'Mes Projets',
  },
  exp: {
    title: 'Expérience',
    intro: "De l'e-commerce au développement web, du marketing digital à l'analyse financière — construire à travers les disciplines depuis 2023.",
    cta1: 'Mes Projets', cta2: 'Travailler Ensemble',
    roles: [
      { date: '2023 – Présent', title: 'Entrepreneur E-commerce & Spécialiste Logistique COD', company: 'Auto-Entrepreneur', desc: "Gestion bout en bout d'opérations e-commerce en Arabie Saoudite, Maroc et Libye. Sourcing international, négociation fournisseurs, fulfillment, coordination livraison et publicité multi-plateforme.", tags: ['Shopify', 'Meta Ads', 'TikTok Ads', 'COD Logistique', 'Sourcing International', 'LightFunnels'] },
      { date: '2024', title: 'Stagiaire Comptable', company: 'Oslo Ascenseur', desc: 'Réalisation des tâches comptables quotidiennes : saisie des écritures, rapprochement bancaire et clôtures mensuelles selon les normes marocaines.', tags: ['Comptabilité', 'Excel Avancé', 'Analyse Financière'] },
      { date: '2025', title: 'Développeur Web Full-Stack (Freelance)', company: 'Indépendant', desc: 'Conception et développement de plusieurs sites web et applications pour des clients marocains et internationaux — boutiques e-commerce, pages de vente, plateformes de services.', tags: ['HTML/CSS', 'JavaScript', 'Angular', 'Shopify Liquid', 'WordPress', 'Design Responsive'] },
      { date: '2026', title: 'Community Manager', company: 'Gaming & Coffee Club', desc: 'Gestion de la présence sur les réseaux sociaux et stratégie de contenu. Production de visuels, community management et croissance de l\'engagement.', tags: ['Meta Business Suite', 'Stratégie de Contenu', 'Community Management', 'Canva'] },
    ],
  },
  projects: {
    title: 'Projets Sélectionnés',
    intro: 'Une sélection de plateformes, boutiques e-commerce et expériences numériques — construites pour des clients au Maroc, en Libye et au-delà.',
    cta1: 'Travailler Ensemble', cta2: 'Mes Compétences',
    note: 'Plus de nombreux sites WordPress et projets non encore déployés.',
    items: [
      { title: 'Dar Sakkinah', desc: 'Plateforme pour un hôtel boutique bien-être à Chefchaouen — digital detox, vie organique et hospitalité consciente.', url: 'https://darsakkinah.pages.dev', tags: ['Web Design', 'Cloudflare Pages'] },
      { title: 'Sinosource', desc: "Plateforme marocaine de sourcing et commerce international connectant les entreprises avec des fournisseurs internationaux.", url: 'https://sinosource.ma', tags: ['Développement Web', 'E-commerce'] },
      { title: 'Eco-Brique', desc: "Plateforme pour une entreprise de briques écologiques présentant des solutions de construction durable.", url: 'https://eco-brique.pages.dev', tags: ['Web Design', 'Durabilité'] },
      { title: 'Clean Pro Libya', desc: 'Page de vente e-commerce pour une brosse électrique intelligente ciblant le marché libyen.', url: 'https://product1libya.pages.dev', tags: ['Landing Page', 'COD'] },
      { title: 'StitchPro Libya', desc: 'Page produit pour une machine à coudre portable ciblant le marché libyen.', url: 'https://sewing-machine-9n3.pages.dev', tags: ['Landing Page', 'E-commerce'] },
      { title: 'VoltMax Libya', desc: 'Landing page pour un câble de charge rapide 240W ciblant les consommateurs libyens.', url: 'https://charging-cable.pages.dev', tags: ['Landing Page', 'E-commerce'] },
      { title: 'Dar Sakkinah App', desc: 'Application web bien-être — suivi du stress, exercices de respiration et outils de pleine conscience.', url: 'https://darsakkinah-web-app.pages.dev', tags: ['Web App', 'Angular'] },
    ],
  },
  skills: {
    title: 'Compétences & Stack',
    intro: 'Du code aux campagnes — construit sur tout le spectre numérique.',
    cta1: 'Me Contacter', cta2: 'Voir les Projets',
    categories: [
      { name: 'Développement Web', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'Angular', 'Shopify Liquid', 'WordPress', 'Design Responsive', 'REST APIs'] },
      { name: 'E-commerce & Logistique', items: ['Modèle COD', 'Sourcing International', 'Gestion des Stocks', 'Livraison Dernier Km', 'Shopify', 'YouCan', 'LightFunnels'] },
      { name: 'Marketing Digital', items: ['Meta Ads', 'TikTok Ads', 'Google Ads', 'Community Management', 'Stratégie de Contenu', 'Google Analytics', 'Meta Business Suite'] },
      { name: 'Business & Finance', items: ['Analyse Financière', 'Comptabilité', 'Excel Avancé', 'Business Plan', 'Commerce International', 'Étude de Marché'] },
      { name: 'Créatif & Design', items: ['Photoshop', 'Montage Vidéo', 'Canva', 'CapCut', 'Identité de Marque', 'UI/UX Design'] },
      { name: 'Outils & Plateformes', items: ['Trello', 'Notion', 'Google Workspace', 'Figma', 'GitHub', 'Cloudflare Pages'] },
    ],
  },
  contact: {
    title: 'Travaillons Ensemble',
    intro: "Que ce soit un nouveau site, une stratégie digitale ou un projet e-commerce — je suis disponible pour collaborer.",
    name: 'Votre Nom', email: 'Votre Email', msg: 'Votre Message', send: 'Envoyer',
    or: 'Ou contactez-moi directement à', emailAddr: 'abarri.ilyas@gmail.com',
    location: 'Tanger, Maroc',
  },
  footer: {
    tagline: 'Développeur. Entrepreneur. Créatif.',
    navigate: 'Navigation', connect: 'Connexion',
    copy: '© 2026 Ilyas Abarri', built: 'Construit avec Angular',
  },
};
