/**
 * Domain photos for training gallery cards and course thumbnails.
 * Local files live in `public/images/training/`.
 */

import type { Course } from "@/lib/training/types";

export type TrainingVisual = {
  src: string;
  alt: string;
  /** Optional object-position for tall crops */
  position?: string;
};

/** Tall portrait images for the Formations gallery strip */
const galleryByHref: Record<string, TrainingVisual> = {
  "/centre-formation/formation-reseaux": {
    src: "/images/training/reseaux.jpg",
    alt: "Technician connecting network cables on rack switches",
    position: "center 35%",
  },
  "/centre-formation/formation-linux": {
    src: "/images/training/linux.jpg",
    alt: "Developer working with Linux terminal and dual monitors",
    position: "center 40%",
  },
  "/centre-formation/formation-cybersecurite": {
    src: "/images/training/cyber.jpg",
    alt: "Security operations terminal with system logs and monitoring",
    position: "center center",
  },
  "/centre-formation/formation-cloud": {
    src: "/images/training/cloud.jpg",
    alt: "Engineer in a modern enterprise datacenter",
    position: "center 30%",
  },
  "/centre-formation/formation-sap": {
    src: "/images/training/sap.jpg",
    alt: "Business analyst reviewing SAP-style performance charts",
    position: "center 45%",
  },
  "/centre-formation/technologies-microsoft": {
    src: "/images/training/microsoft.jpg",
    alt: "Learner using a Microsoft Surface in a training workspace",
    position: "center 40%",
  },
  "/centre-formation/formation-entreprise": {
    src: "/images/training/entreprise.jpg",
    alt: "Corporate training session with business professionals",
    position: "center 35%",
  },
};

/** Landscape images for course cards / detail pages by imageVariant */
const thumbnailByVariant: Record<Course["imageVariant"], TrainingVisual> = {
  network: {
    src: "/images/training/network-wide.jpg",
    alt: "Network infrastructure cabling on rack switches",
  },
  linux: {
    src: "/images/training/linux-wide.jpg",
    alt: "Linux terminal and dual-monitor development desk",
  },
  security: {
    src: "/images/training/security-wide.jpg",
    alt: "Cybersecurity monitoring terminals and system logs",
  },
  cloud: {
    src: "/images/training/cloud-wide.jpg",
    alt: "Enterprise datacenter and cloud infrastructure",
  },
  sap: {
    src: "/images/training/sap-wide.jpg",
    alt: "Business systems analytics and performance charts",
  },
  microsoft: {
    src: "/images/training/microsoft-wide.jpg",
    alt: "Microsoft technologies training on a Surface device",
  },
  corporate: {
    src: "/images/training/corporate-wide.jpg",
    alt: "Corporate team training workshop",
  },
};

export function getTrainingGalleryVisual(href: string): TrainingVisual {
  return (
    galleryByHref[href] ?? {
      src: "/images/training/entreprise.jpg",
      alt: "Professional IT training",
      position: "center center",
    }
  );
}

export function getCourseThumbnailVisual(
  variant: Course["imageVariant"],
): TrainingVisual {
  return thumbnailByVariant[variant] ?? thumbnailByVariant.corporate;
}
