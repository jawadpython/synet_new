import type { Service } from "../types";

export const servicesEn: Service[] = [
  {
    id: "network-infrastructure",
    slug: "network-infrastructure",
    icon: "network",
    name: "Network Infrastructure",
    shortDescription:
      "Design, deployment, and optimization of reliable networks for SMEs, schools, and organizations.",
    description:
      "SYNET designs and deploys network infrastructure tailored to your operations: structured cabling, enterprise Wi-Fi, routing, VLAN segmentation, and monitoring. Our certified engineers deliver stable, secure, and scalable connectivity.",
    benefits: [
      { title: "Reliable network", description: "Redundant architecture sized for real usage with minimal downtime." },
      { title: "Optimized performance", description: "Throughput, latency, and Wi-Fi coverage tuned for offices and multi-site environments." },
      { title: "Integrated security", description: "Segmentation, perimeter firewall, and best practices from day one." },
      { title: "Ongoing support", description: "Proactive maintenance, monitoring, and rapid on-site intervention." },
    ],
    process: [
      { step: 1, title: "Audit & analysis", description: "Assessment of existing systems, business needs, and site constraints." },
      { step: 2, title: "Design", description: "Network architecture, diagrams, BOM, and deployment plan validated with you." },
      { step: 3, title: "Deployment", description: "Installation, configuration, and load testing in real conditions." },
      { step: 4, title: "Go-live", description: "Controlled cutover, documentation handover, and team training." },
      { step: 5, title: "Support & growth", description: "Maintenance, updates, and evolution as your organization scales." },
    ],
    technologies: ["Cisco", "Fortinet", "Ubiquiti", "HPE Aruba", "MikroTik", "Wireshark", "Zabbix", "PRTG"],
    imageVariant: "network",
  },
  {
    id: "cybersecurity",
    slug: "cybersecurity",
    icon: "shield",
    name: "Cybersecurity",
    shortDescription:
      "Proactive protection of your systems, data, and users against digital threats.",
    description:
      "Our cybersecurity experts deploy protection aligned with your risk profile: next-gen firewalls, intrusion detection, endpoint hardening, secure backup, and staff awareness programs.",
    benefits: [
      { title: "Risk reduction", description: "Identify and remediate vulnerabilities before they are exploited." },
      { title: "Compliance", description: "Alignment with sector requirements and international best practices." },
      { title: "Rapid response", description: "Incident procedures and a reactive team to limit attack impact." },
      { title: "Full visibility", description: "Security event monitoring and executive-ready reporting." },
    ],
    process: [
      { step: 1, title: "Risk assessment", description: "Asset mapping, threat analysis, and security gap identification." },
      { step: 2, title: "Protection plan", description: "Prioritized short, medium, and long-term measures." },
      { step: 3, title: "Deployment", description: "Security solution rollout and system hardening." },
      { step: 4, title: "Testing", description: "Penetration testing, simulation, and adjustments." },
      { step: 5, title: "Monitoring", description: "Continuous oversight and periodic posture reviews." },
    ],
    technologies: ["Fortinet", "Cisco ASA", "CrowdStrike", "Kaspersky", "pfSense", "SIEM", "EDR", "Acronis"],
    imageVariant: "security",
  },
  {
    id: "voip",
    slug: "voip-ip-telephony",
    icon: "phone",
    name: "VoIP & IP Telephony",
    shortDescription:
      "Unified communication solutions to connect your teams and customers efficiently.",
    description:
      "SYNET integrates professional VoIP solutions: IP-PBX, cloud telephony, video conferencing, and unified messaging. Reduce telecom costs while improving call quality and workforce mobility.",
    benefits: [
      { title: "Controlled costs", description: "Lower telecom spend through VoIP and tailored plans." },
      { title: "Mobility", description: "Calls, messaging, and video from office, field, or home." },
      { title: "Business integration", description: "CRM, virtual reception, and call queues for better customer service." },
      { title: "Audio quality", description: "Network QoS and optimized configuration for clear, stable voice." },
    ],
    process: [
      { step: 1, title: "Needs analysis", description: "Users, sites, call flows, and desired integrations." },
      { step: 2, title: "VoIP architecture", description: "On-premise or cloud choice, sizing, and numbering plan." },
      { step: 3, title: "Installation", description: "IP-PBX deployment, IP phones, and user configuration." },
      { step: 4, title: "Migration", description: "Number portability and progressive cutover without disruption." },
      { step: 5, title: "Training & support", description: "User onboarding and ongoing technical assistance." },
    ],
    technologies: ["3CX", "Cisco CUCM", "Yealink", "Grandstream", "SIP Trunk", "Microsoft Teams", "Asterisk", "QoS"],
    imageVariant: "voip",
  },
  {
    id: "web-development",
    slug: "web-development",
    icon: "code",
    name: "Web Development",
    shortDescription:
      "Professional, high-performance websites and web applications aligned with your brand.",
    description:
      "From corporate sites to business applications, SYNET builds modern, responsive, and secure web solutions. We integrate SEO, multilingual support, and performance for lasting ROI.",
    benefits: [
      { title: "Professional image", description: "Clean, credible design aligned with enterprise positioning." },
      { title: "Performance", description: "Fast, mobile-optimized sites meeting current standards." },
      { title: "Web security", description: "HTTPS, form protection, and regular updates." },
      { title: "Scalability", description: "Modular architecture that grows with your business." },
    ],
    process: [
      { step: 1, title: "Scoping", description: "Goals, sitemap, content, and functional specifications." },
      { step: 2, title: "Design & UX", description: "Wireframes and mockups validated against your brand." },
      { step: 3, title: "Development", description: "Integration, CMS or custom app, quality testing." },
      { step: 4, title: "Launch", description: "Hosting, DNS, SSL, and final acceptance." },
      { step: 5, title: "Maintenance", description: "Updates, backups, and functional enhancements." },
    ],
    technologies: ["Next.js", "React", "WordPress", "TypeScript", "Tailwind CSS", "Vercel", "PostgreSQL", "SEO"],
    imageVariant: "web",
  },
  {
    id: "cloud-solutions",
    slug: "cloud-solutions",
    icon: "cloud",
    name: "Cloud Solutions",
    shortDescription:
      "Secure migration, hosting, and management of your cloud workloads.",
    description:
      "SYNET guides your cloud transformation: assessment, migration, hybrid architecture, and day-to-day management across leading platforms to optimize cost, availability, and security.",
    benefits: [
      { title: "Flexibility", description: "On-demand resources without heavy capital expenditure." },
      { title: "High availability", description: "Resilient architectures with backup and disaster recovery." },
      { title: "Cost optimization", description: "Right-sizing and governance to control cloud spend." },
      { title: "Cloud security", description: "IAM, encryption, and compliance built into the architecture." },
    ],
    process: [
      { step: 1, title: "Cloud assessment", description: "Application inventory and migration strategy." },
      { step: 2, title: "Architecture", description: "Network, identity, storage, and cutover design." },
      { step: 3, title: "Migration", description: "Progressive workload transfer with validation testing." },
      { step: 4, title: "Optimization", description: "FinOps, monitoring, and resource tuning." },
      { step: 5, title: "Managed services", description: "Supervision, patching, and tier 2/3 support." },
    ],
    technologies: ["Microsoft Azure", "AWS", "Google Cloud", "VMware", "Docker", "Kubernetes", "Veeam", "Terraform"],
    imageVariant: "cloud",
  },
  {
    id: "it-support",
    slug: "it-support-maintenance",
    icon: "headset",
    name: "IT Support & Maintenance",
    shortDescription:
      "Responsive technical assistance and proactive maintenance to keep your business running.",
    description:
      "Our support team keeps your IT estate operational: helpdesk, preventive maintenance, incident management, and hardware refresh. Plans tailored to your organization size.",
    benefits: [
      { title: "Responsiveness", description: "Tickets handled per SLA with escalation to certified engineers." },
      { title: "Business continuity", description: "Preventive maintenance to reduce unexpected outages." },
      { title: "Single point of contact", description: "One team for infrastructure, endpoints, and software." },
      { title: "Clear reporting", description: "Dashboards and monthly reports to govern your IT." },
    ],
    process: [
      { step: 1, title: "Onboarding", description: "Asset inventory, documentation, and SLA definition." },
      { step: 2, title: "Helpdesk", description: "User support via ticket, phone, or remote session." },
      { step: 3, title: "Preventive maintenance", description: "Scheduled visits, updates, and health checks." },
      { step: 4, title: "Incident management", description: "Diagnosis, resolution, and root cause analysis." },
      { step: 5, title: "Continuous improvement", description: "Quarterly reviews and optimization recommendations." },
    ],
    technologies: ["GLPI", "TeamViewer", "Microsoft 365", "Intune", "Active Directory", "WSUS", "Veeam", "N-able"],
    imageVariant: "support",
  },
  {
    id: "cctv",
    slug: "cctv-access-control",
    icon: "camera",
    name: "CCTV & Access Control",
    shortDescription:
      "Intelligent physical security to protect your premises, assets, and people.",
    description:
      "SYNET deploys integrated IP video surveillance and access control: HD cameras, centralized recording, remote viewing, and badge management. Solutions for clinics, schools, factories, and offices.",
    benefits: [
      { title: "24/7 protection", description: "Continuous monitoring with alerts and secure recording." },
      { title: "Controlled access", description: "Fine-grained entry rights by zone, schedule, and profile." },
      { title: "Reliable evidence", description: "Timestamped recordings for incident investigation." },
      { title: "Integration", description: "Video, access control, and alarms on a unified platform." },
    ],
    process: [
      { step: 1, title: "Site survey", description: "Access points, blind spots, and regulatory constraints." },
      { step: 2, title: "Sizing", description: "Camera, NVR, reader, and cabling selection." },
      { step: 3, title: "Installation", description: "Mounting, cabling, configuration, and coverage tests." },
      { step: 4, title: "Configuration", description: "Access profiles, retention policy, and secure mobile access." },
      { step: 5, title: "Maintenance", description: "Periodic checks, firmware updates, and support." },
    ],
    technologies: ["Hikvision", "Dahua", "Axis", "Milestone", "Bosch", "ZKTeco", "HID", "PoE"],
    imageVariant: "cctv",
  },
];
