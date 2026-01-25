import React from "react"
import type { Metadata } from "next"
import { AdminAuthProvider } from "@/lib/admin-auth"

export const metadata: Metadata = {
  title: "Admin Panel | Apex Home",
  description: "Apex Home Admin Dashboard - Manage projects, inquiries, and content",
  robots: "noindex, nofollow",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AdminAuthProvider>
      {children}
    </AdminAuthProvider>
  )
}
