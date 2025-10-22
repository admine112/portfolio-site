import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const projectData = await request.json()

    // Валидация
    if (!projectData.id || !projectData.titleUk || !projectData.url) {
      return NextResponse.json(
        { error: 'Обязательные поля: id, titleUk, url' },
        { status: 400 }
      )
    }

    // Формируем объект проекта
    const typeMap: Record<string, any> = {
      landing: {
        en: "Landing Page",
        uk: "Лендінг",
        de: "Landing-Page",
      },
      ecommerce: {
        en: "E-commerce",
        uk: "Інтернет-магазин",
        de: "E-Commerce",
      },
      webapp: {
        en: "Web Application",
        uk: "Веб-додаток",
        de: "Webanwendung",
      },
    }

    const newProject = {
      id: projectData.id,
      title: {
        en: projectData.titleEn || projectData.titleUk,
        uk: projectData.titleUk,
        de: projectData.titleDe || projectData.titleUk,
      },
      description: {
        en: projectData.descriptionEn || projectData.descriptionUk || "Project description",
        uk: projectData.descriptionUk || "Опис проєкту",
        de: projectData.descriptionDe || projectData.descriptionUk || "Projektbeschreibung",
      },
      type: typeMap[projectData.type] || typeMap.landing,
      technologies: projectData.technologies ? projectData.technologies.split(',').map((t: string) => t.trim()) : ["React", "Next.js"],
      features: {
        en: projectData.featuresEn ? projectData.featuresEn.split(',').map((f: string) => f.trim()) : ["Feature 1", "Feature 2"],
        uk: projectData.featuresUk ? projectData.featuresUk.split(',').map((f: string) => f.trim()) : ["Функція 1", "Функція 2"],
        de: projectData.featuresDe ? projectData.featuresDe.split(',').map((f: string) => f.trim()) : ["Funktion 1", "Funktion 2"],
      },
      price: projectData.price || "$100-150",
      duration: {
        en: projectData.durationEn || "1-2 days",
        uk: projectData.durationUk || "1-2 дні",
        de: projectData.durationDe || "1-2 Tage",
      },
      url: projectData.url,
      image: projectData.image || "/placeholder.jpg",
    }

    // Читаем текущий файл
    const filePath = path.join(process.cwd(), 'lib', 'projects-data.ts')
    let fileContent = fs.readFileSync(filePath, 'utf-8')

    // Находим массив projects и добавляем новый проект
    const projectString = JSON.stringify(newProject, null, 2)
      .replace(/"([^"]+)":/g, '$1:') // Убираем кавычки у ключей
      .replace(/"/g, '"') // Меняем кавычки на обычные

    // Находим закрывающую скобку последнего проекта
    const lastProjectIndex = fileContent.lastIndexOf('\n]')
    
    if (lastProjectIndex === -1) {
      return NextResponse.json(
        { error: 'Не удалось найти массив проектов' },
        { status: 500 }
      )
    }

    // Находим последнюю закрывающую скобку объекта перед ]
    const lastBraceIndex = fileContent.lastIndexOf('}', lastProjectIndex)
    
    // Вставляем новый проект
    const newContent = 
      fileContent.slice(0, lastBraceIndex + 1) +
      ',\n  ' + projectString +
      fileContent.slice(lastProjectIndex)

    // Сохраняем файл
    fs.writeFileSync(filePath, newContent, 'utf-8')

    return NextResponse.json({
      message: `Проект "${projectData.titleUk}" успешно добавлен!`,
      project: newProject,
    })
  } catch (error: any) {
    console.error('Add project error:', error)
    return NextResponse.json(
      { error: 'Ошибка при добавлении проекта', details: error.message },
      { status: 500 }
    )
  }
}
