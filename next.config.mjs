/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Use empty string so paths become relative (e.g. _next/...)
  // This avoids the 'leading slash' error while staying portable.
  assetPrefix: '',
  trailingSlash: true,
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // Keeps your existing fix for client-side 'fs' modules
    config.resolve.fallback = { fs: false };
    return config;
  },
};

export default nextConfig;
