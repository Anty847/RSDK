/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // No assetPrefix tricks here - keep it standard
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
