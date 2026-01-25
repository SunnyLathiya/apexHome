import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Home, Maximize } from "lucide-react";

const projects = [
  {
    id: "mshivalik",
    name: "MShivalik",
    location: "Rajpur Road, Dehradun",
    status: "ongoing",
    type: "Residential",
    units: "120+ Units",
    size: "2 & 3 BHK",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    description:
      "Premium residential apartments with stunning mountain views and world-class amenities.",
    featured: true,
  },
];

const statusColors = {
  upcoming: "bg-blue-500/10 text-blue-600 border-blue-200",
  ongoing: "bg-green-500/10 text-green-600 border-green-200",
  completed: "bg-gray-500/10 text-gray-600 border-gray-200",
};

export function FeaturedProjects() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium">
            Our Projects
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Featured Developments
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully crafted residential projects designed to offer
            the perfect blend of comfort, luxury, and modern living.
          </p>
        </div>

        {/* Featured Project - Large Card */}
        {projects
          .filter((p) => p.featured)
          .map((project) => (
            <div key={project.id} className="mt-16">
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="grid lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative aspect-[4/3] lg:aspect-auto">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge
                      className={`absolute top-6 left-6 ${statusColors[project.status as keyof typeof statusColors]} uppercase text-xs tracking-wider`}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="font-serif text-3xl lg:text-4xl font-bold text-card-foreground">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-4 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <p className="mt-6 text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Project Details */}
                    <div className="mt-8 grid grid-cols-3 gap-6">
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <Home className="h-5 w-5 mx-auto text-primary" />
                        <p className="mt-2 text-sm font-medium text-foreground">
                          {project.type}
                        </p>
                      </div>
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <Maximize className="h-5 w-5 mx-auto text-primary" />
                        <p className="mt-2 text-sm font-medium text-foreground">
                          {project.size}
                        </p>
                      </div>
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <span className="text-lg font-bold text-primary">
                          {project.units.split(" ")[0]}
                        </span>
                        <p className="mt-1 text-sm font-medium text-foreground">
                          Units
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
                          View Project Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-border hover:bg-muted bg-transparent"
                      >
                        <Link href="/contact">Schedule a Visit</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* View All Projects */}
        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
