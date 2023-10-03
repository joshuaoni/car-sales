/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/page/1',
        permanent: false
      },

      {
        source: '/page',
        destination: '/page/1',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
