import type { SitePagesCopy } from "../types";

export const siteEn: SitePagesCopy = {
  notFound: {
    title: "Page not found",
    description: "The page you requested does not exist or has been moved.",
    home: "Back to homepage",
  },
  contact: {
    metaTitle: "Contact SYNET Casablanca | +212 6 18 56 34 45",
    metaDescription: "Contact SYNET in Casablanca for IT projects or training enrollment. Phone +212 6 18 56 34 45. Response within one business day.",
    heading: "Contact SYNET in Casablanca",
    lead: "Questions about our solutions or training programs? Call, WhatsApp, or send a message. We respond within one business day.",
    formHeading: "Send a message",
    responseTime: "Response time: 1 business day",
    successTitle: "Message sent",
    successMessage: "Thank you. A SYNET advisor will contact you shortly.",
    submit: "Send message",
    submitting: "Sending…",
    fields: {
      name: "Full name",
      email: "Email",
      phone: "Phone",
      organization: "Organization (optional)",
      intent: "Your inquiry concerns",
      intentOptions: [
        { value: "business", label: "Business solutions" },
        { value: "training", label: "Training center" },
        { value: "both", label: "Both" },
        { value: "other", label: "Other" },
      ],
      subject: "Subject (optional)",
      message: "Message",
      consent: "I agree that SYNET may process my data to respond to my request, in accordance with the",
      consentLink: "privacy policy",
    },
    errors: { required: "This field is required", email: "Invalid email address", consent: "You must accept the privacy policy" },
    nextSteps: [
      "Our team reviews your request",
      "An advisor contacts you by email, phone, or WhatsApp",
      "We propose the next step (quote, enrollment, meeting)",
    ],
    whatsappCta: "Message on WhatsApp",
    mapHeading: "Service area",
    mapCaption:
      "SYNET is based in Casablanca and works on-site across Casablanca-Settat and Morocco. A precise street address is shared when you book a visit.",
  },
  about: {
    metaTitle: "About SYNET Casablanca | IT Solutions & Training",
    metaDescription: "SYNET is an IT company in Casablanca: network solutions, cybersecurity, managed services, and professional training in Morocco.",
    heading: "About SYNET",
    lead: "Based in Casablanca, SYNET helps organizations build reliable IT systems and professionals develop skills used on real projects.",
    missionHeading: "Our mission",
    mission: "Help businesses build secure, reliable infrastructure while enabling individuals to gain job-ready, practical skills.",
    values: [
      { title: "Technical excellence", description: "Certified engineers and trainers active in the field." },
      { title: "Pragmatism", description: "Solutions and training focused on outcomes, not theory alone." },
      { title: "Proximity", description: "A single point of contact for IT projects and team development." },
    ],
    ctaQuote: "Request a quote",
    ctaTraining: "View training programs",
  },
  partners: {
    metaTitle: "Partners & certifications | SYNET Casablanca",
    metaDescription:
      "Cisco, Fortinet, Microsoft, Linux, SAP, AWS and Azure: technologies used by SYNET in Casablanca for IT projects and certification-oriented training.",
    overline: "PARTNERS",
    heading: "Technologies & certifications",
    lead: "Our engineers and trainers work daily with leading market technologies. The tools we deploy for clients are the same ones we teach in the lab.",
    technologies: "Cisco · Microsoft · Linux · SAP · Fortinet · Cloud (AWS/Azure)",
    note: "Official partnerships and certification details are available on request and updated regularly.",
    groups: [
      {
        title: "Networking & infrastructure",
        description: "Design and deployment of enterprise network architectures.",
        items: ["Cisco", "HPE Aruba", "Ubiquiti", "MikroTik"],
      },
      {
        title: "Cybersecurity",
        description: "Perimeter protection, endpoints, and threat monitoring.",
        items: ["Fortinet", "EDR", "SIEM", "pfSense"],
      },
      {
        title: "Cloud & Microsoft",
        description: "Identity, collaboration, servers, and cloud workloads.",
        items: ["Microsoft 365", "Windows Server", "Azure", "AWS"],
      },
      {
        title: "Systems & ERP",
        description: "Linux administration and SAP fundamentals for business teams.",
        items: ["Linux (Debian/RHEL)", "SAP", "VMware", "Veeam"],
      },
      {
        title: "Physical security",
        description: "IP video surveillance and access control for sensitive sites.",
        items: ["Hikvision", "Axis", "Dahua", "ZKTeco"],
      },
    ],
    relatedTrainingHeading: "Related training",
    ctaQuote: "Request a project quote",
    ctaTraining: "View training programs",
  },
  careers: {
    metaTitle: "Careers | SYNET",
    heading: "Join SYNET",
    lead: "We hire engineers, consultants, and trainers passionate about technology and knowledge transfer.",
    cta: "Contact us",
  },
  sectors: {
    metaTitle: "Industries | SYNET Casablanca",
    metaDescription:
      "IT solutions for SMEs, schools, clinics, factories, and public organizations in Casablanca, Morocco. Infrastructure, security, managed services, and training.",
    heading: "Solutions for your industry",
    lead: "Every organization has specific constraints. SYNET adapts infrastructure, security, and training to your operations, on-site in Morocco.",
    overline: "INDUSTRIES",
    viewServices: "View our services",
    requestQuote: "Request a quote",
    challengesHeading: "Your challenges",
    approachHeading: "How we work",
    relatedServicesHeading: "Relevant services",
    relatedTrainingHeading: "Training for your teams",
    faqHeading: "Frequently asked questions",
    otherSectorsHeading: "Other industries",
    items: {
      sme: {
        name: "SMEs",
        description:
          "Outsource IT with a responsive partner: support, security, and infrastructure at controlled cost.",
        metaTitle: "Managed IT for SMEs in Casablanca | SYNET",
        metaDescription:
          "IT support, cybersecurity, and networking for SMEs in Casablanca. One point of contact, sized contracts, quote within 24 hours.",
        lead: "Moroccan SMEs need reliable IT without a large internal team. SYNET handles the day-to-day: helpdesk, security, networking, and hardware lifecycle.",
        challenges: ["Limited IT budget", "Need for responsiveness", "Data protection", "Few internal IT resources"],
        approach:
          "We start with an inventory of your estate, then propose a realistic plan: managed support, firewall, professional Wi-Fi, and short user training. You keep one point of contact and clear reporting.",
        faq: [
          {
            question: "Do you offer a monthly plan for SMEs?",
            answer: "Yes. Support and managed-service contracts are sized to the number of seats and sites.",
          },
          {
            question: "Do you work on-site in Casablanca?",
            answer: "Yes. Audit, deployment, and maintenance are on-site, with remote support for everyday incidents.",
          },
          {
            question: "How quickly can we start?",
            answer: "After the quote is approved, onboarding can start within a few days depending on scope.",
          },
        ],
      },
      schools: {
        name: "Schools",
        description:
          "High-performance networks, cybersecurity, and computer labs for reliable learning.",
        metaTitle: "IT for schools in Casablanca | SYNET",
        metaDescription:
          "Campus networking, Wi-Fi, cybersecurity, and computer labs for schools in Morocco. Preventive maintenance included.",
        lead: "A school needs stable connectivity for classes, protection of student data, and a computer fleet ready every term. SYNET designs and maintains that environment.",
        challenges: ["Campus connectivity", "Student data protection", "Preventive maintenance", "Computer labs"],
        approach:
          "We size Wi-Fi and cabling for teaching traffic, segment the network (staff, students, guests), lock down access, and equip labs used for both classes and professional training.",
        faq: [
          {
            question: "Can you work during school holidays?",
            answer: "Yes. Major rollouts are scheduled outside term time to reduce disruption.",
          },
          {
            question: "Do you provide internet filtering for students?",
            answer: "Yes. Filtering, guest Wi-Fi, and access policies are part of our network and security work.",
          },
          {
            question: "Can you train the school's IT staff?",
            answer: "Yes. Short sessions in networking, Linux, or cybersecurity can be arranged for your team.",
          },
        ],
      },
      clinics: {
        name: "Clinics",
        description:
          "Reliable, secure infrastructure for medical systems and patient data confidentiality.",
        metaTitle: "Clinic IT infrastructure in Morocco | SYNET",
        metaDescription:
          "Networking, cybersecurity, and managed IT for clinics in Morocco. High availability and protection of health data.",
        lead: "In a clinic, network or server downtime immediately affects reception and care. SYNET builds stable, backed-up, protected infrastructure with rapid support.",
        challenges: ["Critical availability", "Health data confidentiality", "Fast support", "Zone-based access"],
        approach:
          "We isolate clinical applications, set up backup and continuity, secure access (network, badges, cameras), and define an intervention SLA suited to a care environment.",
        faq: [
          {
            question: "Can you work without interrupting clinic operations?",
            answer: "Yes. Cutover is planned and tested. Critical work can be done outside peak hours.",
          },
          {
            question: "Do you help secure patient records?",
            answer: "We secure infrastructure, access, and backups. Clinical compliance remains yours, with our technical support.",
          },
          {
            question: "Do you install CCTV for access points?",
            answer: "Yes. IP video and access control can be part of the same infrastructure project.",
          },
        ],
      },
      factories: {
        name: "Factories",
        description:
          "Industrial networks, CCTV, and maintenance for connected production sites.",
        metaTitle: "Industrial network and factory security | SYNET",
        metaDescription:
          "Industrial networks, IT/OT security, CCTV, and maintenance for factories in Morocco. Designed for production continuity.",
        lead: "A production site needs a robust network, a split between office and shop floor, and both physical and digital security. SYNET deploys and maintains these foundations to reduce downtime.",
        challenges: ["Harsh environments", "Physical and digital security", "Production continuity", "Large sites"],
        approach:
          "We map office and shop-floor traffic, segment the network, install CCTV and access control, and set preventive maintenance to avoid surprise outages.",
        faq: [
          {
            question: "Do you work outside Casablanca?",
            answer: "Yes. We travel on-site in Morocco as needed. Remote support complements local maintenance.",
          },
          {
            question: "Do you separate office and production networks?",
            answer: "Yes. VLAN segmentation and traffic isolation are part of our factory architectures.",
          },
          {
            question: "Can you train maintenance technicians?",
            answer: "Yes. Networking, Linux, or cybersecurity modules can be tailored to industrial teams.",
          },
        ],
      },
      government: {
        name: "Government organizations",
        description:
          "Solutions aligned with public-sector requirements: security, audit, and project support.",
        metaTitle: "Public-sector IT solutions in Morocco | SYNET",
        metaDescription:
          "Infrastructure, cybersecurity, cloud, and managed IT for public organizations in Morocco. Audit, documentation, and project delivery.",
        lead: "Public projects require traceability, security, and documented delivery. SYNET covers infrastructure, cybersecurity, and team upskilling within your procedures.",
        challenges: ["Compliance requirements", "Multi-site projects", "Data sovereignty", "Audit and documentation"],
        approach:
          "We scope the need, deliver architecture and documentation, roll out in phases, and train your teams. Security (access, backup, monitoring) is built in from day one.",
        faq: [
          {
            question: "Can you respond to a public tender specification?",
            answer: "Yes. We review your specification and submit a technical and financial proposal for the defined scope.",
          },
          {
            question: "Do you cover multiple sites?",
            answer: "Yes. WAN, VPN, and centralized support for multi-site organizations.",
          },
          {
            question: "Do you train public-sector staff?",
            answer: "Yes. In-house sessions in networking, cybersecurity, Microsoft, or cloud, according to your needs.",
          },
        ],
      },
    },
  },
  caseStudies: {
    metaTitle: "Case studies | SYNET",
    metaDescription: "IT projects and case studies delivered by SYNET for organizations in Morocco.",
    heading: "Our work",
    lead: "See how SYNET supports clients on infrastructure, security, and training.",
    comingSoon: "New case studies will be published soon. Contact us to discuss similar projects.",
    cta: "Request a quote",
  },
  resources: {
    metaTitle: "Resources | SYNET",
    heading: "Resources",
    lead: "Articles, guides, and answers to common questions about our services and training.",
    blogTitle: "Blog",
    blogLead: "Technical advice, news, and field insights.",
    faqTitle: "FAQ",
    faqLead: "Answers to frequently asked questions.",
    comingSoon: "Content coming soon.",
  },
  faq: {
    metaTitle: "FAQ | SYNET Casablanca",
    heading: "Frequently asked questions",
    lead: "Quick answers about our services, training, and enrollment in Casablanca.",
    items: [
      {
        question: "Where does SYNET work?",
        answer:
          "SYNET is based in Casablanca and works on-site across Casablanca-Settat and Morocco. Call or WhatsApp +212 6 18 56 34 45.",
        division: "business",
      },
      { question: "How quickly do you respond to quote requests?", answer: "We aim to respond within one business day after receiving your request.", division: "business" },
      { question: "Do you offer IT support for SMEs?", answer: "Yes. Our support and maintenance service covers helpdesk, managed services, and on-site intervention.", division: "business" },
      { question: "Do training programs include hands-on labs?", answer: "Yes. All programs combine theory and practical exercises in our equipped lab.", division: "training" },
      { question: "How do I enroll in a course?", answer: "Complete the online enrollment form or contact us. Our team confirms your seat within one business day.", division: "training" },
    ],
  },
  blog: {
    metaTitle: "Blog | SYNET",
    heading: "SYNET Blog",
    lead: "News, guides, and expertise in IT solutions and professional training.",
    comingSoon: "The blog will be available soon. Contact us to stay informed.",
  },
  legal: {
    mentions: { metaTitle: "Legal notice | SYNET", heading: "Legal notice", updated: "Last updated: June 2026", body: ["Publisher: SYNET — [Legal name and full address to be completed].", "Publication director: [Name to be completed].", "Hosting: [Host to be completed].", "Contact: contact@synet.ma — +212 6 18 56 34 45 (Casablanca, Morocco).", "Information on this site is indicative and may change without notice."] },
    privacy: { metaTitle: "Privacy policy | SYNET", heading: "Privacy policy", updated: "Last updated: June 2026", body: ["SYNET collects data submitted via forms (name, email, phone, message) only to process contact, quote, or enrollment requests.", "Legal basis: pre-contractual measures and legitimate interest in responding to inquiries.", "Data is retained as long as needed to process your request, then archived per legal obligations.", "You may request access, correction, or deletion at contact@synet.ma or +212 6 18 56 34 45.", "Full contact details and DPO information will be provided at final production launch."] },
    terms: { metaTitle: "Terms of use | SYNET", heading: "Terms of use", updated: "Last updated: June 2026", body: ["Use of synet.ma implies acceptance of these terms.", "Content is protected by copyright. Unauthorized reproduction is prohibited.", "SYNET strives for accuracy but does not guarantee error-free information.", "External links are not SYNET's responsibility.", "Applicable law: Moroccan law. Competent court: [to be completed]."] },
  },
  forms: { referenceLabel: "Your request reference", nextStepsTitle: "Next steps" },
};
