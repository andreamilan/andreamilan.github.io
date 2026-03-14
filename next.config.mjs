const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.PAGES_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath,
  assetPrefix: isProd && basePath ? basePath : undefined
};

export default nextConfig;

