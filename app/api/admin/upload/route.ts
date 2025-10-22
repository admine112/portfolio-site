import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return NextResponse.json(
        { error: 'Файл не найден' },
        { status: 400 }
      )
    }

    // Проверяем тип файла
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'Можно загружать только изображения' },
        { status: 400 }
      )
    }

    // Получаем расширение файла
    const ext = file.name.split('.').pop()
    
    // Генерируем имя файла
    const timestamp = Date.now()
    const filename = `project-${timestamp}.${ext}`

    // Конвертируем файл в Buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Сохраняем в /public
    const filepath = path.join(process.cwd(), 'public', filename)
    await writeFile(filepath, buffer)

    return NextResponse.json({
      message: 'Файл успешно загружен',
      filename: `/${filename}`,
      url: `/${filename}`,
    })
  } catch (error: any) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: 'Ошибка при загрузке файла', details: error.message },
      { status: 500 }
    )
  }
}
