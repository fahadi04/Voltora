"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Award } from "lucide-react";

const principles = [
  "MEP Design & AutoCAD",
  "Precise BOQ & Estimation",
  "Approved Material Supply",
  "Testing & Commissioning",
];

export function About() {
  return (
    <section id="about" className="pt-6 md:pt-8 pb-12 md:pb-14 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4">
              <Award className="h-3.5 w-3.5" /> About Innovate MEP Solutions
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-5 leading-tight">
              Engineering The Core Infrastructure Of Modern Buildings.
            </h2>
            
            <div className="space-y-4 text-base text-foreground/75 font-light mb-7 leading-relaxed">
              <p>
                Innovate MEP Solutions is a professional MEP engineering and contracting company providing complete Mechanical, Electrical, and Plumbing solutions for residential and commercial buildings.
              </p>
              <p>
                From initial planning, AutoCAD drafting, and load calculations to detailed BOQ estimation, quality material supply, site installation, testing, commissioning, and final project handover — we deliver end-to-end MEP solutions with engineering precision.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-3.5">
              {principles.map((principle, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + index * 0.08 }}
                  key={principle} 
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-surface/50 border border-border/50 hover:border-accent/50 transition-colors"
                >
                  <div className="p-1 rounded-full bg-accent/20 shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                  </div>
                  <span className="font-medium text-foreground text-xs sm:text-sm">{principle}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[420px] lg:h-[460px] w-full rounded-2xl overflow-hidden shadow-xl glass-card border border-border/50 p-2"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src="/images/about-company.jpg"
                alt="MEP engineering precision and site execution"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <div className="glass-effect p-4 sm:p-5 rounded-xl">
                  <p className="text-foreground font-medium text-sm sm:text-base leading-relaxed">
                    "A well-engineered MEP system should seamlessly integrate mechanical, electrical, and plumbing infrastructure for maximum safety, efficiency, and longevity."
                  </p>
                  <div className="mt-3 flex items-center gap-2.5">
                    <div className="h-[2px] w-6 bg-accent" />
                    <span className="text-accent font-bold text-xs uppercase tracking-wider">Partnerships of Trust</span>
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
