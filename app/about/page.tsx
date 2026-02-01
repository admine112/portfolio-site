import type { Metadata } from "next"
import AboutClient from "@/app/about/about-client"

export const metadata: Metadata = {
  title: 'Про мене | Студія розробки Arsen Dev',
  description: 'Дізнайтеся більше про Arsen Dev. Ми спеціалізуємося на розробці сучасних сайтів, використовуючи React, Next.js та TypeScript. Наш досвід та технологічний стек.',
}

export default function AboutPage() {
  return <AboutClient />
}
