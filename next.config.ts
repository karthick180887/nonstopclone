import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Local .avif assets are served from /public without remote optimization issues
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
