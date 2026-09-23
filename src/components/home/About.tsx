"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Award } from "lucide-react";

const principles = [
  "Engineered Floor Plans",
  "Transparent Costing",
  "Premium Materials",
  "Flawless Execution",
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
              <Award className="h-4 w-4" /> About Voltora
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
              Engineering The Invisible Core Of Your Home.
            </h2>
            
            <div className="space-y-6 text-lg text-foreground/70 font-light mb-10 leading-relaxed">
              <p>
                In most residential projects, electrical work is treated as an afterthought—left entirely to guesswork or on-site decisions. We believe your home deserves better.
              </p>
              <p>
                At Voltora, we approach residential electricals with engineering rigor. Before a single wire is laid, we map out power loads, design intelligent switchboard layouts, and generate precise material requirements. The result is a safe, organized, and future-proof electrical system that runs invisibly and flawlessly.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {principles.map((principle, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  key={principle} 
                  className="flex items-center gap-3 p-4 rounded-xl bg-surface/50 border border-border/50 hover:border-accent/50 transition-colors"
                >
                  <div className="p-1 rounded-full bg-accent/20 shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </div>
                  <span className="font-medium text-foreground text-sm">{principle}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl glass-card border border-border/50 p-2"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/images/about-company.jpg"
                alt="Electrical engineering precision"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="glass-effect p-6 rounded-2xl">
                  <p className="text-foreground font-medium text-lg leading-relaxed">
                    "A well-designed electrical system shouldn't just work today; it should anticipate the needs of your home ten years from now."
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-[2px] w-8 bg-accent" />
                    <span className="text-accent font-bold text-sm uppercase tracking-wider">The Voltora Standard</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
