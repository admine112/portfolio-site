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
      en: ["Hero section", "Services with prices", "Photo gallery", "Team section", "Booking form", "Contact information"],
      uk: ["Hero секція", "Послуги з цінами", "Фотогалерея", "Команда", "Форма запису", "Контактна інформація"],
      de: ["Hero-Bereich", "Dienstleistungen mit Preisen", "Fotogalerie", "Team-Bereich", "Buchungsformular", "Kontaktinformationen"],
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
    id: "flower-shop",
    title: {
      en: "Flower Shop 'Eden Garden'",
      uk: "Квітковий магазин 'Едемський Сад'",
      de: "Blumenladen 'Eden Garden'",
    },
    description: {
      en: "E-commerce flower shop with catalog, cart, and order system",
      uk: "Інтернет-магазин квітів з каталогом, кошиком та системою замовлень",
      de: "E-Commerce-Blumenladen mit Katalog, Warenkorb und Bestellsystem",
    },
    type: {
      en: "E-commerce",
      uk: "Інтернет-магазин",
      de: "E-Commerce",
    },
    technologies: ["React", "TypeScript", "TailwindCSS", "Formspree", "Context API"],
    features: {
      en: ["Product catalog with filters", "Shopping cart", "Order forms", "Responsive design", "Animations", "SEO optimization"],
      uk: ["Каталог товарів з фільтрами", "Кошик", "Форми замовлення", "Адаптивний дизайн", "Анімації", "SEO-оптимізація"],
      de: ["Produktkatalog mit Filtern", "Warenkorb", "Bestellformulare", "Responsives Design", "Animationen", "SEO-Optimierung"],
    },
    price: "$200-300",
    duration: {
      en: "2 weeks",
      uk: "2 тижні",
      de: "2 Wochen",
    },
    url: "https://site-chi-ten-77.vercel.app/",
    image: "/flower-shop-preview.jpg",
  },
  {
    id: "yoga-studio",
    title: {
      en: "Yoga Studio 'Aruna Flow'",
      uk: "Студія йоги 'Aruna Flow'",
      de: "Yoga-Studio 'Aruna Flow'",
    },
    description: {
      en: "Multi-page yoga studio website with booking system and Telegram integration",
      uk: "Багатосторінковий сайт студії йоги з системою бронювання та інтеграцією Telegram",
      de: "Mehrseitige Yoga-Studio-Website mit Buchungssystem und Telegram-Integration",
    },
    type: {
      en: "Web Application",
      uk: "Веб-додаток",
      de: "Webanwendung",
    },
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS", "Express", "Telegram Bot"],
    features: {
      en: ["Bilingual (UA/EN)", "Class schedule", "Instructor selection", "Booking system", "Telegram notifications", "Responsive design"],
      uk: ["Двомовність (UA/EN)", "Розклад занять", "Вибір інструктора", "Система бронювання", "Telegram-сповіщення", "Адаптивний дизайн"],
      de: ["Zweisprachig (UA/EN)", "Kursplan", "Trainerauswahl", "Buchungssystem", "Telegram-Benachrichtigungen", "Responsives Design"],
    },
    price: "$250-400",
    duration: {
      en: "1-2 weeks",
      uk: "1-2 тижні",
      de: "1-2 Wochen",
    },
    url: "https://aruna-flow.vercel.app/",
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
    url: "http://t.remeta.tilda.ws/page55984111.html",
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
    url: "http://t.remeta.tilda.ws/page-archivarius",
    image: "/notary-preview.jpg",
  },
  {
    id: "coffee-shop",
    title: {
      en: "Coffee Shop Franchise",
      uk: "Франшиза кав'ярні",
      de: "Café-Franchise",
    },
    description: {
      en: "Coffee shop franchise website with menu and business opportunities",
      uk: "Сайт франшизи кав'ярні з меню та бізнес-можливостями",
      de: "Café-Franchise-Website mit Menü und Geschäftsmöglichkeiten",
    },
    type: {
      en: "Landing Page",
      uk: "Лендінг",
      de: "Landing-Page",
    },
    technologies: ["Tilda", "Шаблон"],
    features: {
      en: ["Menu", "Franchise info", "Business model", "Contact form"],
      uk: ["Меню", "Інформація про франшизу", "Бізнес-модель", "Форма зв'язку"],
      de: ["Menü", "Franchise-Informationen", "Geschäftsmodell", "Kontaktformular"],
    },
    price: "$100-150",
    duration: {
      en: "1-2 days",
      uk: "1-2 дні",
      de: "1-2 Tage",
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
    url: "http://t.remeta.tilda.ws/na-colesah",
    image: "/driving-school-preview.jpg",
  },
  {
    id: "car-security",
    title: {
      en: "Car Security Installation Service",
      uk: "Сервіс по установці сигналізацій",
      de: "Auto-Sicherheitsinstallationsdienst",
    },
    description: {
      en: "Professional car security system installation service",
      uk: "Професійний сервіс установки автомобільних сигналізацій",
      de: "Professioneller Auto-Sicherheitssystem-Installationsdienst",
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
    url: "https://t.remeta.tilda.ws/page85554336.html",
    image: "/car-security-preview.jpg",
  },
  {
    id: "crunch-site",
    title: {
      en: "Church Website 'Light of Hope'",
      uk: "Сайт церкви 'Світло надії'",
      de: "Kirchenwebsite 'Licht der Hoffnung'",
    },
    description: {
      en: "Modern church website with 3 languages, gallery, service calendar, and Telegram integration",
      uk: "Сучасний церковний сайт з 3 мовами, галереєю, календарем служб та інтеграцією Telegram",
      de: "Moderne Kirchenwebsite mit 3 Sprachen, Galerie, Dienstkalender und Telegram-Integration",
    },
    type: {
      en: "Web Application",
      uk: "Веб-додаток",
      de: "Webanwendung",
    },
    technologies: ["Next.js 14", "TailwindCSS", "i18next", "Swiper", "Google Maps", "React Hook Form", "Zod", "Framer Motion", "Telegram API", "ShadCN"],
    features: {
      en: ["3 languages (UA/EN/NL)", "4K responsive design", "Swiper gallery", "Google Maps", "Contact form with validation", "Telegram bot", "Service calendar", "Framer Motion animations", "SEO optimized"],
      uk: ["3 мови (УКР/АНГ/НІД)", "Адаптив до 4K", "Swiper-галерея", "Google Карти", "Форма з валідацією", "Telegram-бот", "Календар служб", "Анімації Framer Motion", "SEO-оптимізація"],
      de: ["3 Sprachen (UA/EN/NL)", "4K responsives Design", "Swiper-Galerie", "Google Maps", "Kontaktformular mit Validierung", "Telegram-Bot", "Dienstkalender", "Framer Motion Animationen", "SEO-optimiert"],
    },
    price: "$250-450",
    duration: {
      en: "1-2 weeks",
      uk: "1-2 тижні",
      de: "1-2 Wochen",
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
      en: "AI-generated tire service website with services, pricing, and contact form",
      uk: "Сайт шиномонтажу (повністю код ІІ) з послугами, цінами та формою зв'язку",
      de: "KI-generierte Reifenservice-Website mit Dienstleistungen, Preisen und Kontaktformular",
    },
    type: {
      en: "Landing Page",
      uk: "Лендінг",
      de: "Landing-Page",
    },
    technologies: ["HTML", "CSS", "JavaScript", "AI-generated"],
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
  {
    id: "pizzeria",
    title: {
      en: "Pizzeria 'Slice of Heaven'",
      uk: "Піцерія 'Slice of Heaven'",
      de: "Pizzeria 'Slice of Heaven'",
    },
    description: {
      en: "Online pizza ordering website with pizza constructor and delivery",
      uk: "Сайт онлайн-замовлення піци з конструктором піци та доставкою",
      de: "Online-Pizza-Bestellwebsite mit Pizza-Konfigurator und Lieferung",
    },
    type: {
      en: "E-commerce",
      uk: "Інтернет-магазин",
      de: "E-Commerce",
    },
    technologies: ["React", "TypeScript", "TailwindCSS", "Admin Panel"],
    features: {
      en: ["Pizza constructor", "Price calculator", "Order system", "Bilingual (EN/UA)", "Feedback form", "Admin panel"],
      uk: ["Конструктор піци", "Калькулятор вартості", "Система замовлень", "Двомовність (АНГ/УКР)", "Форма зворотного зв'язку", "Адмін панель"],
      de: ["Pizza-Konfigurator", "Preisrechner", "Bestellsystem", "Zweisprachig (EN/UA)", "Feedback-Formular", "Admin-Panel"],
    },
    price: "$300-500",
    duration: {
      en: "2-3 weeks",
      uk: "2-3 тижні",
      de: "2-3 Wochen",
    },
    url: "https://slice-of-heaven-iota.vercel.app/",
    image: "/pizzeria-preview.jpg",
  },
]
