import type { Course } from "../types";

export const coursesAr: Course[] = [
  {
    id: "ccna-networking",
    slug: "networking-training",
    category: "networking",
    name: "تدريب CCNA — شبكات Cisco",
    shortDescription:
      "أتقن تصميم وتركيب وصيانة شبكات Cisco على مستوى المؤسسات.",
    description:
      "يغطي هذا البرنامج المكثف أساسيات التوجيه والتبديل في Cisco، وتكوين VLAN وOSPF، وأمن الشبكات الأساسي، واستكشاف الأخطاء. مصمم للفنيين ومسؤولي الشبكات، ويجمع بين النظرية والتطبيق العملي في مختبرات بمعدات Cisco حقيقية.",
    duration: "5 أيام (40 ساعة)",
    level: "intermediate",
    schedule: "الإثنين – الجمعة، 9:00 – 17:00",
    instructor: {
      name: "كريم بنعلي",
      title: "مهندس شبكات معتمد CCNP",
      bio: "15 عاماً من الخبرة في نشر الشبكات للمؤسسات الصغيرة والمتوسطة. مدرب Cisco منذ 2018.",
    },
    price: "12,500 درهم",
    priceNote: "يشمل مواد المختبر والدعم التعليمي",
    certification: "التحضير لشهادة CCNA 200-301",
    outcomes: [
      "تكوين موجهات ومبدلات Cisco",
      "تنفيذ VLAN والتوجيه بين الشبكات الافتراضية",
      "استكشاف مشاكل الاتصال بالشبكة",
      "تطبيق أفضل ممارسات أمن الشبكات",
    ],
    prerequisites: [
      "معرفة أساسية بالحاسوب",
      "يُفضل الإلمام بـ TCP/IP",
    ],
    sessions: [
      { startDate: "2026-07-15", endDate: "2026-07-19", format: "حضوري", spotsLeft: 4 },
      { startDate: "2026-09-08", endDate: "2026-09-12", format: "حضوري", spotsLeft: 8 },
    ],
    imageVariant: "network",
  },
  {
    id: "linux-admin",
    slug: "linux-training",
    category: "linux",
    name: "تدريب Linux — إدارة الأنظمة",
    shortDescription:
      "تعلّم إدارة خوادم Linux في بيئات الإنتاج.",
    description:
      "تدريب عملي يغطي التثبيت وإدارة المستخدمين والصلاحيات وخدمات النظام وإدارة الحزم وبرمجة Bash والمراقبة. مثالي للمبتدئين الراغبين في التوجه نحو إدارة الأنظمة.",
    duration: "5 أيام (40 ساعة)",
    level: "beginner",
    schedule: "الإثنين – الجمعة، 9:00 – 17:00",
    instructor: {
      name: "سارة الأميراني",
      title: "مسؤولة أنظمة Linux معتمدة LPIC-2",
      bio: "متخصصة في Linux للإنتاج منذ 10 سنوات. خبيرة في الأتمتة والحاويات.",
    },
    price: "9,800 درهم",
    priceNote: "يشمل الوصول للمختبر 30 يوماً",
    certification: "التحضير لشهادة LPIC-1",
    outcomes: [
      "إدارة خادم Linux Debian/RHEL",
      "إدارة المستخدمين والصلاحيات والعمليات",
      "تكوين خدمات الشبكة الأساسية",
      "أتمتة المهام باستخدام Bash",
    ],
    prerequisites: ["لا توجد متطلبات تقنية إلزامية"],
    sessions: [
      { startDate: "2026-08-05", endDate: "2026-08-09", format: "حضوري", spotsLeft: 6 },
      { startDate: "2026-10-13", endDate: "2026-10-17", format: "حضوري", spotsLeft: 10 },
    ],
    imageVariant: "linux",
  },
  {
    id: "cybersecurity",
    slug: "cybersecurity-training",
    category: "cybersecurity",
    name: "تدريب الأمن السيبراني — أمن الشبكات",
    shortDescription:
      "احمِ بنيتك التحتية بتقنيات أمن شبكات مجرّبة.",
    description:
      "تدريب عملي على التهديدات الشائعة وجدران الحماية وIDS/IPS وVPN وتقوية الأنظمة والاستجابة للحوادث. يجري المشاركون تمارين تأمين ومراجعة على بنية مختبرية.",
    duration: "5 أيام (40 ساعة)",
    level: "intermediate",
    schedule: "الإثنين – الجمعة، 9:00 – 17:00",
    instructor: {
      name: "يوسف التازي",
      title: "خبير أمن سيبراني — CEH, Fortinet NSE4",
      bio: "مستشار أمن للمؤسسات العامة والخاصة. 12 عاماً من خبرة SOC والتدقيق.",
    },
    price: "14,200 درهم",
    certification: "مقدمة للتحضير لشهادة CEH",
    outcomes: [
      "تحديد التهديدات الشبكية والتخفيف منها",
      "تكوين جدران حماية وVPN احترافية",
      "إجراء تدقيق أمني أساسي",
      "تطبيق خطة الاستجابة للحوادث",
    ],
    prerequisites: [
      "خبرة في الشبكات أو إدارة الأنظمة",
      "معرفة TCP/IP مطلوبة",
    ],
    sessions: [
      { startDate: "2026-07-22", endDate: "2026-07-26", format: "حضوري", spotsLeft: 3 },
      { startDate: "2026-11-03", endDate: "2026-11-07", format: "حضوري", spotsLeft: 8 },
    ],
    imageVariant: "security",
  },
  {
    id: "cloud-computing",
    slug: "cloud-computing",
    category: "cloud",
    name: "تدريب السحابة — أساسيات AWS و Azure",
    shortDescription:
      "انشر وأدر أعباء العمل السحابية على المنصات الرائدة.",
    description:
      "تدريب يغطي مفاهيم IaaS/PaaS/SaaS والآلات الافتراضية والتخزين وشبكات السحابة والهوية والفوترة. مختبرات عملية على AWS و Azure بسيناريوهات مؤسسية.",
    duration: "5 أيام (40 ساعة)",
    level: "intermediate",
    schedule: "الإثنين – الجمعة، 9:00 – 17:00",
    instructor: {
      name: "نادية برادة",
      title: "مهندسة سحابة معتمدة AWS SAA و Azure AZ-104",
      bio: "مهندسة سحابة لترحيل المؤسسات. 8 سنوات من الخبرة متعددة السحابات.",
    },
    price: "13,500 درهم",
    certification: "التحضير لـ AWS Cloud Practitioner",
    outcomes: [
      "نشر الموارد على AWS و Azure",
      "تكوين شبكات وأمن السحابة",
      "تقدير وتحسين تكاليف السحابة",
      "التخطيط لاستراتيجية الترحيل السحابي",
    ],
    prerequisites: ["يُفضل أساسيات الشبكات والأنظمة"],
    sessions: [
      { startDate: "2026-08-18", endDate: "2026-08-22", format: "حضوري", spotsLeft: 7 },
    ],
    imageVariant: "cloud",
  },
  {
    id: "sap-training",
    slug: "sap-training",
    category: "sap",
    name: "تدريب SAP — أساسيات ERP",
    shortDescription:
      "تعرّف على وحدات SAP الأساسية لإدارة الأعمال.",
    description:
      "تدريب تمهيدي على عمليات SAP، والتنقل في SAP GUI/Fiori، ووحدات FI/CO و MM، وأفضل ممارسات الإعداد. موجّه للمستشارين ومستخدمي الأعمال.",
    duration: "5 أيام (40 ساعة)",
    level: "beginner",
    schedule: "الإثنين – الجمعة، 9:00 – 17:00",
    instructor: {
      name: "حسن المولين",
      title: "مستشار SAP معتمد",
      bio: "15 عاماً من نشر SAP في الصناعة والتوزيع بالمغرب وأوروبا.",
    },
    price: "15,800 درهم",
    outcomes: [
      "التنقل في بيئة SAP",
      "فهم تدفقات FI/CO و MM",
      "تكوين الإعدادات الأساسية",
      "التعاون مع فرق مشاريع SAP",
    ],
    prerequisites: ["إلمام بعمليات الأعمال"],
    sessions: [
      { startDate: "2026-09-22", endDate: "2026-09-26", format: "حضوري", spotsLeft: 5 },
    ],
    imageVariant: "sap",
  },
  {
    id: "microsoft-tech",
    slug: "microsoft-technologies",
    category: "microsoft",
    name: "تدريب Microsoft — Server و Active Directory",
    shortDescription:
      "أدر Windows Server و Active Directory وخدمات البنية التحتية Microsoft.",
    description:
      "تدريب شامل على Windows Server 2022 و Active Directory و DNS/DHCP و GPO وتكامل Azure AD. مختبرات عملية لبيئات المؤسسات الصغيرة والكبيرة.",
    duration: "5 أيام (40 ساعة)",
    level: "intermediate",
    schedule: "الإثنين – الجمعة، 9:00 – 17:00",
    instructor: {
      name: "أمين الشرايبي",
      title: "MCT — مدرب Microsoft معتمد",
      bio: "مدرب Microsoft معتمد مع 10 سنوات من خبرة بنية Windows.",
    },
    price: "12,800 درهم",
    certification: "التحضير لـ AZ-800 / Windows Server",
    outcomes: [
      "نشر وإدارة Windows Server",
      "إدارة Active Directory و GPO",
      "تكوين DNS و DHCP وخدمات الملفات",
      "تكامل Azure AD للهوية الهجينة",
    ],
    prerequisites: ["خبرة أساسية في إدارة Windows"],
    sessions: [
      { startDate: "2026-10-06", endDate: "2026-10-10", format: "حضوري", spotsLeft: 6 },
    ],
    imageVariant: "microsoft",
  },
  {
    id: "corporate-training",
    slug: "corporate-training",
    category: "corporate",
    name: "التدريب المؤسسي — برامج مخصصة",
    shortDescription:
      "برامج تدريب IT مخصصة لفرقكم، في الموقع أو عن بُعد.",
    description:
      "تصمم SYNET مسارات تدريبية متوافقة مع أهدافكم: الشبكات، الأمن، السحابة، أو الإنتاجية المتقدمة. محتوى مرن وجدولة مرنة وتقارير تقدم.",
    duration: "حسب الطلب (2 إلى 10 أيام)",
    level: "all-levels",
    schedule: "حسب توفركم",
    instructor: {
      name: "فريق SYNET التدريبي",
      title: "مدربون معتمدون متعددو التخصصات",
      bio: "أكثر من 20 مدرباً خبيراً حسب البرنامج المختار.",
    },
    price: "حسب الطلب",
    priceNote: "أسعار مخفضة للمجموعات",
    outcomes: [
      "برنامج متوافق مع احتياجاتكم",
      "تدريب داخل المؤسسة أو في المركز",
      "تقييم المهارات قبل وبعد",
      "شهادة مشاركة SYNET",
    ],
    prerequisites: ["تحليل الاحتياجات مُدرج"],
    sessions: [
      { startDate: "2026-07-01", endDate: "2026-12-31", format: "مخصص" },
    ],
    imageVariant: "corporate",
  },
];
