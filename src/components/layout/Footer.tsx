import Link from "next/link";
import { Zap, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="bg-accent p-1.5 rounded-md">
                <Zap className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="font-bold text-xl tracking-tight">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-primary-foreground/70 mt-2 max-w-sm">
              {siteConfig.description}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Services</h3>
            <ul className="flex flex-col gap-3 text-primary-foreground/70">
              <li>Electrical Planning</li>
              <li>AutoCAD Design</li>
              <li>BOQ & Estimation</li>
              <li>Material Supply</li>
              <li>Installation</li>
              <li>Testing & Handover</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-primary-foreground/70">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-accent transition-colors">How It Works</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-accent transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/contractors" className="hover:text-accent transition-colors">For Contractors</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">About</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Contact</h3>
            <ul className="flex flex-col gap-4 text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>{siteConfig.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>{siteConfig.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 text-center md:text-left flex flex-col md:flex-row items-center justify-between text-primary-foreground/60 text-sm">
          <p>
            Copyright © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
