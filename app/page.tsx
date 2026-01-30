import type { Metadata } from "next"
import HomeClient from "./home-client"

export const metadata: Metadata = {
  title: 'Arsen Dev — Розробка сайтів під ключ | Сайти від 500 грн',
  description: 'Професійна розробка сучасних сайтів: лендінги, інтернет-магазини, кастомні веб-додатки. Сучасний технологічний стек, швидкі терміни та прозорі ціни.',
  alternates: {
    canonical: 'https://portfolio-site-blush-ten.vercel.app',
  },
}

export default function HomePage() {
  return <HomeClient />
}
