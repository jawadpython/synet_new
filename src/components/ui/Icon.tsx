import {
  Award,
  Briefcase,
  Building2,
  Camera,
  CheckCircle2,
  Cloud,
  Code2,
  Factory,
  GraduationCap,
  Headphones,
  Landmark,
  Layers,
  Monitor,
  Network,
  Phone,
  School,
  Shield,
  Stethoscope,
  Users,
  type LucideProps,
} from "lucide-react";

type IconName =
  | "building"
  | "school"
  | "hospital"
  | "factory"
  | "landmark"
  | "graduation"
  | "briefcase"
  | "monitor"
  | "network"
  | "shield"
  | "phone"
  | "headset"
  | "cloud"
  | "camera"
  | "code"
  | "layers"
  | "users"
  | "award"
  | "check-circle";

type IconProps = LucideProps & {
  name: string;
};

export function Icon({ name, ...props }: IconProps) {
  switch (name as IconName) {
    case "school":
      return <School {...props} />;
    case "hospital":
      return <Stethoscope {...props} />;
    case "factory":
      return <Factory {...props} />;
    case "landmark":
      return <Landmark {...props} />;
    case "graduation":
      return <GraduationCap {...props} />;
    case "briefcase":
      return <Briefcase {...props} />;
    case "monitor":
      return <Monitor {...props} />;
    case "network":
      return <Network {...props} />;
    case "shield":
      return <Shield {...props} />;
    case "phone":
      return <Phone {...props} />;
    case "headset":
      return <Headphones {...props} />;
    case "cloud":
      return <Cloud {...props} />;
    case "camera":
      return <Camera {...props} />;
    case "code":
      return <Code2 {...props} />;
    case "layers":
      return <Layers {...props} />;
    case "users":
      return <Users {...props} />;
    case "award":
      return <Award {...props} />;
    case "check-circle":
      return <CheckCircle2 {...props} />;
    case "building":
    default:
      return <Building2 {...props} />;
  }
}
