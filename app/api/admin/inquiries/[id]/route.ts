import { NextResponse } from "next/server"
import { getInquiryById, updateInquiryStatus } from "@/lib/data"
import type { ApiResponse, Inquiry } from "@/lib/types"

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const inquiry = getInquiryById(id)
    
    if (!inquiry) {
      return NextResponse.json<ApiResponse>({
        success: false,
        error: "Inquiry not found",
      }, { status: 404 })
    }

    return NextResponse.json<ApiResponse<Inquiry>>({
      success: true,
      data: inquiry,
    })
  } catch {
    return NextResponse.json<ApiResponse>({
      success: false,
      error: "Failed to fetch inquiry",
    }, { status: 500 })
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const { status } = await request.json()

    if (!status) {
      return NextResponse.json<ApiResponse>({
        success: false,
        error: "Status is required",
      }, { status: 400 })
    }

    const success = updateInquiryStatus(id, status)

    if (!success) {
      return NextResponse.json<ApiResponse>({
        success: false,
        error: "Inquiry not found",
      }, { status: 404 })
    }

    return NextResponse.json<ApiResponse>({
      success: true,
      message: "Inquiry status updated",
    })
  } catch {
    return NextResponse.json<ApiResponse>({
      success: false,
      error: "Failed to update inquiry",
    }, { status: 500 })
  }
}
