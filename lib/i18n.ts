export type Locale = "en" | "uk" | "de"

export const locales: Locale[] = ["en", "uk", "de"]

export const defaultLocale: Locale = "en"

export const localeNames: Record<Locale, string> = {
  en: "English",
  uk: "Українська",
  de: "Deutsch",
}
