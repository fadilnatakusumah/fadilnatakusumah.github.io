import type { Metadata } from "next";
import { baseMetadata } from "@/lib/site";

export const metadata: Metadata = baseMetadata({
  title: "Projects",
  description:
    "Archive of projects built by Muhammad Fadhilah Mulyana — React, Next.js, TypeScript, and more.",
  path: "/projects",
});

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
