import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['letsenhance.io', 'example.com'], // Add any other domains you might use
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
   eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false, // Set to true only if you have persistent TS errors
  },
};

export default nextConfig;