// app/sitemap.ts
import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/data";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/projects`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/resume`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/github`, changeFrequency: "monthly", priority: 0.5 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = Object.entries(BLOG_POSTS).map(
    ([slug, post]) => ({
      url: `${siteUrl}/blog/${slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly",
      priority: 0.6,
    })
  );

  return [...staticRoutes, ...blogRoutes];
}

