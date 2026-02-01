import type { Metadata } from "next"
import ProjectsClient from "@/app/projects/projects-client"

export const metadata: Metadata = {
  title: 'Портфоліо проєктів | Приклади розроблених сайтів',
  description: 'Перегляньте наші роботи: лендінги, інтернет-магазини, веб-додатки. Реальні кейси з цінами та термінами виконання.',
}

export default function ProjectsPage() {
  return <ProjectsClient />
}
