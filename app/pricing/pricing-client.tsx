"use client"

import { useLocale } from "@/lib/locale-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PricingClient() {
    const { locale } = useLocale()

    const packages = [
        {
            name: { en: "Start Tier (Landing)", uk: "Тариф Start (Лендінг)", de: "Start-Tarif (Landing Page)" },
            price: "від 500 грн",
            priceUah: "≈ $12",
            description: {
                en: "For tutors, craftsmen, freelancers, personal brands",
                uk: "Для репетиторів, майстрів, фрілансерів, особистих брендів",
                de: "Für Tutoren, Handwerker, Freelancer, persönliche Marken",
            },
            features: {
                en: [
                    "One concise page",
                    "100% responsive (mobile + tablets)",
                    "Application form sent to Telegram / email",
                    "Free hosting Vercel / Netlify (forever for low traffic)",
                    "Development time: 2–3 days",
                    "Post-delivery revisions: 1–2 days",
                ],
                uk: [
                    "Одна лаконічна сторінка",
                    "100% адаптив (мобілки + планшети)",
                    "Форма заявки з відправкою в Telegram / email",
                    "Безкоштовний хостинг Vercel / Netlify (назавжди для малого трафіку)",
                    "Термін розробки: 2–3 дні",
                    "Правки після здачі: 1–2 дні",
                ],
                de: [
                    "Eine prägnante Seite",
                    "100% responsiv (Mobil + Tablets)",
                    "Antragsformular an Telegram / E-Mail",
                    "Kostenloses Hosting Vercel / Netlify (dauerhaft bei wenig Traffic)",
                    "Entwicklungszeit: 2–3 Tage",
                    "Überarbeitungen nach Übergabe: 1–2 Tage",
                ],
            },
            note: {
                en: "Perfect for quickly launching an online presence without extra costs.",
                uk: "Підходить, щоб швидко запустити онлайн-присутність без зайвих витрат.",
                de: "Ideal, um schnell eine Online-Präsenz ohne zusätzliche Kosten zu starten.",
            },
        },
        {
            name: { en: "Popular Tier (Business Card)", uk: "Тариф Popular (Сайт-візитка)", de: "Popular-Tarif (Visitenkarte)" },
            price: "від 1 200 грн",
            priceUah: "≈ $30",
            description: {
                en: "For coffee shops, beauty salons, handmade shops, local business",
                uk: "Для кав'ярень, салонів краси, handmade-магазинів, локального бізнесу",
                de: "Für Cafés, Schönheitssalons, Handmade-Shops, lokales Business",
            },
            features: {
                en: [
                    "Up to 4 pages (Home · About · Services · Contacts)",
                    "Unified brand style + easy navigation",
                    "2 contact forms",
                    "Free hosting (as above)",
                    "Term: 4–8 days",
                    "Post-delivery revisions: 3–4 days",
                ],
                uk: [
                    "До 4 сторінок (Головна · Про мене · Послуги · Контакти)",
                    "Єдиний брендовий стиль + зручна навігація",
                    "2 форми зв'язку",
                    "Безкоштовний хостинг (як вище)",
                    "Термін: 4–8 днів",
                    "Правки після здачі: 3–4 дні",
                ],
                de: [
                    "Bis zu 4 Seiten (Startseite · Über mich · Leistungen · Kontakte)",
                    "Einheitlicher Markenstil + einfache Navigation",
                    "2 Kontaktformulare",
                    "Kostenloses Hosting (wie oben)",
                    "Dauer: 4–8 Tage",
                    "Überarbeitungen nach Übergabe: 3–4 Tage",
                ],
            },
            note: {
                en: "Perfect for local businesses wanting a professional look.",
                uk: "Ідеально для локального бізнесу, який хоче виглядати професійно.",
                de: "Ideal für lokale Unternehmen, die professionell wirken möchten.",
            },
            popular: true,
        },
        {
            name: { en: "Pro Tier (Extended Site)", uk: "Тариф Pro (Розширений сайт)", de: "Pro-Tarif (Erweiterte Website)" },
            price: "від 2 000 грн",
            priceUah: "≈ $50",
            description: {
                en: "For dance studios, mini-courses, photo studios, tutors with schedules",
                uk: "Для танцювальних студій, міні-курсів, фотостудій, репетиторів з розкладом",
                de: "Für Tanzstudios, Minikurse, Fotostudios, Tutoren mit Zeitplan",
            },
            features: {
                en: [
                    "Up to 8 pages",
                    "Custom elements: calculator, schedule, gallery",
                    "Telegram Bot or Email integration — instant notifications",
                    "Free hosting (as above)",
                    "Term: 8–12 days",
                ],
                uk: [
                    "До 8 сторінок",
                    "Кастомні елементи: калькулятор, розклад занять, галерея робіт",
                    "Інтеграція Telegram Bot або Email — миттєві сповіщення про заявки",
                    "Безкоштовний хостинг (як вище)",
                    "Термін: 8–12 днів",
                ],
                de: [
                    "Bis zu 8 Seiten",
                    "Eigene Elemente: Rechner, Terminkalender, Galerie",
                    "Telegram Bot oder E-Mail Integration — Sofort-Benachrichtigungen",
                    "Kostenloses Hosting (wie oben)",
                    "Dauer: 8–12 Tage",
                ],
            },
            note: {
                en: "For businesses needing advanced functionality.",
                uk: "Для бізнесу, якому потрібен розширений функціонал.",
                de: "Für Unternehmen, die erweiterte Funktionen benötigen.",
            },
        },
    ]

    const additionalFeatures = [
        {
            name: { en: "Multilingual", uk: "Багатомовність", de: "Mehrsprachigkeit" },
            price: "+ $15",
        },
        {
            name: { en: "Online Store (up to 20 products)", uk: "Інтернет-магазин (до 20 товарів)", de: "Online-Shop (bis zu 20 Produkte)" },
            price: "+ $40",
        },
        {
            name: { en: "Custom Animations", uk: "Кастомні анімації", de: "Benutzerdefinierte Animationen" },
            price: "+ $10–20",
        },
        {
            name: { en: "And much more", uk: "та багато іншого", de: "und vieles mehr" },
            price: "",
        },
    ]

    return (
        <div className="flex min-h-screen flex-col">
            <Navigation />

            <main className="flex-1">
                {/* Header */}
                <section className="border-b border-border bg-muted/50 py-12">
                    <div className="container mx-auto px-4">
                        <h1 className="mb-4 text-center text-4xl font-bold md:text-5xl">
                            {locale === "en" && "Pricing"}
                            {locale === "uk" && "Ціни"}
                            {locale === "de" && "Preise"}
                        </h1>
                        <p className="text-center text-lg text-muted-foreground">
                            {locale === "en" && "Transparent pricing for quality web development"}
                            {locale === "uk" && "Прозорі ціни на якісну веб-розробку"}
                            {locale === "de" && "Transparente Preise für qualitativ hochwertige Webentwicklung"}
                        </p>
                    </div>
                </section>

                {/* Pricing Packages */}
                <section className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {packages.map((pkg, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col rounded-lg border ${pkg.popular ? "border-primary shadow-lg" : "border-border"
                                    } bg-card p-8`}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                                        {locale === "en" && "Popular"}
                                        {locale === "uk" && "Популярно"}
                                        {locale === "de" && "Beliebt"}
                                    </div>
                                )}

                                <h3 className="mb-2 text-2xl font-bold">{pkg.name[locale]}</h3>
                                <div className="mb-1 text-3xl font-bold text-primary">{pkg.price}</div>
                                <div className="mb-4 text-sm text-muted-foreground">{pkg.priceUah}</div>
                                <p className="mb-6 text-sm text-muted-foreground">{pkg.description[locale]}</p>

                                <ul className="mb-4 flex-1 space-y-3">
                                    {pkg.features[locale].map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start gap-3">
                                            <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                                <Check className="h-3 w-3 text-primary" />
                                            </div>
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {pkg.note && (
                                    <div className="mb-6 rounded-lg bg-muted p-3">
                                        <p className="text-xs text-muted-foreground">💡 {pkg.note[locale]}</p>
                                    </div>
                                )}

                                <Button asChild className="w-full" size="lg" variant={pkg.popular ? "default" : "outline"}>
                                    <Link href="/contact">
                                        {locale === "en" && "Choose"}
                                        {locale === "uk" && "Вибрати"}
                                        {locale === "de" && "Wählen"}
                                    </Link>
                                </Button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Additional Features */}
                <section className="border-t border-border bg-muted/50 py-12">
                    <div className="container mx-auto px-4">
                        <h2 className="mb-8 text-center text-3xl font-bold">
                            {locale === "en" && "Additional Features"}
                            {locale === "uk" && "Додаткові функції"}
                            {locale === "de" && "Zusätzliche Funktionen"}
                        </h2>

                        <div className="mx-auto max-w-3xl">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                {additionalFeatures.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between rounded-lg border border-border bg-card p-4"
                                    >
                                        <span className="font-medium">{feature.name[locale]}</span>
                                        {feature.price && <span className="text-primary">{feature.price}</span>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="container mx-auto px-4 py-12">
                    <div className="mx-auto max-w-2xl rounded-lg border border-border bg-card p-8 text-center">
                        <h2 className="mb-4 text-2xl font-bold">
                            {locale === "en" && "Need a Custom Solution?"}
                            {locale === "uk" && "Потрібне кастомне рішення?"}
                            {locale === "de" && "Benötigen Sie eine individuelle Lösung?"}
                        </h2>
                        <p className="mb-6 text-muted-foreground">
                            {locale === "en" && "Contact me to discuss your project requirements and get a personalized quote."}
                            {locale === "uk" &&
                                "Зв'яжіться зі мною, щоб обговорити вимоги до проєкту та отримати персональну пропозицію."}
                            {locale === "de" &&
                                "Kontaktieren Sie mich, um Ihre Projektanforderungen zu besprechen und ein individuelles Angebot zu erhalten."}
                        </p>
                        <Button asChild size="lg">
                            <Link href="/contact">
                                {locale === "en" && "Contact Me"}
                                {locale === "uk" && "Зв'язатися"}
                                {locale === "de" && "Kontakt aufnehmen"}
                            </Link>
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
