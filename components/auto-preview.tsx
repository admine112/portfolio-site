"use client"

import { memo } from "react"

interface AutoPreviewProps {
  url: string
  fallbackImage: string
  alt: string
  className?: string
}

function AutoPreviewComponent({ url, fallbackImage, alt, className = "" }: AutoPreviewProps) {
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

export const AutoPreview = memo(AutoPreviewComponent)
