// app/sitemap.ts
import type { MetadataRoute } from "next";

const baseUrl = "https://fadilnatakusumah.com";

// export const sitemap: MetadataRoute.Sitemap = {
//   const staticUrls = [
//     {
//       loc: `${baseUrl}/`,
//       priority: 1.0,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//     },
//     {
//       loc: `${baseUrl}/resume`,
//       priority: 0.8,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//     },
//     {
//       loc: `${baseUrl}/github`,
//       priority: 0.5,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//     },
//     {
//       loc: `${baseUrl}/projects`,
//       priority: 0.8,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//     },
//   ];

//   return staticUrls;
// }

// export const sitemap: MetadataRoute.Sitemap = [
//   {
//     url: `${baseUrl}/`,
//     lastModified: new Date(),
//     changeFrequency: "monthly",
//   },
//   {
//     url: `${baseUrl}/resume`,
//     lastModified: new Date(),
//     changeFrequency: "monthly",
//   },
//   {
//     url: `${baseUrl}/github`,
//     lastModified: new Date(),
//     changeFrequency: "monthly",
//   },
//   {
//     url: `${baseUrl}/projects`,
//     lastModified: new Date(),
//     changeFrequency: "monthly",
//   },
// ];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://acme.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://acme.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://acme.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
