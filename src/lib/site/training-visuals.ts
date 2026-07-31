/**
 * Domain photos for training gallery cards and course thumbnails.
 * Local files live in `public/images/training/`.
 */

import type { Course } from "@/lib/training/types";

export type TrainingVisual = {
  src: string;
  alt: string;
  position?: string;
};

/** Landscape images for the Formations gallery */
const galleryByHref: Record<string, TrainingVisual> = {
  "/centre-formation/formation-reseaux": {
    src: "/images/networking.webp",
    alt: "Networking training",
    position: "center center",
  },
  "/training-center/networking-training": {
    src: "/images/networking.webp",
    alt: "Networking training",
  },
  "/centre-formation/formation-linux": {
    src: "/images/linux.webp",
    alt: "Linux training",
    position: "center center",
  },
  "/training-center/linux-training": {
    src: "/images/linux.webp",
    alt: "Linux training",
  },
  "/centre-formation/formation-cybersecurite": {
    src: "/images/cybersecurty.webp",
    alt: "Cybersecurity training",
    position: "center center",
  },
  "/training-center/cybersecurity-training": {
    src: "/images/cybersecurty.webp",
    alt: "Cybersecurity training",
  },
  "/centre-formation/formation-javascript": {
    src: "/images/training/v2/javascript.jpg",
    alt: "JavaScript source code in an editor",
    position: "center center",
  },
  "/training-center/javascript-training": {
    src: "/images/training/v2/javascript.jpg",
    alt: "JavaScript source code in an editor",
  },
  "/centre-formation/formation-python": {
    src: "/images/python.webp",
    alt: "Python training",
    position: "center center",
  },
  "/training-center/python-training": {
    src: "/images/python.webp",
    alt: "Python training",
  },
  "/centre-formation/formation-react": {
    src: "/images/training/v2/react.jpg",
    alt: "React development environment",
    position: "center 30%",
  },
  "/training-center/react-training": {
    src: "/images/training/v2/react.jpg",
    alt: "React development environment",
  },
};

const thumbnailByVariant: Record<Course["imageVariant"], TrainingVisual> = {
  network: {
    src: "/images/networking.webp",
    alt: "Networking training",
  },
  linux: {
    src: "/images/linux.webp",
    alt: "Linux training",
  },
  security: {
    src: "/images/cybersecurty.webp",
    alt: "Cybersecurity training",
  },
  cloud: {
    src: "/images/networking.webp",
    alt: "Infrastructure training",
  },
  sap: {
    src: "/images/training/v2/javascript.jpg",
    alt: "Business systems development",
  },
  microsoft: {
    src: "/images/training/v2/react.jpg",
    alt: "Modern application development",
  },
  corporate: {
    src: "/images/python.webp",
    alt: "Python training",
  },
};

export function getTrainingGalleryVisual(href: string): TrainingVisual {
  return (
    galleryByHref[href] ?? {
      src: "/images/linux.webp",
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
