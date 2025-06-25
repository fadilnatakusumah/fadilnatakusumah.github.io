// app/robots.ts
import type { MetadataRoute } from "next";

export const robots: MetadataRoute.Robots = {
  rules: {
    // allow all bots to crawl everything
    userAgent: "*",
    allow: "/",
    // if you had private routes you could do:
    // disallow: ['/drafts', '/admin'],
  },
  // point bots at your sitemap
  sitemap: "https://fadilnatakusumah/sitemap.xml",
};
