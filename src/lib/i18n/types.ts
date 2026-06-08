export type NavLink = {
  label: string;
  href: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  columns?: {
    title: string;
    links: NavLink[];
  }[];
};

export type Stat = {
  value: string;
  label: string;
};

export type AudienceTile = {
  label: string;
  href: string;
  icon: string;
};

export type FeaturedCourse = {
  slug: string;
  tag: string;
  title: string;
  meta: string;
  nextSession: string;
  imageVariant: "network" | "security" | "linux";
};

export type ServiceCard = {
  slug: string;
  title: string;
  description: string;
  icon: string;
};

export type Differentiator = {
  title: string;
  description: string;
  icon: string;
};

export type Testimonial = {
  quote: string;
  attribution: string;
  role: string;
  organization?: string;
  division: "business" | "training";
};

export type TrainingPagesCopy = {
  hub: {
    metaTitle: string;
    metaDescription: string;
    overline: string;
    heading: string;
    lead: string;
    catalogHeading: string;
    catalogLead: string;
  };
  catalog: {
    searchPlaceholder: string;
    searchLabel: string;
    filterCategory: string;
    filterLevel: string;
    allCategories: string;
    allLevels: string;
    resultsCount: string;
    noResults: string;
    clearFilters: string;
  };
  categories: Record<string, string>;
  levels: Record<string, string>;
  card: {
    duration: string;
    level: string;
    price: string;
    nextSession: string;
    spotsLeft: string;
    viewCourse: string;
    apply: string;
  };
  detail: {
    about: string;
    outcomes: string;
    prerequisites: string;
    schedule: string;
    instructor: string;
    sessions: string;
    certification: string;
    price: string;
    applyNow: string;
    askQuestion: string;
    backToCatalog: string;
    format: string;
    dates: string;
  };
  enrollment: {
    metaTitle: string;
    metaDescription: string;
    overline: string;
    heading: string;
    lead: string;
    successTitle: string;
    successMessage: string;
    nextSteps: string[];
    submit: string;
    submitting: string;
    fields: {
      fullName: string;
      email: string;
      phone: string;
      course: string;
      selectCourse: string;
      experience: string;
      experienceOptions: { value: string; label: string }[];
      session: string;
      selectSession: string;
      message: string;
      messageHint: string;
      consent: string;
      consentLink: string;
    };
    errors: {
      required: string;
      email: string;
      consent: string;
    };
  };
  forms: {
    referenceLabel: string;
    nextStepsTitle: string;
  };
};

export type BusinessPagesCopy = {
  hub: {
    metaTitle: string;
    metaDescription: string;
    overline: string;
    heading: string;
    lead: string;
    catalogHeading: string;
    catalogLead: string;
    trustHeading: string;
    trustItems: { value: string; label: string }[];
  };
  catalog: {
    searchPlaceholder: string;
    searchLabel: string;
    resultsCount: string;
    noResults: string;
  };
  card: {
    viewService: string;
    requestQuote: string;
  };
  detail: {
    about: string;
    benefits: string;
    process: string;
    technologies: string;
    faq: string;
    backToHub: string;
  };
  cta: {
    heading: string;
    lead: string;
    requestQuote: string;
    contactUs: string;
    responseTime: string;
  };
  quote: {
    metaTitle: string;
    metaDescription: string;
    overline: string;
    heading: string;
    lead: string;
    successTitle: string;
    successMessage: string;
    nextSteps: string[];
    submit: string;
    submitting: string;
    fields: {
      company: string;
      contactName: string;
      email: string;
      phone: string;
      service: string;
      selectService: string;
      sector: string;
      sectorOptions: { value: string; label: string }[];
      timeline: string;
      timelineOptions: { value: string; label: string }[];
      description: string;
      descriptionHint: string;
      consent: string;
      consentLink: string;
    };
    errors: {
      required: string;
      email: string;
      consent: string;
    };
  };
};

export type Dictionary = {
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  skipToContent: string;
  nav: {
    solutions: string;
    training: string;
    sectors: string;
    caseStudies: string;
    about: string;
    resources: string;
    contact: string;
    requestQuote: string;
    enroll: string;
    openMenu: string;
    closeMenu: string;
    mainNav: string;
    paths: {
      sectors: string;
      caseStudies: string;
      about: string;
      contact: string;
      requestQuote: string;
      enroll: string;
      legal: {
        mentions: string;
        privacy: string;
        terms: string;
      };
    };
  };
  navGroups: {
    solutions: NavGroup;
    training: NavGroup;
    about: NavGroup;
    resources: NavGroup;
  };
  footer: {
    solutions: string;
    training: string;
    company: string;
    contact: string;
    tagline: string;
    legal: {
      mentions: string;
      privacy: string;
      terms: string;
    };
    copyright: string;
    companyLinks: NavLink[];
    serviceLinks: NavLink[];
    trainingLinks: NavLink[];
    contactInfo: {
      address: string;
      phone: string;
      email: string;
      hours: string;
    };
  };
  hero: {
    overline: string;
    headline: string;
    lead: string;
    ctaSolutions: string;
    ctaTraining: string;
    chipBusiness: string;
    chipBusinessSub: string;
    chipTraining: string;
    chipTrainingSub: string;
    imageAlt: string;
  };
  businessOverview: {
    id: string;
    overline: string;
    heading: string;
    lead: string;
    bullets: string[];
    viewAllServices: string;
    requestQuote: string;
    stats: Stat[];
    audiences: AudienceTile[];
  };
  trainingOverview: {
    id: string;
    overline: string;
    heading: string;
    lead: string;
    bullets: string[];
    viewAllTraining: string;
    enroll: string;
    stats: Stat[];
    audiences: AudienceTile[];
  };
  featuredCourses: {
    overline: string;
    heading: string;
    lead: string;
    enroll: string;
    viewCalendar: string;
    courses: FeaturedCourse[];
  };
  coreServices: {
    overline: string;
    heading: string;
    lead: string;
    learnMore: string;
    requestQuote: string;
    services: ServiceCard[];
  };
  whyChoose: {
    overline: string;
    heading: string;
    lead: string;
    learnMore: string;
    differentiators: Differentiator[];
    partnersLabel: string;
    technologiesNote?: string;
  };
  testimonials: {
    overline: string;
    heading: string;
    divisionBusiness: string;
    divisionTraining: string;
    prev: string;
    next: string;
    items: Testimonial[];
  };
  contactCta: {
    heading: string;
    lead: string;
    businessTitle: string;
    businessBody: string;
    businessCta: string;
    trainingTitle: string;
    trainingBody: string;
    trainingCta: string;
    orContact: string;
    contactLink: string;
  };
  trainingPages: TrainingPagesCopy;
  businessPages: BusinessPagesCopy;
};
