import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Projects | Apex Property - Premium Real Estate Developer",
  description:
    "Explore our premium residential projects in Ahmedabad. From ongoing developments to upcoming projects, find your perfect home with Apex Property.",
};

const projects = [
  {
    id: "Shivyan-heights",
    name: "Shivyan heights",
    location:
      "Vaishnodevi, sp Ring road, near lilapur, Ahmedabad, Gujarat 382471",
    status: "ongoing",
    type: "Residential",
    units: "100 Units",
    size: "2 BHK",
    priceRange: "Starting from ₹65 Lakhs",
    // use main Shivyan Heights exterior shot from public folder
    image: "/shivyanHeights/page_3.png",
    description:
      "Premium residential apartments with stunning mountain views and world-class amenities.",
    highlights: [
      "Mountain Views",
      "Modern Amenities",
      "Prime Location",
      "RERA Registered",
    ],
  },
  // Add more projects here as they become available
];

const statusColors = {
  upcoming: "bg-blue-500/10 text-blue-600 border-blue-200",
  ongoing: "bg-green-500/10 text-green-600 border-green-200",
  completed: "bg-gray-500/10 text-gray-600 border-gray-200",
};

const statusLabels = {
  upcoming: "Upcoming",
  ongoing: "Now Selling",
  completed: "Completed",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-primary-foreground/70 uppercase tracking-[0.2em] text-sm font-medium">
                Our Projects
              </p>
              <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Discover Your Perfect Home
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">
                Explore our thoughtfully designed residential projects that
                combine modern living with the natural beauty of Ahmedabad.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Filter tabs - for future use */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                variant="default"
                className="bg-primary text-primary-foreground"
              >
                All Projects
              </Button>
              <Button
                variant="outline"
                className="border-border bg-transparent"
              >
                Ongoing
              </Button>
              <Button
                variant="outline"
                className="border-border bg-transparent"
              >
                Upcoming
              </Button>
              <Button
                variant="outline"
                className="border-border bg-transparent"
              >
                Completed
              </Button>
            </div>

            {/* Projects */}
            <div className="grid gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="grid lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px]">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                      <Badge
                        className={`absolute top-6 left-6 ${statusColors[project.status as keyof typeof statusColors]} uppercase text-xs tracking-wider`}
                      >
                        {
                          statusLabels[
                            project.status as keyof typeof statusLabels
                          ]
                        }
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <h2 className="font-serif text-3xl lg:text-4xl font-bold text-card-foreground">
                        {project.name}
                      </h2>
                      <div className="flex items-center gap-2 mt-4 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                      </div>
                      <p className="mt-6 text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.highlights.map((highlight) => (
                          <Badge
                            key={highlight}
                            variant="secondary"
                            className="bg-muted text-muted-foreground"
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>

                      {/* Details */}
                      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div className="p-3 bg-muted rounded-lg text-center">
                          <p className="text-xs text-muted-foreground">Type</p>
                          <p className="font-medium text-foreground text-sm mt-1">
                            {project.type}
                          </p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg text-center">
                          <p className="text-xs text-muted-foreground">
                            Config
                          </p>
                          <p className="font-medium text-foreground text-sm mt-1">
                            {project.size}
                          </p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg text-center">
                          <p className="text-xs text-muted-foreground">Units</p>
                          <p className="font-medium text-foreground text-sm mt-1">
                            {project.units}
                          </p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg text-center">
                          <p className="text-xs text-muted-foreground">Price</p>
                          <p className="font-medium text-primary text-sm mt-1">
                            ₹65L+
                          </p>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <Button
                          asChild
                          className="bg-primary hover:bg-primary/90 text-primary-foreground"
                        >
                          <Link href={`/projects/${project.id}`}>
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          className="border-border hover:bg-muted bg-transparent"
                        >
                          <Link href="/contact">Schedule Site Visit</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Coming Soon */}
            <div className="mt-16 text-center">
              <div className="bg-muted/50 rounded-2xl p-12">
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  More Projects Coming Soon
                </h3>
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                  We{"'"}re constantly working on new developments to bring you
                  more options. Subscribe to our newsletter to be the first to
                  know about upcoming projects.
                </p>
                <Button
                  asChild
                  className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Link href="/contact">Get Notified</Link>
                </Button>
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
