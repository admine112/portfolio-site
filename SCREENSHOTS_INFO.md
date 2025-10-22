# 📸 Превью проектов

## ✅ Решение!

Используется **комбинированный подход**:
1. **Статичные изображения** для карточек проектов
2. **Живой iframe** для детального просмотра

---

## 🎯 Как это работает

### 1. Карточки проектов (`/projects`)

**Используются статичные изображения:**
- Изображения хранятся в `/public`
- Быстрая загрузка
- Надежно и без ограничений
- Вы контролируете качество

### 2. Детальная страница (`/projects/[id]`)

**Кнопка "Открыть сайт":**
- Большая кнопка для открытия реального сайта
- Открывается в новой вкладке
- Красивый дизайн с градиентом
- Показывает URL сайта

**Примечание:** Многие сайты (особенно на Tilda) блокируют отображение в iframe из-за настроек безопасности (X-Frame-Options). Поэтому используется кнопка для открытия в новой вкладке.

---

## 🔧 Используемый сервис

**Thum.io** - бесплатный сервис для скриншотов

- ✅ Без регистрации
- ✅ Без API ключа
- ✅ Автоматическое обновление
- ✅ Разные размеры изображений

**URL формат:**
```
https://image.thum.io/get/width/[WIDTH]/crop/[HEIGHT]/[YOUR_SITE_URL]
```

---

## 📋 Примеры

### Карточка проекта (1200x675):
```typescript
getProjectScreenshot(project.url, 1200, 675)
// https://image.thum.io/get/width/1200/crop/675/https://example.com
```

### Детальная страница (1920x1080):
```typescript
getProjectScreenshot(project.url, 1920, 1080)
// https://image.thum.io/get/width/1920/crop/1080/https://example.com
```

---

## 🎨 Где используется

### 1. Страница проектов (`/projects`)
- Карточки проектов
- Размер: 1200x675px
- Lazy loading для быстрой загрузки

### 2. Детальная страница проекта (`/projects/[id]`)
- Большой скриншот: 1920x1080px
- **Живой iframe** - показывает реальный сайт
- Fallback на статичное изображение при ошибке

---

## 🚀 Преимущества

### ✅ Автоматическое обновление
Если вы изменили сайт - скриншот обновится сам!

### ✅ Не нужно хранить изображения
Все скриншоты генерируются на лету

### ✅ Всегда актуальные превью
Скриншоты отражают текущее состояние сайта

### ✅ Экономия места
Не нужно загружать гигабайты изображений

---

## 🔄 Как добавить новый проект

Просто добавьте URL в `lib/projects-data.ts`:

```typescript
{
  id: "my-project",
  title: { en: "My Project", uk: "Мій проєкт", de: "Mein Projekt" },
  url: "https://my-site.com", // ← Просто укажите URL!
  image: "/fallback-image.jpg", // Опционально: резервное изображение
  // ... остальные поля
}
```

**Всё!** Скриншот создастся автоматически.

---

## 🛡️ Резервное изображение

Если скриншот не загрузился (сайт недоступен, ошибка API):

```typescript
onError={(e) => {
  const target = e.target as HTMLImageElement
  target.src = project.image || "/placeholder.svg"
}}
```

Система автоматически покажет:
1. Статичное изображение из `project.image`
2. Или placeholder, если изображения нет

---

## 🎬 Живой iframe

На детальной странице проекта есть **живой iframe**:

```typescript
<iframe
  src={project.url}
  className="h-full w-full"
  title={project.title[locale]}
  loading="lazy"
  sandbox="allow-scripts allow-same-origin"
/>
```

**Показывает:**
- Реальный сайт внутри вашего портфолио
- Интерактивный - можно кликать, скроллить
- Безопасный - sandbox режим

---

## 🔧 Настройка размеров

### Изменить размер скриншота:

Отредактируйте `lib/projects-data.ts`:

```typescript
export function getProjectScreenshot(url: string, width = 1200, height = 800): string {
  return `https://image.thum.io/get/width/${width}/crop/${height}/${url}`
}
```

### Использование:

```typescript
// Маленький (карточка)
getProjectScreenshot(url, 800, 450)

// Средний (список)
getProjectScreenshot(url, 1200, 675)

