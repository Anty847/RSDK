/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Use an empty string to avoid the 'leading slash' error 
  // while keeping the build portable
  assetPrefix: '', 
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
