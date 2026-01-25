import type {
  Project,
  Inquiry,
  Testimonial,
  AdminUser,
  DashboardStats,
} from "./types";

// In-memory data store (replace with MongoDB in production)
// This serves as a mock database for demonstration

export const mockProjects: Project[] = [
  {
    _id: "1",
    name: "MShivalik",
    slug: "mshivalik",
    location: "Rajpur Road, Dehradun",
    status: "ongoing",
    type: "Residential",
    units: "120+ Units",
    size: "2 & 3 BHK",
    priceRange: "Starting from ₹65 Lakhs",
    description:
      "Premium residential apartments with stunning mountain views and world-class amenities in Dehradun's most sought-after location.",
    highlights: [
      "RERA Registered",
      "Premium Location",
      "Mountain Views",
      "Modern Architecture",
      "Vastu Compliant",
      "Earthquake Resistant",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070",
        alt: "MShivalik Exterior",
        category: "exterior",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
        alt: "Living Room",
        category: "interior",
      },
    ],
    amenities: [
      {
        name: "Swimming Pool",
        description: "Temperature-controlled pool",
        icon: "Waves",
      },
      {
        name: "Modern Gym",
        description: "State-of-the-art fitness center",
        icon: "Dumbbell",
      },
      {
        name: "Landscaped Gardens",
        description: "Beautiful green spaces",
        icon: "Flower2",
      },
    ],
    floorPlans: [
      {
        name: "2 BHK - Type A",
        size: "1,150 sq.ft.",
        price: "₹65 Lakhs*",
        bedrooms: 2,
        bathrooms: 2,
        features: [
          "Living Room",
          "Dining Area",
          "Modular Kitchen",
          "2 Bedrooms",
          "2 Bathrooms",
          "Balcony",
        ],
      },
      {
        name: "3 BHK - Type A",
        size: "1,580 sq.ft.",
        price: "₹89 Lakhs*",
        bedrooms: 3,
        bathrooms: 3,
        features: [
          "Living Room",
          "Dining Area",
          "Modular Kitchen",
          "3 Bedrooms",
          "3 Bathrooms",
          "2 Balconies",
          "Study",
        ],
      },
    ],
    seoTitle: "MShivalik | Premium Apartments in Dehradun",
    seoDescription:
      "Discover MShivalik - Premium 2 & 3 BHK apartments in Dehradun with stunning mountain views.",
    featured: true,
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-06-20"),
  },
];

export const mockInquiries: Inquiry[] = [
  {
    _id: "1",
    name: "Rahul Verma",
    email: "rahul.verma@email.com",
    phone: "+91 98765 43210",
    project: "MShivalik",
    configuration: "3BHK",
    message:
      "I am interested in 3 BHK apartments. Please share the pricing details and available units.",
    status: "new",
    source: "project",
    createdAt: new Date("2024-06-18"),
  },
  {
    _id: "2",
    name: "Priya Singh",
    email: "priya.singh@email.com",
    phone: "+91 87654 32109",
    project: "MShivalik",
    configuration: "2BHK",
    message: "Would like to schedule a site visit this weekend.",
    status: "contacted",
    source: "project",
    createdAt: new Date("2024-06-15"),
  },
  {
    _id: "3",
    name: "Amit Sharma",
    email: "amit.sharma@email.com",
    phone: "+91 76543 21098",
    subject: "Investment Opportunity",
    message: "Looking for investment opportunities in your upcoming projects.",
    status: "new",
    source: "contact",
    createdAt: new Date("2024-06-20"),
  },
  {
    _id: "4",
    name: "Sneha Gupta",
    email: "sneha.gupta@email.com",
    phone: "+91 65432 10987",
    project: "MShivalik",
    configuration: "2BHK",
    message: "Need home loan assistance. Can you help?",
    status: "contacted",
    source: "project",
    createdAt: new Date("2024-06-12"),
  },
  {
    _id: "5",
    name: "Vikram Mehta",
    email: "vikram.mehta@email.com",
    phone: "+91 54321 09876",
    subject: "Site Visit",
    project: "MShivalik",
    message:
      "Planning to relocate to Dehradun. Want to visit the project site.",
    status: "new",
    source: "contact",
    createdAt: new Date("2024-06-21"),
  },
];

export const mockTestimonials: Testimonial[] = [
  {
    _id: "1",
    name: "Rajesh Sharma",
    role: "Homeowner at MShivalik",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    content:
      "Buying our home from Apex Home was the best decision we ever made. The quality of construction exceeded our expectations.",
    rating: 5,
    featured: true,
    createdAt: new Date("2024-03-10"),
  },
  {
    _id: "2",
    name: "Priya Mehta",
    role: "Investor",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    content:
      "As an investor, I look for developers who deliver on their promises. Apex Home has consistently shown transparency.",
    rating: 5,
    featured: true,
    createdAt: new Date("2024-02-20"),
  },
];

export const mockAdminUsers: AdminUser[] = [
  {
    _id: "1",
    email: "admin@apexhome.in",
    password: "$2a$10$hashedpassword", // In real app, use bcrypt
    name: "Admin User",
    role: "admin",
    createdAt: new Date("2024-01-01"),
    lastLogin: new Date("2024-06-20"),
  },
];

// Helper functions to simulate database operations
export function getDashboardStats(): DashboardStats {
  const newInquiries = mockInquiries.filter((i) => i.status === "new");
  const contactedInquiries = mockInquiries.filter(
    (i) => i.status === "contacted",
  );

  return {
    totalProjects: mockProjects.length,
    totalInquiries: mockInquiries.length,
    newInquiries: newInquiries.length,
    contactedInquiries: contactedInquiries.length,
    recentInquiries: mockInquiries.slice(0, 5),
  };
}

export function getProjects(): Project[] {
  return mockProjects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return mockProjects.find((p) => p.slug === slug);
}

export function getInquiries(): Inquiry[] {
  return mockInquiries.sort(
    (a, b) =>
      new Date(b.createdAt || 0).getTime() -
      new Date(a.createdAt || 0).getTime(),
  );
}

export function getInquiryById(id: string): Inquiry | undefined {
  return mockInquiries.find((i) => i._id === id);
}

export function updateInquiryStatus(
  id: string,
  status: Inquiry["status"],
): boolean {
  const inquiry = mockInquiries.find((i) => i._id === id);
  if (inquiry) {
    inquiry.status = status;
    inquiry.updatedAt = new Date();
    return true;
  }
  return false;
}

export function addInquiry(
  inquiry: Omit<Inquiry, "_id" | "createdAt" | "updatedAt">,
): Inquiry {
  const newInquiry: Inquiry = {
    ...inquiry,
    _id: String(mockInquiries.length + 1),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  mockInquiries.push(newInquiry);
  return newInquiry;
}

export function getTestimonials(): Testimonial[] {
  return mockTestimonials;
}

export function validateAdmin(
  email: string,
  password: string,
): AdminUser | null {
  // In production, use bcrypt.compare()
  const admin = mockAdminUsers.find((a) => a.email === email);
  // For demo purposes, accept "admin123" as password
  if (admin && password === "admin123") {
    return admin;
  }
  return null;
}
