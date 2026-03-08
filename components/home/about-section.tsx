import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description: "Every detail is meticulously crafted to perfection",
  },
  {
    icon: Shield,
    title: "Trusted Developer",
    description: "15+ years of building homes and relationships",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our top priority",
  },
];

export function AboutSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury home interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8 rounded-lg shadow-xl max-w-xs hidden md:block">
              <p className="font-serif text-4xl font-bold">15+</p>
              <p className="text-sm mt-1 opacity-90">
                Years of Excellence in Real Estate
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:pl-8">
            <p className="text-[#b5704d] uppercase tracking-[0.2em] text-sm font-medium">
              About Apex Property
            </p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              Building Dreams Into Reality Since 2009
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              At Apex Property, we believe that a home is more than just a
              structure—it{"'"}s where memories are made, families grow, and
              dreams come alive. With over 15 years of experience in the real
              estate industry, we have established ourselves as one of Ahmedabad
              {"'"}s most trusted developers.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our commitment to quality construction, timely delivery, and
              transparent dealings has earned us the trust of hundreds of
              families who now call our developments their home.
            </p>

            {/* Features */}
            <div className="mt-10 grid gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              asChild
              className="mt-10 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
