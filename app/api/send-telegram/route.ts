import { NextRequest, NextResponse } from 'next/server'

const TELEGRAM_BOT_TOKEN = '7459013983:AAEDMBiXJYu3qf__pWta2mIUdjmyTgwqS-I'
const TELEGRAM_CHAT_ID = '944549036'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, projectType, budget, message } = body

    // Формируем сообщение для Telegram
    const telegramMessage = `
🔔 <b>Новая заявка с сайта!</b>

👤 <b>Имя:</b> ${name}
📧 <b>Email:</b> ${email}
📁 <b>Тип проекта:</b> ${projectType}
💰 <b>Бюджет:</b> ${budget}

💬 <b>Сообщение:</b>
${message}

⏰ <b>Время:</b> ${new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kiev' })}
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

    if (!telegramResponse.ok) {
      console.error('Telegram API error:', telegramData)
      
      // Специальная обработка для "chat not found"
      if (telegramData.description?.includes('chat not found')) {
        return NextResponse.json(
          { 
            error: 'Telegram bot not started', 
            message: 'Пожалуйста, запустите бота: https://t.me/Freelance_Buisnes_bot (нажмите START)',
            details: telegramData 
          },
          { status: 400 }
        )
      }
      
      return NextResponse.json(
        { error: 'Failed to send message to Telegram', details: telegramData },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data: telegramData })
  } catch (error) {
    console.error('Error sending to Telegram:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
