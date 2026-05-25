import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: __dirname, // points to /website, where this config lives
  },
};

export default nextConfig;
