import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ["scripts"], // exclude `src/app`, `src/components`, etc.
  },
};

export default nextConfig;
