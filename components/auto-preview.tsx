"use client"

interface AutoPreviewProps {
  url: string
  fallbackImage: string
  alt: string
  className?: string
}

// Функция для получения автоматического превью
function getAutoPreview(url: string, fallback: string): string {
  // Автоматические скриншоты отключены - используем статичные изображения
  // Причина: S-Shot.ru и другие сервисы блокируют запросы
  return fallback
}

export function AutoPreview({ url, fallbackImage, alt, className = "" }: AutoPreviewProps) {
  // Просто используем статичное изображение
  const previewUrl = fallbackImage

  return (
    <img
      src={previewUrl}
      alt={alt}
      className={className}
      loading="lazy"
    />
  )
}
