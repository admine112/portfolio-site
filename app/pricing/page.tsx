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
      name: { en: "Landing (Start)", uk: "Лендінг (Start)", de: "Landing (Start)" },
      price: "$30-50",
      priceUah: "≈ 1 200 – 2 000 грн",
      description: {
        en: "Perfect for tutors, craftsmen, startups and personal projects",
        uk: "Ідеально для репетиторів, майстрів, стартапів та особистих проєктів",
        de: "Perfekt für Tutoren, Handwerker, Startups und persönliche Projekte",
      },
      features: {
        en: [
          "One page",
          "Responsive design (mobile/tablets)",
          "Request form (directly to Telegram or email)",
          "Upload to free hosting (Netlify, Vercel)",
          "2 revisions included",
          "Deadline: 2-3 days",
        ],
        uk: [
          "Одна сторінка",
          "Адаптивний дизайн (мобільні/планшети)",
          "Форма заявки (напрямую в Telegram або на email)",
          "Завантаження сайту на хостинг (безкоштовний: Netlify, Vercel)",
          "2 правки включено",
          "Термін: 2–3 дні",
        ],
        de: [
          "Eine Seite",
          "Responsives Design (Mobil/Tablets)",
          "Anfrageformular (direkt an Telegram oder E-Mail)",
          "Upload auf kostenloses Hosting (Netlify, Vercel)",
          "2 Überarbeitungen inklusive",
          "Frist: 2-3 Tage",
        ],
      },
      note: {
        en: "Perfect for quickly launching an online presence without extra costs.",
        uk: "Підходить, щоб швидко запустити онлайн-присутність без зайвих витрат.",
        de: "Ideal, um schnell eine Online-Präsenz ohne zusätzliche Kosten zu starten.",
      },
    },
    {
      name: { en: "Business Card Site (Popular)", uk: "Сайт-візитка (Popular)", de: "Visitenkarten-Website (Popular)" },
      price: "$50-80",
      priceUah: "≈ 2 000 – 3 200 грн",
      description: {
        en: "For small businesses that want to look professional",
        uk: "Для малого бізнесу, який хоче виглядати професійно",
        de: "Für kleine Unternehmen, die professionell aussehen möchten",
      },
      features: {
        en: [
          "Up to 4 pages (Home, About, Services, Contacts)",
          "Unified style and navigation",
          "2 contact forms (e.g., 'Order a call' + 'Write to Telegram')",
          "3 revisions included",
          "Deadline: 3-5 days",
        ],
        uk: [
          "До 4 сторінок (Головна, Про мене, Послуги, Контакти)",
          "Єдиний стиль та навігація",
          "2 форми зв'язку (напр., «Замовити дзвінок» + «Написати в Telegram»)",
          "3 правки включено",
          "Термін: 3–5 днів",
        ],
        de: [
          "Bis zu 4 Seiten (Startseite, Über uns, Dienstleistungen, Kontakte)",
          "Einheitlicher Stil und Navigation",
          "2 Kontaktformulare (z.B. 'Rückruf bestellen' + 'An Telegram schreiben')",
          "3 Überarbeitungen inklusive",
          "Frist: 3-5 Tage",
        ],
      },
      note: {
        en: "Perfect for coffee shops, tutors, craftsmen, handmade shops.",
        uk: "Ідеально для кав'ярень, репетиторів, майстрів, магазинів handmade.",
        de: "Ideal für Cafés, Tutoren, Handwerker, Handmade-Shops.",
      },
      popular: true,
    },
    {
      name: { en: "Extended Site (Pro)", uk: "Розширений сайт (Pro)", de: "Erweiterte Website (Pro)" },
      price: "$80-120",
      priceUah: "≈ 3 200 – 4 800 грн",
      description: {
        en: "When you need more features, but without complex backend",
        uk: "Коли потрібно більше функцій, але без складного бекенду",
        de: "Wenn Sie mehr Funktionen benötigen, aber ohne komplexes Backend",
      },
      features: {
        en: [
          "Up to 6 pages",
          "Custom functionality: price calculator, schedule, work gallery",
          "Telegram Bot integration (client receives requests in Telegram)",
          "5 revisions included",
          "Deadline: 5-7 days",
        ],
        uk: [
          "До 6 сторінок",
          "Кастомний функціонал: калькулятор цін, розклад, галерея робіт",
          "Інтеграція з Telegram Bot (клієнт отримує заявки у Telegram)",
          "5 правок включено",
          "Термін: 5–7 днів",
        ],
        de: [
          "Bis zu 6 Seiten",
          "Benutzerdefinierte Funktionen: Preisrechner, Zeitplan, Arbeitsgalerie",
          "Telegram Bot Integration (Kunde erhält Anfragen in Telegram)",
          "5 Überarbeitungen inklusive",
          "Frist: 5-7 Tage",
        ],
      },
      note: {
        en: "For serious tutors, dance studios, mini-courses, photo studios.",
        uk: "Для серйозних репетиторів, танцювальних студій, міні-курсів, фотостудій.",
        de: "Für ernsthafte Tutoren, Tanzstudios, Mini-Kurse, Fotostudios.",
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
