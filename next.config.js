/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'upload.wikimedia.org'
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  }  
}

module.exports = nextConfig
