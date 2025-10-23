"use client"

import { useLocale } from "@/lib/locale-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PricingPage() {
  const { locale } = useLocale()

  const packages = [
    {
      name: { en: "Landing Page", uk: "Лендінг", de: "Landing-Page" },
      price: "$100-200",
      description: {
        en: "Perfect for small businesses and personal projects",
        uk: "Ідеально для малого бізнесу та особистих проєктів",
        de: "Perfekt für kleine Unternehmen und persönliche Projekte",
      },
      features: {
        en: [
          "One-page design",
          "Responsive layout",
          "Contact form",
          "Basic SEO",
          "1-3 days delivery",
          "2 revisions included",
        ],
        uk: [
          "Одностороінковий дизайн",
          "Адаптивна верстка",
          "Форма зв'язку",
          "Базове SEO",
          "Доставка 1-3 дні",
          "2 правки включено",
        ],
        de: [
          "Einseitiges Design",
          "Responsives Layout",
          "Kontaktformular",
          "Basis-SEO",
          "1-3 Tage Lieferung",
          "2 Überarbeitungen inklusive",
        ],
      },
    },
    {
      name: { en: "Multi-Page Website", uk: "Багатосторінковий сайт", de: "Mehrseitige Website" },
      price: "$300-500",
      description: {
        en: "Ideal for businesses needing multiple pages",
        uk: "Ідеально для бізнесу, що потребує кілька сторінок",
        de: "Ideal für Unternehmen mit mehreren Seiten",
      },
      features: {
        en: [
          "Up to 5 pages",
          "Responsive design",
          "Contact forms",
          "Advanced SEO",
          "2-4 days delivery",
          "3 revisions included",
          "Basic integrations",
        ],
        uk: [
          "До 5 сторінок",
          "Адаптивний дизайн",
          "Форми зв'язку",
          "Просунуте SEO",
          "Доставка 2-4 дні",
          "3 правки включено",
          "Базові інтеграції",
        ],
        de: [
          "Bis zu 5 Seiten",
          "Responsives Design",
          "Kontaktformulare",
          "Erweitertes SEO",
          "2-4 Tage Lieferung",
          "3 Überarbeitungen inklusive",
          "Basis-Integrationen",
        ],
      },
      popular: true,
    },
    {
      name: { en: "Web Application", uk: "Веб-додаток", de: "Webanwendung" },
      price: "$400-800",
      description: {
        en: "Complex applications with custom functionality",
        uk: "Складні додатки з кастомним функціоналом",
        de: "Komplexe Anwendungen mit individueller Funktionalität",
      },
      features: {
        en: [
          "Custom features",
          "Database integration",
          "User authentication",
          "Admin panel",
          "3-7 days delivery",
          "5 revisions included",
          "Advanced integrations",
          "API development",
        ],
        uk: [
          "Кастомні функції",
          "Інтеграція з БД",
          "Аутентифікація",
          "Адмін-панель",
          "Доставка 3-7 днів",
          "5 правок включено",
          "Просунуті інтеграції",
          "Розробка API",
        ],
        de: [
          "Individuelle Funktionen",
          "Datenbankintegration",
          "Benutzerauthentifizierung",
          "Admin-Panel",
          "3-7 Tage Lieferung",
          "5 Überarbeitungen inklusive",
          "Erweiterte Integrationen",
          "API-Entwicklung",
        ],
      },
    },
  ]

  const additionalFeatures = [
    {
      name: { en: "Multilingual Support", uk: "Багатомовність", de: "Mehrsprachige Unterstützung" },
      price: "+$50-100",
    },
    {
      name: { en: "E-commerce Functionality", uk: "Функціонал інтернет-магазину", de: "E-Commerce-Funktionalität" },
      price: "+$200-400",
    },
    {
      name: { en: "Telegram Bot for Requests", uk: "Telegram Bot для прийому заявок", de: "Telegram-Bot für Anfragen" },
      price: "+$50-100",
    },
    {
      name: { en: "Payment Gateway", uk: "Платіжний шлюз", de: "Zahlungsgateway" },
      price: "+$100-200",
    },
    {
      name: { en: "Custom Animations", uk: "Кастомні анімації", de: "Individuelle Animationen" },
      price: "+$50-150",
    },
    {
      name: { en: "Advanced SEO", uk: "Просунуте SEO", de: "Erweitertes SEO" },
      price: "+$100-200",
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
                className={`relative flex flex-col rounded-lg border ${
                  pkg.popular ? "border-primary shadow-lg" : "border-border"
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
                <div className="mb-4 text-4xl font-bold text-primary">{pkg.price}</div>
                <p className="mb-6 text-sm text-muted-foreground">{pkg.description[locale]}</p>

                <ul className="mb-8 flex-1 space-y-3">
                  {pkg.features[locale].map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="w-full" size="lg" variant={pkg.popular ? "default" : "outline"}>
                  <Link href="/contact">
                    {locale === "en" && "Get Started"}
                    {locale === "uk" && "Почати"}
                    {locale === "de" && "Loslegen"}
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
                    <span className="text-primary">{feature.price}</span>
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
