"use client"

import { useLocale } from "@/lib/locale-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Palette, Zap } from "lucide-react"
import Link from "next/link"
import { projects } from "@/lib/projects-data"

export default function HomeClient() {
    const { t, locale } = useLocale()

    return (
        <div className="flex min-h-screen flex-col">
            <Navigation />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-background py-20 md:py-32">
                    <div className="container relative z-10 mx-auto px-4">
                        <div className="mx-auto max-w-3xl text-center">
                            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
                                {t.hero.greeting} <span className="text-primary">{t.hero.name} (v2.0)</span>
                                <br />
                                {t.hero.title}
                            </h1>
                            <p className="mb-10 text-lg text-muted-foreground md:text-xl">
                                {t.hero.description}
                            </p>
                            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <Button asChild size="lg" className="rounded-full">
                                    <Link href="/projects">
                                        {t.hero.cta}
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent">
                                    <Link href="/contact">{t.hero.contact}</Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Background decoration */}
                    <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />
                </section>

                {/* Featured Projects */}
                <section className="bg-muted/50 py-20">
                    <div className="container mx-auto px-4">
                        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row md:items-end">
                            <div>
                                <h2 className="mb-2 text-3xl font-bold md:text-4xl">
                                    {locale === "en" && "Featured Projects"}
                                    {locale === "uk" && "Вибрані проєкти"}
                                    {locale === "de" && "Ausgewählte Projekte"}
                                </h2>
                                <p className="text-muted-foreground">
                                    {locale === "en" && "A selection of our recent work"}
                                    {locale === "uk" && "Вибірка наших останніх робіт"}
                                    {locale === "de" && "Eine Auswahl unserer aktuellen Arbeiten"}
                                </p>
                            </div>
                            <Button asChild variant="ghost" className="hidden md:flex">
                                <Link href="/projects">
                                    {locale === "en" && "View All Projects"}
                                    {locale === "uk" && "Всі проєкти"}
                                    {locale === "de" && "Alle Projekte anzeigen"}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
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
                                        <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-primary">
                                            {project.title[locale]}
                                        </h3>
                                        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                                            {project.description[locale]}
                                        </p>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="font-semibold text-primary">{project.price}</span>
                                            <span className="text-muted-foreground">{project.duration[locale]}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="mt-10 flex justify-center md:hidden">
                            <Button asChild variant="outline" className="w-full sm:w-auto">
                                <Link href="/projects">
                                    {locale === "en" && "View All Projects"}
                                    {locale === "uk" && "Всі проєкти"}
                                    {locale === "de" && "Alle Projekte anzeigen"}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                    <Code2 className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">
                                    {locale === "en" && "Modern Stack"}
                                    {locale === "uk" && "Технологічний стек"}
                                    {locale === "de" && "Technologiestack"}
                                </h3>
                                <p className="text-muted-foreground whitespace-pre-line">
                                    {locale === "en" && "Next.js, TypeScript, Tailwind CSS, shadcn/ui"}
                                    {locale === "uk" && "Next.js, TypeScript, Tailwind CSS, shadcn/ui"}
                                    {locale === "de" && "Next.js, TypeScript, Tailwind CSS, shadcn/ui"}
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                    <Palette className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">
                                    {locale === "en" && "Premium Design"}
                                    {locale === "uk" && "Преміум дизайн"}
                                    {locale === "de" && "Premium Design"}
                                </h3>
                                <p className="text-muted-foreground">
                                    {locale === "en" && "Modern UI/UX with high attention to detail"}
                                    {locale === "uk" && "Сучасний UI/UX та преміальна естетика"}
                                    {locale === "de" && "Modernes UI/UX mit Liebe zum Detail"}
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                    <Zap className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">
                                    {locale === "en" && "Business-Focused"}
                                    {locale === "uk" && "Орієнтація на бізнес"}
                                    {locale === "de" && "Business-fokussiert"}
                                </h3>
                                <p className="text-muted-foreground">
                                    {locale === "en" && "CRM, Telegram integrations, and custom dashboards"}
                                    {locale === "uk" && "CRM, Telegram інтеграції та адмін-панелі"}
                                    {locale === "de" && "CRM, Telegram-Integrationen und Dashboards"}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
