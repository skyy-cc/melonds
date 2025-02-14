/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'MelonDS',
    description: 'MelodDS For KASM',
    icon: '/img/logo.svg',
    listUrl: 'https://skyy-cc.github.io/melonds/',
    contactUrl: 'https://skyy.cc',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/melonds/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
