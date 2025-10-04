import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
      allowedOrigins: ['*'],
    },
  },
  // Ensure proper server actions handling
  outputFileTracing: true,
};

export default nextConfig;
