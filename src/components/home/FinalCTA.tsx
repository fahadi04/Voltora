"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";

export function FinalCTA() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const message = "Namaste, mujhe apne residential project ke electrical work ke baare mein consultation chahiye.";
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="relative py-32 overflow-hidden bg-primary">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Planning a New Home or Renovation?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Let&apos;s organize your electrical work before execution begins.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToContact} className="bg-accent text-accent-foreground hover:bg-accent/90">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" onClick={openWhatsApp} className="border-border text-foreground hover:bg-surface">
              WhatsApp Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
