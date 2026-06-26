/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'assets.aceternity.com'],
  },
  eslint: {
    // Ne bloque PAS le build en cas d'erreurs eslint
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignore les erreurs TS pendant le build Vercel
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
