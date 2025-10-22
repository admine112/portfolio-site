"use client"

import { useState } from "react"

interface ProjectScreenshotProps {
  url: string
  fallbackImage: string
  alt: string
  className?: string
  width?: number
  height?: number
}

export function ProjectScreenshot({
  url,
  fallbackImage,
  alt,
  className = "",
  width = 1200,
  height = 675,
}: ProjectScreenshotProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [useFallback, setUseFallback] = useState(false)

  // Список бесплатных API для скриншотов (пробуем по очереди)
  const screenshotAPIs = [
    // 1. Статичное изображение (самое надежное)
    fallbackImage,
    
    // 2. PagePeeker (бесплатный, без регистрации, но низкое качество)
    `https://api.pagepeeker.com/v2/thumbs.php?size=x&url=${encodeURIComponent(url)}`,
    
    // 3. S-Shot (бесплатный, без регистрации)
    `https://s-shot.ru/1920x1080/JPEG/1920/PNG/?${url}`,
  ]

  const handleError = () => {
    // Пробуем следующий API
    if (currentImageIndex < screenshotAPIs.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    } else {
      // Все API не сработали, используем fallback
      setUseFallback(true)
    }
  }

  const currentImage = useFallback ? fallbackImage : screenshotAPIs[currentImageIndex]

  return (
    <img
      src={currentImage}
      alt={alt}
      className={className}
      loading="lazy"
      onError={handleError}
    />
  )
}
