/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Forces Next.js to generate the /out folder
  images: {
    unoptimized: true, // Required for static exports on GH Pages
  },
  // If your site is at jdsle.github.io/RSDK/, add:
  // basePath: '/RSDK',
};

export default nextConfig;
