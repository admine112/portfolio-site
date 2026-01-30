import type { Metadata } from "next"
import PricingClient from "./pricing-client"

export const metadata: Metadata = {
  title: 'Ціни на розробку сайтів',
  description: 'Тарифи на розробку сайтів від Arsen Dev. Лендінг від 500 грн, сайт-візитка від 1200 грн. Прозоре ціноутворення та швидкі терміни.',
  openGraph: {
    title: 'Ціни на розробку сайтів | Arsen Dev',
    description: 'Дізнайтеся вартість розробки вашого майбутнього сайту. Тарифи від 500 грн.',
  }
}

export default function PricingPage() {
  return <PricingClient />
}
