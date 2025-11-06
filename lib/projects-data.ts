export type Project = {
  id: string
  title: {
    en: string
    uk: string
    de: string
  }
  description: {
    en: string
    uk: string
    de: string
  }
  type: {
    en: string
    uk: string
    de: string
  }
  technologies: string[]
  features: {
    en: string[]
    uk: string[]
    de: string[]
  }
  price: string
  duration: {
    en: string
    uk: string
    de: string
  }
  url: string
  image: string
}

export function getProjectScreenshot(project: { url: string; image: string }): string {
  return project.image || "/placeholder.svg"
}

export const projects: Project[] = [
  {
    id: "pizzeria",
    title: {
      en: "Pizzeria",
      uk: "Піцерія",
      de: "Pizzeria",
    },
    description: {
      en: "Restaurant website with menu and online ordering",
      uk: "Сайт ресторану з меню та онлайн-замовленням",
      de: "Restaurant-Website mit Menü und Online-Bestellung",
    },
    type: {
      en: "Landing Page",
      uk: "Лендінг",
      de: "Landing-Page",
    },
    technologies: ["Tilda", "Шаблон"],
    features: {
      en: ["Menu with prices", "Online ordering", "Delivery info", "Contact form"],
      uk: ["Меню з цінами", "Онлайн-замовлення", "Інформація про доставку", "Форма зв'язку"],
      de: ["Menü mit Preisen", "Online-Bestellung", "Lieferinformationen", "Kontaktformular"],
    },
    price: "$100-150",
    duration: {
      en: "1-2 days",
      uk: "1-2 дні",
      de: "1-2 Tage",
    },
    url: "https://pizzeria.tilda.ws/",
    image: "/pizzeria-preview.jpg",
  },
  {
    id: "flower-shop",
    title: {
      en: "Flower Shop",
      uk: "Квіткова крамниця",
      de: "Blumenladen",
    },
    description: {
      en: "E-commerce site for flower shop with catalog and ordering",
      uk: "Інтернет-магазин квітів з каталогом та замовленням",
      de: "E-Commerce-Website für Blumenladen mit Katalog und Bestellung",
    },
    type: {
      en: "E-commerce",
      uk: "Інтернет-магазин",
      de: "E-Commerce",
    },
    technologies: ["Tilda", "Шаблон"],
    features: {
      en: ["Product catalog", "Shopping cart", "Order form", "Delivery information"],
      uk: ["Каталог товарів", "Кошик", "Форма замовлення", "Інформація про доставку"],
      de: ["Produktkatalog", "Warenkorb", "Bestellformular", "Lieferinformationen"],
    },
    price: "$150-250",
    duration: {
      en: "2-3 days",
      uk: "2-3 дні",
      de: "2-3 Tage",
    },
    url: "https://flower-shop.tilda.ws/",
    image: "/flower-shop-preview.jpg",
  },
  {
    id: "yoga-studio",
    title: {
      en: "Yoga Studio",
      uk: "Студія йоги",
      de: "Yoga-Studio",
    },
    description: {
      en: "Landing page for yoga studio with classes, schedule, and booking",
      uk: "Лендінг для студії йоги з заняттями, розкладом та записом",
      de: "Landing-Page für Yoga-Studio mit Kursen, Zeitplan und Buchung",
    },
    type: {
      en: "Landing Page",
      uk: "Лендінг",
      de: "Landing-Page",
    },
    technologies: ["Tilda", "Шаблон"],
    features: {
      en: ["Class schedule", "Instructor profiles", "Booking form", "Pricing"],
      uk: ["Розклад занять", "Профілі інструкторів", "Форма запису", "Ціни"],
      de: ["Kursplan", "Trainerprofile", "Buchungsformular", "Preise"],
    },
    price: "$100-150",
    duration: {
      en: "1-2 days",
      uk: "1-2 дні",
      de: "1-2 Tage",
    },
    url: "https://yoga-studio.tilda.ws/",
    image: "/yoga-studio-preview.jpg",
  },
  {
    id: "immunoflam",
    title: {
      en: "Immunoflam Supplement",
      uk: "БАД Інмунофлам",
      de: "Immunoflam Nahrungsergänzung",
    },
    description: {
      en: "Sales landing page for dietary supplement with product details and order form",
      uk: "Продаючий лендінг для БАДу з описом продукту та формою замовлення",
      de: "Verkaufs-Landing-Page für Nahrungsergänzungsmittel mit Produktdetails und Bestellformular",
    },
    type: {
      en: "Landing Page",
      uk: "Лендінг",
      de: "Landing-Page",
    },
    technologies: ["Tilda", "Шаблон", "Анімації"],
    features: {
      en: ["Product description", "Benefits list", "Order form", "Contact information"],
      uk: ["Опис продукту", "Список переваг", "Форма замовлення", "Контактна інформація"],
      de: ["Produktbeschreibung", "Vorteilsliste", "Bestellformular", "Kontaktinformationen"],
    },
    price: "$100-150",
    duration: {
      en: "1-2 days",
      uk: "1-2 дні",
      de: "1-2 Tage",
    },
    url: "https://immunoflam.tilda.ws/",
    image: "/supplement-preview.jpg",
  },
  {
    id: "conference",
    title: {
      en: "Conference Landing",
      uk: "Лендінг конференції",
      de: "Konferenz-Landing",
    },
    description: {
      en: "Event landing page with schedule, speakers, and registration",
      uk: "Лендінг події з розкладом, спікерами та реєстрацією",
      de: "Event-Landing-Page mit Zeitplan, Rednern und Anmeldung",
    },
    type: {
      en: "Landing Page",
      uk: "Лендінг",
      de: "Landing-Page",
    },
    technologies: ["Tilda", "Шаблон"],
    features: {
      en: ["Event schedule", "Speaker profiles", "Registration form", "Venue information"],
      uk: ["Розклад події", "Профілі спікерів", "Форма реєстрації", "Інформація про місце"],
      de: ["Veranstaltungsplan", "Rednerprofile", "Anmeldeformular", "Veranstaltungsortinformationen"],
    },
    price: "$100-150",
    duration: {
      en: "1-2 days",
      uk: "1-2 дні",
      de: "1-2 Tage",
    },
    url: "https://conference.tilda.ws/",
    image: "/conference-preview.jpg",
  },
  {
    id: "notary",
    title: {
      en: "Notary Services",
      uk: "Нотаріальні послуги",
      de: "Notardienste",
    },
    description: {
      en: "Professional website for notary services with service list and contacts",
      uk: "Професійний сайт нотаріальних послуг з переліком послуг та контактами",
      de: "Professionelle Website für Notardienste mit Dienstleistungsliste und Kontakten",
    },
    type: {
      en: "Landing Page",
      uk: "Лендінг",
      de: "Landing-Page",
    },
    technologies: ["Tilda", "Шаблон"],
    features: {
      en: ["Services list", "Pricing", "Contact form", "Working hours"],
      uk: ["Список послуг", "Ціни", "Форма зв'язку", "Години роботи"],
      de: ["Dienstleistungsliste", "Preise", "Kontaktformular", "Öffnungszeiten"],
    },
    price: "$100-150",
    duration: {
      en: "1-2 days",
      uk: "1-2 дні",
      de: "1-2 Tage",
    },
    url: "https://notary.tilda.ws/",
    image: "/notary-preview.jpg",
  },
  {
    id: "coffee-shop",
    title: {
      en: "Coffee Shop",
      uk: "Кав'ярня",
      de: "Café",
    },
    description: {
      en: "Cozy coffee shop website with menu and atmosphere",
      uk: "Затишний сайт кав'ярні з меню та атмосферою",
      de: "Gemütliche Café-Website mit Menü und Atmosphäre",
    },
    type: {
      en: "Landing Page",
      uk: "Лендінг",
      de: "Landing-Page",
    },
    technologies: ["Tilda", "Шаблон"],
    features: {
      en: ["Menu", "Gallery", "Location", "Contact form"],
      uk: ["Меню", "Галерея", "Локація", "Форма зв'язку"],
      de: ["Menü", "Galerie", "Standort", "Kontaktformular"],
    },
    price: "$100-150",
    duration: {
      en: "1-2 days",
      uk: "1-2 дні",
      de: "1-2 Tage",
    },
    url: "https://coffee-shop.tilda.ws/",
    image: "/coffee-shop-preview.jpg",
  },
  {
    id: "driving-school",
    title: {
      en: "Driving School",
      uk: "Автошкола",
      de: "Fahrschule",
    },
    description: {
      en: "Driving school website with courses and enrollment",
      uk: "Сайт автошколи з курсами та записом",
      de: "Fahrschul-Website mit Kursen und Anmeldung",
    },
    type: {
      en: "Landing Page",
      uk: "Лендінг",
      de: "Landing-Page",
    },
    technologies: ["Tilda", "Шаблон"],
    features: {
      en: ["Course list", "Pricing", "Enrollment form", "Instructor info"],
      uk: ["Список курсів", "Ціни", "Форма запису", "Інформація про інструкторів"],
      de: ["Kursliste", "Preise", "Anmeldeformular", "Trainerinformationen"],
    },
    price: "$100-150",
    duration: {
      en: "2-5 days",
      uk: "2-5 дні",
      de: "2-5 Tage",
    },
    url: "https://driving-school.tilda.ws/",
    image: "/driving-school-preview.jpg",
  },
  {
    id: "car-security",
    title: {
      en: "Car Security Systems",
      uk: "Автосигналізації",
      de: "Auto-Sicherheitssysteme",
    },
    description: {
      en: "Car security installation service website",
      uk: "Сайт послуг установки автосигналізацій",
      de: "Website für Auto-Sicherheitsinstallationsdienste",
    },
    type: {
      en: "Landing Page",
      uk: "Лендінг",
      de: "Landing-Page",
    },
    technologies: ["Tilda", "Шаблон"],
    features: {
      en: ["Services", "Products", "Pricing", "Contact form"],
      uk: ["Послуги", "Продукти", "Ціни", "Форма зв'язку"],
      de: ["Dienstleistungen", "Produkte", "Preise", "Kontaktformular"],
    },
    price: "$100-150",
    duration: {
      en: "1-2 days",
      uk: "1-2 дні",
      de: "1-2 Tage",
    },
    url: "https://car-security.tilda.ws/",
    image: "/car-security-preview.jpg",
  },
  {
    id: "crunch-site",
    title: {
      en: "Website of the church Light of Hope",
      uk: "Сайт церкви Світло надії",
      de: "Webseite der Kirche Licht der Hoffnung",
    },
    description: {
      en: "Church website: Next.js, 3 languages, adaptive, gallery, form.",
      uk: "Церковний сайт: Next.js, 3 мови, адаптив, галерея, форма.",
      de: "Kirchenwebsite: Next.js, 3 Sprachen, responsiv, Galerie, Formular.",
    },
    type: {
      en: "Web Application",
      uk: "Веб-додаток",
      de: "Webanwendung",
    },
    technologies: ["Next.js 14", "Tailwind", "i18next", "Swiper", "Google Maps", "React Hook Form + Zod", "Framer Motion", "Telegram API + форма заявок."],
    features: {
      en: ["3 languages", "responsive design", "gallery slider", "Google Maps", "contact form", "Telegram bot", "service calendar", "animations"],
      uk: ["3 мови", "адаптив для різних пристроїв", "галерея-слайдер", "Google Карти", "форма заявок", "Telegram-бот", "календар служб", "анімації"],
      de: ["3 Sprachen", "responsives Design", "Galerie-Slider", "Google Maps", "Kontaktformular", "Telegram-Bot", "Dienstkalender", "Animationen"],
    },
    price: "120 $",
    duration: {
      en: "1-2 days",
      uk: "1-2 дні",
      de: "1-2 Tage",
    },
    url: "https://crunch-site.vercel.app",
    image: "/crunch.jpg",
  },
  {
    id: "tire-service",
    title: {
      en: "Tire Service Optium Shina",
      uk: "Шиномонтаж Optium Shina",
      de: "Reifenservice Optium Shina",
    },
    description: {
      en: "Tire service website with services, pricing, and contact form",
      uk: "Сайт шиномонтажу з послугами, цінами та формою зв'язку",
      de: "Reifenservice-Website mit Dienstleistungen, Preisen und Kontaktformular",
    },
    type: {
      en: "Landing Page",
      uk: "Лендінг",
      de: "Landing-Page",
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    features: {
      en: ["Services list", "Pricing table", "Contact form", "Location map"],
      uk: ["Список послуг", "Таблиця цін", "Форма зв'язку", "Карта розташування"],
      de: ["Dienstleistungsliste", "Preistabelle", "Kontaktformular", "Standortkarte"],
    },
    price: "$100-150",
    duration: {
      en: "1-2 days",
      uk: "1-2 дні",
      de: "1-2 Tage",
    },
    url: "https://optium-shina.infinityfreeapp.com/?i=2",
    image: "/tire-service-preview.jpg",
  },
]
