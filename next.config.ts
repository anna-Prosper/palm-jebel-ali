import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "binayah-media-456051253184-us-east-1-an.s3.us-east-1.amazonaws.com" },
      { protocol: "https", hostname: "binayah-media-456051253184-us-east-1-an.s3.amazonaws.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
