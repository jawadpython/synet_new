import type { SitePagesCopy } from "../types";

export const siteFr: SitePagesCopy = {
  notFound: {
    title: "Page introuvable",
    description: "La page demandée n'existe pas ou a été déplacée.",
    home: "Retour à l'accueil",
  },
  contact: {
    metaTitle: "Contact SYNET | Solutions IT & Formation",
    metaDescription:
      "Contactez SYNET pour vos projets IT ou vos inscriptions en formation. Réponse sous 24 heures ouvrées.",
    heading: "Contactez SYNET",
    lead: "Une question sur nos solutions ou nos formations ? Notre équipe vous répond sous 24 heures ouvrées.",
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
      "Un conseiller vous contacte par e-mail ou téléphone",
      "Nous vous proposons la suite adaptée (devis, inscription, rendez-vous)",
    ],
  },
  about: {
    metaTitle: "À propos de SYNET | Solutions IT & Formation",
    metaDescription:
      "Découvrez SYNET : solutions IT pour entreprises et centre de formation professionnelle au Maroc.",
    heading: "À propos de SYNET",
    lead: "SYNET accompagne les organisations dans la conception de systèmes IT fiables et forme les professionnels aux compétences technologiques de demain.",
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
    metaTitle: "Partenaires & certifications | SYNET",
    heading: "Technologies & certifications",
    lead: "Nos équipes maîtrisent les principales technologies du marché et préparent aux certifications reconnues.",
    technologies: "Cisco · Microsoft · Linux · SAP · Fortinet · Cloud (AWS/Azure)",
    note: "Les certifications et partenariats officiels sont détaillés sur demande et font l'objet de mises à jour régulières.",
  },
  careers: {
    metaTitle: "Carrières | SYNET",
    heading: "Rejoindre SYNET",
    lead: "Nous recrutons des ingénieurs, consultants et formateurs passionnés par les technologies et la transmission.",
    cta: "Nous contacter",
  },
  sectors: {
    metaTitle: "Secteurs d'activité | SYNET",
    metaDescription: "Solutions IT adaptées aux PME, écoles, cliniques, usines et organisations au Maroc.",
    heading: "Des solutions adaptées à votre secteur",
    lead: "Chaque organisation a des contraintes spécifiques. SYNET adapte ses services et formations à votre contexte.",
    viewServices: "Voir nos services",
    requestQuote: "Demander un devis",
    items: {
      pme: {
        name: "PME",
        description: "Externalisez votre IT avec un partenaire réactif : support, sécurité et infrastructure à coût maîtrisé.",
        challenges: ["Budget IT limité", "Besoin de réactivité", "Sécurisation des données"],
      },
      ecoles: {
        name: "Écoles",
        description: "Réseaux performants, cybersécurité et salles informatiques pour un environnement d'apprentissage fiable.",
        challenges: ["Connectivité campus", "Protection des données élèves", "Maintenance préventive"],
      },
      cliniques: {
        name: "Cliniques",
        description: "Infrastructure fiable et sécurisée pour les systèmes médicaux et la confidentialité des données patients.",
        challenges: ["Disponibilité critique", "Conformité données de santé", "Support réactif"],
      },
      usines: {
        name: "Usines",
        description: "Réseaux industriels, vidéosurveillance et maintenance pour sites de production connectés.",
        challenges: ["Environnements exigeants", "Sécurité physique et numérique", "Continuité de production"],
      },
      "organisations-gouvernementales": {
        name: "Organisations gouvernementales",
        description: "Solutions conformes aux exigences du secteur public : sécurité, audit et accompagnement de projet.",
        challenges: ["Exigences de conformité", "Projets multi-sites", "Souveraineté des données"],
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
    metaTitle: "FAQ | SYNET",
    heading: "Questions fréquentes",
    lead: "Trouvez rapidement des réponses sur nos services, formations et modalités d'inscription.",
    items: [
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
        "Contact : contact@synet.ma",
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
        "Vous disposez d'un droit d'accès, de rectification et de suppression en contactant contact@synet.ma.",
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
