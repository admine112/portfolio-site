import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

// Пароль из переменных окружения или дефолтный
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin'

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()

    if (!password) {
      return NextResponse.json(
        { error: 'Пароль обязателен' },
        { status: 400 }
      )
    }

    // Проверяем пароль
    if (password === ADMIN_PASSWORD) {
      // Генерируем простой токен
      const token = crypto.randomBytes(32).toString('hex')
      
      return NextResponse.json({
        success: true,
        token,
        message: 'Успешный вход',
      })
    } else {
      return NextResponse.json(
        { error: 'Неверный пароль' },
        { status: 401 }
      )
    }
  } catch (error: any) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Ошибка при входе' },
      { status: 500 }
    )
  }
}
