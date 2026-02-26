/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '', 
  trailingSlash: true,
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

export default nextConfig;
