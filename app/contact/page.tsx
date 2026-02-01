import type { Metadata } from "next"
import ContactClient from "@/app/contact/contact-client"

export const metadata: Metadata = {
  title: 'Контакти | Замовити розробку сайту',
  description: 'Зв\'яжіться з Arsen Dev для обговорення вашого проєкту. Ми розробляємо лендінги, інтернет-магазини та веб-додатки. Швидка відповідь та консультація.',
}

export default function ContactPage() {
  return <ContactClient />
}
