import { NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export const runtime = 'nodejs'

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json()
    const { id } = body

    if (!id) {
      return NextResponse.json(
        { error: "ID проекта обязателен" },
        { status: 400 }
      )
    }

    // Импортируем текущие проекты
    const { projects } = await import("@/lib/projects-data")
    
    // Проверяем существование проекта
    const projectExists = projects.some(p => p.id === id)
    
    if (!projectExists) {
      return NextResponse.json(
        { error: `Проект с ID "${id}" не найден` },
        { status: 404 }
      )
    }

    // Фильтруем проекты
    const updatedProjects = projects.filter(p => p.id !== id)

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
      message: "Проект успешно удален",
    })
  } catch (error) {
    console.error("Error deleting project:", error)
    return NextResponse.json(
      { error: "Ошибка при удалении проекта: " + (error as Error).message },
      { status: 500 }
    )
  }
}
