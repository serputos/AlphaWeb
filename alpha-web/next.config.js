/** @type {import('next').NextConfig} */
/* onst nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

 */
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? 'https://github.com/serputos/AlphaWeb.git' : ''
}