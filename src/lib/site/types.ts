export type SectorId = "sme" | "schools" | "clinics" | "factories" | "government";

export type SitePagesCopy = {
  notFound: {
    title: string;
    description: string;
    home: string;
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    heading: string;
    lead: string;
    formHeading: string;
    responseTime: string;
    successTitle: string;
    successMessage: string;
    submit: string;
    submitting: string;
    fields: {
      name: string;
      email: string;
      phone: string;
      organization: string;
      intent: string;
      intentOptions: { value: string; label: string }[];
      subject: string;
      message: string;
      consent: string;
      consentLink: string;
    };
    errors: { required: string; email: string; consent: string };
    nextSteps: string[];
    whatsappCta: string;
    mapHeading: string;
    mapCaption: string;
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    heading: string;
    lead: string;
    missionHeading: string;
    mission: string;
    values: { title: string; description: string }[];
    ctaQuote: string;
    ctaTraining: string;
  };
  partners: {
    metaTitle: string;
    metaDescription: string;
    overline: string;
    heading: string;
    lead: string;
    technologies: string;
    note: string;
    groups: { title: string; description: string; items: string[] }[];
    relatedTrainingHeading: string;
    ctaQuote: string;
    ctaTraining: string;
  };
  careers: {
    metaTitle: string;
    heading: string;
    lead: string;
    cta: string;
  };
  sectors: {
    metaTitle: string;
    metaDescription: string;
    heading: string;
    lead: string;
    overline: string;
    viewServices: string;
    requestQuote: string;
    challengesHeading: string;
    approachHeading: string;
    relatedServicesHeading: string;
    relatedTrainingHeading: string;
    faqHeading: string;
    otherSectorsHeading: string;
    items: Record<
      SectorId,
      {
        name: string;
        description: string;
        metaTitle: string;
        metaDescription: string;
        lead: string;
        challenges: string[];
        approach: string;
        faq: { question: string; answer: string }[];
      }
    >;
  };
  caseStudies: {
    metaTitle: string;
    metaDescription: string;
    heading: string;
    lead: string;
    comingSoon: string;
    cta: string;
  };
  resources: {
    metaTitle: string;
    heading: string;
    lead: string;
    blogTitle: string;
    blogLead: string;
    faqTitle: string;
    faqLead: string;
    comingSoon: string;
  };
  faq: {
    metaTitle: string;
    heading: string;
    lead: string;
    items: { question: string; answer: string; division: string }[];
  };
  blog: {
    metaTitle: string;
    heading: string;
    lead: string;
    comingSoon: string;
  };
  legal: {
    mentions: { metaTitle: string; heading: string; updated: string; body: string[] };
    privacy: { metaTitle: string; heading: string; updated: string; body: string[] };
    terms: { metaTitle: string; heading: string; updated: string; body: string[] };
  };
  forms: {
    referenceLabel: string;
    nextStepsTitle: string;
  };
};
