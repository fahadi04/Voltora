import Link from "next/link";
import { Zap, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-6 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="bg-accent p-1.5 rounded-md">
                <Zap className="h-5 w-5 text-accent-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg md:text-xl tracking-tight text-foreground leading-tight">
                  INNOVATE <span className="text-accent">MEP</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-primary-foreground/70 font-semibold">
                  Solutions
                </span>
              </div>
            </Link>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              &quot;Partnerships of Trust&quot;
            </p>
            <p className="text-xs text-primary-foreground/80 font-medium">
              Mechanical • Electrical • Plumbing
            </p>
            <p className="text-primary-foreground/70 mt-1 max-w-sm text-xs sm:text-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-base mb-3 text-foreground">Services</h3>
            <ul className="flex flex-col gap-2 text-primary-foreground/70 text-xs sm:text-sm">
              <li>Electrical Services</li>
              <li>Mechanical &amp; HVAC</li>
              <li>Plumbing &amp; Sanitary</li>
              <li>MEP Design &amp; AutoCAD</li>
              <li>BOQ &amp; Cost Estimation</li>
              <li>Material Supply</li>
              <li>Installation &amp; Testing</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base mb-3 text-foreground">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-primary-foreground/70 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-accent transition-colors">MEP Services</Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-accent transition-colors">Our Process</Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-accent transition-colors">Projects &amp; Sectors</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-accent transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-base mb-3 text-foreground">Contact</h3>
            <ul className="flex flex-col gap-3 text-primary-foreground/70 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>{siteConfig.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>{siteConfig.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-primary-foreground/10 text-center md:text-left flex flex-col md:flex-row items-center justify-between text-primary-foreground/60 text-xs">
          <p>
            Copyright © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-3 md:mt-0">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
