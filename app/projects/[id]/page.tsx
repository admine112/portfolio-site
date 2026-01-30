import { use } from "react"
import { projects } from "@/lib/projects-data"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import ProjectClient from "./project-client"

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id
  const project = projects.find((p) => p.id === id)

  if (!project) return {}

  return {
    title: project.title.uk || project.title.en,
    description: project.description.uk || project.description.en,
    openGraph: {
      title: project.title.uk || project.title.en,
      description: project.description.uk || project.description.en,
      images: [project.image || "/image.png"],
    },
  }
}

export default function ProjectDetailPage({ params }: Props) {
  const resolvedParams = use(params)
  const projectId = resolvedParams.id

  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return notFound()
  }

  return <ProjectClient project={project} />
}
