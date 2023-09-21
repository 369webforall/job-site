export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://ldpersonalvermittlung.com/sitemap.xml',
  };
}
