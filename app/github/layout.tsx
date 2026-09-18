import type { Metadata } from "next";
import { baseMetadata } from "@/lib/site";

export const metadata: Metadata = baseMetadata({
  title: "GitHub",
  description:
    "Open-source projects, contributions, and repositories by Muhammad Fadhilah Mulyana on GitHub.",
  path: "/github",
});

export default function GithubLayout({ children }: { children: React.ReactNode }) {
  return children;
}
