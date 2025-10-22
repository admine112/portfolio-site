"use client"

import { useLocale } from "@/lib/locale-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Home } from "lucide-react"

export default function NotFound() {
  const { locale } = useLocale()

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex flex-1 items-center justify-center">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="mb-4 text-6xl font-bold">404</h1>
          <h2 className="mb-4 text-2xl font-semibold">
            {locale === "en" && "Page Not Found"}
            {locale === "uk" && "Сторінку не знайдено"}
            {locale === "de" && "Seite nicht gefunden"}
          </h2>
          <p className="mb-8 text-muted-foreground">
            {locale === "en" && "The page you're looking for doesn't exist or has been moved."}
            {locale === "uk" && "Сторінка, яку ви шукаєте, не існує або була переміщена."}
            {locale === "de" && "Die gesuchte Seite existiert nicht oder wurde verschoben."}
          </p>
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              {locale === "en" && "Go Home"}
              {locale === "uk" && "На головну"}
              {locale === "de" && "Zur Startseite"}
            </Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
