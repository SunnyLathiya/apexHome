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
  Building2,
  Car,
  Dumbbell,
  Flower2,
  MapPin,
  Shield,
  Smartphone,
  Sparkles,
  Sun,
  Tv,
  Users,
  Waves,
  Wind,
  Download,
  Phone,
  CheckCircle,
  Home,
  Maximize,
  IndianRupee,
} from "lucide-react";

export const metadata: Metadata = {
  title: "MShivalik | Premium Residential Apartments in Dehradun | Apex Home",
  description:
    "Discover MShivalik - Premium 2 & 3 BHK apartments in Rajpur Road, Dehradun with stunning mountain views, modern amenities, and world-class facilities. Starting from ₹65 Lakhs.",
  keywords: [
    "MShivalik",
    "apartments in Dehradun",
    "2 BHK Dehradun",
    "3 BHK Dehradun",
    "Rajpur Road",
    "Apex Home",
  ],
};

const projectImages = [
  {
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    alt: "MShivalik Exterior View",
    category: "exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    alt: "Building Facade",
    category: "exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    alt: "Living Room Interior",
    category: "interior",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    alt: "Master Bedroom",
    category: "interior",
  },
  {
    src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop",
    alt: "Modern Kitchen",
    category: "interior",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    alt: "Dining Area",
    category: "interior",
  },
  {
    src: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2084&auto=format&fit=crop",
    alt: "Swimming Pool",
    category: "amenities",
  },
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    alt: "Fitness Center",
    category: "amenities",
  },
];

