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
    heading: string;
    lead: string;
    technologies: string;
    note: string;
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
    viewServices: string;
    requestQuote: string;
    items: Record<
      string,
      { name: string; description: string; challenges: string[] }
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
