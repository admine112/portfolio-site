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

// Функция для получения скриншота сайта
// ВАЖНО: Большинство бесплатных API требуют регистрацию или имеют жесткие лимиты
// Поэтому используем iframe для живого превью на детальной странице
// А для карточек - статичные изображения из project.image
export function getProjectScreenshot(project: { url: string; image: string }): string {
  // Просто возвращаем статичное изображение
  // Оно уже есть в /public и не требует внешних API
  return project.image || "/placeholder.svg"
}

export const projects: Project[] = [
  {
    id: "barbershop",
    title: {
      en: "Barbershop",
      uk: "Барбершоп",
      de: "Friseursalon",
    },
    description: {
      en: "One-page landing for a barbershop with services, gallery, and booking form",
      uk: "Одностороінковий лендінг для барбершопу з послугами, галереєю та формою запису",
      de: "Einseitige Landing-Page für einen Friseursalon mit Dienstleistungen, Galerie und Buchungsformular",
    },
    type: {
      en: "Landing Page",
      uk: "Лендінг",
      de: "Landing-Page",
    },
    technologies: ["Tilda", "Шаблон"],
    features: {
      en: [
        "Hero section",
        "Services with prices",
        "Photo gallery",
        "Team section",
        "Booking form",
        "Contact information",
      ],
      uk: ["Hero секція", "Послуги з цінами", "Фотогалерея", "Команда", "Форма запису", "Контактна інформація"],
      de: [
        "Hero-Bereich",
        "Dienstleistungen mit Preisen",
        "Fotogalerie",
        "Team-Bereich",
        "Buchungsformular",
        "Kontaktinformationen",
      ],
    },
    price: "$100-150",
    duration: {
      en: "1-2 days",
      uk: "1-2 дні",
      de: "1-2 Tage",
    },
    url: "http://t.remeta.tilda.ws/",
    image: "/barbershop-preview.jpg",
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
      en: "Sales Landing",
      uk: "Продаючий лендінг",
      de: "Verkaufs-Landing",
    },
    technologies: ["Tilda", "Шаблон"],
    features: {
      en: [
        "Hero with CTA",
        "Product description",
        "Benefits section",
        "Customer reviews",
        "Order form",
        "Medical indications",
      ],
      uk: ["Hero з CTA", "Опис продукту", "Переваги", "Відгуки клієнтів", "Форма замовлення", "Медичні показання"],
      de: [
        "Hero mit CTA",
        "Produktbeschreibung",
        "Vorteile-Bereich",
        "Kundenbewertungen",
        "Bestellformular",
        "Medizinische Indikationen",
      ],
    },
    price: "$120-180",
    duration: {
      en: "2-3 days",
      uk: "2-3 дні",
      de: "2-3 Tage",
    },
    url: "http://t.remeta.tilda.ws/inmunoflamhtml",
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
      en: "Event landing page with schedule, speakers, and ticket sales",
      uk: "Лендінг події з розкладом, спікерами та продажем квитків",
      de: "Event-Landing-Page mit Zeitplan, Rednern und Ticketverkauf",
    },
    type: {
      en: "Event Landing",
      uk: "Подієвий лендінг",
      de: "Event-Landing",
    },
    technologies: ["Tilda", "Шаблон"],
    features: {
      en: [
        "Hero with date/location",
        "Event description",
        "Speakers section",
        "Daily schedule",
        "Pricing tiers",
        "Partners section",
        "Location map",
      ],
      uk: [
        "Hero з датою/місцем",
        "Опис події",
        "Спікери",
        "Розклад по днях",
        "Ціни на квитки",
        "Партнери",
        "Карта локації",
      ],
      de: [
        "Hero mit Datum/Ort",
        "Veranstaltungsbeschreibung",
        "Redner-Bereich",
        "Tagesplan",
        "Preisstufen",
        "Partner-Bereich",
        "Standortkarte",
      ],
    },
    price: "$150-200",
    duration: {
      en: "3-4 days",
      uk: "3-4 дні",
      de: "3-4 Tage",
    },
    url: "http://t.remeta.tilda.ws/page55984111.html",
    image: "/conference-preview.jpg",
  },
  {
    id: "flower-shop",
    title: {
      en: "Eden Garden Flower Shop",
      uk: "Квітковий магазин Едемський Сад",
      de: "Eden Garten Blumenladen",
    },
    description: {
      en: "E-commerce website with product catalog, filters, shopping cart, and checkout",
      uk: "Інтернет-магазин з каталогом товарів, фільтрами, кошиком та оформленням замовлення",
      de: "E-Commerce-Website mit Produktkatalog, Filtern, Warenkorb und Checkout",
    },
    type: {
      en: "E-commerce",
      uk: "Інтернет-магазин",
      de: "E-Commerce",
    },
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Formspree"],
    features: {
      en: [
        "Product catalog",
        "Category filters",
        "Shopping cart",
        "Checkout form",
        "Responsive design",
        "Product search",
      ],
      uk: [
        "Каталог товарів",
        "Фільтри за категоріями",
        "Кошик",
        "Форма замовлення",
        "Адаптивний дизайн",
        "Пошук товарів",
      ],
      de: ["Produktkatalog", "Kategoriefilter", "Warenkorb", "Checkout-Formular", "Responsives Design", "Produktsuche"],
    },
    price: "$400-600",
    duration: {
      en: "1.5 days",
      uk: "1.5 дня",
      de: "1,5 Tage",
    },
    url: "https://site-chi-ten-77.vercel.app/",
    image: "/flower-shop-preview.jpg",
  },
  {
    id: "yoga-studio",
    title: {
      en: "Aruna Flow Yoga Studio",
      uk: "Студія йоги Aruna Flow",
      de: "Aruna Flow Yoga-Studio",
    },
    description: {
      en: "Multi-page website for yoga studio with schedule, booking system, and bilingual support",
      uk: "Багатосторінковий сайт для студії йоги з розкладом, системою бронювання та двомовністю",
      de: "Mehrseitige Website für Yoga-Studio mit Zeitplan, Buchungssystem und zweisprachiger Unterstützung",
    },
    type: {
      en: "Web Application",
      uk: "Веб-додаток",
      de: "Webanwendung",
    },
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Telegram API", "LocalStorage"],
    features: {
      en: [
        "Bilingual (UA/EN)",
        "Class schedule",
        "Booking system",
        "Form validation",
        "Telegram integration",
        "Responsive design",
      ],
      uk: [
        "Двомовність (UA/EN)",
        "Розклад занять",
        "Система бронювання",
        "Валідація форм",
        "Інтеграція з Telegram",
        "Адаптивний дизайн",
      ],
      de: [
        "Zweisprachig (UA/EN)",
        "Kursplan",
        "Buchungssystem",
        "Formularvalidierung",
        "Telegram-Integration",
        "Responsives Design",
      ],
    },
    price: "$300-500",
    duration: {
      en: "2-3 days",
      uk: "2-3 дні",
      de: "2-3 Tage",
    },
    url: "https://aruna-flow.vercel.app/",
    image: "/yoga-studio-preview.jpg",
  },
  {
    id: "pizzeria",
    title: {
      en: "Slice of Heaven Pizzeria",
      uk: "Піцерія Slice of Heaven",
      de: "Slice of Heaven Pizzeria",
    },
    description: {
      en: "Pizzeria website with pizza builder, price calculator, and admin panel",
      uk: "Сайт піцерії з конструктором піци, калькулятором ціни та адмін-панеллю",
      de: "Pizzeria-Website mit Pizza-Builder, Preisrechner und Admin-Panel",
    },
    type: {
      en: "Web Application",
      uk: "Веб-додаток",
      de: "Webanwendung",
    },
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    features: {
      en: [
        "Bilingual support",
        "Pizza builder",
        "Dynamic price calculator",
        "Order form",
        "Admin panel",
        "Responsive design",
      ],
      uk: [
        "Двомовність",
        "Конструктор піци",
        "Динамічний калькулятор ціни",
        "Форма замовлення",
        "Адмін-панель",
        "Адаптивний дизайн",
      ],
      de: [
        "Zweisprachige Unterstützung",
        "Pizza-Builder",
        "Dynamischer Preisrechner",
        "Bestellformular",
        "Admin-Panel",
        "Responsives Design",
      ],
    },
    price: "$400-600",
    duration: {
      en: "3-4 days",
      uk: "3-4 дні",
      de: "3-4 Tage",
    },
    url: "https://slice-of-heaven-rose.vercel.app/",
    image: "/pizzeria-preview.jpg",
  },
  {
    id: "notary",
    title: {
      en: "Notary Services",
      uk: "Нотаріальні послуги",
      de: "Notardienste",
    },
    description: {
      en: "Professional landing page for notary services with service list and contact form",
      uk: "Професійний лендінг для нотаріальних послуг зі списком послуг та формою зв'язку",
      de: "Professionelle Landing-Page für Notardienste mit Dienstleistungsliste und Kontaktformular",
    },
    type: {
      en: "Landing Page",
      uk: "Лендінг",
      de: "Landing-Page",
    },
    technologies: ["Tilda", "Шаблон"],
    features: {
      en: ["Hero section", "Services list", "About section", "Contact form", "Location map", "Working hours"],
      uk: ["Hero секція", "Список послуг", "Про нас", "Форма зв'язку", "Карта локації", "Години роботи"],
      de: ["Hero-Bereich", "Dienstleistungsliste", "Über uns", "Kontaktformular", "Standortkarte", "Öffnungszeiten"],
    },
    price: "$100-150",
    duration: {
      en: "1-2 days",
      uk: "1-2 дні",
      de: "1-2 Tage",
    },
    url: "http://t.remeta.tilda.ws/page-archivarius",
    image: "/notary-preview.jpg",
  },
  {
    id: "coffee-franchise",
    title: {
      en: "Coffee Shop Franchise",
      uk: "Франшиза кав'ярні",
      de: "Café-Franchise",
    },
    description: {
      en: "Franchise landing page with business model, benefits, and application form",
      uk: "Лендінг франшизи з бізнес-моделлю, перевагами та формою заявки",
      de: "Franchise-Landing-Page mit Geschäftsmodell, Vorteilen und Bewerbungsformular",
    },
    type: {
      en: "Landing Page",
      uk: "Лендінг",
      de: "Landing-Page",
    },
    technologies: ["Tilda", "Шаблон"],
    features: {
      en: ["Hero section", "Business model", "Benefits", "Investment details", "Success stories", "Application form"],
      uk: ["Hero секція", "Бізнес-модель", "Переваги", "Деталі інвестицій", "Історії успіху", "Форма заявки"],
      de: [
        "Hero-Bereich",
        "Geschäftsmodell",
        "Vorteile",
        "Investitionsdetails",
        "Erfolgsgeschichten",
        "Bewerbungsformular",
      ],
    },
    price: "$120-180",
    duration: {
      en: "2-3 days",
      uk: "2-3 дні",
      de: "2-3 Tage",
    },
    url: "https://t.remeta.tilda.ws/page85512516.html",
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
      en: "Landing page for driving school with courses, pricing, and enrollment form",
      uk: "Лендінг для автошколи з курсами, цінами та формою запису",
      de: "Landing-Page für Fahrschule mit Kursen, Preisen und Anmeldeformular",
    },
    type: {
      en: "Landing Page",
      uk: "Лендінг",
      de: "Landing-Page",
    },
    technologies: ["Tilda", "Шаблон"],
    features: {
      en: ["Hero section", "Course types", "Pricing", "Instructors", "Enrollment form", "Contact information"],
      uk: ["Hero секція", "Типи курсів", "Ціни", "Інструктори", "Форма запису", "Контактна інформація"],
      de: ["Hero-Bereich", "Kurstypen", "Preise", "Fahrlehrer", "Anmeldeformular", "Kontaktinformationen"],
    },
    price: "$100-150",
    duration: {
      en: "1-2 days",
      uk: "1-2 дні",
      de: "1-2 Tage",
    },
    url: "http://t.remeta.tilda.ws/na-colesah",
    image: "/driving-school-preview.jpg",
  },
  {
    id: "car-alarm",
    title: {
      en: "Car Alarm Installation",
      uk: "Установка сигналізацій",
      de: "Autoalarm-Installation",
    },
    description: {
      en: "Service landing page for car alarm installation with services and booking",
      uk: "Сервісний лендінг для установки автосигналізацій з послугами та записом",
      de: "Service-Landing-Page für Autoalarm-Installation mit Dienstleistungen und Buchung",
    },
    type: {
      en: "Landing Page",
      uk: "Лендінг",
      de: "Landing-Page",
    },
    technologies: ["Tilda", "Шаблон"],
    features: {
      en: ["Hero section", "Services list", "Pricing", "Benefits", "Booking form", "Contact information"],
      uk: ["Hero секція", "Список послуг", "Ціни", "Переваги", "Форма запису", "Контактна інформація"],
      de: ["Hero-Bereich", "Dienstleistungsliste", "Preise", "Vorteile", "Buchungsformular", "Kontaktinformationen"],
    },
    price: "$100-150",
    duration: {
      en: "1-2 days",
      uk: "1-2 дні",
      de: "1-2 Tage",
    },
    url: "https://t.remeta.tilda.ws/page85554336.html",
    image: "/car-security-preview.jpg",
  },
  {
    id: "tire-service",
    title: {
      en: "Tire Service",
      uk: "Шиномонтаж",
      de: "Reifenservice",
    },
    description: {
      en: "Modern tire service website with services, pricing, and online booking",
      uk: "Сучасний сайт шиномонтажу з послугами, цінами та онлайн-записом",
      de: "Moderne Reifenservice-Website mit Dienstleistungen, Preisen und Online-Buchung",
    },
    type: {
      en: "Landing Page",
      uk: "Лендінг",
      de: "Landing-Page",
    },
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    features: {
      en: ["Hero section", "Services list", "Pricing calculator", "Online booking", "Contact form", "Location map"],
      uk: ["Hero секція", "Список послуг", "Калькулятор цін", "Онлайн-запис", "Форма зв'язку", "Карта локації"],
      de: [
        "Hero-Bereich",
        "Dienstleistungsliste",
        "Preisrechner",
        "Online-Buchung",
        "Kontaktformular",
        "Standortkarte",
      ],
    },
    price: "$120-180",
    duration: {
      en: "2-3 days",
      uk: "2-3 дні",
      de: "2-3 Tage",
    },
    url: "https://modern-website-xmtj.bolt.host/",
    image: "/tire-service-preview.jpg",
  },
]
