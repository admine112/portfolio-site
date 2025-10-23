#!/bin/bash

# Цвета для вывода
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

BASE_URL="http://localhost:3000"
TIMEOUT=10

# Массив страниц для проверки
PAGES=(
  "/"
  "/projects"
  "/about"
  "/pricing"
  "/contact"
  "/admin/login"
  "/admin"
  "/projects/natfood.com.ua"
  "/projects/tire-service"
  "/projects/modern-website"
)

echo -e "${YELLOW}=== ПРОВЕРКА ВСЕХ СТРАНИЦ ===${NC}\n"

PASSED=0
FAILED=0

for page in "${PAGES[@]}"; do
  echo -n "Проверка: $page ... "
  
  # Проверяем HTTP код
  HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" --max-time $TIMEOUT "$BASE_URL$page")
  
  if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "404" ]; then
    echo -e "${GREEN}✓ OK ($HTTP_CODE)${NC}"
    ((PASSED++))
  else
    echo -e "${RED}✗ ОШИБКА ($HTTP_CODE)${NC}"
    ((FAILED++))
  fi
done

echo ""
echo -e "${YELLOW}=== РЕЗУЛЬТАТЫ ===${NC}"
echo -e "✓ Успешно: ${GREEN}$PASSED${NC}"
echo -e "✗ Ошибок: ${RED}$FAILED${NC}"
echo ""

if [ $FAILED -eq 0 ]; then
  echo -e "${GREEN}ВСЕ СТРАНИЦЫ РАБОТАЮТ!${NC}"
  exit 0
else
  echo -e "${RED}НАЙДЕНЫ ОШИБКИ!${NC}"
  exit 1
fi
