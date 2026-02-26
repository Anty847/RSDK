/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '', // Empty string for portable relative paths
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
