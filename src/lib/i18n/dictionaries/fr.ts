import type { Dictionary } from "../types";

export const fr: Dictionary = {
  metadata: {
    title: "SYNET Casablanca — Formation informatique & solutions IT",
    description:
      "Centre de formation IT et prestataire informatique à Casablanca : CCNA, Linux, cybersécurité, cloud, SAP, Microsoft. Infrastructure et infogérance. Tél. +212 6 18 56 34 45.",
    keywords: [
      "formation informatique Casablanca",
      "centre de formation informatique Casablanca",
      "formation CCNA Casablanca",
      "formation Linux Casablanca",
      "formation cybersécurité Casablanca",
      "SYNET Casablanca",
      "entreprise informatique Casablanca",
      "prestataire IT Casablanca",
      "infogérance Casablanca",
      "cybersécurité Casablanca",
      "formation informatique Maroc",
    ],
  },
  skipToContent: "Aller au contenu principal",
  nav: {
    solutions: "Solutions entreprise",
    training: "Centre de formation",
    sectors: "Secteurs",
    caseStudies: "Réalisations",
    about: "À propos",
    resources: "Ressources",
    contact: "Contact",
    requestQuote: "Demander un devis",
    enroll: "S'inscrire",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    mainNav: "Navigation principale",
    paths: {
      sectors: "/secteurs",
      caseStudies: "/realisations",
      about: "/a-propos",
      contact: "/contact",
      requestQuote: "/demande-devis",
      enroll: "/inscription-formation",
      legal: {
        mentions: "/mentions-legales",
        privacy: "/politique-confidentialite",
        terms: "/conditions-utilisation",
      },
    },
  },
  navGroups: {
    solutions: {
      label: "Solutions entreprise",
      href: "/solutions-entreprise",
      columns: [
        {
          title: "Services",
          links: [
            { label: "Développement Web", href: "/solutions-entreprise/developpement-web" },
            { label: "Développement d'applications", href: "/solutions-entreprise/developpement-applications" },
            { label: "Infrastructure réseau", href: "/solutions-entreprise/infrastructure-reseau" },
            { label: "Cybersécurité", href: "/solutions-entreprise/cybersecurite" },
          ],
        },
        {
          title: "Pour qui",
          links: [
            { label: "PME", href: "/secteurs/pme" },
            { label: "Écoles", href: "/secteurs/ecoles" },
            { label: "Cliniques", href: "/secteurs/cliniques" },
            { label: "Usines", href: "/secteurs/usines" },
            { label: "Organisations gouvernementales", href: "/secteurs/organisations-gouvernementales" },
          ],
        },
      ],
    },
    training: {
      label: "Centre de formation",
      href: "/centre-formation",
      columns: [
        {
          title: "Formations",
          links: [
            { label: "Formation Réseaux", href: "/centre-formation/formation-reseaux" },
            { label: "Formation Linux", href: "/centre-formation/formation-linux" },
            { label: "Formation Cybersécurité", href: "/centre-formation/formation-cybersecurite" },
            { label: "Formation Cloud", href: "/centre-formation/formation-cloud" },
            { label: "Formation SAP", href: "/centre-formation/formation-sap" },
            { label: "Formation Microsoft", href: "/centre-formation/technologies-microsoft" },
            { label: "Formation Entreprise", href: "/centre-formation/formation-entreprise" },
          ],
        },
        {
          title: "Publics",
          links: [
            { label: "Étudiants", href: "/centre-formation#etudiants" },
            { label: "Chercheurs d'emploi", href: "/centre-formation#chercheurs-emploi" },
            { label: "Professionnels IT", href: "/centre-formation#professionnels" },
            { label: "Entreprises", href: "/centre-formation/formation-entreprise" },
          ],
        },
      ],
    },
    about: {
      label: "À propos",
      href: "/a-propos",
      columns: [
        {
          title: "Entreprise",
          links: [
            { label: "Notre histoire & mission", href: "/a-propos" },
            { label: "Partenaires & certifications", href: "/a-propos/partenaires-certifications" },
          ],
        },
      ],
    },
    resources: {
      label: "Ressources",
      href: "/ressources",
      columns: [
        {
          title: "Ressources",
          links: [
            { label: "FAQ", href: "/ressources/faq" },
          ],
        },
      ],
    },
  },
  footer: {
    solutions: "Solutions",
    training: "Formation",
    company: "Entreprise",
    contact: "Contact",
    tagline:
      "Entreprise IT à Casablanca : infrastructure, cybersécurité, infogérance et formation professionnelle au Maroc.",
    legal: {
      mentions: "Mentions légales",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
    },
    copyright: "© 2026 SYNET. Tous droits réservés.",
    companyLinks: [
      { label: "À propos", href: "/a-propos" },
      { label: "FAQ", href: "/ressources/faq" },
    ],
    serviceLinks: [
      { label: "Développement Web", href: "/solutions-entreprise/developpement-web" },
      { label: "Développement d'applications", href: "/solutions-entreprise/developpement-applications" },
      { label: "Infrastructure réseau", href: "/solutions-entreprise/infrastructure-reseau" },
      { label: "Cybersécurité", href: "/solutions-entreprise/cybersecurite" },
    ],
    trainingLinks: [
      { label: "Formation Réseaux", href: "/centre-formation/formation-reseaux" },
      { label: "Formation Linux", href: "/centre-formation/formation-linux" },
      { label: "Formation Cybersécurité", href: "/centre-formation/formation-cybersecurite" },
      { label: "Formation Cloud", href: "/centre-formation/formation-cloud" },
      { label: "Formation SAP", href: "/centre-formation/formation-sap" },
      { label: "Formation Microsoft", href: "/centre-formation/technologies-microsoft" },
      { label: "Formation Entreprise", href: "/centre-formation/formation-entreprise" },
    ],
    contactInfo: {
      address: "Casablanca, Maroc",
      phone: "+212 6 18 56 34 45",
      email: "contact@synet.ma",
      hours: "Lun – Ven, 8h30 – 18h00",
    },
    whatsapp: "WhatsApp",
  },
  hero: {
    overline: "Solutions IT à Casablanca",
    headline: "Des systèmes IT fiables.",
    headlineAccent: "Des compétences pratiques.",
    lead: "À Casablanca, SYNET conçoit, sécurise et maintient vos systèmes informatiques, et forme vos équipes aux compétences réellement utilisées sur le terrain.",
    ctaSolutions: "Explorer nos solutions",
    ctaTraining: "Découvrir nos formations",
    chipBusiness: "Solutions entreprise",
    chipBusinessSub: "Infrastructure · Sécurité · Cloud",
    chipTraining: "Centre de formation",
    chipTrainingSub: "Réseaux · Linux · Cybersécurité",
    imageAlt: "Infrastructure IT d'entreprise — datacenter et systèmes réseau",
    trust: [
      { label: "Programmes de formation certifiés", icon: "award" },
      { label: "Expertise IT entreprise", icon: "building" },
      { label: "Support professionnel", icon: "headset" },
      { label: "Meilleures pratiques du secteur", icon: "check-circle" },
    ],
    stats: [
      { value: "500+", label: "Professionnels formés" },
      { value: "50+", label: "Clients entreprises" },
      { value: "20+", label: "Programmes de formation" },
      { value: "5+", label: "Années d'expérience" },
    ],
  },
  businessOverview: {
    id: "solutions-entreprise",
    overline: "SOLUTIONS ENTREPRISE",
    heading: "Des solutions IT complètes pour votre organisation",
    lead: "De l'infrastructure réseau à la cybersécurité, SYNET conçoit, déploie et maintient des systèmes fiables et sécurisés, adaptés aux exigences de votre secteur.",
    bullets: [
      "Conception et architecture sur mesure",
      "Déploiement clé en main et mise en production",
      "Support technique réactif et maintenance proactive",
      "Sécurité intégrée à chaque étape du projet",
    ],
    viewAllServices: "Voir tous les services",
    requestQuote: "Demander un devis",
    stats: [
      { value: "7", label: "domaines d'expertise IT" },
      { value: "1", label: "interlocuteur unique" },
      { value: "24h", label: "délai de réponse devis" },
      { value: "MA", label: "intervention au Maroc" },
    ],
    audiences: [
      { label: "PME", href: "/secteurs/pme", icon: "building" },
      { label: "Écoles", href: "/secteurs/ecoles", icon: "school" },
      { label: "Cliniques", href: "/secteurs/cliniques", icon: "hospital" },
      { label: "Usines", href: "/secteurs/usines", icon: "factory" },
      { label: "Gouvernement", href: "/secteurs/organisations-gouvernementales", icon: "landmark" },
    ],
  },
  trainingOverview: {
    id: "centre-formation",
    overline: "CENTRE DE FORMATION",
    heading: "Développez des compétences technologiques reconnues",
    lead: "Formations pratiques en réseaux, systèmes, cybersécurité et cloud — conçues pour l'emploi et dispensées par des professionnels certifiés.",
    bullets: [
      "Approche pratique avec exercices en laboratoire",
      "Instructeurs certifiés et actifs sur le terrain",
      "Préparation aux certifications internationales",
      "Laboratoire équipé avec technologies actuelles",
    ],
    viewAllTraining: "Voir toutes les formations",
    enroll: "S'inscrire à une formation",
    stats: [
      { value: "7", label: "programmes de formation" },
      { value: "100%", label: "pratique en laboratoire" },
      { value: "CCI", label: "formateurs certifiés" },
      { value: "24h", label: "confirmation inscription" },
    ],
    audiences: [
      { label: "Étudiants", href: "/centre-formation#etudiants", icon: "graduation" },
      { label: "Chercheurs d'emploi", href: "/centre-formation#chercheurs-emploi", icon: "briefcase" },
      { label: "Professionnels IT", href: "/centre-formation#professionnels", icon: "monitor" },
      { label: "Entreprises", href: "/centre-formation/formation-entreprise", icon: "building" },
    ],
  },
  featuredCourses: {
    overline: "FORMATIONS À LA UNE",
    heading: "Prochaines sessions de formation",
    lead: "Inscrivez-vous aux programmes les plus demandés. Places limitées par session.",
    enroll: "S'inscrire",
    viewCalendar: "Voir le calendrier complet",
    courses: [
      {
        slug: "formation-reseaux",
        tag: "RÉSEAUX",
        title: "Formation CCNA — Réseaux Cisco",
        meta: "5 jours · Niveau intermédiaire",
        nextSession: "Prochaine session : 15 juillet 2026",
        imageVariant: "network",
      },
      {
        slug: "formation-cybersecurite",
        tag: "CYBERSÉCURITÉ",
        title: "Formation Cybersécurité — Sécurité des réseaux",
        meta: "5 jours · Niveau intermédiaire",
        nextSession: "Prochaine session : 22 juillet 2026",
        imageVariant: "security",
      },
      {
        slug: "formation-linux",
        tag: "LINUX",
        title: "Formation Linux — Administration système",
        meta: "5 jours · Niveau débutant à intermédiaire",
        nextSession: "Prochaine session : 5 août 2026",
        imageVariant: "linux",
      },
    ],
  },
  coreServices: {
    overline: "NOS SERVICES",
    heading: "Une expertise complète en solutions IT",
    lead: "De l'audit initial à la maintenance continue, SYNET couvre vos besoins IT à Casablanca et au Maroc avec une seule équipe de confiance.",
    learnMore: "En savoir plus",
    requestQuote: "Demander un devis personnalisé",
    services: [
      { slug: "infrastructure-reseau", title: "Infrastructure réseau", description: "Conception, déploiement et optimisation de réseaux", icon: "network" },
      { slug: "cybersecurite", title: "Cybersécurité", description: "Protection proactive de vos systèmes et données", icon: "shield" },
      { slug: "voip-telephonie-ip", title: "VoIP & Téléphonie IP", description: "Solutions de communication unifiée", icon: "phone" },
      { slug: "support-maintenance-it", title: "Support & Maintenance IT", description: "Assistance technique réactive et préventive", icon: "headset" },
      { slug: "solutions-cloud", title: "Solutions Cloud", description: "Migration, hébergement et gestion cloud", icon: "cloud" },
      { slug: "videosurveillance-controle-acces", title: "Vidéosurveillance & Contrôle d'accès", description: "Sécurité physique intelligente", icon: "camera" },
      { slug: "developpement-web", title: "Développement Web", description: "Sites et applications professionnels", icon: "code" },
    ],
  },
  whyChoose: {
    overline: "POURQUOI SYNET",
    heading: "Un partenaire technologique de confiance",
    lead: "Deux divisions complémentaires, une même exigence : l'excellence technique et des résultats concrets.",
    learnMore: "En savoir plus sur SYNET",
    differentiators: [
      { title: "Double expertise", description: "Seul acteur à combiner solutions IT et formation professionnelle — pour les entreprises et leurs équipes.", icon: "layers" },
      { title: "Expertise terrain", description: "Nos formateurs sont nos ingénieurs. Nos ingénieurs forment vos équipes. Pratique, pas théorie.", icon: "users" },
      { title: "Certifié & reconnu", description: "Partenariats et certifications des principaux éditeurs technologiques.", icon: "award" },
      { title: "Accompagnement complet", description: "De l'audit initial au support continu — un interlocuteur unique pour tous vos besoins IT.", icon: "check-circle" },
    ],
    partnersLabel: "TECHNOLOGIES & CERTIFICATIONS",
    technologiesNote:
      "Cisco, Microsoft, Linux, SAP, Fortinet, AWS — formations et projets sur les principales technologies du marché.",
  },
  testimonials: {
    overline: "TÉMOIGNAGES",
    heading: "Ce que nos clients et stagiaires disent de nous",
    divisionBusiness: "Solutions entreprise",
    divisionTraining: "Centre de formation",
    prev: "Témoignage précédent",
    next: "Témoignage suivant",
    items: [
      {
        quote: "SYNET a modernisé notre infrastructure réseau avec un minimum de perturbation pour nos utilisateurs.",
        attribution: "Directeur IT",
        role: "École privée",
        organization: "Secteur éducation",
        division: "business",
      },
      {
        quote: "La formation Linux m'a permis de décrocher mon premier poste en administration système.",
        attribution: "Stagiaire certifié",
        role: "Administration système",
        organization: "Promotion 2025",
        division: "training",
      },
      {
        quote: "Leur équipe cybersécurité a identifié des vulnérabilités que nous ignorions. Réponse professionnelle et rapide.",
        attribution: "Responsable SI",
        role: "PME manufacturière",
        organization: "Industrie",
        division: "business",
      },
      {
        quote: "Nos équipes ont suivi la formation cybersécurité SYNET. Contenu pratique, directement applicable.",
        attribution: "DRH",
        role: "Formation équipes",
        organization: "Entreprise locale",
        division: "training",
      },
    ],
  },
  contactCta: {
    heading: "Prêt à démarrer votre projet ou votre formation ?",
    lead: "Notre équipe à Casablanca vous répond sous 24 heures ouvrées. Appelez le +212 6 18 56 34 45.",
    businessTitle: "Solutions entreprise",
    businessBody: "Demandez un devis gratuit et sans engagement pour votre projet IT.",
    businessCta: "Demander un devis",
    trainingTitle: "Centre de formation",
    trainingBody: "Inscrivez-vous à une session ou renseignez-vous sur nos programmes.",
    trainingCta: "S'inscrire à une formation",
    orContact: "Ou contactez-nous directement",
    contactLink: "Nous contacter",
    whatsapp: "WhatsApp",
  },
  trainingPages: {
    hub: {
      metaTitle: "Formation informatique Casablanca | Centre SYNET",
      metaDescription:
        "Centre de formation IT à Casablanca : CCNA, Linux, cybersécurité, cloud, SAP et Microsoft. Présentiel, 3 niveaux. Tél. +212 6 18 56 34 45.",
      keywords: [
        "formation informatique Casablanca",
        "centre de formation informatique Casablanca",
        "formation CCNA Casablanca",
        "formation Linux Casablanca",
        "formation cybersécurité Casablanca",
        "formation cloud Casablanca",
        "formation Microsoft Casablanca",
        "formation SAP Casablanca",
        "formation professionnelle IT Maroc",
      ],
      overline: "CENTRE DE FORMATION",
      heading: "Formations IT professionnelles",
      lead: "SYNET est un centre de formation IT à Casablanca : cours en présentiel, trois niveaux par programme (réseaux CCNA, Linux, cybersécurité, cloud, SAP et Microsoft). Lab pratique, formateurs certifiés. Inscription au +212 6 18 56 34 45.",
      catalogHeading: "Catalogue des formations",
      catalogLead: "Recherchez et filtrez nos programmes pour trouver la formation adaptée à votre parcours.",
      whyHeading: "Pourquoi se former chez SYNET à Casablanca",
      whyItems: [
        {
          title: "Présentiel à Casablanca",
          body: "Sessions en laboratoire, en semaine, pour les étudiants, demandeurs d’emploi et équipes PME de Casablanca-Settat.",
        },
        {
          title: "Trois niveaux par formation",
          body: "Chaque programme a un Niveau 1, 2 et 3, avec un tarif affiché. Vous choisissez le niveau à l’inscription.",
        },
        {
          title: "Réponse sous 24 h",
          body: "Appelez le +212 6 18 56 34 45, WhatsApp, ou le formulaire d’inscription. Confirmation de session sous un jour ouvré.",
        },
      ],
      faqHeading: "Questions fréquentes — formation Casablanca",
      faq: [
        {
          question: "Où se déroulent les formations SYNET ?",
          answer:
            "Les formations se déroulent en présentiel à Casablanca, Maroc. Contact : +212 6 18 56 34 45.",
        },
        {
          question: "Quelles formations informatiques proposez-vous à Casablanca ?",
          answer:
            "CCNA / réseaux Cisco, Linux, cybersécurité, cloud (AWS & Azure), SAP, Microsoft (Server & Active Directory), et des programmes entreprise sur mesure.",
        },
        {
          question: "Y a-t-il plusieurs niveaux ?",
          answer:
            "Oui. Chaque formation a trois niveaux (Niveau 1, 2 et 3), avec un tarif distinct affiché sur la fiche et à l’inscription.",
        },
        {
          question: "Comment s’inscrire à une formation ?",
          answer:
            "Remplissez le formulaire d’inscription, ou appelez / WhatsApp au +212 6 18 56 34 45. Nous confirmons votre place sous 24 heures ouvrées.",
        },
        {
          question: "Les cours sont-ils pratiques ?",
          answer:
            "Oui. Théorie et travaux pratiques en laboratoire, conçus pour un usage réel en entreprise au Maroc.",
        },
        {
          question: "Formez-vous aussi les équipes d’entreprise ?",
          answer:
            "Oui. Intra-entreprise à Casablanca ou à distance, sur le même catalogue (réseaux, Linux, sécurité, cloud, Microsoft, SAP).",
        },
        {
          question: "Quel est le délai de réponse ?",
          answer: "Sous 24 heures ouvrées après votre demande d’inscription ou d’information.",
        },
      ],
    },
    catalog: {
      searchPlaceholder: "Rechercher une formation…",
      searchLabel: "Rechercher dans le catalogue",
      filterCategory: "Catégorie",
      filterLevel: "Niveau",
      allCategories: "Toutes les catégories",
      allLevels: "Tous les niveaux",
      resultsCount: "formation(s) trouvée(s)",
      noResults: "Aucune formation ne correspond à vos critères.",
      clearFilters: "Réinitialiser les filtres",
    },
    categories: {
      networking: "Réseaux",
      linux: "Linux",
      cybersecurity: "Cybersécurité",
      cloud: "Cloud",
      sap: "SAP",
      microsoft: "Microsoft",
      corporate: "Formation entreprise",
    },
    levels: {
      beginner: "Débutant",
      intermediate: "Intermédiaire",
      advanced: "Avancé",
      "all-levels": "Tous niveaux",
    },
    card: {
      duration: "Durée",
      level: "Niveau",
      price: "Tarif",
      nextSession: "Prochaine session",
      spotsLeft: "places restantes",
      viewCourse: "Voir la formation",
      apply: "S'inscrire",
    },
    priceTiers: {
      heading: "Tarifs par niveau",
      from: "À partir de",
      "level-1": "Niveau 1",
      "level-2": "Niveau 2",
      "level-3": "Niveau 3",
      selectLevel: "Sélectionnez un niveau",
    },
    detail: {
      about: "À propos de cette formation",
      outcomes: "Ce que vous apprendrez",
      prerequisites: "Prérequis",
      schedule: "Horaires",
      instructor: "Instructeur",
      sessions: "Prochaines sessions",
      certification: "Certification",
      price: "Tarif",
      applyNow: "S'inscrire maintenant",
      askQuestion: "Poser une question",
      backToCatalog: "Retour au catalogue",
      format: "Format",
      dates: "Dates",
      casablancaHeading: "Cette formation à Casablanca",
    },
    localSeo: {
      networking: {
        metaTitle: "Formation CCNA Casablanca | Réseaux Cisco — SYNET",
        metaDescription:
          "Formation réseau et CCNA à Casablanca : 3 niveaux, présentiel, lab Cisco. Centre SYNET. Tél. +212 6 18 56 34 45.",
        audience:
          "Cette formation réseau s’adresse aux techniciens, administrateurs et personnes en reconversion à Casablanca et au Maroc qui veulent configurer et dépanner un réseau d’entreprise.",
        levels:
          "Niveau 1 : bases TCP/IP, adressage et équipements. Niveau 2 : VLAN, routage et commutation. Niveau 3 : sécurité réseau, OSPF et dépannage avancé, en vue de la préparation CCNA.",
        outcome:
          "Vous repartez capable d’installer, sécuriser et dépanner un LAN Cisco en conditions réelles. Inscription au +212 6 18 56 34 45 ou via le formulaire.",
      },
      linux: {
        metaTitle: "Formation Linux Casablanca | Administration système — SYNET",
        metaDescription:
          "Formation Linux à Casablanca : administration serveur, 3 niveaux, présentiel. Centre SYNET. Tél. +212 6 18 56 34 45.",
        audience:
          "Pour débutants et administrateurs juniors à Casablanca qui doivent gérer des serveurs Linux en production (Debian / RHEL).",
        levels:
          "Niveau 1 : installation, utilisateurs, fichiers. Niveau 2 : services, paquets, permissions avancées. Niveau 3 : scripts Bash, supervision et automatisation.",
        outcome:
          "Objectif : administrer un serveur Linux de façon autonome. Sessions en présentiel à Casablanca. Tél. +212 6 18 56 34 45.",
      },
      cybersecurity: {
        metaTitle: "Formation cybersécurité Casablanca | Sécurité des réseaux — SYNET",
        metaDescription:
          "Formation cybersécurité à Casablanca : sécurité réseau, 3 niveaux, présentiel. Centre SYNET. Tél. +212 6 18 56 34 45.",
        audience:
          "Administrateurs réseau et profils IT à Casablanca qui doivent protéger une infrastructure (PME, écoles, sites industriels).",
        levels:
          "Niveau 1 : menaces, durcissement de base. Niveau 2 : firewall, segmentation, contrôle d’accès. Niveau 3 : détection, bonnes pratiques et scénarios d’incident.",
        outcome:
          "Vous apprenez des méthodes utilisées sur le terrain au Maroc, en lab. Inscription : +212 6 18 56 34 45.",
      },
      cloud: {
        metaTitle: "Formation cloud Casablanca | AWS et Azure — SYNET",
        metaDescription:
          "Formation cloud AWS et Azure à Casablanca : 3 niveaux, présentiel. Centre SYNET. Tél. +212 6 18 56 34 45.",
        audience:
          "Techniciens et développeurs à Casablanca qui déploient des services sur AWS ou Azure pour une PME ou un projet web.",
        levels:
          "Niveau 1 : notions cloud et console. Niveau 2 : réseaux virtuels, stockage, identités. Niveau 3 : déploiement d’une workload simple et bonnes pratiques de coût / sécurité.",
        outcome:
          "Formation présentielle à Casablanca, orientée pratique. Contact : +212 6 18 56 34 45.",
      },
      sap: {
        metaTitle: "Formation SAP Casablanca | Fondamentaux ERP — SYNET",
        metaDescription:
          "Formation SAP à Casablanca : fondamentaux ERP, 3 niveaux, présentiel. Centre SYNET. Tél. +212 6 18 56 34 45.",
        audience:
          "Collaborateurs métier, support et juniors ERP à Casablanca qui découvrent SAP dans un contexte d’entreprise marocaine.",
        levels:
          "Niveau 1 : navigation et concepts ERP. Niveau 2 : modules essentiels et processus. Niveau 3 : cas pratiques et lecture des flux.",
        outcome:
          "Cours en présentiel à Casablanca. Inscription au +212 6 18 56 34 45.",
      },
      microsoft: {
        metaTitle: "Formation Microsoft Casablanca | Server et Active Directory — SYNET",
        metaDescription:
          "Formation Windows Server et Active Directory à Casablanca : 3 niveaux. Centre SYNET. Tél. +212 6 18 56 34 45.",
        audience:
          "Techniciens Microsoft et administrateurs juniors à Casablanca qui gèrent un domaine Windows en entreprise.",
        levels:
          "Niveau 1 : Windows Server et rôles de base. Niveau 2 : Active Directory, utilisateurs, GPO. Niveau 3 : services d’infrastructure et dépannage courant.",
        outcome:
          "Lab présentiel à Casablanca. Appelez le +212 6 18 56 34 45 pour la prochaine session.",
      },
      corporate: {
        metaTitle: "Formation entreprise Casablanca | Programmes IT sur mesure — SYNET",
        metaDescription:
          "Formation IT intra-entreprise à Casablanca : réseaux, Linux, sécurité, cloud, Microsoft. Tél. +212 6 18 56 34 45.",
        audience:
          "DRH et DSI à Casablanca qui veulent former une équipe sur site, avec un programme calé sur vos outils.",
        levels:
          "Trois niveaux selon le public (initiation, opérationnel, avancé). Le contenu est adapté à votre stack.",
        outcome:
          "Devis et planning sous 24 h ouvrées au +212 6 18 56 34 45.",
      },
    },
    enrollment: {
      metaTitle: "Inscription à une formation — SYNET",
      metaDescription:
        "Inscrivez-vous à une formation SYNET. Remplissez le formulaire et notre équipe vous contactera sous 24 heures.",
      overline: "INSCRIPTION",
      heading: "Inscription à une formation",
      lead: "Complétez le formulaire ci-dessous. Notre équipe admissions vous contactera pour confirmer votre inscription.",
      successTitle: "Demande envoyée",
      successMessage:
        "Merci pour votre inscription. Notre équipe vous contactera sous 24 heures ouvrées pour confirmer votre place.",
      nextSteps: [
        "Notre équipe admissions examine votre demande",
        "Nous vous contactons pour confirmer la session",
        "Vous recevez la confirmation d'inscription et les modalités",
      ],
      submit: "Envoyer ma demande d'inscription",
      submitting: "Envoi en cours…",
      fields: {
        fullName: "Nom complet",
        email: "Adresse e-mail",
        phone: "Téléphone",
        course: "Formation",
        selectCourse: "Sélectionnez une formation",
        experience: "Niveau d'expérience",
        experienceOptions: [
          { value: "student", label: "Étudiant" },
          { value: "job-seeker", label: "Chercheur d'emploi" },
          { value: "junior", label: "Professionnel junior (0–2 ans)" },
          { value: "experienced", label: "Professionnel expérimenté (3+ ans)" },
          { value: "corporate", label: "Inscription entreprise" },
        ],
        session: "Session souhaitée",
        selectSession: "Sélectionnez une session",
        trainingLevel: "Niveau de formation",
        message: "Message (optionnel)",
        messageHint: "Questions ou besoins spécifiques",
        consent: "J'accepte que SYNET traite mes données pour traiter mon inscription, conformément à la",
        consentLink: "politique de confidentialité",
      },
      errors: {
        required: "Ce champ est obligatoire",
        email: "Adresse e-mail invalide",
        consent: "Vous devez accepter la politique de confidentialité",
      },
    },
    forms: {
      referenceLabel: "Référence de votre demande",
      nextStepsTitle: "Prochaines étapes",
    },
  },
  businessPages: {
    hub: {
      metaTitle: "Nos services IT — SYNET",
      metaDescription:
        "Infrastructure réseau, cybersécurité, développement web, cloud, VoIP et infogérance à Casablanca. Devis sous 24h.",
      overline: "NOS SERVICES",
      heading: "Les services IT que nous proposons",
      lead: "Du site web à la cybersécurité, SYNET accompagne votre organisation avec des solutions concrètes : développement web, applications, réseaux et protection de vos systèmes.",
      catalogHeading: "Nos domaines d'expertise",
      catalogLead: "Découvrez nos services et contactez-nous pour en parler.",
      trustHeading: "Pourquoi les entreprises nous font confiance",
      trustItems: [
        { value: "8", label: "services clés" },
        { value: "200+", label: "clients accompagnés" },
        { value: "24h", label: "délai de réponse" },
        { value: "MA", label: "intervention au Maroc" },
      ],
    },
    catalog: {
      searchPlaceholder: "Rechercher un service…",
      searchLabel: "Rechercher",
      resultsCount: "service(s) trouvé(s)",
      noResults: "Aucun service ne correspond à votre recherche.",
    },
    card: {
      viewService: "Découvrir le service",
      requestQuote: "Demander un devis",
    },
    detail: {
      about: "Présentation",
      benefits: "Bénéfices pour votre organisation",
      process: "Notre approche",
      technologies: "Technologies & partenaires",
      faq: "Questions fréquentes",
      backToHub: "Retour aux solutions",
    },
    cta: {
      heading: "Discutons de votre projet IT",
      lead: "Obtenez un devis gratuit et sans engagement. Notre équipe commerciale vous répond sous 24 heures ouvrées.",
      requestQuote: "Demander un devis",
      contactUs: "Nous contacter",
      responseTime: "Réponse sous 24h ouvrées",
    },
    quote: {
      metaTitle: "Demande de devis — SYNET",
      metaDescription:
        "Demandez un devis pour vos projets IT : réseau, sécurité, cloud, VoIP et plus. Réponse sous 24 heures.",
      overline: "DEMANDE DE DEVIS",
      heading: "Demandez un devis personnalisé",
      lead: "Décrivez votre projet et nos ingénieurs vous proposeront une solution adaptée à vos besoins et votre budget.",
      successTitle: "Demande envoyée",
      successMessage:
        "Merci pour votre demande. Un conseiller SYNET vous contactera sous 24 heures ouvrées pour discuter de votre projet.",
      nextSteps: [
        "Analyse de votre besoin par un ingénieur commercial",
        "Échange téléphonique ou rendez-vous de cadrage",
        "Proposition technique et devis personnalisé",
      ],
      submit: "Envoyer ma demande de devis",
      submitting: "Envoi en cours…",
      fields: {
        company: "Nom de l'entreprise",
        contactName: "Nom du contact",
        email: "Adresse e-mail professionnelle",
        phone: "Téléphone",
        service: "Service concerné",
        selectService: "Sélectionnez un service",
        sector: "Secteur d'activité",
        sectorOptions: [
          { value: "sme", label: "PME" },
          { value: "school", label: "École / Université" },
          { value: "clinic", label: "Clinique / Santé" },
          { value: "factory", label: "Usine / Industrie" },
          { value: "government", label: "Organisation gouvernementale" },
          { value: "other", label: "Autre" },
        ],
        timeline: "Échéance souhaitée",
        timelineOptions: [
          { value: "urgent", label: "Urgent (< 1 mois)" },
          { value: "1-3", label: "1 à 3 mois" },
          { value: "3-6", label: "3 à 6 mois" },
          { value: "planning", label: "En phase de planification" },
        ],
        description: "Description du projet",
        descriptionHint: "Décrivez vos besoins, contraintes et objectifs",
        consent: "J'accepte que SYNET traite mes données pour traiter ma demande de devis, conformément à la",
        consentLink: "politique de confidentialité",
      },
      errors: {
        required: "Ce champ est obligatoire",
        email: "Adresse e-mail invalide",
        consent: "Vous devez accepter la politique de confidentialité",
      },
    },
  },
};
