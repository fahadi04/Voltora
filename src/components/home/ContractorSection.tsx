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
    <section id="contractors" className="py-24 bg-surface text-foreground relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              The Preferred Electrical Partner For <span className="text-accent">Industry Leaders</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-10 leading-relaxed max-w-xl font-light">
              We collaborate with top-tier civil contractors, architects, and interior designers who refuse to compromise on quality. When you partner with Voltora, you get a dedicated engineering team that ensures the electrical backbone of your project is executed flawlessly, on time, and without excuses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <Button size="lg" onClick={scrollToContact} className="w-full sm:w-auto h-14 px-8 text-base shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                Discuss Partnership
              </Button>
              <div className="text-sm text-foreground/50 text-center sm:text-left flex flex-col justify-center">
                <span>Looking for a reliable technical partner?</span>
                <span className="font-medium text-foreground/70">Let's build together.</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-accent/10 rounded-3xl translate-x-4 translate-y-4 border border-accent/20" />
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-border/50">
              <Image
                src="/images/contractor-partnership.jpg"
                alt="Partnering with contractors and architects"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
            </div>
            
            {/* Overlay Cards for Partners */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[95%] glass-effect border border-border/50 p-6 rounded-2xl shadow-xl">
              <p className="text-center text-xs font-bold uppercase tracking-widest text-accent mb-4">Trusted By</p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                {partners.map((partner, index) => {
                  const Icon = partner.icon;
                  return (
                    <motion.div
                      key={partner.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex flex-col items-center gap-2"
                    >
                      <Icon className="h-6 w-6 text-foreground/70" />
                      <span className="font-medium text-xs text-foreground/70">
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
