import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/data";
import { baseMetadata, siteConfig } from "@/lib/site";
import BlogPostClient from "./blog-post-client";

export function generateStaticParams() {
  return Object.keys(BLOG_POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!BLOG_POSTS[slug])
    return baseMetadata({ title: "Blog", description: siteConfig.description, path: "/blog" });

  const post = BLOG_POSTS[slug];

  const meta = baseMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
  });

  return {
    ...meta,
    openGraph: {
      ...meta.openGraph!,
      type: "article",
      publishedTime: post.date,
      authors: [siteConfig.name],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!BLOG_POSTS[slug]) notFound();
  return <BlogPostClient slug={slug} />;
}
