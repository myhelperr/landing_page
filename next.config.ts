import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
      allowedOrigins: ['*'],
    },
  },
  // Ensure proper server actions handling for Amplify
  outputFileTracing: true,
  // Use standalone output for better AWS compatibility
  output: 'standalone',
};

export default nextConfig;
