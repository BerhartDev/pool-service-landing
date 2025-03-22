/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  basePath: '/pool-service-landing',
  assetPrefix: '/pool-service-landing/',
  output: 'export',
}

module.exports = nextConfig 