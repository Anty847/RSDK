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
    // This is critical for your RSDK logic
    config.resolve.fallback = { fs: false };
    return config;
  },
};

export default nextConfig;
