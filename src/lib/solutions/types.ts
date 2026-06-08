export type ServiceBenefit = {
  title: string;
  description: string;
};

export type ServiceProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type Service = {
  id: string;
  slug: string;
  icon: string;
  name: string;
  shortDescription: string;
  description: string;
  benefits: ServiceBenefit[];
  process: ServiceProcessStep[];
  technologies: string[];
  imageVariant:
    | "network"
    | "security"
    | "voip"
    | "web"
    | "cloud"
    | "support"
    | "cctv";
};
