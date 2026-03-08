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
    name: "Shivyan heights",
    slug: "Shivyan heights",
    location: "Vaishnodevi, sp Ring road, near lilapur, Ahmedabad",
    status: "ongoing",
    type: "Residential",
    units: "100 Units & 11 Shops",
    size: "2 BHK",
    priceRange: "Starting from ₹65 Lakhs",
    description:
      "Premium residential apartments with stunning mountain views and world-class amenities in Ahmedabad's most sought-after location.",
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
        src: "/shivyanHeights/page_2.png",
        alt: "Shivyan Heights - Project Overview",
        category: "exterior",
      },
      {
        src: "/shivyanHeights/page_3.png",
        alt: "Shivyan Heights - Building View",
        category: "exterior",
      },
      {
        src: "/shivyanHeights/page_4.png",
        alt: "Shivyan Heights - Exterior & Amenities",
        category: "exterior",
      },
      {
        src: "/shivyanHeights/page_9.png",
        alt: "2 BHK Type-A Floor Plan",
        category: "floorplans",
      },
      {
        src: "/shivyanHeights/page_10.png",
        alt: "2 BHK Type-C Floor Plan",
        category: "floorplans",
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
    ],
    seoTitle: "Shivyan heights | Premium Apartments in Ahmedabad",
    seoDescription:
      "Discover Shivyan heights - Premium 2 BHK apartments in Ahmedabad with stunning mountain views.",
    featured: true,
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-06-20"),
  },
];

export const mockInquiries: Inquiry[] = [
  {
    _id: "1",
    name: "Rushik Patel",
    email: "rushikpatel184@gmail.com",
    phone: "+91 94097 51929",
    project: "Shivyan heights",
    configuration: "2BHK",
    message:
      "I am interested in 2 BHK apartments. Please share the pricing details and available units.",
    status: "new",
    source: "project",
    createdAt: new Date("2024-06-18"),
  },
  {
    _id: "2",
    name: "Rajesh Patel",
    email: "Rajesh.patel@email.com",
    phone: "+91 94097 51929",
    project: "Shivyan heights",
    configuration: "2BHK",
    message: "Would like to schedule a site visit this weekend.",
    status: "contacted",
    source: "project",
    createdAt: new Date("2024-06-15"),
  },
];

export const mockTestimonials: Testimonial[] = [
  {
    _id: "1",
    name: "Rajesh Sharma",
    role: "Homeowner at Shivyan heights",
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
