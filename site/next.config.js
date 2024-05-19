/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'MelonDS',
    description: 'MelodDS For KASM',
    icon: '/img/logo.svg',
    listUrl: 'https://melonds-registry.skyy.cc/',
    contactUrl: 'https://skyy.cc',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
