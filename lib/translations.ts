import type { Locale } from "./i18n"

export const translations = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About",
      pricing: "Pricing",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Artem Fistonkov",
      title: "Full-Stack Developer",
      description: "I create modern, responsive websites and web applications using the latest technologies.",
      cta: "View Projects",
      contact: "Get in Touch",
    },
    stats: {
      projects: "Projects",
      experience: "Years Experience",
      technologies: "Technologies",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  uk: {
    nav: {
      home: "Головна",
      projects: "Проєкти",
      about: "Про мене",
      pricing: "Ціни",
      contact: "Контакти",
    },
    hero: {
      greeting: "Привіт, я",
      name: "Артем Фістонков",
      title: "Full-Stack Розробник",
      description: "Я створюю сучасні, адаптивні веб-сайти та веб-додатки, використовуючи найновіші технології.",
      cta: "Переглянути проєкти",
      contact: "Зв'язатися",
    },
    stats: {
      projects: "Проєктів",
      experience: "Років досвіду",
      technologies: "Технологій",
    },
    footer: {
      rights: "Всі права захищені.",
    },
  },
  de: {
    nav: {
      home: "Startseite",
      projects: "Projekte",
      about: "Über mich",
      pricing: "Preise",
      contact: "Kontakt",
    },
    hero: {
      greeting: "Hallo, ich bin",
      name: "Artem Fistonkov",
      title: "Full-Stack Entwickler",
      description: "Ich erstelle moderne, responsive Websites und Webanwendungen mit den neuesten Technologien.",
      cta: "Projekte ansehen",
      contact: "Kontakt aufnehmen",
    },
    stats: {
      projects: "Projekte",
      experience: "Jahre Erfahrung",
      technologies: "Technologien",
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
    },
  },
}

export function getTranslation(locale: Locale) {
  return translations[locale] || translations.en
}
