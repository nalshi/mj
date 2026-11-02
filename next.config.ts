import type { NextConfig } from "next";

const nextConfig: NextConfig = {
<<<<<<< Updated upstream
  /* config options here */
  output: 'export',
=======
  output: "export",
  trailingSlash: true,
>>>>>>> Stashed changes
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
      },
      {
        protocol: "https",
        hostname: "notion-avatars.netlify.app",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
    ],
  },
};

export default nextConfig;
