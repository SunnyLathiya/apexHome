import { NextResponse } from "next/server"
import { validateAdmin } from "@/lib/data"
import type { ApiResponse, AdminUser } from "@/lib/types"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json<ApiResponse>({
        success: false,
        error: "Email and password are required",
      }, { status: 400 })
    }

    const admin = validateAdmin(email, password)

    if (admin) {
      // Don't send password to client
      const adminResponse: Omit<AdminUser, "password"> = {
        _id: admin._id,
        email: admin.email,
        name: admin.name,
        role: admin.role,
        createdAt: admin.createdAt,
        lastLogin: new Date(),
      }

      return NextResponse.json<ApiResponse<Omit<AdminUser, "password">>>({
        success: true,
        data: adminResponse,
        message: "Login successful",
      })
    }

    return NextResponse.json<ApiResponse>({
      success: false,
      error: "Invalid email or password",
    }, { status: 401 })
  } catch {
    return NextResponse.json<ApiResponse>({
      success: false,
      error: "An error occurred during login",
    }, { status: 500 })
  }
}
