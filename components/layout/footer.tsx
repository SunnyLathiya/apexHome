import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ],
  projects: [{ href: "/projects/mshivalik", label: "Mshivalik" }],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

const socialLinks = [
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/photo_2026-02-21_13-02-58.jpg"
                alt="Apex Property"
                width={180}
                height={70}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm text-sidebar-foreground/70 leading-relaxed">
              Building dreams into reality. Your trusted partner in finding the
              perfect home in Ahmedabad.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-sidebar-accent hover:bg-sidebar-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Our Projects
            </h3>
            <ul className="space-y-3">
              {footerLinks.projects.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-sidebar-primary shrink-0" />
                <span className="text-sm text-sidebar-foreground/70">
                  Vaishnodevi, Sp Ring read near lilapur,
                  <br />
                  Ahmedabad, Gujarat 382481
                </span>
              </li>
              <li>
                <a
                  href="tel:+919409751929"
                  className="flex items-center gap-3 text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
                >
                  <Phone className="h-5 w-5 text-sidebar-primary shrink-0" />
                  +91 94097 51929
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@apexhome.in"
                  className="flex items-center gap-3 text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
                >
                  <Mail className="h-5 w-5 text-sidebar-primary shrink-0" />
                  info@apexhome.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-sidebar-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-sidebar-foreground/60">
            © {new Date().getFullYear()} Apex Property. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-sidebar-foreground/60 hover:text-sidebar-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
