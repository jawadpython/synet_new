import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:locale(fr)/ressources/blog",
        destination: "/:locale/ressources/faq",
        permanent: true,
      },
      {
        source: "/:locale(fr)/ressources/guides",
        destination: "/:locale/ressources/faq",
        permanent: true,
      },
      {
        source: "/:locale(fr)/ressources",
        destination: "/:locale/ressources/faq",
        permanent: true,
      },
      {
        source: "/:locale(en|ar)/resources/blog",
        destination: "/:locale/resources/faq",
        permanent: true,
      },
      {
        source: "/:locale(en|ar)/resources/guides",
        destination: "/:locale/resources/faq",
        permanent: true,
      },
      {
        source: "/:locale(en|ar)/resources",
        destination: "/:locale/resources/faq",
        permanent: true,
      },
      {
        source: "/:locale(fr)/a-propos/carrieres",
        destination: "/:locale/a-propos",
        permanent: true,
      },
      {
        source: "/:locale(en|ar)/about/careers",
        destination: "/:locale/about",
        permanent: true,
      },
      {
        source: "/:locale(fr)/realisations",
        destination: "/:locale/a-propos",
        permanent: true,
      },
      {
        source: "/:locale(en|ar)/case-studies",
        destination: "/:locale/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
