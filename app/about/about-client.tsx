"use client"

import { useLocale } from "@/lib/locale-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Code2, Database, Palette, Zap, Smartphone } from "lucide-react"

export default function AboutClient() {
    const { locale } = useLocale()

    const skills = [
        {
            category: { en: "Frontend Stack", uk: "Технологічний стек", de: "Technologiestack" },
            icon: Palette,
            items: [
                "React + Next.js (App Router + Server Components)",
                locale === "uk" ? "TypeScript — повна типізація" : "TypeScript — full typing",
                "Tailwind CSS + shadcn/ui",
                "Vite — fast iterations",
                "Zustand / TanStack Query",
            ],
        },
        {
            category: { en: "Specialized Solutions", uk: "Спеціалізовані рішення", de: "Spezialisierte Lösungen" },
            icon: Zap,
            items: [
                locale === "uk" ? "Кастомні адмін-панелі" : "Custom admin panels",
                locale === "uk" ? "Telegram-інтеграції для лідів" : "Telegram integrations for leads",
                locale === "uk" ? "Омніканальне захоплення" : "Omnichannel capture",
            ],
        },
        {
            category: { en: "Backend & Database", uk: "Backend та бази даних", de: "Backend & Datenbank" },
            icon: Database,
            items: ["Node.js", "Supabase", "Neon", "PostgreSQL", "API Development"],
        },
        {
            category: { en: "Tools & Deployment", uk: "Інструменти та деплой", de: "Tools & Deployment" },
            icon: Code2,
            items: ["Git", "GitHub", "Vercel", "Netlify", "PostCSS"],
        },
    ]

    return (
        <div className="flex min-h-screen flex-col">
            <Navigation />

            <main className="flex-1">
                {/* Header */}
                <section className="border-b border-border bg-muted/50 py-12">
                    <div className="container mx-auto px-4">
                        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                            {locale === "en" && "About Me"}
                            {locale === "uk" && "Про мене"}
                            {locale === "de" && "Über mich"}
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            {locale === "en" && "Full-Stack Developer passionate about creating modern web experiences"}
                            {locale === "uk" && "Full-Stack розробник, захоплений створенням сучасних веб-рішень"}
                            {locale === "de" && "Full-Stack-Entwickler mit Leidenschaft für moderne Web-Erlebnisse"}
                        </p>
                    </div>
                </section>

                {/* Introduction */}
                <section className="container mx-auto px-4 py-12">
                    <div className="mx-auto max-w-3xl">
                        <div className="prose prose-lg dark:prose-invert">
                            <p className="text-lg leading-relaxed">
                                {locale === "en" &&
                                    "Hi! We are Arsen Dev, a Full-Stack Development studio building modern, responsive websites and web applications. We specialize in creating user-friendly interfaces and robust backend solutions using the latest technologies."}
                                {locale === "uk" &&
                                    "Привіт! Ми — Arsen Dev, студія Full-Stack розробки, яка створює сучасні, адаптивні веб-сайти та веб-додатки. Ми спеціалізуємось на створенні зручних інтерфейсів та надійних backend-рішень, використовуючи найновіші технології."}
                                {locale === "de" &&
                                    "Hallo! Wir sind Arsen Dev, ein Full-Stack-Entwicklungsstudio, das moderne, responsive Websites und Webanwendungen erstellt. Wir spezialisieren uns auf die Entwicklung benutzerfreundlicher Schnittstellen und robuster Backend-Lösungen mit den neuesten Technologien."}
                            </p>
                            <p className="text-lg leading-relaxed">
                                {locale === "en" &&
                                    "My approach combines clean code, modern design principles, and efficient development workflows. I focus on delivering high-quality projects with attention to detail and performance optimization. Whether it's a simple landing page or a complex web application, I'm committed to delivering solutions that exceed expectations."}
                                {locale === "uk" &&
                                    "Мій підхід поєднує чистий код, сучасні принципи дизайну та ефективні робочі процеси розробки. Я зосереджуюсь на доставці високоякісних проєктів з увагою до деталей та оптимізації продуктивності. Чи то простий лендінг, чи складний веб-додаток - я прагну створювати рішення, які перевершують очікування."}
                                {locale === "de" &&
                                    "Mein Ansatz kombiniert sauberen Code, moderne Designprinzipien und effiziente Entwicklungsworkflows. Ich konzentriere mich auf die Bereitstellung hochwertiger Projekte mit Aufmerksamkeit für Details und Leistungsoptimierung. Ob einfache Landing-Page oder komplexe Webanwendung - ich bin bestrebt, Lösungen zu liefern, die Erwartungen übertreffen."}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Skills */}
                <section className="border-t border-border bg-muted/50 py-12">
                    <div className="container mx-auto px-4">
                        <h2 className="mb-12 text-center text-3xl font-bold">
                            {locale === "en" && "Skills & Technologies"}
                            {locale === "uk" && "Навички та технології"}
                            {locale === "de" && "Fähigkeiten & Technologien"}
                        </h2>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {skills.map((skill, index) => {
                                const Icon = skill.icon
                                return (
                                    <div key={index} className="rounded-lg border border-border bg-card p-6">
                                        <div className="mb-4 flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                                <Icon className="h-5 w-5 text-primary" />
                                            </div>
                                            <h3 className="text-lg font-semibold">{skill.category[locale]}</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {skill.items.map((item, itemIndex) => (
                                                <span
                                                    key={itemIndex}
                                                    className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-foreground"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Experience */}
                <section className="container mx-auto px-4 py-12">
                    <div className="mx-auto max-w-3xl">
                        <h2 className="mb-8 text-3xl font-bold">
                            {locale === "en" && "Experience"}
                            {locale === "uk" && "Досвід"}
                            {locale === "de" && "Erfahrung"}
                        </h2>

                        <div className="space-y-8">
                            <div className="border-l-2 border-primary pl-6">
                                <h3 className="mb-2 text-xl font-semibold">
                                    {locale === "en" && "Freelance Full-Stack Developer"}
                                    {locale === "uk" && "Фріланс Full-Stack розробник"}
                                    {locale === "de" && "Freiberuflicher Full-Stack-Entwickler"}
                                </h3>
                                <p className="text-muted-foreground">
                                    {locale === "en" &&
                                        "Developed 11+ websites and web applications for various clients, including e-commerce platforms, landing pages, and custom web solutions. Specialized in React, Next.js, and modern web technologies."}
                                    {locale === "uk" &&
                                        "Розробив понад 11 веб-сайтів та веб-додатків для різних клієнтів, включаючи платформи електронної комерції, лендінги та кастомні веб-рішення. Спеціалізація на React, Next.js та сучасних веб-технологіях."}
                                    {locale === "de" &&
                                        "Entwicklung von über 11 Websites und Webanwendungen für verschiedene Kunden, einschließlich E-Commerce-Plattformen, Landing-Pages und maßgeschneiderten Web-Lösungen. Spezialisiert auf React, Next.js und moderne Web-Technologien."}
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
