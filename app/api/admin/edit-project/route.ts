import { NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export const runtime = 'nodejs'

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      id,
      titleEn,
      titleUk,
      titleDe,
      descriptionEn,
      descriptionUk,
      descriptionDe,
      type,
      technologies,
      featuresEn,
      featuresUk,
      featuresDe,
      price,
      durationEn,
      durationUk,
      durationDe,
      url,
      image,
    } = body

    // Импортируем текущие проекты
    const { projects } = await import("@/lib/projects-data")
    
    // Находим индекс проекта
    const projectIndex = projects.findIndex(p => p.id === id)
    
    if (projectIndex === -1) {
      return NextResponse.json(
        { error: `Проект с ID "${id}" не найден` },
        { status: 404 }
      )
    }

    const typeMap: Record<string, { en: string; uk: string; de: string }> = {
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

    // Обновляем проект
    const updatedProjects = [...projects]
    updatedProjects[projectIndex] = {
      id,
      title: {
        en: titleEn || titleUk,
        uk: titleUk,
        de: titleDe || titleUk,
      },
      description: {
        en: descriptionEn || descriptionUk,
        uk: descriptionUk,
        de: descriptionDe || descriptionUk,
      },
      type: typeMap[type] || typeMap.landing,
      technologies: technologies ? technologies.split(",").map((t: string) => t.trim()) : [],
      features: {
        en: (featuresEn || featuresUk) ? (featuresEn || featuresUk).split(",").map((f: string) => f.trim()) : [],
        uk: featuresUk ? featuresUk.split(",").map((f: string) => f.trim()) : [],
        de: (featuresDe || featuresUk) ? (featuresDe || featuresUk).split(",").map((f: string) => f.trim()) : [],
      },
      price,
      duration: {
        en: durationEn || "1-2 weeks",
        uk: durationUk || "1-2 тижні",
        de: durationDe || "1-2 Wochen",
      },
      url,
      image,
    }

    // Читаем файл
    const filePath = path.join(process.cwd(), "lib", "projects-data.ts")
    const fileContent = fs.readFileSync(filePath, "utf-8")

    // Находим начало и конец массива projects
    const projectsStart = fileContent.indexOf("export const projects: Project[] = [")
    const projectsEnd = fileContent.lastIndexOf("]")

    if (projectsStart === -1 || projectsEnd === -1) {
      throw new Error("Не удалось найти массив projects в файле")
    }

    // Генерируем новый массив проектов
    const newProjectsString = updatedProjects.map(p => `  {
    id: "${p.id}",
    title: {
      en: "${p.title.en}",
      uk: "${p.title.uk}",
      de: "${p.title.de}",
    },
    description: {
      en: "${p.description.en}",
      uk: "${p.description.uk}",
      de: "${p.description.de}",
    },
    type: {
      en: "${p.type.en}",
      uk: "${p.type.uk}",
      de: "${p.type.de}",
    },
    technologies: [${p.technologies.map(t => `"${t}"`).join(", ")}],
    features: {
      en: [${p.features.en.map(f => `"${f}"`).join(", ")}],
      uk: [${p.features.uk.map(f => `"${f}"`).join(", ")}],
      de: [${p.features.de.map(f => `"${f}"`).join(", ")}],
    },
    price: "${p.price}",
    duration: {
      en: "${p.duration.en}",
      uk: "${p.duration.uk}",
      de: "${p.duration.de}",
    },
    url: "${p.url}",
    image: "${p.image}",
  },`).join("\n")

    // Собираем новый файл
    const beforeProjects = fileContent.substring(0, projectsStart)
    const afterProjects = fileContent.substring(projectsEnd + 1)
    const newFileContent = `${beforeProjects}export const projects: Project[] = [\n${newProjectsString}\n]${afterProjects}`

    // Записываем файл
    fs.writeFileSync(filePath, newFileContent, "utf-8")

    return NextResponse.json({
      message: "Проект успешно обновлен",
    })
  } catch (error) {
    console.error("Error editing project:", error)
    return NextResponse.json(
      { error: "Ошибка при редактировании проекта: " + (error as Error).message },
      { status: 500 }
    )
  }
}
