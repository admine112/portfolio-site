#!/bin/bash

echo "🚀 Начинаем создание скриншотов всех проектов..."
echo ""

# Массив проектов: URL и имя файла
declare -a projects=(
  "http://t.remeta.tilda.ws/|barbershop-preview.jpg"
  "http://t.remeta.tilda.ws/inmunoflamhtml|supplement-preview.jpg"
  "http://t.remeta.tilda.ws/page55984111.html|conference-preview.jpg"
  "https://site-chi-ten-77.vercel.app/|flower-shop-preview.jpg"
  "https://aruna-flow.vercel.app/|yoga-studio-preview.jpg"
  "https://slice-of-heaven-rose.vercel.app/|pizzeria-preview.jpg"
  "http://t.remeta.tilda.ws/page-archivarius|notary-preview.jpg"
  "https://t.remeta.tilda.ws/page85512516.html|coffee-shop-preview.jpg"
  "http://t.remeta.tilda.ws/na-colesah|driving-school-preview.jpg"
  "https://t.remeta.tilda.ws/page85554336.html|car-security-preview.jpg"
  "https://modern-website-xmtj.bolt.host/|tire-service-preview.jpg"
)

# Счетчик
total=${#projects[@]}
current=0

# Создаем скриншоты
for project in "${projects[@]}"; do
  current=$((current + 1))
  
  # Разделяем URL и имя файла
  IFS='|' read -r url filename <<< "$project"
  
  echo "[$current/$total] Обработка: $filename"
  
  # Запускаем скрипт
  node scripts/screenshot-single.js "$url" "$filename"
  
  # Небольшая пауза между запросами
  sleep 2
  
  echo ""
done

echo "✨ Готово! Все скриншоты созданы в /public"
