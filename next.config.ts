import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [400, 640, 768, 1024, 1280, 1536, 1920, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    formats: ["image/webp", "image/avif"],
    qualities: [75, 90, 95, 100],
  },
};

export default nextConfig;
