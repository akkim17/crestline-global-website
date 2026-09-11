/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  trailingSlash: true, // Generates folder structure (e.g., /about/index.html)
  images: {
    unoptimized: true, // Required for static export unless using a custom external loader
  },
};

export default nextConfig;