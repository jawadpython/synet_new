import type { Service } from "../types";

export const servicesFr: Service[] = [
  {
    id: "network-infrastructure",
    slug: "infrastructure-reseau",
    icon: "network",
    name: "Infrastructure réseau",
    shortDescription:
      "Conception, déploiement et optimisation de réseaux fiables pour PME, écoles et organisations.",
    description:
      "SYNET conçoit et déploie des infrastructures réseau adaptées à vos besoins opérationnels : câblage structuré, Wi-Fi entreprise, routage, segmentation VLAN et supervision. Nos ingénieurs certifiés garantissent une connectivité stable, sécurisée et évolutive.",
    benefits: [
      { title: "Réseau fiable", description: "Architecture redondante et dimensionnée pour vos usages réels, avec un minimum de temps d'arrêt." },
      { title: "Performance optimisée", description: "Débit, latence et couverture Wi-Fi calibrés pour bureaux, ateliers et sites multi-bâtiments." },
      { title: "Sécurité intégrée", description: "Segmentation, pare-feu périmétrique et bonnes pratiques dès la phase de conception." },
      { title: "Support continu", description: "Maintenance proactive, supervision et intervention rapide par une équipe locale." },
    ],
    process: [
      { step: 1, title: "Audit & analyse", description: "Évaluation de l'existant, besoins métier et contraintes techniques sur site." },
      { step: 2, title: "Conception", description: "Architecture réseau, schémas, BOM et planning de déploiement validés avec vous." },
      { step: 3, title: "Déploiement", description: "Installation, configuration et tests de charge en conditions réelles." },
      { step: 4, title: "Mise en production", description: "Bascule contrôlée, documentation livrée et formation de vos équipes." },
      { step: 5, title: "Support & évolution", description: "Maintenance, mises à jour et évolutions selon la croissance de votre organisation." },
    ],
    technologies: ["Cisco", "Fortinet", "Ubiquiti", "HPE Aruba", "MikroTik", "Wireshark", "Zabbix", "PRTG"],
    imageVariant: "network",
  },
  {
    id: "cybersecurity",
    slug: "cybersecurite",
    icon: "shield",
    name: "Cybersécurité",
    shortDescription:
      "Protection proactive de vos systèmes, données et utilisateurs contre les menaces numériques.",
    description:
      "Nos experts cybersécurité déploient des solutions de protection adaptées à votre niveau de risque : pare-feu nouvelle génération, détection d'intrusion, durcissement des postes, sauvegarde sécurisée et sensibilisation des équipes.",
    benefits: [
      { title: "Réduction des risques", description: "Identification et correction des vulnérabilités avant exploitation." },
      { title: "Conformité", description: "Alignement sur les exigences sectorielles et les bonnes pratiques internationales." },
      { title: "Réponse rapide", description: "Procédures d'incident et équipe réactive pour limiter l'impact d'une attaque." },
      { title: "Visibilité totale", description: "Supervision des événements de sécurité et rapports compréhensibles pour la direction." },
    ],
    process: [
      { step: 1, title: "Évaluation des risques", description: "Cartographie des actifs, menaces et lacunes de sécurité." },
      { step: 2, title: "Plan de protection", description: "Priorisation des mesures court, moyen et long terme." },
      { step: 3, title: "Déploiement", description: "Mise en place des solutions de sécurité et durcissement des systèmes." },
      { step: 4, title: "Tests & validation", description: "Tests d'intrusion, simulation et ajustements." },
      { step: 5, title: "Surveillance", description: "Monitoring continu et revue périodique de la posture de sécurité." },
    ],
    technologies: ["Fortinet", "Cisco ASA", "CrowdStrike", "Kaspersky", "pfSense", "SIEM", "EDR", "Acronis"],
    imageVariant: "security",
  },
  {
    id: "voip",
    slug: "voip-telephonie-ip",
    icon: "phone",
    name: "VoIP & Téléphonie IP",
    shortDescription:
      "Solutions de communication unifiée pour connecter vos équipes et vos clients efficacement.",
    description:
      "SYNET intègre des solutions VoIP professionnelles : IPBX, téléphonie cloud, visioconférence et messagerie unifiée. Réduisez vos coûts télécom tout en améliorant la qualité et la mobilité de vos communications.",
    benefits: [
      { title: "Coûts maîtrisés", description: "Réduction des frais télécom grâce à la voix sur IP et les forfaits adaptés." },
      { title: "Mobilité", description: "Appels, messagerie et visio accessibles depuis le bureau, le terrain ou le domicile." },
      { title: "Intégration métier", description: "CRM, standard virtuel et files d'attente pour une meilleure relation client." },
      { title: "Qualité audio", description: "QoS réseau et configuration optimisée pour une voix claire et stable." },
    ],
    process: [
      { step: 1, title: "Analyse des besoins", description: "Nombre d'utilisateurs, sites, flux d'appels et intégrations souhaitées." },
      { step: 2, title: "Architecture VoIP", description: "Choix on-premise ou cloud, dimensionnement et plan de numérotation." },
      { step: 3, title: "Installation", description: "Déploiement IPBX, téléphones IP et configuration des utilisateurs." },
      { step: 4, title: "Migration", description: "Portabilité des numéros et bascule progressive sans interruption." },
      { step: 5, title: "Formation & support", description: "Prise en main par vos équipes et assistance technique continue." },
    ],
    technologies: ["3CX", "Cisco CUCM", "Yealink", "Grandstream", "SIP Trunk", "Microsoft Teams", "Asterisk", "QoS"],
    imageVariant: "voip",
  },
  {
    id: "web-development",
    slug: "developpement-web",
    icon: "code",
    name: "Développement Web",
    shortDescription:
      "Sites et applications web professionnels, performants et adaptés à votre image de marque.",
    description:
      "De la vitrine institutionnelle à l'application métier, SYNET développe des solutions web modernes, responsives et sécurisées. Nous intégrons SEO, multilingue et performances pour un retour sur investissement durable.",
    benefits: [
      { title: "Image professionnelle", description: "Design sobre et crédible aligné sur votre positionnement entreprise." },
      { title: "Performance", description: "Sites rapides, optimisés mobile et conformes aux standards actuels." },
      { title: "Sécurité web", description: "HTTPS, protection des formulaires et mises à jour régulières." },
      { title: "Évolutivité", description: "Architecture modulaire pour faire grandir votre plateforme avec votre activité." },
    ],
    process: [
      { step: 1, title: "Cadrage", description: "Objectifs, arborescence, contenus et spécifications fonctionnelles." },
      { step: 2, title: "Design & UX", description: "Maquettes validées selon votre charte et vos parcours utilisateurs." },
      { step: 3, title: "Développement", description: "Intégration, CMS ou application sur mesure, tests qualité." },
      { step: 4, title: "Mise en ligne", description: "Hébergement, DNS, SSL et recette finale." },
      { step: 5, title: "Maintenance", description: "Mises à jour, sauvegardes et évolutions fonctionnelles." },
    ],
    technologies: ["Next.js", "React", "WordPress", "TypeScript", "Tailwind CSS", "Vercel", "PostgreSQL", "SEO"],
    imageVariant: "web",
  },
  {
    id: "cloud-solutions",
    slug: "solutions-cloud",
    icon: "cloud",
    name: "Solutions Cloud",
    shortDescription:
      "Migration, hébergement et gestion de vos workloads cloud en toute sécurité.",
    description:
      "SYNET accompagne votre transformation cloud : audit, migration, architecture hybride et gestion quotidienne. Nous travaillons avec les principales plateformes pour optimiser coûts, disponibilité et sécurité.",
    benefits: [
      { title: "Flexibilité", description: "Ressources adaptables à la demande sans investissement matériel lourd." },
      { title: "Haute disponibilité", description: "Architectures résilientes avec sauvegarde et reprise après sinistre." },
      { title: "Optimisation des coûts", description: "Dimensionnement et gouvernance pour maîtriser la facturation cloud." },
      { title: "Sécurité cloud", description: "IAM, chiffrement et conformité intégrés à l'architecture." },
    ],
    process: [
      { step: 1, title: "Assessment cloud", description: "Inventaire des applications et stratégie de migration (lift, refactor)." },
      { step: 2, title: "Architecture", description: "Design réseau, identité, stockage et plan de bascule." },
      { step: 3, title: "Migration", description: "Transfert progressif des workloads avec tests de validation." },
      { step: 4, title: "Optimisation", description: "FinOps, monitoring et ajustement des ressources." },
      { step: 5, title: "Managed services", description: "Supervision, patching et support de niveau 2/3." },
    ],
    technologies: ["Microsoft Azure", "AWS", "Google Cloud", "VMware", "Docker", "Kubernetes", "Veeam", "Terraform"],
    imageVariant: "cloud",
  },
  {
    id: "it-support",
    slug: "support-maintenance-it",
    icon: "headset",
    name: "Support & Maintenance IT",
    shortDescription:
      "Assistance technique réactive et maintenance proactive pour garantir la continuité de vos activités.",
    description:
      "Notre équipe support assure le bon fonctionnement de votre parc informatique : helpdesk, maintenance préventive, gestion des incidents et renouvellement du matériel. Des forfaits adaptés à la taille de votre organisation.",
    benefits: [
      { title: "Réactivité", description: "Tickets traités selon SLA avec escalade vers des ingénieurs certifiés." },
      { title: "Continuité métier", description: "Maintenance préventive pour réduire les pannes imprévues." },
      { title: "Interlocuteur unique", description: "Un seul point de contact pour infrastructure, postes et logiciels." },
      { title: "Reporting clair", description: "Tableaux de bord et rapports mensuels pour piloter votre IT." },
    ],
    process: [
      { step: 1, title: "Prise en charge", description: "Inventaire du parc, documentation et définition des SLA." },
      { step: 2, title: "Helpdesk", description: "Mise en place du support utilisateur par ticket, téléphone ou remote." },
      { step: 3, title: "Maintenance préventive", description: "Plannings de visites, mises à jour et contrôles réguliers." },
      { step: 4, title: "Gestion des incidents", description: "Diagnostic, résolution et analyse de cause racine." },
      { step: 5, title: "Amélioration continue", description: "Revue trimestrielle et recommandations d'optimisation." },
    ],
    technologies: ["GLPI", "TeamViewer", "Microsoft 365", "Intune", "Active Directory", "WSUS", "Veeam", "N-able"],
    imageVariant: "support",
  },
  {
    id: "cctv",
    slug: "videosurveillance-controle-acces",
    icon: "camera",
    name: "Vidéosurveillance & Contrôle d'accès",
    shortDescription:
      "Sécurité physique intelligente pour protéger vos locaux, équipements et collaborateurs.",
    description:
      "SYNET déploie des systèmes de vidéosurveillance IP et de contrôle d'accès intégrés : caméras HD, enregistrement centralisé, visionnage à distance et gestion des badges. Solutions adaptées aux cliniques, écoles, usines et bureaux.",
    benefits: [
      { title: "Protection 24/7", description: "Surveillance continue avec alertes et enregistrement sécurisé." },
      { title: "Accès contrôlé", description: "Gestion fine des droits d'entrée par zone, horaire et profil." },
      { title: "Preuves fiables", description: "Enregistrements horodatés exploitables en cas d'incident." },
      { title: "Intégration", description: "Couplage vidéo + contrôle d'accès + alarme sur une plateforme unifiée." },
    ],
    process: [
      { step: 1, title: "Étude de site", description: "Analyse des accès, angles morts et contraintes réglementaires." },
      { step: 2, title: "Dimensionnement", description: "Choix des caméras, NVR, lecteurs et câblage." },
      { step: 3, title: "Installation", description: "Pose, câblage, configuration et tests de couverture." },
      { step: 4, title: "Paramétrage", description: "Profils d'accès, rétention vidéo et accès mobile sécurisé." },
      { step: 5, title: "Maintenance", description: "Vérifications périodiques, mises à jour firmware et support." },
    ],
    technologies: ["Hikvision", "Dahua", "Axis", "Milestone", "Bosch", "ZKTeco", "HID", "PoE"],
    imageVariant: "cctv",
  },
];
