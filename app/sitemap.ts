import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://portfolio-site-blush-ten.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: 'https://portfolio-site-blush-ten.vercel.app/projects',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://portfolio-site-blush-ten.vercel.app/about',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://portfolio-site-blush-ten.vercel.app/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: 'https://portfolio-site-blush-ten.vercel.app/pricing',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ].map(item => ({
    ...item,
    // Гарантуємо, що ніде немає зайвих пробілів
    url: item.url.trim(),
  }))
}
