import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // <== very important for static export
  images: {
  unoptimized: true,
}
};

export default nextConfig;
