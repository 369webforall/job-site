/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: 'https://www.ldpersonalvermittlung.com',
        destination: 'https://www.ldpersonalvermittlung.com/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
