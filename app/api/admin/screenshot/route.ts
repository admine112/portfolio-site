import { NextRequest, NextResponse } from 'next/server'
import { exec } from 'child_process'
import { promisify } from 'util'
import path from 'path'

const execAsync = promisify(exec)

export async function POST(request: NextRequest) {
  try {
    const { url, filename } = await request.json()

    if (!url || !filename) {
      return NextResponse.json(
        { error: 'URL и имя файла обязательны' },
        { status: 400 }
      )
    }

    // Проверяем формат имени файла
    if (!filename.endsWith('.jpg') && !filename.endsWith('.jpeg')) {
      return NextResponse.json(
        { error: 'Имя файла должно заканчиваться на .jpg или .jpeg' },
        { status: 400 }
      )
    }

    // Запускаем скрипт создания скриншота
    const scriptPath = path.join(process.cwd(), 'scripts', 'screenshot-single.js')
    const command = `node "${scriptPath}" "${url}" "${filename}"`

    const { stdout, stderr } = await execAsync(command, {
      timeout: 60000, // 60 секунд
    })

    if (stderr && !stderr.includes('Загрузка страницы')) {
      console.error('Screenshot error:', stderr)
      return NextResponse.json(
        { error: 'Ошибка при создании скриншота', details: stderr },
        { status: 500 }
      )
    }

    return NextResponse.json({
      message: `Скриншот успешно создан: ${filename}`,
      output: stdout,
    })
  } catch (error: any) {
    console.error('Screenshot generation error:', error)
    return NextResponse.json(
      { error: 'Ошибка при создании скриншота', details: error.message },
      { status: 500 }
    )
  }
}
