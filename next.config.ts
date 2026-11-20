import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: `/images/${process.env.SANITY_PROJECT_ID || "vs95itr3"}/${process.env.SANITY_DATASET || "production"}/**`,
        search: "",
      },
    ],
  },
};

export default nextConfig;
