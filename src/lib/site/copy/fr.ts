import type { SitePagesCopy } from "../types";

export const siteFr: SitePagesCopy = {
  notFound: {
    title: "Page introuvable",
    description: "La page demandée n'existe pas ou a été déplacée.",
    home: "Retour à l'accueil",
  },
  contact: {
    metaTitle: "Contact SYNET Casablanca | +212 6 18 56 34 45",
    metaDescription:
      "Contactez SYNET à Casablanca pour un projet IT ou une inscription en formation. Tél. +212 6 18 56 34 45. Réponse sous 24 heures ouvrées.",
    heading: "Contactez SYNET à Casablanca",
    lead: "Une question sur nos solutions ou nos formations ? Appelez, écrivez sur WhatsApp, ou envoyez un message. Réponse sous 24 heures ouvrées.",
    formHeading: "Envoyer un message",
    responseTime: "Délai de réponse : 1 jour ouvré",
    successTitle: "Message envoyé",
    successMessage: "Merci pour votre message. Un conseiller SYNET vous contactera rapidement.",
    submit: "Envoyer le message",
    submitting: "Envoi en cours…",
    fields: {
      name: "Nom complet",
      email: "E-mail",
      phone: "Téléphone",
      organization: "Organisation (facultatif)",
      intent: "Votre demande concerne",
      intentOptions: [
        { value: "business", label: "Solutions entreprise" },
        { value: "training", label: "Centre de formation" },
        { value: "both", label: "Les deux" },
        { value: "other", label: "Autre" },
      ],
      subject: "Objet (facultatif)",
      message: "Message",
      consent: "J'accepte que SYNET traite mes données pour répondre à ma demande, conformément à la",
      consentLink: "politique de confidentialité",
    },
    errors: {
      required: "Ce champ est obligatoire",
      email: "Adresse e-mail invalide",
      consent: "Vous devez accepter la politique de confidentialité",
    },
    nextSteps: [
      "Notre équipe examine votre demande",
      "Un conseiller vous contacte par e-mail, téléphone ou WhatsApp",
      "Nous vous proposons la suite adaptée (devis, inscription, rendez-vous)",
    ],
    whatsappCta: "Écrire sur WhatsApp",
    mapHeading: "Zone d'intervention",
    mapCaption:
      "SYNET est basée à Casablanca et intervient sur site dans la région Casablanca-Settat et au Maroc. Adresse précise disponible sur rendez-vous.",
  },
  about: {
    metaTitle: "À propos de SYNET Casablanca | Solutions IT & Formation",
    metaDescription:
      "SYNET, entreprise IT à Casablanca : solutions réseau, cybersécurité, infogérance et formation professionnelle au Maroc.",
    heading: "À propos de SYNET",
    lead: "Basée à Casablanca, SYNET accompagne les organisations dans la conception de systèmes IT fiables et forme les professionnels aux compétences réellement utilisées sur le terrain.",
    missionHeading: "Notre mission",
    mission:
      "Aider les entreprises à bâtir des infrastructures sécurisées et fiables, tout en permettant aux individus d'acquérir des compétences pratiques et directement applicables sur le marché de l'emploi.",
    values: [
      { title: "Excellence technique", description: "Des ingénieurs et formateurs certifiés, actifs sur le terrain." },
      { title: "Pragmatisme", description: "Des solutions et formations orientées résultats, pas la théorie seule." },
      { title: "Proximité", description: "Un interlocuteur unique pour vos projets IT et le développement de vos équipes." },
    ],
    ctaQuote: "Demander un devis",
    ctaTraining: "Voir les formations",
  },
  partners: {
    metaTitle: "Partenaires & certifications | SYNET Casablanca",
    metaDescription:
      "Cisco, Fortinet, Microsoft, Linux, SAP, AWS et Azure : technologies maîtrisées par SYNET à Casablanca pour vos projets IT et vos formations certifiantes.",
    overline: "PARTENAIRES",
    heading: "Technologies & certifications",
    lead: "Nos ingénieurs et formateurs travaillent au quotidien sur les technologies de référence du marché. Les mêmes outils que nous déployons chez nos clients sont ceux que nous enseignons en laboratoire.",
    technologies: "Cisco · Microsoft · Linux · SAP · Fortinet · Cloud (AWS/Azure)",
    note: "Les partenariats officiels et le détail des certifications préparées sont communiqués sur demande et mis à jour régulièrement.",
    groups: [
      {
        title: "Réseaux & infrastructure",
        description: "Conception et déploiement d'architectures réseau d'entreprise.",
        items: ["Cisco", "HPE Aruba", "Ubiquiti", "MikroTik"],
      },
      {
        title: "Cybersécurité",
        description: "Protection périmétrique, endpoints et supervision des menaces.",
        items: ["Fortinet", "EDR", "SIEM", "pfSense"],
      },
      {
        title: "Cloud & Microsoft",
        description: "Identité, collaboration, serveurs et charges de travail cloud.",
        items: ["Microsoft 365", "Windows Server", "Azure", "AWS"],
      },
      {
        title: "Systèmes & ERP",
        description: "Administration Linux et fondamentaux SAP pour les métiers.",
        items: ["Linux (Debian/RHEL)", "SAP", "VMware", "Veeam"],
      },
      {
        title: "Sécurité physique",
        description: "Vidéosurveillance IP et contrôle d'accès pour sites sensibles.",
        items: ["Hikvision", "Axis", "Dahua", "ZKTeco"],
      },
    ],
    relatedTrainingHeading: "Formations associées",
    ctaQuote: "Demander un devis projet",
    ctaTraining: "Voir les formations",
  },
  careers: {
    metaTitle: "Carrières | SYNET",
    heading: "Rejoindre SYNET",
    lead: "Nous recrutons des ingénieurs, consultants et formateurs passionnés par les technologies et la transmission.",
    cta: "Nous contacter",
  },
  sectors: {
    metaTitle: "Secteurs d'activité | SYNET Casablanca",
    metaDescription:
      "Solutions IT pour PME, écoles, cliniques, usines et organisations publiques à Casablanca. Infrastructure, sécurité, infogérance et formation.",
    heading: "Des solutions adaptées à votre secteur",
    lead: "Chaque organisation a des contraintes spécifiques. SYNET adapte l'infrastructure, la sécurité et la formation à votre métier, sur site au Maroc.",
    overline: "SECTEURS",
    viewServices: "Voir nos services",
    requestQuote: "Demander un devis",
    challengesHeading: "Vos enjeux",
    approachHeading: "Notre approche",
    relatedServicesHeading: "Services adaptés",
    relatedTrainingHeading: "Formations utiles pour vos équipes",
    faqHeading: "Questions fréquentes",
    otherSectorsHeading: "Autres secteurs",
    items: {
      sme: {
        name: "PME",
        description:
          "Externalisez votre IT avec un partenaire réactif : support, sécurité et infrastructure à coût maîtrisé.",
        metaTitle: "Infogérance PME Casablanca | SYNET",
        metaDescription:
          "Support IT, cybersécurité et réseau pour PME à Casablanca. Un interlocuteur unique, contrats adaptés, devis sous 24h.",
        lead: "Les PME marocaines ont besoin d'un système d'information fiable sans constituer une équipe interne lourde. SYNET prend en charge le quotidien : helpdesk, sécurité, réseau et évolution de votre parc.",
        challenges: ["Budget IT limité", "Besoin de réactivité", "Protection des données", "Peu de ressources internes"],
        approach:
          "Nous commençons par un inventaire de votre parc, puis proposons un plan réaliste : infogérance, firewall, Wi-Fi professionnel et formation courte des utilisateurs. Vous gardez un seul interlocuteur et un reporting clair.",
        faq: [
          {
            question: "Proposez-vous un forfait mensuel pour les PME ?",
            answer: "Oui. Des contrats de support et d'infogérance sont dimensionnés selon le nombre de postes et de sites.",
          },
          {
            question: "Intervenez-vous sur site à Casablanca ?",
            answer: "Oui. Audit, déploiement et maintenance se font sur site, avec un support distant pour les incidents du quotidien.",
          },
          {
            question: "Quel délai pour démarrer ?",
            answer: "Après validation du devis, l'onboarding peut commencer en quelques jours selon le périmètre.",
          },
        ],
      },
      schools: {
        name: "Écoles",
        description:
          "Réseaux performants, cybersécurité et salles informatiques pour un environnement d'apprentissage fiable.",
        metaTitle: "Informatique pour écoles Casablanca | SYNET",
        metaDescription:
          "Réseau campus, Wi-Fi, cybersécurité et laboratoires informatiques pour établissements scolaires au Maroc. Maintenance préventive.",
        lead: "Un établissement scolaire a besoin d'une connectivité stable pour les cours, d'une protection des données élèves et d'un parc informatique prêt à chaque rentrée. SYNET conçoit et maintient cet environnement.",
        challenges: ["Connectivité campus", "Protection des données élèves", "Maintenance préventive", "Salles informatiques"],
        approach:
          "Nous dimensionnons le Wi-Fi et le câblage pour les flux pédagogiques, segmentons le réseau (admin, élèves, invités), sécurisons les accès et équipons les laboratoires utilisés aussi bien pour les cours que pour nos formations.",
        faq: [
          {
            question: "Pouvez-vous intervenir pendant les vacances scolaires ?",
            answer: "Oui. Les déploiements majeurs sont planifiés hors période de cours pour limiter les interruptions.",
          },
          {
            question: "Gérez-vous le filtrage internet pour les élèves ?",
            answer: "Oui. Filtrage, Wi-Fi invité et politiques d'accès font partie de nos prestations réseau et sécurité.",
          },
          {
            question: "Proposez-vous des formations pour le personnel IT de l'école ?",
            answer: "Oui. Des sessions courtes en réseau, Linux ou cybersécurité peuvent être organisées pour vos équipes.",
          },
        ],
      },
      clinics: {
        name: "Cliniques",
        description:
          "Infrastructure fiable et sécurisée pour les systèmes médicaux et la confidentialité des données patients.",
        metaTitle: "Informatique clinique Maroc | SYNET",
        metaDescription:
          "Réseau, cybersécurité et infogérance pour cliniques au Maroc. Haute disponibilité et confidentialité des données de santé.",
        lead: "En clinique, l'indisponibilité du réseau ou d'un serveur a un impact immédiat sur l'accueil et les soins. SYNET conçoit des infrastructures stables, sauvegardées et protégées, avec un support réactif.",
        challenges: ["Disponibilité critique", "Confidentialité des données de santé", "Support rapide", "Accès par zones"],
        approach:
          "Nous isolons les applications métier, mettons en place sauvegardes et continuité, sécurisons les accès (réseau, badges, caméras) et définissons un SLA d'intervention adapté à un environnement de soins.",
        faq: [
          {
            question: "Pouvez-vous travailler sans interrompre l'activité de la clinique ?",
            answer: "Oui. Les bascules sont planifiées et testées. Les interventions critiques peuvent se faire hors pics d'activité.",
          },
          {
            question: "Aidez-vous à sécuriser les dossiers patients ?",
            answer: "Nous sécurisons l'infrastructure, les accès et les sauvegardes. La conformité métier reste sous votre responsabilité, avec notre accompagnement technique.",
          },
          {
            question: "Proposez-vous de la vidéosurveillance pour les accès ?",
            answer: "Oui. Vidéosurveillance IP et contrôle d'accès peuvent être intégrés au même projet d'infrastructure.",
          },
        ],
      },
      factories: {
        name: "Usines",
        description:
          "Réseaux industriels, vidéosurveillance et maintenance pour sites de production connectés.",
        metaTitle: "Réseau industriel et sécurité usine | SYNET",
        metaDescription:
          "Réseaux industriels, cybersécurité OT/IT, vidéosurveillance et maintenance pour usines au Maroc. Continuité de production.",
        lead: "Un site de production exige un réseau robuste, une séparation bureautique / atelier, et une sécurité physique et numérique. SYNET déploie et maintient ces socles pour limiter les arrêts.",
        challenges: ["Environnements exigeants", "Sécurité physique et numérique", "Continuité de production", "Sites étendus"],
        approach:
          "Nous cartographions les flux atelier et bureaux, segmentons le réseau, installons la vidéosurveillance et le contrôle d'accès, et mettons en place une maintenance préventive pour éviter les pannes surprises.",
        faq: [
          {
            question: "Intervenez-vous sur des sites en dehors de Casablanca ?",
            answer: "Oui. Nous intervenons sur site au Maroc selon le projet. Le support distant complète la maintenance locale.",
          },
          {
            question: "Séparez-vous le réseau bureautique du réseau de production ?",
            answer: "Oui. La segmentation VLAN et le cloisonnement des flux font partie de nos architectures d'usine.",
          },
          {
            question: "Pouvez-vous former les techniciens de maintenance ?",
            answer: "Oui. Des modules réseau, Linux ou cybersécurité peuvent être adaptés aux équipes industrielles.",
          },
        ],
      },
      government: {
        name: "Organisations gouvernementales",
        description:
          "Solutions conformes aux exigences du secteur public : sécurité, audit et accompagnement de projet.",
        metaTitle: "Solutions IT secteur public Maroc | SYNET",
        metaDescription:
          "Infrastructure, cybersécurité, cloud et infogérance pour organisations publiques au Maroc. Audit, documentation et accompagnement de projet.",
        lead: "Les projets publics demandent traçabilité, sécurité et un accompagnement documenté. SYNET intervient sur l'infrastructure, la cybersécurité et la montée en compétence des équipes, dans le respect de vos procédures.",
        challenges: ["Exigences de conformité", "Projets multi-sites", "Souveraineté des données", "Documentation et audit"],
        approach:
          "Nous cadrons le besoin, livrons architecture et documentation, déployons par lots, et formons vos équipes. La sécurité (accès, sauvegarde, supervision) est intégrée dès la conception.",
        faq: [
          {
            question: "Pouvez-vous répondre à un cahier des charges public ?",
            answer: "Oui. Nous étudions votre CDC et proposons une offre technique et financière adaptée au périmètre.",
          },
          {
            question: "Travaillez-vous sur plusieurs sites ?",
            answer: "Oui. Architectures WAN, VPN et support centralisé pour organisations multi-sites.",
          },
          {
            question: "Proposez-vous de la formation pour les agents ?",
            answer: "Oui. Sessions intra-organisation en réseau, cybersécurité, Microsoft ou cloud, selon vos besoins.",
          },
        ],
      },
    },
  },
  caseStudies: {
    metaTitle: "Réalisations | SYNET",
    metaDescription: "Études de cas et projets IT réalisés par SYNET pour des organisations au Maroc.",
    heading: "Nos réalisations",
    lead: "Découvrez comment SYNET accompagne ses clients sur l'infrastructure, la sécurité et la formation.",
    comingSoon: "De nouvelles études de cas seront publiées prochainement. En attendant, contactez-nous pour discuter de projets similaires.",
    cta: "Demander un devis",
  },
  resources: {
    metaTitle: "Ressources | SYNET",
    heading: "Ressources",
    lead: "Articles, guides et réponses aux questions fréquentes sur nos services et formations.",
    blogTitle: "Blog",
    blogLead: "Conseils techniques, actualités et retours d'expérience.",
    faqTitle: "FAQ",
    faqLead: "Réponses aux questions les plus fréquentes.",
    comingSoon: "Contenu en cours de publication.",
  },
  faq: {
    metaTitle: "FAQ | SYNET Casablanca",
    heading: "Questions fréquentes",
    lead: "Trouvez rapidement des réponses sur nos services, formations et modalités d'inscription à Casablanca.",
    items: [
      {
        question: "Où SYNET intervient-elle ?",
        answer:
          "SYNET est basée à Casablanca et intervient sur site dans la région Casablanca-Settat et au Maroc. Contact : +212 6 18 56 34 45 ou WhatsApp.",
        division: "business",
      },
      {
        question: "Quel est le délai de réponse pour une demande de devis ?",
        answer: "Nous nous engageons à vous répondre sous 24 heures ouvrées après réception de votre demande.",
        division: "business",
      },
      {
        question: "Proposez-vous un support IT pour les PME ?",
        answer: "Oui. Notre service de support et maintenance couvre helpdesk, infogérance et interventions sur site.",
        division: "business",
      },
      {
        question: "Les formations incluent-elles des exercices pratiques ?",
        answer: "Oui. Toutes nos formations combinent théorie et travaux pratiques en laboratoire équipé.",
        division: "training",
      },
      {
        question: "Comment s'inscrire à une formation ?",
        answer: "Remplissez le formulaire d'inscription en ligne ou contactez-nous. Notre équipe confirme votre place sous 24 h.",
        division: "training",
      },
    ],
  },
  blog: {
    metaTitle: "Blog | SYNET",
    heading: "Blog SYNET",
    lead: "Actualités, guides et expertise en solutions IT et formation professionnelle.",
    comingSoon: "Le blog sera disponible prochainement. Abonnez-vous via notre formulaire de contact pour être informé.",
  },
  legal: {
    mentions: {
      metaTitle: "Mentions légales | SYNET",
      heading: "Mentions légales",
      updated: "Dernière mise à jour : juin 2026",
      body: [
        "Éditeur du site : SYNET — [Raison sociale et adresse complète à compléter].",
        "Directeur de la publication : [Nom à compléter].",
        "Hébergeur : [Hébergeur à compléter].",
        "Contact : contact@synet.ma — +212 6 18 56 34 45 (Casablanca, Maroc).",
        "Les informations présentes sur ce site sont fournies à titre indicatif et peuvent être modifiées sans préavis.",
      ],
    },
    privacy: {
      metaTitle: "Politique de confidentialité | SYNET",
      heading: "Politique de confidentialité",
      updated: "Dernière mise à jour : juin 2026",
      body: [
        "SYNET collecte les données transmises via ses formulaires (nom, e-mail, téléphone, message) uniquement pour traiter vos demandes de contact, devis ou inscription.",
        "Base légale : exécution de mesures précontractuelles et intérêt légitime à répondre à vos sollicitations.",
        "Vos données sont conservées pendant la durée nécessaire au traitement de votre demande, puis archivées selon les obligations légales.",
        "Vous disposez d'un droit d'accès, de rectification et de suppression en contactant contact@synet.ma ou +212 6 18 56 34 45.",
        "Les coordonnées complètes et le délégué à la protection des données seront précisés lors de la mise en production définitive.",
      ],
    },
    terms: {
      metaTitle: "Conditions d'utilisation | SYNET",
      heading: "Conditions d'utilisation",
      updated: "Dernière mise à jour : juin 2026",
      body: [
        "L'utilisation du site synet.ma implique l'acceptation des présentes conditions.",
        "Les contenus (textes, visuels) sont protégés par le droit d'auteur. Toute reproduction non autorisée est interdite.",
        "SYNET s'efforce d'assurer l'exactitude des informations publiées mais ne garantit pas l'absence d'erreurs.",
        "Les liens externes ne engagent pas la responsabilité de SYNET.",
        "Droit applicable : droit marocain. Tribunal compétent : [à compléter].",
      ],
    },
  },
  forms: {
    referenceLabel: "Référence de votre demande",
    nextStepsTitle: "Prochaines étapes",
  },
};
