// Project Types
export interface Project {
  _id?: string
  name: string
  slug: string
  location: string
  status: "upcoming" | "ongoing" | "completed"
  type: string
  units: string
  size: string
  priceRange: string
  description: string
  highlights: string[]
  images: ProjectImage[]
  amenities: Amenity[]
  floorPlans: FloorPlan[]
  seoTitle?: string
  seoDescription?: string
  featured: boolean
  createdAt?: Date
  updatedAt?: Date
}

export interface ProjectImage {
  src: string
  alt: string
  category: "exterior" | "interior" | "amenities" | "floorplan"
}

export interface Amenity {
  name: string
  description: string
  icon: string
}

export interface FloorPlan {
  name: string
  size: string
  price: string
  bedrooms: number
  bathrooms: number
  features: string[]
}

// Inquiry Types
export interface Inquiry {
  _id?: string
  name: string
  email: string
  phone: string
  project?: string
  configuration?: string
  subject?: string
  message: string
  status: "new" | "contacted" | "converted" | "closed"
  source: "contact" | "project"
  createdAt?: Date
  updatedAt?: Date
}

// Testimonial Types
export interface Testimonial {
  _id?: string
  name: string
  role: string
  image: string
  content: string
  rating: number
  featured: boolean
  createdAt?: Date
}

// Admin User Types
export interface AdminUser {
  _id?: string
  email: string
  password?: string
  name: string
  role: "admin" | "manager"
  createdAt?: Date
  lastLogin?: Date
}

// Dashboard Stats
export interface DashboardStats {
  totalProjects: number
  totalInquiries: number
  newInquiries: number
  contactedInquiries: number
  recentInquiries: Inquiry[]
}

// API Response Types
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}