// Большой (детальная страница)
getProjectScreenshot(url, 1920, 1080)

// Full HD
getProjectScreenshot(url, 1920, 1080)
```

---

## 🌐 Альтернативные сервисы

Если Thum.io не работает, можно использовать:

### 1. Screenshot Machine
```typescript
const apiKey = 'YOUR_API_KEY'
return `https://api.screenshotmachine.com?key=${apiKey}&url=${url}&dimension=${width}x${height}`
```

### 2. ScreenshotAPI.net
```typescript
const token = 'YOUR_TOKEN'
return `https://shot.screenshotapi.net/screenshot?token=${token}&url=${url}&width=${width}&height=${height}`
```

### 3. ApiFlash (Cloudflare)
```typescript
const accessKey = 'YOUR_KEY'
return `https://api.apiflash.com/v1/urltoimage?access_key=${accessKey}&url=${url}&width=${width}&height=${height}`
```

---

## 📊 Производительность

### Оптимизация загрузки:

1. **Lazy loading:**
```typescript
loading="lazy"
```
Изображения загружаются только при скролле

2. **Кеширование:**
Браузер кеширует скриншоты автоматически

3. **Fallback:**
Если API недоступен - показывается резервное изображение

---

## 🐛 Решение проблем

### Скриншот не загружается:

**Причины:**
1. Сайт недоступен (404, 500)
2. API перегружен
3. Неправильный URL

**Решение:**
- Проверьте, что сайт работает
- Подождите несколько секунд
- Система автоматически покажет fallback изображение

### Скриншот устаревший:

**Причина:** Кеширование браузера

**Решение:**
- Обновите страницу (Ctrl+F5)
- Очистите кеш браузера
- Подождите 24 часа (автообновление)

### Хочу использовать свои изображения:

**Решение:**
Просто укажите путь в `project.image`:

```typescript
{
  url: "https://my-site.com",
  image: "/my-custom-screenshot.jpg", // ← Ваше изображение
}
```

И измените код:
```typescript
src={project.image || getProjectScreenshot(project.url)}
```

---

## 💡 Рекомендации

### ✅ Лучшие практики:

1. **Всегда указывайте fallback:**
```typescript
image: "/project-name.jpg"
```

2. **Используйте HTTPS:**
```typescript
url: "https://site.com" // ✅ Хорошо
url: "http://site.com"  // ⚠️ Может не работать
```

3. **Проверяйте URL:**
Убедитесь, что сайт доступен публично

4. **Оптимизируйте размеры:**
Не делайте слишком большие скриншоты (макс 1920px)

---

## 🎯 Итог

### Что вы получили:

✅ **Автоматические скриншоты** - не нужно делать вручную  
✅ **Всегда актуальные** - обновляются при изменении сайта  
✅ **Живой iframe** - показывает реальный сайт  
✅ **Fallback система** - работает даже при ошибках  
✅ **Экономия времени** - просто добавьте URL!  

---

## 📝 Пример добавления проекта

```typescript
// lib/projects-data.ts

export const projects: Project[] = [
  // ... существующие проекты
  {
    id: "new-landing",
    title: {
      en: "New Landing",
      uk: "Новий лендінг",
      de: "Neue Landing",
    },
    description: {
      en: "Modern landing page",
      uk: "Сучасний лендінг",
      de: "Moderne Landing-Page",
    },
    type: {
      en: "Landing Page",
      uk: "Лендінг",
      de: "Landing-Page",
    },
    technologies: ["Tilda", "Шаблон"],
    features: {
      en: ["Feature 1", "Feature 2"],
      uk: ["Функція 1", "Функція 2"],
      de: ["Funktion 1", "Funktion 2"],
    },
    price: "$100-150",
    duration: {
      en: "1-2 days",
      uk: "1-2 дні",
      de: "1-2 Tage",
    },
    url: "https://my-new-landing.com", // ← Скриншот создастся автоматически!
    image: "/fallback.jpg", // ← Опционально
  },
]
```

**Готово!** Скриншот появится автоматически.

---

## 🚀 Готово!

Теперь вам **не нужно**:
- ❌ Делать скриншоты вручную
- ❌ Загружать изображения на сервер
- ❌ Обновлять превью при изменении сайта

Всё работает **автоматически**! 🎉
