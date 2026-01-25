import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, ArrowRight } from "lucide-react"

export function ContactCTA() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-card rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Image Side */}
            <div className="relative min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop"
                alt="Luxury home"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/80" />
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground">
                    Ready to Find Your Dream Home?
                  </h3>
                  <p className="mt-4 text-primary-foreground/80 max-w-md mx-auto">
                    Let our experts guide you through the journey of finding the perfect property 
                    that matches your lifestyle and aspirations.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Side */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-card-foreground">
                Get in Touch Today
              </h3>
              <p className="mt-4 text-muted-foreground">
                Our team is ready to assist you with any questions about our projects, 
                pricing, or the buying process.
              </p>

              {/* Contact Options */}
              <div className="mt-8 space-y-4">
                <a 
                  href="tel:+919876543210"
                  className="flex items-center gap-4 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call Us</p>
                    <p className="font-semibold text-card-foreground">+91 98765 43210</p>
                  </div>
                </a>
                <a 
                  href="mailto:info@apexhome.in"
                  className="flex items-center gap-4 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email Us</p>
                    <p className="font-semibold text-card-foreground">info@apexhome.in</p>
                  </div>
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-border hover:bg-muted bg-transparent">
                  <Link href="/projects">
                    Browse Projects
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
