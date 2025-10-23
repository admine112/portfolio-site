import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '7459013983:AAEDMBiXJYu3qf__pWta2mIUdjmyTgwqS-I'
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '944549036'

// Функция для сохранения заявки в файл (fallback)
function saveToFile(data: any) {
  try {
    const dataDir = path.join(process.cwd(), 'public', 'submissions')
    
    // Создаем директорию если её нет
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }
    
    const filename = `submission_${Date.now()}.json`
    const filepath = path.join(dataDir, filename)
    
    fs.writeFileSync(filepath, JSON.stringify({
      ...data,
      timestamp: new Date().toISOString(),
      received: true
    }, null, 2))
    
    return true
  } catch (error) {
    console.error('Error saving to file:', error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, projectType, budget, message } = body

    // Валидация
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Формируем сообщение для Telegram
    const telegramMessage = `
🔔 <b>Новая заявка с сайта!</b>

👤 <b>Имя:</b> ${name}
📧 <b>Email:</b> ${email}
📁 <b>Тип проекта:</b> ${projectType || 'Не указан'}
💰 <b>Бюджет:</b> ${budget || 'Не указан'}

💬 <b>Сообщение:</b>
${message}

⏰ <b>Время:</b> ${new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kiev' })}
    `.trim()

    let telegramSuccess = false
    let telegramError = null

    // Пытаемся отправить в Telegram
    try {
      const telegramResponse = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: telegramMessage,
            parse_mode: 'HTML',
          }),
        }
      )

      const telegramData = await telegramResponse.json()

      if (telegramResponse.ok) {
        telegramSuccess = true
      } else {
        telegramError = telegramData.description || 'Unknown error'
        console.error('Telegram API error:', telegramData)
      }
    } catch (error) {
      telegramError = error instanceof Error ? error.message : 'Connection error'
      console.error('Error connecting to Telegram:', error)
    }

    // Сохраняем в файл как fallback
    const fileSaved = saveToFile(body)

    // Если хотя бы один способ сработал - возвращаем успех
    if (telegramSuccess || fileSaved) {
      return NextResponse.json({
        success: true,
        message: 'Заявка успешно отправлена!',
        telegramSent: telegramSuccess,
        fileSaved: fileSaved,
      })
    }

    // Если оба способа не сработали
    return NextResponse.json(
      {
        error: 'Failed to send message',
        details: telegramError,
      },
      { status: 500 }
    )
  } catch (error) {
    console.error('Error processing request:', error)
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
