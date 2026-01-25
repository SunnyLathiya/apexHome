import { NextResponse } from "next/server"
import { getDashboardStats } from "@/lib/data"
import type { ApiResponse, DashboardStats } from "@/lib/types"

export async function GET() {
  try {
    const stats = getDashboardStats()
    
    return NextResponse.json<ApiResponse<DashboardStats>>({
      success: true,
      data: stats,
    })
  } catch {
    return NextResponse.json<ApiResponse>({
      success: false,
      error: "Failed to fetch dashboard stats",
    }, { status: 500 })
  }
}
