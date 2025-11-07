"use client"

import { useLocale } from "@/lib/locale-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Palette, Zap } from "lucide-react"
import Link from "next/link"
import { projects } from "@/lib/projects-data"

export default function HomePage() {
  const { t, locale } = useLocale()

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Combined Hero + Stats Section */}
        <section 
          className="relative min-h-screen flex items-center overflow-hidden"
          style={{
            backgroundImage: 'url(/code-background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          suppressHydrationWarning
        >
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80"></div>
          {/* Additional radial gradient for depth */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/60"></div>

          {/* Content */}
          <div className="relative z-10 w-full">
            <div className="container mx-auto px-4">
              {/* Main Hero Content */}
              <div className="mb-16 md:mb-20">
                <div className="mx-auto max-w-3xl text-center">
                  <div className="mb-6 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
                    {t.hero.greeting}
                  </div>

                  <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-white md:text-6xl">{t.hero.name}</h1>

                  <p className="mb-4 text-2xl font-semibold text-gray-200 md:text-3xl">{t.hero.title}</p>

                  <p className="mb-8 text-pretty text-lg text-gray-300 md:text-xl">{t.hero.description}</p>

                  <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button asChild size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-gray-200">
                      <Link href="/projects">
                        {t.hero.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 text-white hover:bg-white/20 border-white/30">
                      <Link href="/contact">{t.hero.contact}</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Stats Grid - Bottom of Hero */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 max-w-2xl mx-auto">
                <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="mb-2 text-4xl font-bold text-white">{projects.length}+</div>
                  <div className="text-sm text-gray-300">{t.stats.projects}</div>
                </div>
                <div className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="mb-2 text-4xl font-bold text-white">15+</div>
                  <div className="text-sm text-gray-300">{t.stats.technologies}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Preview */}
        <section className="border-t border-border bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                {locale === "en" && "Featured Projects"}
                {locale === "uk" && "Обрані проєкти"}
                {locale === "de" && "Ausgewählte Projekte"}
              </h2>
              <p className="text-muted-foreground">
                {locale === "en" && "Check out some of my recent work"}
                {locale === "uk" && "Перегляньте деякі з моїх останніх робіт"}
                {locale === "de" && "Sehen Sie sich einige meiner neuesten Arbeiten an"}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.slice(0, 3).map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg"
                >
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title[locale]}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-semibold">{project.title[locale]}</h3>
                    <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{project.description[locale]}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link href="/projects">
                  {locale === "en" && "View All Projects"}
                  {locale === "uk" && "Переглянути всі проєкти"}
                  {locale === "de" && "Alle Projekte ansehen"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Code2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                {locale === "en" && "Modern Technologies"}
                {locale === "uk" && "Сучасні технології"}
                {locale === "de" && "Moderne Technologien"}
              </h3>
              <p className="text-muted-foreground">
                {locale === "en" && "React, Next.js, TypeScript, Tailwind CSS"}
                {locale === "uk" && "React, Next.js, TypeScript, Tailwind CSS"}
                {locale === "de" && "React, Next.js, TypeScript, Tailwind CSS"}
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                {locale === "en" && "Responsive Design"}
                {locale === "uk" && "Адаптивний дизайн"}
                {locale === "de" && "Responsives Design"}
              </h3>
              <p className="text-muted-foreground">
                {locale === "en" && "Mobile-first approach for all devices"}
                {locale === "uk" && "Mobile-first підхід для всіх пристроїв"}
                {locale === "de" && "Mobile-First-Ansatz für alle Geräte"}
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                {locale === "en" && "Fast Delivery"}
                {locale === "uk" && "Швидка доставка"}
                {locale === "de" && "Schnelle Lieferung"}
              </h3>
              <p className="text-muted-foreground">
                {locale === "en" && "Quick turnaround with efficient development"}
                {locale === "uk" && "Швидка розробка з ефективним підходом"}
                {locale === "de" && "Schnelle Entwicklung mit effizienter Arbeitsweise"}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
