"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";

export function FinalCTA() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const message = "Hello Innovate MEP Solutions, I would like to consult with you regarding our upcoming MEP project.";
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-primary">
      {/* Background Visual */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("/images/final-cta-home.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/80" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">
            Planning Your Next Project?
          </h2>
          <p className="text-sm sm:text-base text-primary-foreground/80 mb-7 max-w-xl mx-auto font-light">
            Talk to Innovate MEP Solutions for professional MEP design, estimation and project execution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
            <Button size="lg" onClick={scrollToContact} className="h-11 px-7 text-sm font-semibold bg-accent text-accent-foreground hover:bg-accent/90">
              Get a Free Consultation
            </Button>
            <Button size="lg" variant="outline" onClick={openWhatsApp} className="h-11 px-7 text-sm font-semibold border-border text-foreground hover:bg-surface">
              WhatsApp Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
