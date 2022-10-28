/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru']
  }
}

module.exports = nextConfig
