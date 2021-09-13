import fs from "fs";
import { DOMAIN } from "../config";

const Sitemap = () => {};

export async function getServerSideProps({ res }) {
  const baseUrl = {
    development: "http://localhost:3000",
    production: DOMAIN,
  }[process.env.NODE_ENV];

  const staticPages = fs
    .readdirSync(
      {
        development: "pages",
        production: "./",
      }[process.env.NODE_ENV]
    )
    .filter((staticPage) => {
      return ![
        "_app.tsx",
        "_document.tsx",
        "_error.tsx",
        "sitemap.xml.tsx",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}
export default Sitemap;
