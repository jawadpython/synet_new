import type { Course } from "../types";

export const coursesFr: Course[] = [
  {
    id: "ccna-networking",
    slug: "formation-reseaux",
    category: "networking",
    name: "Formation CCNA — Réseaux Cisco",
    shortDescription:
      "Maîtrisez la conception, l'installation et la maintenance des réseaux Cisco de niveau entreprise.",
    description:
      "Cette formation intensive couvre les fondamentaux du routage et de la commutation Cisco, la configuration VLAN, OSPF, la sécurité réseau de base et le dépannage. Conçue pour les techniciens et administrateurs réseau, elle combine théorie et travaux pratiques en laboratoire avec équipements Cisco réels.",
    duration: "5 jours (40 heures)",
    level: "intermediate",
    schedule: "Lun – Ven, 9h00 – 17h00",
    instructor: {
      name: "Karim Benali",
      title: "Ingénieur réseau certifié CCNP",
      bio: "15 ans d'expérience en déploiement réseau pour PME et opérateurs. Formateur Cisco depuis 2018.",
    },
    price: "12 500 MAD",
    priceNote: "Matériel de lab et supports inclus",
    certification: "Préparation CCNA 200-301",
    outcomes: [
      "Configurer routeurs et commutateurs Cisco",
      "Implémenter VLAN, trunking et inter-VLAN routing",
      "Dépanner les problèmes de connectivité réseau",
      "Appliquer les bonnes pratiques de sécurité réseau",
    ],
    prerequisites: [
      "Connaissances de base en informatique",
      "Notions TCP/IP recommandées",
    ],
    sessions: [
      { startDate: "2026-07-15", endDate: "2026-07-19", format: "Présentiel", spotsLeft: 4 },
      { startDate: "2026-09-08", endDate: "2026-09-12", format: "Présentiel", spotsLeft: 8 },
    ],
    imageVariant: "network",
  },
  {
    id: "linux-admin",
    slug: "formation-linux",
    category: "linux",
    name: "Formation Linux — Administration système",
    shortDescription:
      "Apprenez à administrer des serveurs Linux en environnement de production.",
    description:
      "Formation pratique couvrant l'installation, la gestion des utilisateurs, les permissions, les services système, la gestion des paquets, les scripts Bash et la surveillance. Idéale pour les débutants souhaitant évoluer vers l'administration système.",
    duration: "5 jours (40 heures)",
    level: "beginner",
    schedule: "Lun – Ven, 9h00 – 17h00",
    instructor: {
      name: "Sara El Amrani",
      title: "Administratrice système Linux certifiée LPIC-2",
      bio: "Spécialiste Linux en production depuis 10 ans. Experte en automatisation et conteneurisation.",
    },
    price: "9 800 MAD",
    priceNote: "Accès lab 30 jours inclus",
    certification: "Préparation LPIC-1",
    outcomes: [
      "Administrer un serveur Linux Debian/RHEL",
      "Gérer utilisateurs, permissions et processus",
      "Configurer services réseau essentiels",
      "Automatiser des tâches avec Bash",
    ],
    prerequisites: ["Aucun prérequis technique obligatoire"],
    sessions: [
      { startDate: "2026-08-05", endDate: "2026-08-09", format: "Présentiel", spotsLeft: 6 },
      { startDate: "2026-10-13", endDate: "2026-10-17", format: "Présentiel", spotsLeft: 10 },
    ],
    imageVariant: "linux",
  },
  {
    id: "cybersecurity",
    slug: "formation-cybersecurite",
    category: "cybersecurity",
    name: "Formation Cybersécurité — Sécurité des réseaux",
    shortDescription:
      "Protégez vos infrastructures avec des techniques de sécurité réseau éprouvées.",
    description:
      "Formation orientée pratique sur les menaces courantes, les pare-feu, IDS/IPS, VPN, durcissement des systèmes et réponse aux incidents. Les participants réalisent des exercices de sécurisation et d'audit sur infrastructure de lab.",
    duration: "5 jours (40 heures)",
    level: "intermediate",
    schedule: "Lun – Ven, 9h00 – 17h00",
    instructor: {
      name: "Youssef Tazi",
      title: "Expert cybersécurité — CEH, Fortinet NSE4",
      bio: "Consultant sécurité pour organisations publiques et privées. 12 ans d'expérience SOC et audit.",
    },
    price: "14 200 MAD",
    certification: "Préparation CEH (module introductif)",
    outcomes: [
      "Identifier et mitiger les menaces réseau",
      "Configurer pare-feu et VPN professionnels",
      "Réaliser un audit de sécurité de base",
      "Appliquer un plan de réponse aux incidents",
    ],
    prerequisites: [
      "Expérience réseau ou administration système",
      "Connaissance TCP/IP requise",
    ],
    sessions: [
      { startDate: "2026-07-22", endDate: "2026-07-26", format: "Présentiel", spotsLeft: 3 },
      { startDate: "2026-11-03", endDate: "2026-11-07", format: "Présentiel", spotsLeft: 8 },
    ],
    imageVariant: "security",
  },
  {
    id: "cloud-computing",
    slug: "formation-cloud",
    category: "cloud",
    name: "Formation Cloud — AWS & Azure Essentials",
    shortDescription:
      "Déployez et gérez des workloads cloud sur les principales plateformes du marché.",
    description:
      "Formation couvrant les concepts IaaS/PaaS/SaaS, la mise en place de machines virtuelles, le stockage, les réseaux cloud, l'identité et la facturation. Labs pratiques sur AWS et Azure avec scénarios d'entreprise.",
    duration: "5 jours (40 heures)",
    level: "intermediate",
    schedule: "Lun – Ven, 9h00 – 17h00",
    instructor: {
      name: "Nadia Berrada",
      title: "Architecte cloud certifiée AWS SAA & Azure AZ-104",
      bio: "Architecte cloud pour migrations d'entreprise. 8 ans d'expérience multi-cloud.",
    },
    price: "13 500 MAD",
    certification: "Préparation AWS Cloud Practitioner",
    outcomes: [
      "Déployer des ressources sur AWS et Azure",
      "Configurer réseaux et sécurité cloud",
      "Estimer et optimiser les coûts cloud",
      "Planifier une migration vers le cloud",
    ],
    prerequisites: ["Notions réseau et système recommandées"],
    sessions: [
      { startDate: "2026-08-18", endDate: "2026-08-22", format: "Présentiel", spotsLeft: 7 },
    ],
    imageVariant: "cloud",
  },
  {
    id: "sap-training",
    slug: "formation-sap",
    category: "sap",
    name: "Formation SAP — Fondamentaux ERP",
    shortDescription:
      "Initiez-vous aux modules SAP essentiels pour la gestion d'entreprise.",
    description:
      "Formation d'introduction aux processus métier SAP, navigation SAP GUI/Fiori, modules FI/CO et MM, et bonnes pratiques de paramétrage. Orientée consultants et utilisateurs métier souhaitant monter en compétence.",
    duration: "5 jours (40 heures)",
    level: "beginner",
    schedule: "Lun – Ven, 9h00 – 17h00",
    instructor: {
      name: "Hassan Mouline",
      title: "Consultant SAP certifié",
      bio: "15 ans de déploiements SAP en industrie et distribution au Maroc et en Europe.",
    },
    price: "15 800 MAD",
    outcomes: [
      "Naviguer dans l'environnement SAP",
      "Comprendre les flux FI/CO et MM",
      "Configurer des paramètres de base",
      "Collaborer avec des équipes projet SAP",
    ],
    prerequisites: ["Culture entreprise et processus métier"],
    sessions: [
      { startDate: "2026-09-22", endDate: "2026-09-26", format: "Présentiel", spotsLeft: 5 },
    ],
    imageVariant: "sap",
  },
  {
    id: "microsoft-tech",
    slug: "technologies-microsoft",
    category: "microsoft",
    name: "Formation Microsoft — Server & Active Directory",
    shortDescription:
      "Administrez Windows Server, Active Directory et les services d'infrastructure Microsoft.",
    description:
      "Formation complète sur Windows Server 2022, Active Directory, DNS/DHCP, GPO, et intégration Azure AD. Travaux pratiques sur infrastructure de lab pour environnements PME et entreprise.",
    duration: "5 jours (40 heures)",
    level: "intermediate",
    schedule: "Lun – Ven, 9h00 – 17h00",
    instructor: {
      name: "Amine Chraibi",
      title: "MCT — Microsoft Certified Trainer",
      bio: "Formateur Microsoft certifié avec 10 ans d'expérience infrastructure Windows.",
    },
    price: "12 800 MAD",
    certification: "Préparation AZ-800 / Windows Server",
    outcomes: [
      "Déployer et gérer Windows Server",
      "Administrer Active Directory et GPO",
      "Configurer DNS, DHCP et fichiers",
      "Intégrer Azure AD pour l'identité hybride",
    ],
    prerequisites: ["Expérience administration Windows de base"],
    sessions: [
      { startDate: "2026-10-06", endDate: "2026-10-10", format: "Présentiel", spotsLeft: 6 },
    ],
    imageVariant: "microsoft",
  },
  {
    id: "corporate-training",
    slug: "formation-entreprise",
    category: "corporate",
    name: "Formation Entreprise — Programmes sur mesure",
    shortDescription:
      "Programmes de formation IT personnalisés pour vos équipes, sur site ou à distance.",
    description:
      "SYNET conçoit des parcours de formation adaptés à vos objectifs métier : montée en compétences réseau, sécurité, cloud ou bureautique avancée. Contenu modulable, planning flexible, rapports de progression inclus.",
    duration: "Sur mesure (2 à 10 jours)",
    level: "all-levels",
    schedule: "Selon vos disponibilités",
    instructor: {
      name: "Équipe pédagogique SYNET",
      title: "Instructeurs certifiés multi-domaines",
      bio: "Plus de 20 formateurs experts mobilisables selon le programme choisi.",
    },
    price: "Sur devis",
    priceNote: "Tarif dégressif pour groupes",
    outcomes: [
      "Programme aligné sur vos besoins métier",
      "Formation intra-entreprise ou en centre",
      "Évaluation des compétences avant/après",
      "Certificat de participation SYNET",
    ],
    prerequisites: ["Analyse des besoins préalable incluse"],
    sessions: [
      { startDate: "2026-07-01", endDate: "2026-12-31", format: "Sur mesure" },
    ],
    imageVariant: "corporate",
  },
];
