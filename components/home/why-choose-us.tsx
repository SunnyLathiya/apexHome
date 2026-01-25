import { Building2, Clock, Handshake, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react"

const reasons = [
  {
    icon: Building2,
    title: "Premium Quality Construction",
    description: "We use only the finest materials and employ skilled craftsmen to ensure every home meets the highest standards of quality and durability.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We understand the importance of timely possession. Our track record speaks for itself with 100% on-time project deliveries.",
  },
  {
    icon: Handshake,
    title: "Transparent Dealings",
    description: "No hidden costs, no surprises. We believe in complete transparency in all our transactions and communications.",
  },
  {
    icon: ShieldCheck,
    title: "Legal Compliance",
    description: "All our projects are RERA registered and comply with all necessary legal requirements for your peace of mind.",
  },
  {
    icon: HeartHandshake,
    title: "After-Sales Support",
    description: "Our relationship doesn't end at possession. We provide dedicated support for all your post-purchase needs.",
  },
  {
    icon: Sparkles,
    title: "Modern Amenities",
    description: "From smart home features to world-class amenities, we ensure your lifestyle is enhanced in every way possible.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium">
            Why Choose Us
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            The Apex Home Difference
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We don{"'"}t just build homes—we create lasting relationships built on trust, 
            quality, and an unwavering commitment to your satisfaction.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title}
              className="group p-8 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <reason.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-semibold text-card-foreground">
                {reason.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
