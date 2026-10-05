import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [new URL("https://placehold.co/**")],
  },
};

export default nextConfig;
