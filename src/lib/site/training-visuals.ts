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
    src: "/images/training/linux-bright.jpg",
    alt: "Coding laptop with colorful interface for Linux training",
    position: "center 30%",
  },
  "/centre-formation/formation-cybersecurite": {
    src: "/images/training/formation-cybersecurite.jpg",
    alt: "Padlock on a keyboard representing cybersecurity",
    position: "center 40%",
  },
  "/training-center/cybersecurity-training": {
    src: "/images/training/formation-cybersecurite.jpg",
    alt: "Padlock on a keyboard representing cybersecurity",
    position: "center 40%",
  },
  "/centre-formation/formation-cloud": {
    src: "/images/training/cloud-bright.jpg",
    alt: "Cloud infrastructure servers in a datacenter",
    position: "center 40%",
  },
  "/centre-formation/formation-javascript": {
    src: "/images/training/javascript.jpg",
    alt: "JavaScript code in a development editor",
    position: "center 40%",
  },
  "/centre-formation/formation-python": {
    src: "/images/training/python.jpg",
    alt: "Python programming sticky note on a desk",
    position: "center 40%",
  },
  "/centre-formation/formation-react": {
    src: "/images/training/react.jpg",
    alt: "React application development in VS Code",
    position: "center 35%",
  },
  "/training-center/javascript-training": {
    src: "/images/training/javascript.jpg",
    alt: "JavaScript code in a development editor",
    position: "center 40%",
  },
  "/training-center/python-training": {
    src: "/images/training/python.jpg",
    alt: "Python programming sticky note on a desk",
    position: "center 40%",
  },
  "/training-center/react-training": {
    src: "/images/training/react.jpg",
    alt: "React application development in VS Code",
    position: "center 35%",
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
    src: "/images/training/security-wide-v2.jpg",
    alt: "Security interface on a computer screen",
  },
  cloud: {
    src: "/images/training/cloud-wide-v2.jpg",
    alt: "Cloud infrastructure servers in a datacenter",
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
