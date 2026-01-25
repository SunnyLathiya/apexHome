import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { ContactForm } from "@/components/contact/contact-form"
import { Clock, Mail, MapPin, Phone, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Apex Home - Get in Touch",
  description: "Contact Apex Home for inquiries about our residential projects in Dehradun. Visit our office, call us, or fill the contact form. We're here to help you find your dream home.",
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Business Park, Rajpur Road,", "Dehradun, Uttarakhand 248001"],
    action: {
      label: "Get Directions",
      href: "https://maps.google.com/?q=Rajpur+Road+Dehradun",
    },
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 98765 43210", "+91 98765 43211"],
    action: {
      label: "Call Now",
      href: "tel:+919876543210",
    },
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@apexhome.in", "sales@apexhome.in"],
    action: {
      label: "Send Email",
      href: "mailto:info@apexhome.in",
    },
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Saturday: 10 AM - 7 PM", "Sunday: 11 AM - 5 PM"],
    action: null,
  },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-primary-foreground/70 uppercase tracking-[0.2em] text-sm font-medium">
                Contact Us
              </p>
              <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Let{"'"}s Start a Conversation
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">
                Have questions about our projects? Want to schedule a site visit? 
                We{"'"}re here to help you find your perfect home.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32">
              {contactInfo.map((info) => (
                <div 
                  key={info.title}
                  className="bg-card rounded-xl p-6 shadow-lg border border-border"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-card-foreground">{info.title}</h3>
                  <div className="mt-2 space-y-1">
                    {info.details.map((detail, index) => (
                      <p key={index} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                  {info.action && (
                    <a
                      href={info.action.href}
                      target={info.action.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-block mt-4 text-sm font-medium text-primary hover:underline"
                    >
                      {info.action.label} →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground">
                  Send Us a Message
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>

              {/* Map & Additional Info */}
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground">
                  Find Us
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Visit our office to explore our projects and speak with our team in person.
                </p>

                {/* Map Placeholder */}
                <div className="mt-8 bg-muted rounded-xl aspect-video flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto" />
                    <p className="mt-4 text-muted-foreground">
                      123 Business Park, Rajpur Road,<br />
                      Dehradun, Uttarakhand 248001
                    </p>
                    <a
                      href="https://maps.google.com/?q=Rajpur+Road+Dehradun"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <MapPin className="h-4 w-4" />
                      Open in Google Maps
                    </a>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Chat with Us on WhatsApp</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Get instant responses to your queries. Our team is available from 10 AM to 7 PM.
                      </p>
                      <a
                        href="https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20learning%20more%20about%20your%20properties."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Start WhatsApp Chat
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium">
                FAQ
              </p>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="mt-12 max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "What are the payment options available?",
                  a: "We offer flexible payment plans including bank loans, EMI options, and construction-linked payment plans. Our team can help you choose the best option based on your requirements.",
                },
                {
                  q: "Can I visit the project site?",
                  a: "Yes, absolutely! We encourage all prospective buyers to visit our project sites. You can schedule a site visit by calling us or filling out the contact form above.",
                },
                {
                  q: "What documents do I need for booking?",
                  a: "For booking, you'll need identity proof (Aadhar/Passport), address proof, PAN card, passport-size photographs, and the booking amount. Our team will guide you through the process.",
                },
                {
                  q: "Are the projects RERA registered?",
                  a: "Yes, all our projects are RERA registered and comply with all necessary legal requirements. We believe in complete transparency in all our dealings.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-card-foreground">{faq.q}</h3>
                  <p className="mt-3 text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
