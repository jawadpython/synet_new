/**
 * Environment photography for training & consulting contexts.
 *
 * HOW TO ADD YOUR PHOTOS LATER
 * ----------------------------
 * Drop files into `public/images/environments/` using these exact names:
 *   training-lab.jpg
 *   networking-lab.jpg
 *   server-room.jpg
 *   workspace.jpg
 *   certification.jpg
 *   security-operations.jpg
 *   hero.jpg          (optional full-bleed homepage hero)
 *
 * Local files are preferred automatically when present.
 * Until then, curated stock placeholders are used.
 */

export type EnvironmentKey =
  | "trainingLab"
  | "networkingLab"
  | "serverRoom"
  | "workspace"
  | "certification"
  | "securityOperations"
  | "hero";

type EnvironmentAsset = {
  /** Preferred local path under /public */
  localSrc: string;
  /** Fallback remote placeholder until local photo exists */
  fallbackSrc: string;
  alt: string;
};

const unsplash = "https://images.unsplash.com";

const assets: Record<EnvironmentKey, EnvironmentAsset> = {
  hero: {
    localSrc: "/images/environments/hero.jpg",
    fallbackSrc: `${unsplash}/photo-1560785690-3522eebe4f06?auto=format&fit=crop&w=2000&q=80`,
    alt: "IT training classroom with computer workstations",
  },
  trainingLab: {
    localSrc: "/images/environments/training-lab.jpg",
    fallbackSrc: `${unsplash}/photo-1560785690-3522eebe4f06?auto=format&fit=crop&w=1400&q=80`,
    alt: "Professional IT training classroom with computer workstations",
  },
  networkingLab: {
    localSrc: "/images/environments/networking-lab.jpg",
    fallbackSrc: `${unsplash}/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1400&q=80`,
    alt: "Network infrastructure equipment and structured cabling",
  },
  serverRoom: {
    localSrc: "/images/environments/server-room.jpg",
    fallbackSrc: `${unsplash}/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80`,
    alt: "Enterprise datacenter with rack-mounted servers",
  },
  workspace: {
    localSrc: "/images/environments/workspace.jpg",
    fallbackSrc: `${unsplash}/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80`,
    alt: "Professional corporate workspace and consulting environment",
  },
  certification: {
    localSrc: "/images/environments/certification.jpg",
    fallbackSrc: `${unsplash}/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1400&q=80`,
    alt: "Certification preparation materials and structured learning",
  },
  securityOperations: {
    localSrc: "/images/environments/security-operations.jpg",
    fallbackSrc: `${unsplash}/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1400&q=80`,
    alt: "Cybersecurity monitoring and secure network operations",
  },
};

/**
 * Flip to `true` after you drop real photos into
 * `public/images/environments/` (see README there).
 */
export const USE_LOCAL_ENVIRONMENT_PHOTOS = false;

/** Resolved src: tries local first when enabled, else placeholder. */
export function getEnvironment(key: EnvironmentKey): {
  src: string;
  alt: string;
  localSrc: string;
  fallbackSrc: string;
} {
  const asset = assets[key];
  return {
    src: USE_LOCAL_ENVIRONMENT_PHOTOS ? asset.localSrc : asset.fallbackSrc,
    localSrc: asset.localSrc,
    fallbackSrc: asset.fallbackSrc,
    alt: asset.alt,
  };
}

export const environments = Object.fromEntries(
  (Object.keys(assets) as EnvironmentKey[]).map((key) => {
    const a = getEnvironment(key);
    return [key, { src: a.src, alt: a.alt }];
  }),
) as Record<EnvironmentKey, { src: string; alt: string }>;

export const courseEnvironmentMap: Record<string, EnvironmentKey> = {
  network: "networkingLab",
  security: "securityOperations",
  linux: "serverRoom",
  cloud: "serverRoom",
  sap: "workspace",
  microsoft: "trainingLab",
  corporate: "workspace",
};

export const serviceEnvironmentMap: Record<string, EnvironmentKey> = {
  network: "networkingLab",
  security: "securityOperations",
  voip: "workspace",
  web: "workspace",
  cloud: "serverRoom",
  support: "serverRoom",
  cctv: "securityOperations",
};
