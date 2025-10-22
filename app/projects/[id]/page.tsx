"use client"

import { useParams } from "next/navigation"
import { useLocale } from "@/lib/locale-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { projects } from "@/lib/projects-data"
import { AutoPreview } from "@/components/auto-preview"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Check } from "lucide-react"
import { notFound } from "next/navigation"

export default function ProjectDetailPage() {
  const params = useParams()
  const { locale } = useLocale()
  const projectId = params.id as string

  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Back Button */}
        <section className="border-b border-border py-4">
          <div className="container mx-auto px-4">
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {locale === "en" ? "Back to Projects" : locale === "uk" ? "Назад до проєктів" : "Zurück zu Projekten"}
            </Link>
          </div>
        </section>

        {/* Project Header */}
        <section className="border-b border-border bg-muted/50 py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                {project.type[locale]}
              </div>
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">{project.title[locale]}</h1>
              <p className="mb-6 text-lg text-muted-foreground">{project.description[locale]}</p>

              <div className="flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {locale === "en" && "Visit Website"}
                    {locale === "uk" && "Відвідати сайт"}
                    {locale === "de" && "Website besuchen"}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent">
                  <Link href="/contact">
                    {locale === "en" && "Order Similar"}
                    {locale === "uk" && "Замовити подібний"}
                    {locale === "de" && "Ähnliches bestellen"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Project Preview */}
        <section className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-6xl">
            {/* Автоматическое превью */}
            <div className="overflow-hidden rounded-lg border border-border bg-muted shadow-lg mb-6">
              <div className="aspect-video w-full">
                <AutoPreview
                  url={project.url}
                  fallbackImage={project.image || "/placeholder.svg"}
                  alt={project.title[locale]}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            
            {/* Кнопка для открытия сайта */}
            <div className="overflow-hidden rounded-lg border border-border bg-gradient-to-br from-primary/5 to-primary/10 shadow-lg">
              <div className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <ExternalLink className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  {locale === "en" && "View Live Website"}
                  {locale === "uk" && "Переглянути живий сайт"}
                  {locale === "de" && "Live-Website ansehen"}
                </h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  {locale === "en" && "Click the button below to open the actual website in a new tab"}
                  {locale === "uk" && "Натисніть кнопку нижче, щоб відкрити реальний сайт у новій вкладці"}
                  {locale === "de" && "Klicken Sie auf die Schaltfläche unten, um die tatsächliche Website in einem neuen Tab zu öffnen"}
                </p>
                <Button asChild size="lg" className="gap-2">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    {locale === "en" && "Open Website"}
                    {locale === "uk" && "Відкрити сайт"}
                    {locale === "de" && "Website öffnen"}
                  </a>
                </Button>
                <p className="mt-4 text-xs text-muted-foreground">
                  {project.url}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="container mx-auto px-4 py-12">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Features */}
              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-bold">
                  {locale === "en" && "Features"}
                  {locale === "uk" && "Функції"}
                  {locale === "de" && "Funktionen"}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.features[locale].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h2 className="mb-6 text-2xl font-bold">
                  {locale === "en" && "Technologies Used"}
                  {locale === "uk" && "Використані технології"}
                  {locale === "de" && "Verwendete Technologien"}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 rounded-lg border border-border bg-card p-6">
                <h3 className="mb-6 text-xl font-bold">
                  {locale === "en" && "Project Details"}
                  {locale === "uk" && "Деталі проєкту"}
                  {locale === "de" && "Projektdetails"}
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="mb-1 text-sm text-muted-foreground">
                      {locale === "en" && "Project Type"}
                      {locale === "uk" && "Тип проєкту"}
                      {locale === "de" && "Projekttyp"}
                    </div>
                    <div className="font-medium">{project.type[locale]}</div>
                  </div>

                  <div>
                    <div className="mb-1 text-sm text-muted-foreground">
                      {locale === "en" && "Estimated Cost"}
                      {locale === "uk" && "Орієнтовна вартість"}
                      {locale === "de" && "Geschätzte Kosten"}
                    </div>
                    <div className="text-2xl font-bold text-primary">{project.price}</div>
                  </div>

                  <div>
                    <div className="mb-1 text-sm text-muted-foreground">
                      {locale === "en" && "Development Time"}
                      {locale === "uk" && "Час розробки"}
                      {locale === "de" && "Entwicklungszeit"}
                    </div>
                    <div className="font-medium">{project.duration[locale]}</div>
                  </div>

                  <div className="pt-4">
                    <Button asChild className="w-full" size="lg">
                      <Link href="/contact">
                        {locale === "en" && "Get a Quote"}
                        {locale === "uk" && "Отримати пропозицію"}
                        {locale === "de" && "Angebot erhalten"}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="border-t border-border bg-muted/50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold">
              {locale === "en" && "More Projects"}
              {locale === "uk" && "Більше проєктів"}
              {locale === "de" && "Weitere Projekte"}
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((p) => p.id !== projectId)
                .slice(0, 3)
                .map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    href={`/projects/${relatedProject.id}`}
                    className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg"
                  >
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img
                        src={relatedProject.image || "/placeholder.svg"}
                        alt={relatedProject.title[locale]}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 text-xl font-semibold">{relatedProject.title[locale]}</h3>
                      <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                        {relatedProject.description[locale]}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-primary">{relatedProject.price}</span>
                        <span className="text-muted-foreground">{relatedProject.duration[locale]}</span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
