import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/edutools/:path*",
        destination: "https://edutools.ingo.au/:path*",
      },
    ];
  },
};

export default nextConfig;
