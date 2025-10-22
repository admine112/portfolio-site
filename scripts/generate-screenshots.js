const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Список проектов с URL
const projects = [
  { id: 'barbershop', url: 'http://t.remeta.tilda.ws/', filename: 'barbershop-preview.jpg' },
  { id: 'supplement', url: 'http://t.remeta.tilda.ws/inmunoflamhtml', filename: 'supplement-preview.jpg' },
  { id: 'conference', url: 'http://t.remeta.tilda.ws/page55984111.html', filename: 'conference-preview.jpg' },
  { id: 'flower-shop', url: 'https://site-chi-ten-77.vercel.app/', filename: 'flower-shop-preview.jpg' },
  { id: 'yoga-studio', url: 'https://aruna-flow.vercel.app/', filename: 'yoga-studio-preview.jpg' },
  { id: 'pizzeria', url: 'https://slice-of-heaven-rose.vercel.app/', filename: 'pizzeria-preview.jpg' },
  { id: 'notary', url: 'http://t.remeta.tilda.ws/page-archivarius', filename: 'notary-preview.jpg' },
  { id: 'coffee-shop', url: 'https://t.remeta.tilda.ws/page85512516.html', filename: 'coffee-shop-preview.jpg' },
  { id: 'driving-school', url: 'http://t.remeta.tilda.ws/na-colesah', filename: 'driving-school-preview.jpg' },
  { id: 'car-security', url: 'https://t.remeta.tilda.ws/page85554336.html', filename: 'car-security-preview.jpg' },
  { id: 'tire-service', url: 'https://modern-website-xmtj.bolt.host/', filename: 'tire-service-preview.jpg' },
];

async function generateScreenshots() {
  console.log('🚀 Запуск генерации скриншотов...\n');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const outputDir = path.join(__dirname, '../public');
  
  for (const project of projects) {
    try {
      console.log(`📸 Создание скриншота для: ${project.id}`);
      console.log(`   URL: ${project.url}`);
      
      const page = await browser.newPage();
      
      // Устанавливаем размер viewport (16:9 соотношение)
      await page.setViewport({
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1,
      });
      
      // Переходим на страницу
      await page.goto(project.url, {
        waitUntil: 'networkidle2',
        timeout: 30000
      });
      
      // Ждем немного для полной загрузки
      await page.waitForTimeout(2000);
      
      // Делаем скриншот
      const outputPath = path.join(outputDir, project.filename);
      await page.screenshot({
        path: outputPath,
        type: 'jpeg',
        quality: 85,
        fullPage: false
      });
      
      console.log(`   ✅ Сохранено: ${project.filename}\n`);
      
      await page.close();
      
    } catch (error) {
      console.error(`   ❌ Ошибка для ${project.id}:`, error.message, '\n');
    }
  }
  
  await browser.close();
  console.log('✨ Готово! Все скриншоты созданы.');
}

generateScreenshots().catch(console.error);
