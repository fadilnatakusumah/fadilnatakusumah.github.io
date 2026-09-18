import type { Metadata } from "next";

export const siteUrl = "https://fadilnatakusumah.com";

export const siteConfig = {
  name: "Muhammad Fadhilah Mulyana",
  handle: "Fadil Natakusumah",
  jobTitle: "Software Engineer",
  url: siteUrl,
  github: "https://github.com/fadilnatakusumah",
  defaultTitle: "Muhammad Fadhilah Mulyana — Software Engineer",
  template: "%s | Muhammad Fadhilah Mulyana",
  description:
    "Portfolio of Muhammad Fadhilah Mulyana, Software Engineer specializing in React, Next.js, and modern web architectures.",
  keywords: [
    "Fadil Natakusumah",
    "Muhammad Fadhilah Mulyana",
    "Software Engineer",
    "Frontend Developer",
    "React",
    "Next.js",
    "Portfolio",
    "JavaScript",
    "TypeScript",
  ],
};

/** Base metadata shared by every page; pages extend it with title/description/canonical. */
export function baseMetadata({
  title,
  description,
  path = "/",
  type = "website",
}: {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
}): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    keywords: siteConfig.keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: `${siteConfig.name} - Portfolio`,
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function jsonLdPerson() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    alternateName: siteConfig.handle,
    jobTitle: siteConfig.jobTitle,
    url: siteConfig.url,
    sameAs: [siteConfig.github],
  };
}
