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
        {/* Hero Section */}
        <section className="relative py-20 md:py-32" suppressHydrationWarning>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12 items-center md:grid-cols-2">
              {/* Left side - Image */}
              <div className="relative h-96 md:h-full md:min-h-96 overflow-hidden rounded-lg" suppressHydrationWarning>
                <img 
                  src="/code-background.jpg" 
                  alt="Code background"
                  className="w-full h-full object-cover rounded-lg shadow-2xl"
                />
                {/* Overlay for image */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent rounded-lg"></div>
              </div>

              {/* Right side - Content */}
              <div className="text-center md:text-left">
                <div className="mb-6 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
                  {t.hero.greeting}
                </div>

                <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">{t.hero.name}</h1>

                <p className="mb-4 text-2xl font-semibold text-muted-foreground md:text-3xl">{t.hero.title}</p>

                <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">{t.hero.description}</p>

                <div className="flex flex-col items-center justify-center gap-4 md:justify-start md:flex-row">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href="/projects">
                      {t.hero.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                    <Link href="/contact">{t.hero.contact}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y border-border bg-muted/50 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold">{projects.length}+</div>
                <div className="text-sm text-muted-foreground">{t.stats.projects}</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold">2+</div>
                <div className="text-sm text-muted-foreground">{t.stats.experience}</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold">15+</div>
                <div className="text-sm text-muted-foreground">{t.stats.technologies}</div>
              </div>
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
      </main>

      <Footer />
    </div>
  )
}
