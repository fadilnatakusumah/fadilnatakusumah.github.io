import type { Metadata } from "next";
import { baseMetadata } from "@/lib/site";

export const metadata: Metadata = baseMetadata({
  title: "Blog",
  description:
    "Articles on frontend engineering, web accessibility, and modern web development by Muhammad Fadhilah Mulyana.",
  path: "/blog",
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
