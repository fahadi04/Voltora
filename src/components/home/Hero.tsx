"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

const trustPoints = [
  "Precision AutoCAD Planning",
  "Transparent BOQ Pricing",
  "Flawless Execution",
];

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-24 lg:pt-32 lg:pb-32">
      {/* Abstract background glowing orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="mb-6">
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-surface/80 glass-effect text-accent text-xs font-bold tracking-widest uppercase mb-6 border border-border"
              >
                <Zap className="w-3 h-3" /> Voltora Electrical Solutions
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-500">Precision</span> For Premium Homes.
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-[540px] leading-relaxed font-light">
              We bring commercial-grade electrical engineering to luxury residential projects. From meticulous AutoCAD layouts to seamless, safe execution—we handle the complexity so you don't have to.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="h-14 px-8 text-base shadow-lg shadow-accent/20" onClick={() => scrollToSection("contact")}>
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base border-border bg-surface/50 hover:bg-surface" onClick={() => scrollToSection("services")}>
                Explore Our Methodology
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-sm font-medium text-foreground/80">
              {trustPoints.map((point, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  key={point} 
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  <span>{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image/Visual */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:h-[650px] h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-border/50"
          >
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10" />
            
            <div 
              className="absolute inset-0 opacity-[0.03] z-20 pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230f172a\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                backgroundSize: '30px 30px'
              }}
            />
            
            <Image
              src="/images/hero-residential-electrical.jpg"
              alt="Premium modern residential electrical work"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Floating Glass Panel */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute bottom-8 left-8 right-8 z-30 glass-card p-6 rounded-2xl flex items-center justify-between"
            >
              <div>
                <p className="text-xs text-foreground/70 uppercase tracking-wider font-bold mb-1">Status</p>
                <p className="text-foreground font-semibold">Accepting New Projects</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center border border-accent/50 relative">
                 <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20" />
                 <div className="h-3 w-3 rounded-full bg-accent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

