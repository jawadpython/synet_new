export type CourseLevel = "beginner" | "intermediate" | "advanced" | "all-levels";

export type CourseCategory =
  | "networking"
  | "linux"
  | "cybersecurity"
  | "cloud"
  | "sap"
  | "microsoft"
  | "corporate";

export type CourseSession = {
  startDate: string;
  endDate: string;
  format: string;
  spotsLeft?: number;
};

export type Course = {
  id: string;
  slug: string;
  category: CourseCategory;
  name: string;
  shortDescription: string;
  description: string;
  duration: string;
  level: CourseLevel;
  schedule: string;
  instructor: {
    name: string;
    title: string;
    bio: string;
  };
  price: string;
  priceNote?: string;
  certification?: string;
  outcomes: string[];
  prerequisites: string[];
  sessions: CourseSession[];
  imageVariant: "network" | "security" | "linux" | "cloud" | "sap" | "microsoft" | "corporate";
};

export type CourseFilters = {
  query?: string;
  category?: CourseCategory | "all";
  level?: CourseLevel | "all";
};
