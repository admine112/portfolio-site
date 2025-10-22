const puppeteer = require('puppeteer');
const path = require('path');

// Получаем URL и имя файла из аргументов
const url = process.argv[2];
const filename = process.argv[3];

if (!url || !filename) {
  console.error('Использование: node screenshot-single.js <URL> <filename>');
  console.error('Пример: node screenshot-single.js http://example.com example-preview.jpg');
  process.exit(1);
}

async function takeScreenshot() {
  console.log(`📸 Создание скриншота для: ${url}`);
  
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--disable-gpu',
        '--ignore-certificate-errors',
        '--disable-web-security',
        '--disable-features=IsolateOrigins,site-per-process'
      ]
    });

    const page = await browser.newPage();
    
    // Устанавливаем размер viewport (16:9)
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
    });
    
    console.log(`   Загрузка страницы...`);
    
    // Переходим на страницу
    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: 60000
    });
    
    // Ждем полной загрузки
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Делаем скриншот
    const outputPath = path.join(__dirname, '../public', filename);
    await page.screenshot({
      path: outputPath,
      type: 'jpeg',
      quality: 85,
      fullPage: false
    });
    
    console.log(`   ✅ Сохранено: ${filename}`);
    
  } catch (error) {
    console.error(`   ❌ Ошибка:`, error.message);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

takeScreenshot();
