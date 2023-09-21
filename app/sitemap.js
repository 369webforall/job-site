export default async function sitemap() {
  return [
    {
      url: 'https://ldpersonalvermittlung.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://ldpersonalvermittlung.com/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },

    {
      url: 'https://ldpersonalvermittlung.com/jobs',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://ldpersonalvermittlung.com/blogs',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://ldpersonalvermittlung.com/agb',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: 'https://ldpersonalvermittlung.com/datenschutz',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: 'https://ldpersonalvermittlung.com/imprint',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];
}
