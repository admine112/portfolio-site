"use client"

import { useState } from "react"
import { useLocale } from "@/lib/locale-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { projects } from "@/lib/projects-data"
import { AutoPreview } from "@/components/auto-preview"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const { locale } = useLocale()
  const [filter, setFilter] = useState<string>("all")

  const projectTypes = [
    { value: "all", label: { en: "All Projects", uk: "Всі проєкти", de: "Alle Projekte" } },
    { value: "landing", label: { en: "Landing Pages", uk: "Лендінги", de: "Landing-Pages" } },
    { value: "ecommerce", label: { en: "E-commerce", uk: "Інтернет-магазини", de: "E-Commerce" } },
    { value: "webapp", label: { en: "Web Apps", uk: "Веб-додатки", de: "Webanwendungen" } },
  ]

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true
    if (filter === "landing")
      return project.type[locale].includes("Landing") || project.type[locale].includes("Лендінг")
    if (filter === "ecommerce")
      return project.type[locale].includes("E-commerce") || project.type[locale].includes("магазин")
    if (filter === "webapp")
      return (
        project.type[locale].includes("Web App") ||
        project.type[locale].includes("додаток") ||
        project.type[locale].includes("Webanwendung")
      )
    return true
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="border-b border-border bg-muted/50 py-12">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              {locale === "en" && "My Projects"}
              {locale === "uk" && "Мої проєкти"}
              {locale === "de" && "Meine Projekte"}
            </h1>
            <p className="text-lg text-muted-foreground">
              {locale === "en" && "A collection of websites and web applications I've built"}
              {locale === "uk" && "Колекція веб-сайтів та веб-додатків, які я створив"}
              {locale === "de" && "Eine Sammlung von Websites und Webanwendungen, die ich erstellt habe"}
            </p>
          </div>
        </section>

        {/* Filter */}
        <section className="border-b border-border py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2">
              {projectTypes.map((type) => (
                <Button
                  key={type.value}
                  variant={filter === type.value ? "default" : "outline"}
                  onClick={() => setFilter(type.value)}
                  className={filter === type.value ? "" : "bg-transparent"}
                >
                  {type.label[locale]}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg"
              >
                {/* Project Image - автоматическое превью */}
                <Link href={`/projects/${project.id}`} className="relative aspect-video overflow-hidden bg-muted">
                  <AutoPreview
                    url={project.url}
                    fallbackImage={project.image || "/placeholder.svg"}
                    alt={project.title[locale]}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                </Link>

                {/* Project Info */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <Link href={`/projects/${project.id}`}>
                      <h3 className="text-xl font-semibold transition-colors hover:text-primary">
                        {project.title[locale]}
                      </h3>
                    </Link>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      aria-label="Visit website"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>

                  <p className="mb-2 text-sm text-muted-foreground">{project.type[locale]}</p>

                  <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{project.description[locale]}</p>

                  {/* Technologies */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Price and Duration */}
                  <div className="mt-auto flex items-center justify-between border-t border-border pt-4 text-sm">
                    <span className="font-semibold text-primary">{project.price}</span>
                    <span className="text-muted-foreground">{project.duration[locale]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-lg text-muted-foreground">
                {locale === "en" && "No projects found in this category"}
                {locale === "uk" && "Проєктів у цій категорії не знайдено"}
                {locale === "de" && "Keine Projekte in dieser Kategorie gefunden"}
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}
