// custom_extensions/frontend/next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  basePath: '/custom-projects-ui',
  assetPrefix: '/custom-projects-ui', // Add this line
};

export default nextConfig;
