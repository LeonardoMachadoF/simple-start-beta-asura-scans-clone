/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://beta.asurascans.com', 'beta.asurascans.com'],
  },
}

module.exports = nextConfig
