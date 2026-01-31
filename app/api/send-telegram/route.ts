import { NextRequest, NextResponse } from 'next/server'

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '7459013983:AAEDMBiXJYu3qf__pWta2mIUdjmyTgwqS-I'
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '944549036'

// Функция для экранирования HTML символов
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
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

    // Экранируем пользовательский ввод
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeProjectType = escapeHtml(projectType || 'Не указан')
    const safeBudget = escapeHtml(budget || 'Не указан')
    const safeMessage = escapeHtml(message)

    // Формируем сообщение для Telegram
    const telegramMessage = `
🔔 <b>Новая заявка с сайта портфолио!</b>

👤 <b>Имя:</b> ${safeName}
📧 <b>Email:</b> ${safeEmail}
📁 <b>Тип проекта:</b> ${safeProjectType}
💰 <b>Бюджет:</b> ${safeBudget}

💬 <b>Сообщение:</b>
${safeMessage}

⏰ <b>Время:</b> ${new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kiev' })}
🌐 <b>Сайт:</b> https://arsen-dev.vercel.app
    `.trim()

    // Отправляем в Telegram
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
      return NextResponse.json({
        success: true,
        message: 'Заявка успешно отправлена!',
      })
    } else {
      console.error('Telegram API error:', telegramData)
      return NextResponse.json(
        {
          error: 'Failed to send message to Telegram',
          details: telegramData.description || 'Unknown error',
        },
        { status: 500 }
      )
    }
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
