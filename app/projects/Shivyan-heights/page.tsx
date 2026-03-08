import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { InquiryForm } from "@/components/projects/inquiry-form";
import { ImageGallery } from "@/components/projects/image-gallery";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Activity,
  Armchair,
  ArrowUpDown,
  Baby,
  BatteryCharging,
  BrickWall,
  Briefcase,
  Building2,
  Car,
  Camera,
  CheckCircle,
  DoorOpen,
  Download,
  Droplets,
  Dumbbell,
  Flame,
  Flower2,
  Gamepad2,
  Grid3x3,
  Home,
  IndianRupee,
  LayoutGrid,
  Leaf,
  Lightbulb,
  MapPin,
  Maximize,
  Phone,
  Route,
  Shield,
  Smile,
  Sparkles,
  Store,
  Sun,
  Users,
  Waves,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Shivyan heights | Premium Residential Apartments in Ahmedabad | Apex Property",
  description:
    "Discover Shivyan heights - Premium 2 BHK apartments in Vaishnodevi, sp Ring road, near lilapur, Ahmedabad with stunning views, modern amenities, and world-class facilities. Starting from ₹65 Lakhs.",
  keywords: [
    "Shivyan heights",
    "apartments in Ahmedabad",
    "2 BHK Ahmedabad",
    "Apex Property",
  ],
};

const projectImages = [
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
    src: "/shivyanHeights/page_5.png",
    alt: "Shivyan Heights - Site Layout",
    category: "layouts",
  },
  {
    src: "/shivyanHeights/page_6.png",
    alt: "Shivyan Heights - Ground Floor Layout",
    category: "layouts",
  },
  {
    src: "/shivyanHeights/page_7.png",
    alt: "Shivyan Heights - Typical Floor Layout",
    category: "layouts",
  },
  {
    src: "/shivyanHeights/page_8.png",
    alt: "Shivyan Heights - Upper Floor Layout",
    category: "layouts",
  },
  {
    src: "/shivyanHeights/page_9.png",
    alt: "Shivyan Heights - 2 BHK Type-A Floor Plan",
    category: "floorplans",
  },
  {
    src: "/shivyanHeights/page_10.png",
    alt: "Shivyan Heights - 2 BHK Type-B Floor Plan",
    category: "floorplans",
  },
  {
    src: "/shivyanHeights/page_11.png",
    alt: "Shivyan Heights - 2 BHK Type-C Floor Plan",
    category: "floorplans",
  }
];

const amenities = [
  {
    icon: Droplets,
    name: "Water Pipeline to Each Flat",
    description: "Water supply to every unit",
  },
  {
    icon: BrickWall,
    name: "Compound Wall",
    description: "Secured perimeter wall",
  },
  {
    icon: Users,
    name: "Club House",
    description: "Community social space",
  },
  {
    icon: Activity,
    name: "Yoga Desk",
    description: "Dedicated yoga & wellness area",
  },
  {
    icon: DoorOpen,
    name: "Lavish Entrance Foyer",
    description: "Grand welcome entrance",
  },
  {
    icon: Gamepad2,
    name: "Indoor Games",
    description: "Recreation & entertainment",
  },
  {
    icon: Sparkles,
    name: "Attractive Entrance",
    description: "Beautifully designed entry",
  },
  {
    icon: Route,
    name: "RCC Road",
    description: "Smooth paved internal roads",
  },
  {
    icon: Shield,
    name: "Security Cabin",
    description: "Round-the-clock security",
  },
  {
    icon: Camera,
    name: "CCTV Zone",
    description: "Complete surveillance coverage",
  },
  {
    icon: Waves,
    name: "Common Toilet",
    description: "Shared facilities near common areas",
  },
  {
    icon: Flame,
    name: "Fire Safety",
    description: "Fire protection systems",
  },
  {
    icon: Flower2,
    name: "Landscaped Garden",
    description: "Beautiful green spaces",
  },
  {
    icon: Armchair,
    name: "Senior Citizen Seatout",
    description: "Dedicated senior seating area",
  },
  {
    icon: Car,
    name: "Basement Parking",
    description: "Covered underground parking",
  },
  {
    icon: Grid3x3,
    name: "Internal Paved Area",
    description: "Smooth internal pathways",
  },
  {
    icon: Dumbbell,
    name: "Gym",
    description: "Modern fitness center",
  },
  {
    icon: Briefcase,
    name: "Society Office",
    description: "On-site management office",
  },
  {
    icon: Baby,
    name: "Children Play Area",
    description: "Safe play zones for kids",
  },
  {
    icon: Zap,
    name: "Underground Electric Lines",
    description: "Safe concealed wiring",
  },
  {
    icon: ArrowUpDown,
    name: "2 Lift in Each Block",
    description: "Convenient vertical access",
  },
  {
    icon: Droplets,
    name: "24 Hrs Water Supply",
    description: "Continuous water availability",
  },
  {
    icon: Building2,
    name: "Multipurpose Hall",
    description: "Events & celebrations space",
  },
  {
    icon: BatteryCharging,
    name: "Power Back Up",
    description: "Uninterrupted power supply",
  },
  {
    icon: Lightbulb,
    name: "Street Light",
    description: "Well-lit pathways & roads",
  },
  {
    icon: Leaf,
    name: "Swing Area",
    description: "Outdoor leisure area",
  },
  {
    icon: Smile,
    name: "Toddler Play Area",
    description: "Safe zone for toddlers",
  },
  {
    icon: LayoutGrid,
    name: "Multipurpose Court",
    description: "Sports & recreation court",
  },
  {
    icon: Sun,
    name: "Solar Backup",
    description: "Eco-friendly energy source",
  },
];

