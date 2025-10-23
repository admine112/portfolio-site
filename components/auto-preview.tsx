"use client"

interface AutoPreviewProps {
  url: string
  fallbackImage: string
  alt: string
  className?: string
}

export function AutoPreview({ url, fallbackImage, alt, className = "" }: AutoPreviewProps) {
  return (
    <img
      src={fallbackImage}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      width={800}
      height={600}
    />
  )
}
