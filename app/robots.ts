// app/robots.ts
import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      // allow all bots to crawl everything
      userAgent: "*",
      allow: "/",
      // if you had private routes you could do:
      // disallow: ['/drafts', '/admin'],
    },
    // point bots at your sitemap
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
