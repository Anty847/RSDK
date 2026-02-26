/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // This is the key: it forces paths to be relative (./_next) 
  // instead of absolute (/_next)
  assetPrefix: './', 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
