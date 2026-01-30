import type React from "react"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/lib/theme-provider"
import { LocaleProvider } from "@/lib/locale-provider"

import { Inter, JetBrains_Mono, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _geist = V0_Font_Geist({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })

const inter = Inter({ subsets: ["latin", "cyrillic"] })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-site-blush-ten.vercel.app'),
  title: {
    default: 'Arsen Dev — Студія розробки сайтів | Сайти від 500 грн',
    template: '%s | Arsen Dev'
  },
  description: 'Потрібен сайт? Розробляємо лендінги, інтернет-магазини та кастомні веб-додатки від 500 грн. Гарантована якість, React, Next.js, TypeScript. Швидка розробка від 2 днів.',
  keywords: [
    'створення сайтів',
    'розробка веб-сайтів',
    'замовити лендінг',
    'сайт від 500 грн',
    'фріланс розробник',
    'фронтенд розробник',
    'інтернет-магазин під ключ',
    'Arsen Dev',
    'portfolio',
    'web development ukraine',
    'Next.js developer',
    'React розробка',
    'створення сайтів ціна'
  ],
  authors: [{ name: 'Arsen Dev' }],
  creator: 'Arsen Dev',
  publisher: 'Arsen Dev',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    url: 'https://portfolio-site-blush-ten.vercel.app',
    title: 'Arsen Dev — Студія розробки сайтів | Сайти від 500 грн',
    description: 'Професійна розробка сучасних сайтів. Лендінги, візитки, магазини. Сучасний стек: React, Next.js, TS.',
    siteName: 'Arsen Dev Portfolio',
    images: [
      {
        url: '/image.png',
        width: 1200,
        height: 630,
        alt: 'Arsen Dev - Web Development Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arsen Dev — Студія розробки сайтів',
    description: 'Сайти від 500 грн. Професійна розробка на Next.js та React.',
    images: ['/image.png'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Arsen Dev',
  image: 'https://portfolio-site-blush-ten.vercel.app/image.png',
  '@id': 'https://portfolio-site-blush-ten.vercel.app',
  url: 'https://portfolio-site-blush-ten.vercel.app',
  telephone: '+380956053239',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ukraine',
    addressCountry: 'UA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.3794,
    longitude: 31.1656,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    opens: '09:00',
    closes: '21:00',
  },
  priceRange: '₴500 - ₴10000',
  description: 'Студія Full-Stack розробки Arsen Dev. Створюємо сучасні сайти та веб-додатки від 500 грн.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="google-site-verification" content="QudVGkhbGZSEjtbJ0AT8sSFJMQeZSHqIEBiHz1Ly2Ro" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 
                                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <LocaleProvider>{children}</LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
