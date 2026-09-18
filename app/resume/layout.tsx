import type { Metadata } from "next";
import { baseMetadata } from "@/lib/site";

export const metadata: Metadata = baseMetadata({
  title: "Resume",
  description:
    "Resume of Muhammad Fadhilah Mulyana, Software Engineer specializing in React, Next.js, and modern web architectures.",
  path: "/resume",
});

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
