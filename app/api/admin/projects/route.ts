import { NextResponse } from "next/server"
import { getProjects } from "@/lib/data"
import type { ApiResponse, Project } from "@/lib/types"

export async function GET() {
  try {
    const projects = getProjects()
    
    return NextResponse.json<ApiResponse<Project[]>>({
      success: true,
      data: projects,
    })
  } catch {
    return NextResponse.json<ApiResponse>({
      success: false,
      error: "Failed to fetch projects",
    }, { status: 500 })
  }
}

// POST endpoint would be added here for creating new projects
// In production, this would connect to MongoDB
