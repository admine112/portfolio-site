import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://portfolio-site-blush-ten.vercel.app/sitemap.xml', // немає пробілу!
  }
}
