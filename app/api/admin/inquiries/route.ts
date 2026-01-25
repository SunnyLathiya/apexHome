import { NextResponse } from "next/server"
import { getInquiries, addInquiry } from "@/lib/data"
import type { ApiResponse, Inquiry } from "@/lib/types"

export async function GET() {
  try {
    const inquiries = getInquiries()
    
    return NextResponse.json<ApiResponse<Inquiry[]>>({
      success: true,
      data: inquiries,
    })
  } catch {
    return NextResponse.json<ApiResponse>({
      success: false,
      error: "Failed to fetch inquiries",
    }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const { name, email, phone, project, configuration, subject, message, source } = body

    if (!name || !email || !phone || !message) {
      return NextResponse.json<ApiResponse>({
        success: false,
        error: "Name, email, phone, and message are required",
      }, { status: 400 })
    }

    const inquiry = addInquiry({
      name,
      email,
      phone,
      project,
      configuration,
      subject,
      message,
      source: source || "contact",
      status: "new",
    })

    return NextResponse.json<ApiResponse<Inquiry>>({
      success: true,
      data: inquiry,
      message: "Inquiry submitted successfully",
    })
  } catch {
    return NextResponse.json<ApiResponse>({
      success: false,
      error: "Failed to submit inquiry",
    }, { status: 500 })
  }
}
