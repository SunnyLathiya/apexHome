"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAdminAuth } from "@/lib/admin-auth"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { 
  Loader2, 
  Search, 
  Mail, 
  Phone, 
  Calendar,
  Eye,
  Download
} from "lucide-react"
import type { Inquiry } from "@/lib/types"

const statusColors = {
  new: "bg-blue-500/10 text-blue-600 border-blue-200",
  contacted: "bg-yellow-500/10 text-yellow-600 border-yellow-200",
  converted: "bg-green-500/10 text-green-600 border-green-200",
  closed: "bg-gray-500/10 text-gray-600 border-gray-200",
}

export default function AdminInquiriesPage() {
  const router = useRouter()
  const { admin, isLoading } = useAdminAuth()
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [isLoadingData, setIsLoadingData] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")

  useEffect(() => {
    if (!isLoading && !admin) {
      router.push("/admin/login")
    }
  }, [admin, isLoading, router])

  useEffect(() => {
    async function fetchInquiries() {
      try {
        const response = await fetch("/api/admin/inquiries")
        const data = await response.json()
        if (data.success) {
          setInquiries(data.data)
        }
      } catch (error) {
        console.error("Failed to fetch inquiries:", error)
      } finally {
        setIsLoadingData(false)
      }
    }

    if (admin) {
      fetchInquiries()
    }
  }, [admin])

  const filteredInquiries = inquiries.filter((inquiry) => {
    const matchesSearch = 
      inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.phone.includes(searchTerm)
    
    const matchesStatus = statusFilter === "all" || inquiry.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/admin/inquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      })

      if (response.ok) {
        setInquiries(prev => 
          prev.map(inq => 
            inq._id === id ? { ...inq, status: newStatus as Inquiry["status"] } : inq
          )
        )
      }
    } catch (error) {
      console.error("Failed to update status:", error)
    }
  }

  const exportToCSV = () => {
    const headers = ["Name", "Email", "Phone", "Project", "Message", "Status", "Date"]
    const rows = filteredInquiries.map(inq => [
      inq.name,
      inq.email,
      inq.phone,
      inq.project || "",
      inq.message.replace(/,/g, ";"),
      inq.status,
      new Date(inq.createdAt || "").toLocaleDateString()
    ])

    const csvContent = [headers, ...rows].map(row => row.join(",")).join("\n")
    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `inquiries-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
  }

  if (isLoading || !admin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted">
      <AdminSidebar />
      <div className="lg:ml-64">
        <AdminHeader title="Inquiries" />
        <main className="p-6">
          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name, email, or phone..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="converted">Converted</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" onClick={exportToCSV}>
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Inquiries List */}
          <Card>
            <CardHeader>
              <CardTitle>
                All Inquiries ({filteredInquiries.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isLoadingData ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : filteredInquiries.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No inquiries found</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredInquiries.map((inquiry) => (
                    <div
                      key={inquiry._id}
                      className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 flex-wrap">
                            <h3 className="font-semibold text-foreground">
                              {inquiry.name}
                            </h3>
                            <Badge className={statusColors[inquiry.status]}>
                              {inquiry.status}
                            </Badge>
                            <Badge variant="outline">
                              {inquiry.source === "project" ? inquiry.project : "Contact Form"}
                            </Badge>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Mail className="h-3 w-3" />
                              {inquiry.email}
                            </span>
                            <span className="flex items-center gap-1">
                              <Phone className="h-3 w-3" />
                              {inquiry.phone}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(inquiry.createdAt || "").toLocaleDateString()}
                            </span>
                          </div>

                          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                            {inquiry.message}
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <Select
                            value={inquiry.status}
                            onValueChange={(value) => handleStatusChange(inquiry._id!, value)}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="new">New</SelectItem>
                              <SelectItem value="contacted">Contacted</SelectItem>
                              <SelectItem value="converted">Converted</SelectItem>
                              <SelectItem value="closed">Closed</SelectItem>
                            </SelectContent>
                          </Select>
                          <Button variant="outline" size="icon" asChild>
                            <Link href={`/admin/inquiries/${inquiry._id}`}>
                              <Eye className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
