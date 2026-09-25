"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Compass, HardHat, Home, PencilRuler } from "lucide-react";
import { Button } from "@/components/ui/Button";

const partners = [
  { name: "Architects", icon: PencilRuler },
  { name: "Civil Contractors", icon: HardHat },
  { name: "Premium Builders", icon: Building2 },
  { name: "Interior Designers", icon: Compass },
  { name: "Developers", icon: Home },
];

export function ContractorSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="contractors" className="py-10 md:py-14 bg-surface text-foreground relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-accent/5 rounded-full blur-[90px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 leading-tight">
              The Preferred MEP Partner For <span className="text-accent">Contractors &amp; Builders</span>
            </h2>
            <p className="text-sm sm:text-base text-foreground/75 mb-7 leading-relaxed max-w-xl font-light">
              We collaborate with general contractors, architects, civil engineers, and developers who demand engineering precision and dependable execution. When you partner with Innovate MEP Solutions, you get a dedicated team that ensures all Mechanical, Electrical, and Plumbing systems are executed smoothly, on time, and to exacting standards.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              <Button size="lg" onClick={scrollToContact} className="w-full sm:w-auto h-12 px-7 text-sm font-semibold shadow-md shadow-accent/20">
                Discuss MEP Partnership
              </Button>
              <div className="text-xs text-foreground/50 text-center sm:text-left flex flex-col justify-center pt-1">
                <span>Looking for a trusted MEP contractor?</span>
                <span className="font-semibold text-foreground/70">Partnerships of Trust.</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative pb-6"
          >
            <div className="absolute inset-0 bg-accent/10 rounded-2xl translate-x-3 translate-y-3 border border-accent/20" />
            <div className="relative h-[360px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-border/50">
              <Image
                src="/images/contractor-partnership.jpg"
                alt="Partnering with contractors and architects"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
            </div>
            
            {/* Overlay Cards for Partners */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[92%] glass-effect border border-border/50 p-4 rounded-xl shadow-lg">
              <p className="text-center text-[10px] font-bold uppercase tracking-widest text-accent mb-2.5">Trusted By Industry Stakeholders</p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                {partners.map((partner, index) => {
                  const Icon = partner.icon;
                  return (
                    <motion.div
                      key={partner.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.3 + index * 0.08 }}
                      className="flex items-center gap-1.5"
                    >
                      <Icon className="h-4 w-4 text-foreground/70" />
                      <span className="font-medium text-xs text-foreground/80">
                        {partner.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
