import { NextResponse } from "next/server"
import { projects } from "@/lib/projects-data"

export const runtime = 'nodejs'

export async function GET() {
  try {
    return NextResponse.json({ projects })
  } catch (error) {
    return NextResponse.json(
      { error: "Ошибка при загрузке проектов" },
      { status: 500 }
    )
  }
}
