import { NextRequest, NextResponse } from 'next/server'
import { exec } from 'child_process'
import { promisify } from 'util'
import path from 'path'

const execAsync = promisify(exec)

const projects = [
  { url: 'http://t.remeta.tilda.ws/', filename: 'barbershop-preview.jpg' },
  { url: 'http://t.remeta.tilda.ws/inmunoflamhtml', filename: 'supplement-preview.jpg' },
  { url: 'http://t.remeta.tilda.ws/page55984111.html', filename: 'conference-preview.jpg' },
  { url: 'https://site-chi-ten-77.vercel.app/', filename: 'flower-shop-preview.jpg' },
  { url: 'https://aruna-flow.vercel.app/', filename: 'yoga-studio-preview.jpg' },
  { url: 'https://slice-of-heaven-rose.vercel.app/', filename: 'pizzeria-preview.jpg' },
  { url: 'http://t.remeta.tilda.ws/page-archivarius', filename: 'notary-preview.jpg' },
  { url: 'https://t.remeta.tilda.ws/page85512516.html', filename: 'coffee-shop-preview.jpg' },
  { url: 'http://t.remeta.tilda.ws/na-colesah', filename: 'driving-school-preview.jpg' },
  { url: 'https://t.remeta.tilda.ws/page85554336.html', filename: 'car-security-preview.jpg' },
  { url: 'https://modern-website-xmtj.bolt.host/', filename: 'tire-service-preview.jpg' },
]

export async function POST(request: NextRequest) {
  try {
    const scriptPath = path.join(process.cwd(), 'scripts', 'screenshot-single.js')
    const results = []

    for (const project of projects) {
      try {
        const command = `node "${scriptPath}" "${project.url}" "${project.filename}"`
        await execAsync(command, { timeout: 60000 })
        results.push({ filename: project.filename, status: 'success' })
        
        // Небольшая пауза между запросами
        await new Promise(resolve => setTimeout(resolve, 2000))
      } catch (error: any) {
        results.push({ filename: project.filename, status: 'error', error: error.message })
      }
    }

    const successCount = results.filter(r => r.status === 'success').length
    const errorCount = results.filter(r => r.status === 'error').length

    return NextResponse.json({
      message: `Готово! Успешно: ${successCount}, Ошибок: ${errorCount}`,
      results,
    })
  } catch (error: any) {
    console.error('Batch screenshot error:', error)
    return NextResponse.json(
      { error: 'Ошибка при создании скриншотов', details: error.message },
      { status: 500 }
    )
  }
}
