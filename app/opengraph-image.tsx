import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} - Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// ponytail: prerendering ImageResponse fails on Windows when the project path has
// spaces (vercel/og bug); render at request time instead. Revisit when path is clean.
export const dynamic = "force-dynamic";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", fontSize: 36, color: "#5eead4" }}>
          {siteConfig.handle} · {siteConfig.jobTitle}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            marginTop: 24,
            lineHeight: 1.1,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#94a3b8",
            marginTop: 32,
          }}
        >
          React · Next.js · TypeScript
        </div>
      </div>
    ),
    size
  );
}
