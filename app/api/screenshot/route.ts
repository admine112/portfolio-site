import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const url = searchParams.get('url')

  if (!url) {
    return new NextResponse('URL parameter is required', { status: 400 })
  }

  try {
    // Перенаправляем на бесплатный сервис без ключа
    // Используем S-Shot.ru - российский бесплатный сервис
    const screenshotUrl = `https://mini.s-shot.ru/1200x675/JPEG/1200/PNG/?${url}`
    
    // Перенаправляем на сервис скриншотов
    return NextResponse.redirect(screenshotUrl)
  } catch (error) {
    console.error('Screenshot error:', error)
    return new NextResponse('Error generating screenshot', { status: 500 })
  }
}

