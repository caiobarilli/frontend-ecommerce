// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  // swcMinify: true,
  // experimental: {
  //   // Enables the styled-components SWC transform
  //   styledComponents: true,
  // },
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  compiler: {
    styledComponents: true
  }
})

module.exports = nextConfig
