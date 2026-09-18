/** @type {import('next').NextConfig} */
const nextConfig = {
  // eslint key removed: Next 16 dropped built-in linting (next lint removed)
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
