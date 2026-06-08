import type { Course } from "../types";

export const coursesEn: Course[] = [
  {
    id: "ccna-networking",
    slug: "networking-training",
    category: "networking",
    name: "CCNA Training — Cisco Networking",
    shortDescription:
      "Master the design, installation, and maintenance of enterprise-grade Cisco networks.",
    description:
      "This intensive program covers Cisco routing and switching fundamentals, VLAN configuration, OSPF, basic network security, and troubleshooting. Designed for network technicians and administrators, it combines theory with hands-on lab work on real Cisco equipment.",
    duration: "5 days (40 hours)",
    level: "intermediate",
    schedule: "Mon – Fri, 9:00 AM – 5:00 PM",
    instructor: {
      name: "Karim Benali",
      title: "CCNP Certified Network Engineer",
      bio: "15 years of network deployment experience for SMEs and operators. Cisco trainer since 2018.",
    },
    price: "12,500 MAD",
    priceNote: "Lab materials and courseware included",
    certification: "CCNA 200-301 preparation",
    outcomes: [
      "Configure Cisco routers and switches",
      "Implement VLANs, trunking, and inter-VLAN routing",
      "Troubleshoot network connectivity issues",
      "Apply network security best practices",
    ],
    prerequisites: [
      "Basic IT knowledge",
      "TCP/IP fundamentals recommended",
    ],
    sessions: [
      { startDate: "2026-07-15", endDate: "2026-07-19", format: "On-site", spotsLeft: 4 },
      { startDate: "2026-09-08", endDate: "2026-09-12", format: "On-site", spotsLeft: 8 },
    ],
    imageVariant: "network",
  },
  {
    id: "linux-admin",
    slug: "linux-training",
    category: "linux",
    name: "Linux Training — System Administration",
    shortDescription:
      "Learn to administer Linux servers in production environments.",
    description:
      "Hands-on training covering installation, user management, permissions, system services, package management, Bash scripting, and monitoring. Ideal for beginners moving into system administration roles.",
    duration: "5 days (40 hours)",
    level: "beginner",
    schedule: "Mon – Fri, 9:00 AM – 5:00 PM",
    instructor: {
      name: "Sara El Amrani",
      title: "LPIC-2 Certified Linux Administrator",
      bio: "Linux production specialist for 10 years. Expert in automation and containerization.",
    },
    price: "9,800 MAD",
    priceNote: "30-day lab access included",
    certification: "LPIC-1 preparation",
    outcomes: [
      "Administer a Debian/RHEL Linux server",
      "Manage users, permissions, and processes",
      "Configure essential network services",
      "Automate tasks with Bash",
    ],
    prerequisites: ["No mandatory technical prerequisites"],
    sessions: [
      { startDate: "2026-08-05", endDate: "2026-08-09", format: "On-site", spotsLeft: 6 },
      { startDate: "2026-10-13", endDate: "2026-10-17", format: "On-site", spotsLeft: 10 },
    ],
    imageVariant: "linux",
  },
  {
    id: "cybersecurity",
    slug: "cybersecurity-training",
    category: "cybersecurity",
    name: "Cybersecurity Training — Network Security",
    shortDescription:
      "Protect your infrastructure with proven network security techniques.",
    description:
      "Practice-oriented training on common threats, firewalls, IDS/IPS, VPNs, system hardening, and incident response. Participants complete security and audit exercises on lab infrastructure.",
    duration: "5 days (40 hours)",
    level: "intermediate",
    schedule: "Mon – Fri, 9:00 AM – 5:00 PM",
    instructor: {
      name: "Youssef Tazi",
      title: "Cybersecurity Expert — CEH, Fortinet NSE4",
      bio: "Security consultant for public and private organizations. 12 years of SOC and audit experience.",
    },
    price: "14,200 MAD",
    certification: "CEH introductory module",
    outcomes: [
      "Identify and mitigate network threats",
      "Configure professional firewalls and VPNs",
      "Perform a basic security audit",
      "Apply an incident response plan",
    ],
    prerequisites: [
      "Network or system administration experience",
      "TCP/IP knowledge required",
    ],
    sessions: [
      { startDate: "2026-07-22", endDate: "2026-07-26", format: "On-site", spotsLeft: 3 },
      { startDate: "2026-11-03", endDate: "2026-11-07", format: "On-site", spotsLeft: 8 },
    ],
    imageVariant: "security",
  },
  {
    id: "cloud-computing",
    slug: "cloud-computing",
    category: "cloud",
    name: "Cloud Training — AWS & Azure Essentials",
    shortDescription:
      "Deploy and manage cloud workloads on leading market platforms.",
    description:
      "Training covering IaaS/PaaS/SaaS concepts, virtual machines, storage, cloud networking, identity, and billing. Practical labs on AWS and Azure with enterprise scenarios.",
    duration: "5 days (40 hours)",
    level: "intermediate",
    schedule: "Mon – Fri, 9:00 AM – 5:00 PM",
    instructor: {
      name: "Nadia Berrada",
      title: "AWS SAA & Azure AZ-104 Certified Architect",
      bio: "Cloud architect for enterprise migrations. 8 years of multi-cloud experience.",
    },
    price: "13,500 MAD",
    certification: "AWS Cloud Practitioner preparation",
    outcomes: [
      "Deploy resources on AWS and Azure",
      "Configure cloud networking and security",
      "Estimate and optimize cloud costs",
      "Plan a cloud migration strategy",
    ],
    prerequisites: ["Network and systems fundamentals recommended"],
    sessions: [
      { startDate: "2026-08-18", endDate: "2026-08-22", format: "On-site", spotsLeft: 7 },
    ],
    imageVariant: "cloud",
  },
  {
    id: "sap-training",
    slug: "sap-training",
    category: "sap",
    name: "SAP Training — ERP Fundamentals",
    shortDescription:
      "Get started with essential SAP modules for business management.",
    description:
      "Introductory training on SAP business processes, SAP GUI/Fiori navigation, FI/CO and MM modules, and configuration best practices. Designed for consultants and business users building SAP skills.",
    duration: "5 days (40 hours)",
    level: "beginner",
    schedule: "Mon – Fri, 9:00 AM – 5:00 PM",
    instructor: {
      name: "Hassan Mouline",
      title: "Certified SAP Consultant",
      bio: "15 years of SAP deployments in industry and distribution across Morocco and Europe.",
    },
    price: "15,800 MAD",
    outcomes: [
      "Navigate the SAP environment",
      "Understand FI/CO and MM flows",
      "Configure basic parameters",
      "Collaborate with SAP project teams",
    ],
    prerequisites: ["Business and process awareness"],
    sessions: [
      { startDate: "2026-09-22", endDate: "2026-09-26", format: "On-site", spotsLeft: 5 },
    ],
    imageVariant: "sap",
  },
  {
    id: "microsoft-tech",
    slug: "microsoft-technologies",
    category: "microsoft",
    name: "Microsoft Training — Server & Active Directory",
    shortDescription:
      "Administer Windows Server, Active Directory, and Microsoft infrastructure services.",
    description:
      "Comprehensive training on Windows Server 2022, Active Directory, DNS/DHCP, GPO, and Azure AD integration. Hands-on labs for SME and enterprise environments.",
    duration: "5 days (40 hours)",
    level: "intermediate",
    schedule: "Mon – Fri, 9:00 AM – 5:00 PM",
    instructor: {
      name: "Amine Chraibi",
      title: "MCT — Microsoft Certified Trainer",
      bio: "Microsoft certified trainer with 10 years of Windows infrastructure experience.",
    },
    price: "12,800 MAD",
    certification: "AZ-800 / Windows Server preparation",
    outcomes: [
      "Deploy and manage Windows Server",
      "Administer Active Directory and GPOs",
      "Configure DNS, DHCP, and file services",
      "Integrate Azure AD for hybrid identity",
    ],
    prerequisites: ["Basic Windows administration experience"],
    sessions: [
      { startDate: "2026-10-06", endDate: "2026-10-10", format: "On-site", spotsLeft: 6 },
    ],
    imageVariant: "microsoft",
  },
  {
    id: "corporate-training",
    slug: "corporate-training",
    category: "corporate",
    name: "Corporate Training — Custom Programs",
    shortDescription:
      "Custom IT training programs for your teams, on-site or remote.",
    description:
      "SYNET designs training paths aligned with your business goals: networking, security, cloud, or advanced productivity. Modular content, flexible scheduling, and progress reports included.",
    duration: "Custom (2 to 10 days)",
    level: "all-levels",
    schedule: "Based on your availability",
    instructor: {
      name: "SYNET Training Team",
      title: "Multi-domain certified instructors",
      bio: "20+ expert trainers available depending on your selected program.",
    },
    price: "On request",
    priceNote: "Volume pricing for groups",
    outcomes: [
      "Program aligned with your business needs",
      "On-site or center-based delivery",
      "Skills assessment before and after",
      "SYNET certificate of completion",
    ],
    prerequisites: ["Needs analysis included"],
    sessions: [
      { startDate: "2026-07-01", endDate: "2026-12-31", format: "Custom" },
    ],
    imageVariant: "corporate",
  },
];
