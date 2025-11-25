// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   // output: "export", // ✅ Enables static export
//   images: {
//     unoptimized: true, // ✅ Needed for static export with <Image />
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",              // ⭐ REQUIRED for static hosting
  trailingSlash: true,           // ⭐ Firebase Hosting needs trailing slash
  // images: {
  //   unoptimized: true,           // REQUIRED for export when using <Image />
  // },
  // experimental: {
  //   typedRoutes: false,
  // },
};

export default nextConfig;
