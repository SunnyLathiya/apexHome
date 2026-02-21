import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import {
  Award,
  Building2,
  Clock,
  Heart,
  Shield,
  Target,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Apex Property - Premium Real Estate Developer",
  description:
    "Learn about Apex Property - Ahmedabad's trusted real estate developer with 15+ years of experience building quality homes and lasting relationships.",
};

const milestones = [
  {
    year: "2009",
    title: "Foundation",
    description:
      "Apex Home was founded with a vision to redefine real estate in Dehradun",
  },
  {
    year: "2012",
    title: "First Project",
    description:
      "Successfully completed our first residential project with 50 happy families",
  },
  {
    year: "2015",
    title: "Expansion",
    description:
      "Expanded our portfolio to include premium segment residential projects",
  },
  {
    year: "2020",
    title: "500+ Families",
    description: "Crossed the milestone of delivering homes to 500+ families",
  },
  {
    year: "2024",
    title: "Mshivalik Launch",
    description:
      "Launched our flagship project Mshivalik with 120+ premium units",
  },
];

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We believe in honest and transparent dealings in every transaction.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "We never compromise on the quality of construction and materials.",
  },
  {
    icon: Clock,
    title: "Commitment",
    description:
      "We honor our commitments and deliver projects on time, every time.",
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description:
      "Your satisfaction and happiness are at the heart of everything we do.",
  },
];

const team = [
  {
    name: "Rushik Ramani",
    role: "Founder & Managing Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    bio: "With over 25 years of experience in real estate, Rushik founded Apex Home with a vision to build homes that families cherish for generations.",
  },
  {
    name: "Rahul Mehta",
    role: "Head - Sales & Marketing",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    bio: "Rahul leads our sales team with a customer-first approach, helping families find their perfect home.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-primary-foreground/70 uppercase tracking-[0.2em] text-sm font-medium">
                About Us
              </p>
              <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Building Dreams Since 2009
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">
                For over 15 years, Apex Home has been transforming the real
                estate landscape of Dehradun, one quality home at a time.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-[4/5] rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                    alt="Modern architecture"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div>
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="h-6 w-6 text-primary" />
                    <h2 className="font-serif text-2xl font-bold text-foreground">
                      Our Mission
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To create exceptional living spaces that combine modern
                    design, superior quality, and sustainable practices, making
                    homeownership dreams accessible to families across Dehradun
                    and beyond.
                  </p>
                </div>

                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="h-6 w-6 text-primary" />
                    <h2 className="font-serif text-2xl font-bold text-foreground">
                      Our Vision
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the most trusted and preferred real estate developer
                    in Ahmedabad, known for our unwavering commitment to
                    quality, innovation, and customer satisfaction.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="font-serif text-3xl font-bold text-primary">
                      15+
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">Years</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="font-serif text-3xl font-bold text-primary">
                      500+
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Families
                    </p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="font-serif text-3xl font-bold text-primary">
                      10+
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Message */}
        <section className="py-24 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-lg">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
                      alt="Rushik Ramani - Founder"
                      className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
                    />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-card-foreground">
                      A Message from Our Founder
                    </h2>
                    <blockquote className="mt-4 text-muted-foreground leading-relaxed italic">
                      {'"'}When I started Apex Home in 2009, I had a simple
                      dream - to build homes that families would love and
                      cherish for generations. Today, seeing over 500 families
                      happily settled in our developments fills me with immense
                      pride and gratitude.
                      <br />
                      <br />
                      At Apex Home, we don{"'"}t just construct buildings; we
                      create communities, nurture relationships, and deliver on
                      our promises. Every project we undertake is infused with
                      our commitment to quality, transparency, and customer
                      satisfaction.
                      <br />
                      <br />
                      Thank you for considering us as your partner in finding
                      your dream home. We look forward to welcoming you to the
                      Apex Home family.{'"'}
                    </blockquote>
                    <div className="mt-6">
                      <p className="font-semibold text-card-foreground">
                        Vikram Singh
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Founder & Managing Director
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium">
                Our Values
              </p>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-foreground">
                What Drives Us
              </h2>
            </div>

            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium">
                Our Journey
              </p>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-foreground">
                Key Milestones
              </h2>
            </div>

            <div className="mt-16 relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`relative flex flex-col md:flex-row gap-8 items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                    >
                      <div className="bg-card p-6 rounded-lg shadow-sm">
                        <p className="font-serif text-2xl font-bold text-primary">
                          {milestone.year}
                        </p>
                        <h3 className="mt-2 font-semibold text-card-foreground">
                          {milestone.title}
                        </h3>
                        <p className="mt-2 text-muted-foreground">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium">
                Our Team
              </p>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-foreground">
                Meet the People Behind Apex Home
              </h2>
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-card rounded-xl overflow-hidden shadow-lg"
                >
                  <div className="aspect-[4/3]">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-card-foreground">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm font-medium mt-1">
                      {member.role}
                    </p>
                    <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