const floorPlans = [
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
  // {
  //   name: "2 BHK - Type B",
  //   size: "1,280 sq.ft.",
  //   price: "₹72 Lakhs*",
  //   bedrooms: 2,
  //   bathrooms: 2,
  //   features: [
  //     "Living Room",
  //     "Dining Area",
  //     "Modular Kitchen",
  //     "2 Bedrooms",
  //     "2 Bathrooms",
  //     "2 Balconies",
  //     "Utility Area",
  //   ],
  // },
];

const highlights = [
  "RERA Registered",
  "Premium Location",
  "Mountain Views",
  "Modern Architecture",
  "Vastu Compliant",
  "Earthquake Resistant",
];

export default function ShivyanHeightsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-20">
          {/* hero wrapper now has a gradient fallback so it never looks completely blank */}
          <div className="relative min-h-[70vh] flex flex-col justify-end bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
            {/* Split 2-image hero background */}
            <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
              <img
                src="/shivyanHeights/page_3.png"
                alt="Shivyan heights - Tower A Exterior"
                className="w-full h-full object-cover object-center"
              />
              <img
                src="/shivyanHeights/page_2.png"
                alt="Shivyan heights - Tower B Exterior"
                className="hidden md:block w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />

            <div className="relative w-full p-6 pt-24 md:p-16">
              <div className="mx-auto max-w-7xl">
                <Badge className="bg-green-500/90 text-white border-0 mb-4">
                  Now Selling
                </Badge>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  Shivyan heights
                </h1>
                <div className="flex items-center gap-2 mt-4 text-white">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">
                    near vaishnodevi, Sp Ring read near lilapur, Ahmedabad
                  </span>
                </div>
                <p className="mt-4 text-white max-w-2xl text-lg mb-8">
                  Affortable 2 BHK flats in ahmedabad, near vaishnodevi circle
                  and world-class amenities in Ahmedabad&apos;s most sought-after
                  location.
                </p>

                {/* Quick Stats */}
                <div className="mt-8 flex flex-col gap-3">
                  {/* 2 BHK Row */}
                  <div className="flex flex-wrap gap-4 items-center">
                    <span className="text-white/50 text-xs uppercase tracking-widest font-medium w-10">
                      Flat
                    </span>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                      <div className="flex items-center gap-2 text-white">
                        <Home className="h-5 w-5" />
                        <span className="font-semibold">2 BHK</span>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                      <div className="flex items-center gap-2 text-white">
                        <Maximize className="h-5 w-5" />
                        <span className="font-semibold">161 - 164 sq.yd.</span>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                      <div className="flex items-center gap-2 text-white">
                        <IndianRupee className="h-5 w-5" />
                        <span className="font-semibold">
                          Starting ₹56 Lakhs
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Shop Row */}
                  <div className="flex flex-wrap gap-4 items-center">
                    <span className="text-white/50 text-xs uppercase tracking-widest font-medium w-10">
                      Shop
                    </span>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                      <div className="flex items-center gap-2 text-white">
                        <Store className="h-5 w-5" />
                        <span className="font-semibold">Commercial Shop</span>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                      <div className="flex items-center gap-2 text-white">
                        <Maximize className="h-5 w-5" />
                        <span className="font-semibold">500 - 1100 sq.ft.</span>
                      </div>
                    </div>
                    {/* <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                      <div className="flex items-center gap-2 text-white">
                        <IndianRupee className="h-5 w-5" />
                        <span className="font-semibold">
                          Starting ₹10 Lakhs
                        </span>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Content - 2/3 */}
              <div className="lg:col-span-2 min-w-0">
                {/* Tabs */}
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="w-full justify-start bg-muted overflow-x-auto flex-nowrap no-scrollbar">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="gallery">Gallery</TabsTrigger>
                    <TabsTrigger value="amenities">Amenities</TabsTrigger>
                    <TabsTrigger value="floorplans">Floor Plans</TabsTrigger>
                    <TabsTrigger value="location">Location</TabsTrigger>
                  </TabsList>

                  {/* Overview Tab */}
                  <TabsContent value="overview" className="mt-8">
                    <h2 className="font-serif text-3xl font-bold text-foreground">
                      About Shivyan heights
                    </h2>
                    <div className="mt-6 prose prose-lg max-w-none text-muted-foreground">
                      <p>
                        Shivyan heights is Apex Home{"'"}s flagship residential
                        project, offering a perfect blend of Affortable,
                        comfort, and natural beauty.This development provides
                        residents with easy access to the city{"'"}s best
                        schools, hospitals, shopping centers, and entertainment
                        venues.
                      </p>
                      <p>
                        With thoughtfully designed 2 BHK apartments ranging from
                        161 to 164 sq.yd., Shivyan heights caters to diverse
                        family needs. Every unit is crafted to maximize natural
                        light, ventilation, and offers stunning views of the
                        surrounding mountains.
                      </p>
                      <p>
                        The project features over 15 world-class amenities
                        including a swimming pool, modern gymnasium, landscaped
                        gardens, and 24/7 security, ensuring a lifestyle that
                        {"'"}s both comfortable and secure.
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="mt-8">
                      <h3 className="font-semibold text-foreground mb-4">
                        Project Highlights
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle className="h-5 w-5 text-primary" />
                            <span className="text-muted-foreground">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Residential Details */}
                    <div className="mt-8">
                      <h3 className="text-xl font-bold text-foreground mb-4">
                        Apartments
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-muted rounded-lg p-6">
                          <h4 className="font-semibold text-foreground">
                            Project Details
                          </h4>
                          <dl className="mt-4 space-y-3">
                            <div className="flex justify-between">
                              <dt className="text-muted-foreground">
                                Project Type
                              </dt>
                              <dd className="font-medium text-foreground">
                                Residential Apartments
                              </dd>
                            </div>
                            <div className="flex justify-between">
                              <dt className="text-muted-foreground">
                                Total Units
                              </dt>
                              <dd className="font-medium text-foreground">
                                100 Units
                              </dd>
                            </div>
                            <div className="flex justify-between">
                              <dt className="text-muted-foreground">
                                Configurations
                              </dt>
                              <dd className="font-medium text-foreground">
                                2 BHK
                              </dd>
                            </div>
                            <div className="flex justify-between">
                              <dt className="text-muted-foreground">
                                Possession
                              </dt>
                              <dd className="font-medium text-foreground">
                                Dec 2025
                              </dd>
                            </div>
                          </dl>
                        </div>
                        <div className="bg-muted rounded-lg p-6">
                          <h4 className="font-semibold text-foreground">
                            Pricing
                          </h4>
                          <dl className="mt-4 space-y-3">
                            <div className="flex justify-between">
                              <dt className="text-muted-foreground">2 BHK</dt>
                              <dd className="font-medium text-primary">
                                ₹56 Lakhs
                              </dd>
                            </div>
                            <div className="flex justify-between">
                              <dt className="text-muted-foreground">
                                Price per sq.ft.
                              </dt>
                              <dd className="font-medium text-foreground">
                                ₹5,650 onwards
                              </dd>
                            </div>
                            <div className="flex justify-between">
                              <dt className="text-muted-foreground">
                                Booking Amount
                              </dt>
                              <dd className="font-medium text-foreground">
                                ₹2 Lakhs
                              </dd>
                            </div>
                          </dl>
                        </div>
                      </div>
                    </div>

                    {/* Commercial Shops Details */}
                    <div className="mt-8">
                      <h3 className="text-xl font-bold text-foreground mb-4">
                        Commercial Shops
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-muted rounded-lg p-6">
                          <h4 className="font-semibold text-foreground">
                            Project Details
                          </h4>
                          <dl className="mt-4 space-y-3">
                            <div className="flex justify-between">
                              <dt className="text-muted-foreground">
                                Project Type
                              </dt>
                              <dd className="font-medium text-foreground">
                                Commercial Shops
                              </dd>
                            </div>
                            <div className="flex justify-between">
                              <dt className="text-muted-foreground">
                                Total Units
                              </dt>
                              <dd className="font-medium text-foreground">
                                11 Shops
                              </dd>
                            </div>
                            <div className="flex justify-between">
                              <dt className="text-muted-foreground">
                                Configurations
                              </dt>
                              <dd className="font-medium text-foreground">
                                500 - 1100 sq.ft.
                              </dd>
                            </div>
                            <div className="flex justify-between">
                              <dt className="text-muted-foreground">
                                Possession
                              </dt>
                              <dd className="font-medium text-foreground">
                                Dec 2025
                              </dd>
                            </div>
                          </dl>
                        </div>
                        {/* <div className="bg-muted rounded-lg p-6">
                          <h4 className="font-semibold text-foreground">
                            Pricing
                          </h4>
                          <dl className="mt-4 space-y-3">
                            <div className="flex justify-between">
                              <dt className="text-muted-foreground">Shop</dt>
                              <dd className="font-medium text-primary">
                                Starting ₹10 Lakhs
                              </dd>
                            </div>
                            <div className="flex justify-between">
                              <dt className="text-muted-foreground">
                                Price per sq.ft.
                              </dt>
                              <dd className="font-medium text-foreground">
                                ₹2,000 onwards
                              </dd>
                            </div>
                            <div className="flex justify-between">
                              <dt className="text-muted-foreground">
                                Booking Amount
                              </dt>
                              <dd className="font-medium text-foreground">
                                ₹1 Lakh
                              </dd>
                            </div>
                          </dl>
                        </div> */}
                      </div>
                    </div>
                  </TabsContent>

                  {/* Gallery Tab */}
                  <TabsContent value="gallery" className="mt-8">
                    <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                      Project Gallery
                    </h2>
                    <ImageGallery images={projectImages} />
                  </TabsContent>

                  {/* Amenities Tab */}
                  <TabsContent value="amenities" className="mt-8">
                    <h2 className="font-serif text-3xl font-bold text-foreground">
                      World-Class Amenities
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                      Shivyan heights offers over 15 premium amenities designed
                      to enhance your lifestyle.
                    </p>
                    <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {amenities.map((amenity) => (
                        <div
                          key={amenity.name}
                          className="bg-card p-6 rounded-lg border border-border hover:border-primary/30 transition-colors"
                        >
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <amenity.icon className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="mt-4 font-semibold text-card-foreground">
                            {amenity.name}
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {amenity.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Floor Plans Tab */}
                  <TabsContent value="floorplans" className="mt-8">
                    <h2 className="font-serif text-3xl font-bold text-foreground">
                      Floor Plans
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                      Choose from our range of thoughtfully designed
                      configurations.
                    </p>

                    {/* Detailed Unit Plans */}
                    <div className="mt-8 grid sm:grid-cols-2 gap-6">
                      <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
                        <img
                          src="/shivyanHeights/page_9.png"
                          alt="2 BHK Type-A Floor Plan"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
                        <img
                          src="/shivyanHeights/page_10.png"
                          alt="2 BHK Type-C Floor Plan"
                          className="w-full h-auto"
                        />
                      </div>
                    </div>

                    {/* Floor Plan Details */}
                    <div className="mt-8 grid sm:grid-cols-2 gap-6">
                      {floorPlans.map((plan) => (
                        <div
                          key={plan.name}
                          className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
                        >
                          <div className="bg-muted p-6">
                            <h3 className="font-serif text-xl font-bold text-card-foreground">
                              {plan.name}
                            </h3>
                            <p className="text-primary text-2xl font-bold mt-2">
                              {plan.price}
                            </p>
                          </div>
                          <div className="p-6">
                            <div className="flex items-center gap-4 text-muted-foreground">
                              <span>{plan.size}</span>
                              <span>|</span>
                              <span>{plan.bedrooms} Bed</span>
                              <span>|</span>
                              <span>{plan.bathrooms} Bath</span>
                            </div>
                            <ul className="mt-4 space-y-2">
                              {plan.features.map((feature) => (
                                <li
                                  key={feature}
                                  className="flex items-center gap-2 text-sm text-muted-foreground"
                                >
                                  <CheckCircle className="h-4 w-4 text-primary" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            <Button
                              asChild
                              className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                            >
                              <Link href="/contact">Request Floor Plan</Link>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="mt-6 text-xs text-muted-foreground">
                      * Prices are indicative and subject to change. Please
                      contact us for the latest pricing.
                    </p>
                  </TabsContent>

                  {/* Location Tab */}
                  <TabsContent value="location" className="mt-8">
                    <h2 className="font-serif text-3xl font-bold text-foreground">
                      Prime Location
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                      Shivyan heights is strategically located on Rajpur Road,
                      providing easy access to all essential amenities and
                      attractions.
                    </p>

                    {/* Map embedded as background */}
                    <div className="mt-8 relative rounded-xl aspect-video overflow-hidden">
                      <iframe
                        src="https://maps.google.com/maps?q=Rajpur%20Road%20Ahmedabad&output=embed"
                        className="absolute inset-0 w-full h-full"
                        loading="lazy"
                      />
                      {/* dark overlay to keep text readable */}
                      <div className="absolute inset-0 bg-background/50" />
                      <div className="relative flex items-center justify-center h-full">
                        <div className="text-center">
                          <MapPin className="h-12 w-12 text-muted-foreground mx-auto" />
                          <p className="mt-4 text-muted-foreground">
                            Vaishnodevi, Sp Ring read near lilapur, Ahmedabad
                          </p>
                          <Button
                            asChild
                            className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
                          >
                            <a
                              href="https://maps.google.com/?q=Rajpur+Road+Ahmedabad"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View on Google Maps
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Nearby Places */}
                    {/* <div className="mt-8 grid sm:grid-cols-2 gap-6">
                      <div className="bg-card rounded-lg p-6 border border-border">
                        <h4 className="font-semibold text-card-foreground mb-4">
                          Nearby Landmarks
                        </h4>
                        <ul className="space-y-3">
                          <li className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              Clock Tower
                            </span>
                            <span className="text-foreground">2 km</span>
                          </li>
                          <li className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              ISBT Ahmedabad
                            </span>
                            <span className="text-foreground">5 km</span>
                          </li>
                          <li className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              Ahmedabad Railway Station
                            </span>
                            <span className="text-foreground">4 km</span>
                          </li>
                          <li className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              Jolly Grant Airport
                            </span>
                            <span className="text-foreground">25 km</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-card rounded-lg p-6 border border-border">
                        <h4 className="font-semibold text-card-foreground mb-4">
                          Schools & Colleges
                        </h4>
                        <ul className="space-y-3">
                          <li className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              The Doon School
                            </span>
                            <span className="text-foreground">3 km</span>
                          </li>
                          <li className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              Welham Girls School
                            </span>
                            <span className="text-foreground">2 km</span>
                          </li>
                          <li className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              St. Joseph{"'"}s Academy
                            </span>
                            <span className="text-foreground">1.5 km</span>
                          </li>
                          <li className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              DIT University
                            </span>
                            <span className="text-foreground">15 km</span>
                          </li>
                        </ul>
                      </div>
                    </div> */}
                  </TabsContent>
                </Tabs>
              </div>

              {/* Right Sidebar - 1/3 */}
              <div className="lg:col-span-1 space-y-8">
                {/* Inquiry Form */}
                <InquiryForm projectName="Shivyan heights" />

                {/* Quick Actions */}
                <div className="bg-card rounded-xl p-6 shadow-lg space-y-4">
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <a href="tel:+919409751929">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-border bg-transparent"
                    asChild
                  >
                    <a href="/apartment.pdf" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Brochure
                    </a>
                  </Button>
                </div>

                {/* Sales Office */}
                <div className="bg-muted rounded-xl p-6">
                  <h4 className="font-semibold text-foreground">
                    Sales Office
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Vaishnodevi, Sp Ring read near lilapur,
                    <br />
                    Ahmedabad, Gujarat 382481
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    <strong>Hours:</strong> Mon-Sun, 10 AM - 7 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
