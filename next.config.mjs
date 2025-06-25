/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // serverExternalPackages: ["@react-pdf/renderer"],
  // experimental: {
  //   esmExternals: "loose",
  // },
};

export default nextConfig;
