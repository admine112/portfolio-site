# 📸 Как создать настоящие превью проектов

## 🎯 Цель

Создать **реальные скриншоты** сайтов вместо случайных изображений.

---

## 🚀 Автоматический способ (рекомендуется)

### 1. Установите Puppeteer:

```bash
npm install puppeteer --legacy-peer-deps
```

### 2. Запустите скрипт:

```bash
node scripts/generate-screenshots.js
```

### 3. Готово!

Скрипт создаст скриншоты всех проектов в `/public`:
- `barbershop-preview.jpg`
- `supplement-preview.jpg`
- `conference-preview.jpg`
- `flower-shop-preview.jpg`
- `yoga-studio-preview.jpg`
- `pizzeria-preview.jpg`
- `notary-preview.jpg`
- `coffee-shop-preview.jpg`
- `driving-school-preview.jpg`
- `car-security-preview.jpg`
- `tire-service-preview.jpg`

---

## 📋 Что делает скрипт:

1. **Открывает каждый сайт** в headless браузере
2. **Делает скриншот** размером 1920x1080
3. **Сохраняет** в `/public` как JPEG (качество 85%)
4. **Автоматически** для всех 11 проектов

---

## ⚙️ Настройки скриншотов

Откройте `scripts/generate-screenshots.js` и измените:

### Размер:
```javascript
await page.setViewport({
  width: 1920,  // ← Измените ширину
  height: 1080, // ← Измените высоту
  deviceScaleFactor: 1,
});
```

### Качество:
```javascript
await page.screenshot({
  path: outputPath,
  type: 'jpeg',
  quality: 85, // ← 0-100, чем выше - тем лучше качество
  fullPage: false
});
```

### Время ожидания:
```javascript
await page.waitForTimeout(2000); // ← Миллисекунды
```

---

## 🔧 Ручной способ

Если скрипт не работает, можно сделать скриншоты вручную:

### 1. Откройте сайт в браузере

### 2. Нажмите F12 (DevTools)

### 3. Установите размер:
- Нажмите Ctrl+Shift+M (responsive mode)
- Установите 1920x1080

### 4. Сделайте скриншот:
- Ctrl+Shift+P
- Введите "screenshot"
- Выберите "Capture screenshot"

### 5. Сохраните в `/public`:
- Переименуйте файл (например, `barbershop-preview.jpg`)
- Переместите в `/public`

---

## 📊 Список проектов и URL:

| ID | URL | Файл превью |
|----|-----|-------------|
| barbershop | http://t.remeta.tilda.ws/ | barbershop-preview.jpg |
| immunoflam | http://t.remeta.tilda.ws/inmunoflamhtml | supplement-preview.jpg |
| conference | http://t.remeta.tilda.ws/page55984111.html | conference-preview.jpg |
| flower-shop | https://site-chi-ten-77.vercel.app/ | flower-shop-preview.jpg |
| yoga-studio | https://aruna-flow.vercel.app/ | yoga-studio-preview.jpg |
| pizzeria | https://slice-of-heaven-rose.vercel.app/ | pizzeria-preview.jpg |
| notary | http://t.remeta.tilda.ws/page-archivarius | notary-preview.jpg |
| coffee-franchise | https://t.remeta.tilda.ws/page85512516.html | coffee-shop-preview.jpg |
| driving-school | http://t.remeta.tilda.ws/na-colesah | driving-school-preview.jpg |
| car-alarm | https://t.remeta.tilda.ws/page85554336.html | car-security-preview.jpg |
| tire-service | https://modern-website-xmtj.bolt.host/ | tire-service-preview.jpg |

---

## ✅ После создания скриншотов:

1. **Проверьте** что файлы есть в `/public`
2. **Обновите страницу** (Ctrl+Shift+R)
3. **Откройте** http://localhost:3000/projects
4. **Увидите** реальные превью сайтов!

---

## 🐛 Решение проблем:

### Puppeteer не устанавливается:
```bash
npm install puppeteer --legacy-peer-deps
```

### Скрипт выдает ошибку:
- Проверьте, что все URL доступны
- Увеличьте timeout в скрипте
- Запустите для одного проекта

### Скриншоты пустые:
- Увеличьте `waitForTimeout` до 5000
- Проверьте, что сайт загружается

---

## 💡 Советы:

✅ **Запускайте ночью** - скрипт работает 5-10 минут  
✅ **Проверяйте URL** - некоторые могут быть недоступны  
✅ **Сохраняйте оригиналы** - на случай если нужно пересоздать  
✅ **Оптимизируйте размер** - используйте качество 80-85  

---

## 🎉 Готово!

После запуска скрипта у вас будут **настоящие превью** всех проектов!