const amenities = [
  {
    icon: Waves,
    name: "Swimming Pool",
    description: "Temperature-controlled pool",
  },
  {
    icon: Dumbbell,
    name: "Modern Gym",
    description: "State-of-the-art fitness center",
  },
  {
    icon: Flower2,
    name: "Landscaped Gardens",
    description: "Beautiful green spaces",
  },
  { icon: Users, name: "Clubhouse", description: "Community gathering space" },
  { icon: Shield, name: "24/7 Security", description: "CCTV & gated access" },
  {
    icon: Car,
    name: "Covered Parking",
    description: "Dedicated parking spots",
  },
  {
    icon: Sparkles,
    name: "Kids Play Area",
    description: "Safe play zones for children",
  },
  { icon: Sun, name: "Rooftop Terrace", description: "Mountain view terrace" },
  {
    icon: Smartphone,
    name: "Smart Home",
    description: "Home automation ready",
  },
  { icon: Wind, name: "Power Backup", description: "100% power backup" },
  { icon: Tv, name: "Media Room", description: "Entertainment center" },
  {
    icon: Building2,
    name: "Multipurpose Hall",
    description: "Events & celebrations",
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
  {
    name: "2 BHK - Type B",
    size: "1,280 sq.ft.",
    price: "₹72 Lakhs*",
    bedrooms: 2,
    bathrooms: 2,
    features: [
      "Living Room",
      "Dining Area",
      "Modular Kitchen",
      "2 Bedrooms",
      "2 Bathrooms",
      "2 Balconies",
      "Utility Area",
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
  {
    name: "3 BHK - Type B",
    size: "1,850 sq.ft.",
    price: "₹1.05 Cr*",
    bedrooms: 3,
    bathrooms: 3,
    features: [
      "Living Room",
      "Dining Area",
      "Modular Kitchen",
      "3 Bedrooms",
      "3 Bathrooms",
      "3 Balconies",
      "Study",
      "Servant Room",
    ],
  },
];

const highlights = [
  "RERA Registered",
  "Premium Location",
  "Mountain Views",
  "Modern Architecture",
  "Vastu Compliant",
  "Earthquake Resistant",
];

export default function MSHivalikPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-20">
          <div className="relative h-[70vh] min-h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"
              alt="MShivalik - Premium Residential Project"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
              <div className="mx-auto max-w-7xl">
                <Badge className="bg-green-500/90 text-white border-0 mb-4">
                  Now Selling
                </Badge>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  MShivalik
                </h1>
                <div className="flex items-center gap-2 mt-4 text-white/80">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">
                    Rajpur Road, Dehradun, Uttarakhand
                  </span>
                </div>
                <p className="mt-4 text-white/70 max-w-2xl text-lg">
                  Premium 2 & 3 BHK apartments with panoramic mountain views and
                  world-class amenities in Dehradun{"'"}s most sought-after
                  location.
                </p>

                {/* Quick Stats */}
                <div className="mt-8 flex flex-wrap gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                    <div className="flex items-center gap-2 text-white">
                      <Home className="h-5 w-5" />
                      <span className="font-semibold">2 & 3 BHK</span>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                    <div className="flex items-center gap-2 text-white">
                      <Maximize className="h-5 w-5" />
                      <span className="font-semibold">
                        1,150 - 1,850 sq.ft.
                      </span>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                    <div className="flex items-center gap-2 text-white">
                      <IndianRupee className="h-5 w-5" />
                      <span className="font-semibold">Starting ₹65 Lakhs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left Content - 2/3 */}
              <div className="lg:col-span-2">
                {/* Tabs */}
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="w-full justify-start bg-muted overflow-x-auto flex-nowrap">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="gallery">Gallery</TabsTrigger>
                    <TabsTrigger value="amenities">Amenities</TabsTrigger>
                    <TabsTrigger value="floorplans">Floor Plans</TabsTrigger>
                    <TabsTrigger value="location">Location</TabsTrigger>
                  </TabsList>

                  {/* Overview Tab */}
                  <TabsContent value="overview" className="mt-8">
                    <h2 className="font-serif text-3xl font-bold text-foreground">
                      About MShivalik
                    </h2>
                    <div className="mt-6 prose prose-lg max-w-none text-muted-foreground">
                      <p>
                        MShivalik is Apex Home{"'"}s flagship residential
                        project, offering a perfect blend of luxury, comfort,
                        and natural beauty. Located on the prestigious Rajpur
                        Road, this development provides residents with easy
                        access to the city{"'"}s best schools, hospitals,
                        shopping centers, and entertainment venues.
                      </p>
                      <p>
                        With thoughtfully designed 2 & 3 BHK apartments ranging
                        from 1,150 to 1,850 sq.ft., MShivalik caters to diverse
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

                    {/* Project Details */}
                    <div className="mt-8 grid sm:grid-cols-2 gap-6">
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
                              120+ Units
                            </dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">
                              Configurations
                            </dt>
                            <dd className="font-medium text-foreground">
                              2 & 3 BHK
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
                              ₹65 - 72 Lakhs
                            </dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">3 BHK</dt>
                            <dd className="font-medium text-primary">
                              ₹89 Lakhs - 1.05 Cr
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
                      MShivalik offers over 15 premium amenities designed to
                      enhance your lifestyle.
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
                      MShivalik is strategically located on Rajpur Road,
                      providing easy access to all essential amenities and
                      attractions.
                    </p>

                    {/* Map Placeholder */}
                    <div className="mt-8 bg-muted rounded-xl aspect-video flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-muted-foreground mx-auto" />
                        <p className="mt-4 text-muted-foreground">
                          Rajpur Road, Dehradun, Uttarakhand
                        </p>
                        <Button
                          asChild
                          className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
                        >
                          <a
                            href="https://maps.google.com/?q=Rajpur+Road+Dehradun"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View on Google Maps
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Nearby Places */}
                    <div className="mt-8 grid sm:grid-cols-2 gap-6">
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
                              ISBT Dehradun
                            </span>
                            <span className="text-foreground">5 km</span>
                          </li>
                          <li className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              Dehradun Railway Station
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
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Right Sidebar - 1/3 */}
              <div className="lg:col-span-1 space-y-8">
                {/* Inquiry Form */}
                <InquiryForm projectName="MShivalik" />

                {/* Quick Actions */}
                <div className="bg-card rounded-xl p-6 shadow-lg space-y-4">
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <a href="tel:+919876543210">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-border bg-transparent"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Brochure
                  </Button>
                </div>

                {/* Sales Office */}
                <div className="bg-muted rounded-xl p-6">
                  <h4 className="font-semibold text-foreground">
                    Sales Office
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    123 Business Park, Rajpur Road,
                    <br />
                    Dehradun, Uttarakhand 248001
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
