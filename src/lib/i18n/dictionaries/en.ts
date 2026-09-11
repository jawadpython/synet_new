import type { Dictionary } from "../types";

export const en: Dictionary = {
  metadata: {
    title: "SYNET Casablanca — IT Training & Business Solutions",
    description:
      "IT training centre and IT company in Casablanca: CCNA, Linux, cybersecurity, cloud, SAP, Microsoft. Infrastructure and managed services. Tel. +212 6 18 56 34 45.",
    keywords: [
      "IT solutions",
      "network infrastructure",
      "cybersecurity",
      "professional training",
      "SYNET",
      "SYNET Casablanca",
      "IT company Casablanca",
      "IT support Casablanca",
      "managed IT Casablanca",
      "IT training Casablanca",
      "IT training Morocco",
      "managed IT services",
    ],
  },
  skipToContent: "Skip to main content",
  nav: {
    solutions: "Business Solutions",
    training: "Training Center",
    sectors: "Sectors",
    caseStudies: "Case Studies",
    about: "About",
    resources: "Resources",
    contact: "Contact",
    requestQuote: "Request a quote",
    enroll: "Enroll",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main navigation",
    paths: {
      sectors: "/sectors",
      caseStudies: "/case-studies",
      about: "/about",
      contact: "/contact",
      requestQuote: "/request-quote",
      enroll: "/training-enrollment",
      legal: {
        mentions: "/legal-notice",
        privacy: "/privacy-policy",
        terms: "/terms-of-use",
      },
    },
  },
  navGroups: {
    solutions: {
      label: "Business Solutions",
      href: "/business-solutions",
      columns: [
        {
          title: "Services",
          links: [
            { label: "Web Development", href: "/business-solutions/web-development" },
            { label: "App Development", href: "/business-solutions/app-development" },
            { label: "Network Infrastructure", href: "/business-solutions/network-infrastructure" },
            { label: "Cybersecurity", href: "/business-solutions/cybersecurity" },
          ],
        },
        {
          title: "Industries",
          links: [
            { label: "SMEs", href: "/sectors/smes" },
            { label: "Schools", href: "/sectors/schools" },
            { label: "Clinics", href: "/sectors/clinics" },
            { label: "Factories", href: "/sectors/factories" },
            { label: "Government", href: "/sectors/government" },
          ],
        },
      ],
    },
    training: {
      label: "Training Center",
      href: "/training-center",
      columns: [
        {
          title: "Programs",
          links: [
            { label: "Networking Training", href: "/training-center/networking-training" },
            { label: "Linux Training", href: "/training-center/linux-training" },
            { label: "Cybersecurity Training", href: "/training-center/cybersecurity-training" },
            { label: "Cloud Training", href: "/training-center/cloud-computing" },
            { label: "SAP Training", href: "/training-center/sap-training" },
            { label: "Microsoft Training", href: "/training-center/microsoft-technologies" },
            { label: "Corporate Training", href: "/training-center/corporate-training" },
          ],
        },
        {
          title: "Audiences",
          links: [
            { label: "Students", href: "/training-center#students" },
            { label: "Job Seekers", href: "/training-center#job-seekers" },
            { label: "IT Professionals", href: "/training-center#it-professionals" },
            { label: "Companies", href: "/training-center/corporate-training" },
          ],
        },
      ],
    },
    about: {
      label: "About",
      href: "/about",
      columns: [
        {
          title: "Company",
          links: [
            { label: "Our story & mission", href: "/about" },
            { label: "Partners & certifications", href: "/about/partners" },
          ],
        },
      ],
    },
    resources: {
      label: "Resources",
      href: "/resources",
      columns: [
        {
          title: "Resources",
          links: [
            { label: "FAQ", href: "/resources/faq" },
          ],
        },
      ],
    },
  },
  footer: {
    solutions: "Solutions",
    training: "Training",
    company: "Company",
    contact: "Contact",
    tagline:
      "IT company in Casablanca: infrastructure, cybersecurity, managed services, and professional training in Morocco.",
    legal: {
      mentions: "Legal notice",
      privacy: "Privacy policy",
      terms: "Terms of use",
    },
    copyright: "© 2026 SYNET. All rights reserved.",
    companyLinks: [
      { label: "About", href: "/about" },
      { label: "FAQ", href: "/resources/faq" },
    ],
    serviceLinks: [
      { label: "Web Development", href: "/business-solutions/web-development" },
      { label: "App Development", href: "/business-solutions/app-development" },
      { label: "Network Infrastructure", href: "/business-solutions/network-infrastructure" },
      { label: "Cybersecurity", href: "/business-solutions/cybersecurity" },
    ],
    trainingLinks: [
      { label: "Networking Training", href: "/training-center/networking-training" },
      { label: "Linux Training", href: "/training-center/linux-training" },
      { label: "Cybersecurity Training", href: "/training-center/cybersecurity-training" },
      { label: "Cloud Training", href: "/training-center/cloud-computing" },
      { label: "SAP Training", href: "/training-center/sap-training" },
      { label: "Microsoft Training", href: "/training-center/microsoft-technologies" },
      { label: "Corporate Training", href: "/training-center/corporate-training" },
    ],
    contactInfo: {
      address: "Casablanca, Morocco",
      phone: "+212 6 18 56 34 45",
      email: "contact@synet.ma",
      hours: "Mon – Fri, 8:30 AM – 6:00 PM",
    },
    whatsapp: "WhatsApp",
  },
  hero: {
    overline: "IT solutions in Casablanca",
    headline: "Reliable IT systems.",
    headlineAccent: "Practical skills.",
    lead: "In Casablanca, SYNET designs, secures, and maintains your IT systems, and trains your teams on skills used in real projects.",
    ctaSolutions: "Explore our solutions",
    ctaTraining: "Discover our training",
    chipBusiness: "Business Solutions",
    chipBusinessSub: "Infrastructure · Security · Cloud",
    chipTraining: "Training Center",
    chipTrainingSub: "Networking · Linux · Cybersecurity",
    imageAlt: "Enterprise IT infrastructure — datacenter and network systems",
    trust: [
      { label: "Certified training programs", icon: "award" },
      { label: "Enterprise IT expertise", icon: "building" },
      { label: "Professional support", icon: "headset" },
      { label: "Industry best practices", icon: "check-circle" },
    ],
    stats: [
      { value: "500+", label: "Professionals trained" },
      { value: "50+", label: "Corporate clients" },
      { value: "20+", label: "Training programs" },
      { value: "5+", label: "Years of experience" },
    ],
  },
  businessOverview: {
    id: "business-solutions",
    overline: "BUSINESS SOLUTIONS",
    heading: "Complete IT solutions for your organization",
    lead: "From network infrastructure to cybersecurity, SYNET designs, deploys, and maintains reliable, secure systems tailored to your industry.",
    bullets: [
      "Custom design and architecture",
      "Turnkey deployment and go-live",
      "Responsive technical support and proactive maintenance",
      "Security integrated at every project stage",
    ],
    viewAllServices: "View all services",
    requestQuote: "Request a quote",
    stats: [
      { value: "15+", label: "years of experience" },
      { value: "200+", label: "clients served" },
      { value: "7", label: "areas of expertise" },
      { value: "24/7", label: "responsive support" },
    ],
    audiences: [
      { label: "SMEs", href: "/sectors/smes", icon: "building" },
      { label: "Schools", href: "/sectors/schools", icon: "school" },
      { label: "Clinics", href: "/sectors/clinics", icon: "hospital" },
      { label: "Factories", href: "/sectors/factories", icon: "factory" },
      { label: "Government", href: "/sectors/government", icon: "landmark" },
    ],
  },
  trainingOverview: {
    id: "training-center",
    overline: "TRAINING CENTER",
    heading: "Develop recognized technology skills",
    lead: "Hands-on training in networking, systems, cybersecurity, and cloud — designed for employment and delivered by certified professionals.",
    bullets: [
      "Practical approach with lab exercises",
      "Certified instructors active in the field",
      "Preparation for international certifications",
      "Lab equipped with current technologies",
    ],
    viewAllTraining: "View all training programs",
    enroll: "Enroll in training",
    stats: [
      { value: "500+", label: "trainees graduated" },
      { value: "7", label: "training programs" },
      { value: "95%", label: "satisfaction rate" },
      { value: "✓", label: "certified lab" },
    ],
    audiences: [
      { label: "Students", href: "/training-center#students", icon: "graduation" },
      { label: "Job Seekers", href: "/training-center#job-seekers", icon: "briefcase" },
      { label: "IT Professionals", href: "/training-center#it-professionals", icon: "monitor" },
      { label: "Companies", href: "/training-center/corporate-training", icon: "building" },
    ],
  },
  featuredCourses: {
    overline: "FEATURED COURSES",
    heading: "Upcoming training sessions",
    lead: "Enroll in our most in-demand programs. Limited seats per session.",
    enroll: "Enroll",
    viewCalendar: "View full calendar",
    courses: [
      {
        slug: "networking-training",
        tag: "NETWORKING",
        title: "CCNA Training — Cisco Networking",
        meta: "5 days · Intermediate level",
        nextSession: "Next session: July 15, 2026",
        imageVariant: "network",
      },
      {
        slug: "cybersecurity-training",
        tag: "CYBERSECURITY",
        title: "Cybersecurity Training — Network Security",
        meta: "5 days · Intermediate level",
        nextSession: "Next session: July 22, 2026",
        imageVariant: "security",
      },
      {
        slug: "linux-training",
        tag: "LINUX",
        title: "Linux Training — System Administration",
        meta: "5 days · Beginner to intermediate",
        nextSession: "Next session: August 5, 2026",
        imageVariant: "linux",
      },
    ],
  },
  coreServices: {
    overline: "OUR SERVICES",
    heading: "Comprehensive IT solutions expertise",
    lead: "From the first audit to ongoing support, SYNET covers your IT needs in Casablanca and across Morocco with one trusted team.",
    learnMore: "Learn more",
    requestQuote: "Request a custom quote",
    services: [
      { slug: "network-infrastructure", title: "Network Infrastructure", description: "Design, deployment, and network optimization", icon: "network" },
      { slug: "cybersecurity", title: "Cybersecurity", description: "Proactive protection for systems and data", icon: "shield" },
      { slug: "voip-ip-telephony", title: "VoIP & IP Telephony", description: "Unified communication solutions", icon: "phone" },
      { slug: "it-support-maintenance", title: "IT Support & Maintenance", description: "Responsive and preventive technical assistance", icon: "headset" },
      { slug: "cloud-solutions", title: "Cloud Solutions", description: "Migration, hosting, and cloud management", icon: "cloud" },
      { slug: "cctv-access-control", title: "CCTV & Access Control", description: "Intelligent physical security", icon: "camera" },
      { slug: "web-development", title: "Web Development", description: "Professional websites and applications", icon: "code" },
    ],
  },
  whyChoose: {
    overline: "WHY SYNET",
    heading: "A trusted technology partner",
    lead: "Two complementary divisions, one standard: technical excellence and concrete results.",
    learnMore: "Learn more about SYNET",
    differentiators: [
      { title: "Dual expertise", description: "The only provider combining IT solutions and professional training — for businesses and their teams.", icon: "layers" },
      { title: "Field expertise", description: "Our trainers are our engineers. Our engineers train your teams. Practice, not theory.", icon: "users" },
      { title: "Certified & recognized", description: "Partnerships and certifications from leading technology vendors.", icon: "award" },
      { title: "End-to-end support", description: "From initial audit to ongoing support — one point of contact for all IT needs.", icon: "check-circle" },
    ],
    partnersLabel: "TECHNOLOGIES & CERTIFICATIONS",
    technologiesNote:
      "Cisco, Microsoft, Linux, SAP, Fortinet, AWS — training and projects on leading market technologies.",
  },
  testimonials: {
    overline: "TESTIMONIALS",
    heading: "What our clients and trainees say about us",
    divisionBusiness: "Business Solutions",
    divisionTraining: "Training Center",
    prev: "Previous testimonial",
    next: "Next testimonial",
    items: [
      {
        quote: "SYNET modernized our network infrastructure with minimal disruption to our users.",
        attribution: "IT Director",
        role: "Private school",
        division: "business",
      },
      {
        quote: "The Linux training helped me land my first system administration position.",
        attribution: "Trainee",
        role: "Class of 2025",
        division: "training",
      },
      {
        quote: "Their cybersecurity team identified vulnerabilities we didn't know existed. Professional and fast response.",
        attribution: "IT Manager",
        role: "Manufacturing SME",
        division: "business",
      },
      {
        quote: "Our teams completed SYNET's cybersecurity training. Practical content, directly applicable.",
        attribution: "HR Director",
        role: "Local enterprise",
        division: "training",
      },
    ],
  },
  contactCta: {
    heading: "Ready to start your project or training?",
    lead: "Our Casablanca team responds within one business day. Call +212 6 18 56 34 45.",
    businessTitle: "Business Solutions",
    businessBody: "Request a free, no-obligation quote for your IT project.",
    businessCta: "Request a quote",
    trainingTitle: "Training Center",
    trainingBody: "Enroll in a session or learn more about our programs.",
    trainingCta: "Enroll in training",
    orContact: "Or contact us directly",
    contactLink: "Contact us",
    whatsapp: "WhatsApp",
  },
  trainingPages: {
    hub: {
      metaTitle: "IT Training Casablanca | SYNET Training Center",
      metaDescription:
        "IT training centre in Casablanca: CCNA, Linux, cybersecurity, cloud, SAP and Microsoft. Classroom courses, 3 levels. Tel. +212 6 18 56 34 45.",
      keywords: [
        "IT training Casablanca",
        "CCNA training Casablanca",
        "Linux training Casablanca",
        "cybersecurity training Casablanca",
        "professional IT training Morocco",
      ],
      overline: "TRAINING CENTER",
      heading: "Professional IT training",
      lead: "SYNET is an IT training centre in Casablanca: classroom courses, three levels per program (CCNA networking, Linux, cybersecurity, cloud, SAP and Microsoft). Hands-on lab, certified instructors. Enroll at +212 6 18 56 34 45.",
      catalogHeading: "Course catalog",
      catalogLead: "Search and filter our programs to find the right training for your career path.",
      whyHeading: "Why train with SYNET in Casablanca",
      whyItems: [
        {
          title: "Classroom training in Casablanca",
          body: "Weekday lab sessions for students, job seekers and SME teams in Casablanca-Settat.",
        },
        {
          title: "Three levels on every course",
          body: "Each program has Level 1, 2 and 3 with a published price. You pick the level when you enroll.",
        },
        {
          title: "Reply within 24 hours",
          body: "Call +212 6 18 56 34 45, WhatsApp, or the enrollment form. Session confirmation within one business day.",
        },
      ],
      faqHeading: "FAQ — training in Casablanca",
      faq: [
        {
          question: "Where do SYNET courses take place?",
          answer: "Classroom training in Casablanca, Morocco. Contact: +212 6 18 56 34 45.",
        },
        {
          question: "Which IT courses do you offer in Casablanca?",
          answer:
            "CCNA / Cisco networking, Linux, cybersecurity, cloud (AWS & Azure), SAP, Microsoft (Server & Active Directory), and tailored corporate programs.",
        },
        {
          question: "Are there several levels?",
          answer: "Yes. Every course has three levels (Level 1, 2 and 3), each with its own price on the course page and enrollment form.",
        },
        {
          question: "How do I enroll?",
          answer:
            "Use the enrollment form, or call / WhatsApp +212 6 18 56 34 45. We confirm your seat within one business day.",
        },
        {
          question: "Are the courses hands-on?",
          answer: "Yes. Theory plus lab work, designed for real workplace use in Morocco.",
        },
        {
          question: "Do you train company teams?",
          answer: "Yes. In-company in Casablanca or remote, from the same catalog.",
        },
        {
          question: "How fast do you reply?",
          answer: "Within 24 business hours after your enrollment or information request.",
        },
      ],
    },
    catalog: {
      searchPlaceholder: "Search courses…",
      searchLabel: "Search the catalog",
      filterCategory: "Category",
      filterLevel: "Level",
      allCategories: "All categories",
      allLevels: "All levels",
      resultsCount: "course(s) found",
      noResults: "No courses match your criteria.",
      clearFilters: "Clear filters",
    },
    categories: {
      networking: "Networking",
      linux: "Linux",
      cybersecurity: "Cybersecurity",
      cloud: "Cloud",
      sap: "SAP",
      microsoft: "Microsoft",
      corporate: "Corporate training",
    },
    levels: {
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced",
      "all-levels": "All levels",
    },
    card: {
      duration: "Duration",
      level: "Level",
      price: "Price",
      nextSession: "Next session",
      spotsLeft: "spots left",
      viewCourse: "View course",
      apply: "Enroll",
    },
    priceTiers: {
      heading: "Prices by level",
      from: "From",
      "level-1": "Level 1",
      "level-2": "Level 2",
      "level-3": "Level 3",
      selectLevel: "Select a level",
    },
    detail: {
      about: "About this course",
      outcomes: "What you will learn",
      prerequisites: "Prerequisites",
      schedule: "Schedule",
      instructor: "Instructor",
      sessions: "Upcoming sessions",
      certification: "Certification",
      price: "Price",
      applyNow: "Enroll now",
      askQuestion: "Ask a question",
      backToCatalog: "Back to catalog",
      format: "Format",
      dates: "Dates",
      casablancaHeading: "This course in Casablanca",
    },
    localSeo: {
      networking: {
        metaTitle: "CCNA Training Casablanca | Cisco Networking — SYNET",
        metaDescription:
          "CCNA and networking training in Casablanca: 3 levels, classroom lab. SYNET. Tel. +212 6 18 56 34 45.",
        audience:
          "For technicians, administrators and career changers in Casablanca who need to configure and troubleshoot an enterprise network.",
        levels:
          "Level 1: TCP/IP basics and devices. Level 2: VLANs, routing and switching. Level 3: network security, OSPF and advanced troubleshooting toward CCNA prep.",
        outcome:
          "You leave able to install, secure and troubleshoot a Cisco LAN. Enroll at +212 6 18 56 34 45.",
      },
      linux: {
        metaTitle: "Linux Training Casablanca | System Administration — SYNET",
        metaDescription:
          "Linux training in Casablanca: server administration, 3 levels, classroom. SYNET. Tel. +212 6 18 56 34 45.",
        audience:
          "For beginners and junior admins in Casablanca who must run Linux servers in production.",
        levels:
          "Level 1: install, users, files. Level 2: services, packages, permissions. Level 3: Bash, monitoring and automation.",
        outcome: "Classroom sessions in Casablanca. Tel. +212 6 18 56 34 45.",
      },
      cybersecurity: {
        metaTitle: "Cybersecurity Training Casablanca | Network Security — SYNET",
        metaDescription:
          "Cybersecurity training in Casablanca: 3 levels, classroom. SYNET. Tel. +212 6 18 56 34 45.",
        audience:
          "Network admins and IT staff in Casablanca who need to protect SME or industrial infrastructure.",
        levels:
          "Level 1: threats and hardening. Level 2: firewall and segmentation. Level 3: detection and incident scenarios.",
        outcome: "Lab-based methods used in Morocco. Enroll: +212 6 18 56 34 45.",
      },
      cloud: {
        metaTitle: "Cloud Training Casablanca | AWS and Azure — SYNET",
        metaDescription:
          "AWS and Azure training in Casablanca: 3 levels, classroom. SYNET. Tel. +212 6 18 56 34 45.",
        audience:
          "Technicians and developers in Casablanca deploying services on AWS or Azure.",
        levels:
          "Level 1: cloud basics. Level 2: networks, storage, identity. Level 3: a simple workload with cost and security hygiene.",
        outcome: "Classroom training in Casablanca. Tel. +212 6 18 56 34 45.",
      },
      sap: {
        metaTitle: "SAP Training Casablanca | ERP Fundamentals — SYNET",
        metaDescription:
          "SAP training in Casablanca: ERP fundamentals, 3 levels. SYNET. Tel. +212 6 18 56 34 45.",
        audience:
          "Business users and junior ERP staff in Casablanca starting with SAP.",
        levels:
          "Level 1: navigation. Level 2: core modules. Level 3: practical flows.",
        outcome: "Classroom in Casablanca. Tel. +212 6 18 56 34 45.",
      },
      microsoft: {
        metaTitle: "Microsoft Training Casablanca | Server and Active Directory — SYNET",
        metaDescription:
          "Windows Server and Active Directory training in Casablanca: 3 levels. SYNET. Tel. +212 6 18 56 34 45.",
        audience:
          "Microsoft technicians in Casablanca who manage a Windows domain.",
        levels:
          "Level 1: Windows Server roles. Level 2: Active Directory and GPO. Level 3: infrastructure services and troubleshooting.",
        outcome: "Classroom lab in Casablanca. Tel. +212 6 18 56 34 45.",
      },
      corporate: {
        metaTitle: "Corporate IT Training Casablanca | Tailored Programs — SYNET",
        metaDescription:
          "In-company IT training in Casablanca: networking, Linux, security, cloud, Microsoft. Tel. +212 6 18 56 34 45.",
        audience:
          "HR and IT leads in Casablanca who need a team trained on your stack.",
        levels:
          "Three levels depending on the audience. Content is adapted to your tools.",
        outcome: "Quote within 24 business hours at +212 6 18 56 34 45.",
      },
    },
    enrollment: {
      metaTitle: "Training Enrollment — SYNET",
      metaDescription:
        "Enroll in a SYNET training course. Complete the form and our team will contact you within 24 hours.",
      overline: "ENROLLMENT",
      heading: "Training enrollment",
      lead: "Complete the form below. Our admissions team will contact you to confirm your enrollment.",
      successTitle: "Request submitted",
      successMessage:
        "Thank you for enrolling. Our team will contact you within one business day to confirm your seat.",
      nextSteps: [
        "Our admissions team reviews your request",
        "We contact you to confirm the session",
        "You receive enrollment confirmation and details",
      ],
      submit: "Submit enrollment request",
      submitting: "Submitting…",
      fields: {
        fullName: "Full name",
        email: "Email address",
        phone: "Phone number",
        course: "Course",
        selectCourse: "Select a course",
        experience: "Experience level",
        experienceOptions: [
          { value: "student", label: "Student" },
          { value: "job-seeker", label: "Job seeker" },
          { value: "junior", label: "Junior professional (0–2 years)" },
          { value: "experienced", label: "Experienced professional (3+ years)" },
          { value: "corporate", label: "Corporate enrollment" },
        ],
        session: "Preferred session",
        selectSession: "Select a session",
        trainingLevel: "Training level",
        message: "Message (optional)",
        messageHint: "Questions or specific needs",
        consent: "I agree that SYNET may process my data to handle my enrollment, in accordance with the",
        consentLink: "privacy policy",
      },
      errors: {
        required: "This field is required",
        email: "Invalid email address",
        consent: "You must accept the privacy policy",
      },
    },
    forms: {
      referenceLabel: "Your request reference",
      nextStepsTitle: "Next steps",
    },
  },
  businessPages: {
    hub: {
      metaTitle: "Our IT Services — SYNET",
      metaDescription:
        "Network infrastructure, cybersecurity, web development, cloud, VoIP and IT support in Casablanca, Morocco. Quote within 24 hours.",
      overline: "OUR SERVICES",
      heading: "The IT services we provide",
      lead: "From websites to cybersecurity, SYNET supports your organization with practical solutions: web development, apps, networking, and system protection.",
      catalogHeading: "Our areas of expertise",
      catalogLead: "Explore our services and get in touch to discuss your project.",
      trustHeading: "Why companies trust us",
      trustItems: [
        { value: "8", label: "core services" },
        { value: "200+", label: "clients served" },
        { value: "24h", label: "response time" },
        { value: "MA", label: "service in Morocco" },
      ],
    },
    catalog: {
      searchPlaceholder: "Search services…",
      searchLabel: "Search",
      resultsCount: "service(s) found",
      noResults: "No services match your search.",
    },
    card: {
      viewService: "View service",
      requestQuote: "Request a quote",
    },
    detail: {
      about: "Overview",
      benefits: "Benefits for your organization",
      process: "Our approach",
      technologies: "Technologies & partners",
      faq: "Frequently asked questions",
      backToHub: "Back to solutions",
    },
    cta: {
      heading: "Let's discuss your IT project",
      lead: "Get a free, no-obligation quote. Our sales team responds within one business day.",
      requestQuote: "Request a quote",
      contactUs: "Contact us",
      responseTime: "Response within 1 business day",
    },
    quote: {
      metaTitle: "Request a Quote — SYNET",
      metaDescription:
        "Request a quote for IT projects: network, security, cloud, VoIP, and more. Response within 24 hours.",
      overline: "REQUEST A QUOTE",
      heading: "Request a custom quote",
      lead: "Describe your project and our engineers will propose a solution tailored to your needs and budget.",
      successTitle: "Request submitted",
      successMessage:
        "Thank you for your request. A SYNET advisor will contact you within one business day to discuss your project.",
      nextSteps: [
        "Your need is reviewed by a sales engineer",
        "Phone call or scoping meeting",
        "Technical proposal and custom quote",
      ],
      submit: "Submit quote request",
      submitting: "Submitting…",
      fields: {
        company: "Company name",
        contactName: "Contact name",
        email: "Business email",
        phone: "Phone number",
        service: "Service of interest",
        selectService: "Select a service",
        sector: "Industry sector",
        sectorOptions: [
          { value: "sme", label: "SME" },
          { value: "school", label: "School / University" },
          { value: "clinic", label: "Clinic / Healthcare" },
          { value: "factory", label: "Factory / Industry" },
          { value: "government", label: "Government organization" },
          { value: "other", label: "Other" },
        ],
        timeline: "Desired timeline",
        timelineOptions: [
          { value: "urgent", label: "Urgent (< 1 month)" },
          { value: "1-3", label: "1 to 3 months" },
          { value: "3-6", label: "3 to 6 months" },
          { value: "planning", label: "Planning phase" },
        ],
        description: "Project description",
        descriptionHint: "Describe your needs, constraints, and objectives",
        consent: "I agree that SYNET may process my data to handle my quote request, in accordance with the",
        consentLink: "privacy policy",
      },
      errors: {
        required: "This field is required",
        email: "Invalid email address",
        consent: "You must accept the privacy policy",
      },
    },
  },
};
