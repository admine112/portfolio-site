import type React from "react"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/lib/theme-provider"
import { LocaleProvider } from "@/lib/locale-provider"

import { Inter, JetBrains_Mono, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _geist = V0_Font_Geist({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const inter = Inter({ subsets: ["latin", "cyrillic"] })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "Arsen Dev - Студія Full-Stack Розробки",
  description: "Arsen Dev — студія веб-розробки. Створюємо сучасні сайти та веб-додатки",
  generator: 'v0.app',
  robots: 'index, follow',
  icons: {
    icon: '/favicon.svg?v=2',
  },
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    url: 'https://portfolio-site.vercel.app',
    title: 'Arsen Dev - Студія Full-Stack Розробки',
    description: 'Arsen Dev — студія веб-розробки',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
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
