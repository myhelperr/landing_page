import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* YOU MUST ADD ENV HERE*/
  env: {
    DATABASE_URL: process.env.DATABASE_URL ?? "",
  },
  reactStrictMode: true,
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
      allowedOrigins: ['*'],
    },
  },
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ["@acme/api", "@acme/auth", "@acme/db"],
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
