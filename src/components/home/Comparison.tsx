"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export function Comparison() {
  return (
    <section className="py-10 md:py-14 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 leading-tight">
            Multiple Fragmented Vendors vs. <span className="text-accent">One Complete MEP Partner</span>
          </h2>
          <p className="text-foreground/75 text-sm sm:text-base font-light">
            Why coordinate separate contractors for HVAC, Electrical, and Plumbing when Innovate MEP Solutions provides single-point accountability?
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Traditional Method */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 md:p-8 rounded-2xl bg-surface/50 border border-border/50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.02]">
              <X className="w-48 h-48 text-red-500" />
            </div>
            
            <h3 className="text-xl font-bold text-foreground/80 mb-6 flex items-center gap-2.5 relative z-10">
              <X className="h-5 w-5 text-red-500/80" />
              The Fragmented Approach
            </h3>
            
            <div className="space-y-4 relative z-10">
              <div className="flex flex-col gap-1 relative pl-6 pb-4 border-l-2 border-border/30 last:border-transparent last:pb-0">
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-border" />
                <span className="font-medium text-sm text-foreground/60">Separate Electrical Contractor</span>
              </div>
              <div className="flex flex-col gap-1 relative pl-6 pb-4 border-l-2 border-border/30 last:border-transparent last:pb-0">
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-border" />
                <span className="font-medium text-sm text-foreground/60">Separate HVAC / AC Vendor</span>
              </div>
              <div className="flex flex-col gap-1 relative pl-6 pb-4 border-l-2 border-border/30 last:border-transparent last:pb-0">
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-border" />
                <span className="font-medium text-sm text-foreground/60">Separate Plumbing Labor &amp; Material</span>
              </div>
              <div className="flex flex-col gap-1 relative pl-6 border-l-2 border-transparent">
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-red-900/50 border-2 border-red-500/50" />
                <span className="font-bold text-sm text-red-500">Constant clashes, delays &amp; zero accountability</span>
              </div>
            </div>
          </motion.div>

          {/* Our Method */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-6 md:p-8 rounded-2xl bg-primary text-primary-foreground shadow-xl relative overflow-hidden border border-accent/20"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Check className="w-48 h-48 text-accent" />
            </div>
            
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 blur-[60px]" />
            
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2.5 relative z-10 text-foreground">
              <Check className="h-5 w-5 text-accent" />
              Innovate MEP Solution
            </h3>
            
            <div className="space-y-4 relative z-10">
              <div className="flex flex-col gap-1 relative pl-6 pb-4 border-l-2 border-accent/30 last:border-transparent last:pb-0">
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent" />
                <span className="font-semibold text-sm text-foreground/90">Integrated MEP Design &amp; Clash Coordination</span>
              </div>
              <div className="flex flex-col gap-1 relative pl-6 pb-4 border-l-2 border-accent/30 last:border-transparent last:pb-0">
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent" />
                <span className="font-semibold text-sm text-foreground/90">Detailed BOQ &amp; Transparent Cost Estimation</span>
              </div>
              <div className="flex flex-col gap-1 relative pl-6 pb-4 border-l-2 border-accent/30 last:border-transparent last:pb-0">
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent" />
                <span className="font-semibold text-sm text-foreground/90">Certified Quality Material Supply</span>
              </div>
              <div className="flex flex-col gap-1 relative pl-6 pb-4 border-l-2 border-accent/30 last:border-transparent last:pb-0">
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent" />
                <span className="font-semibold text-sm text-foreground/90">Skilled Mechanical, Electrical &amp; Plumbing Execution</span>
              </div>
              <div className="flex flex-col gap-1 relative pl-6 pb-4 border-l-2 border-accent/30 last:border-transparent last:pb-0">
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent" />
                <span className="font-semibold text-sm text-foreground/90">Testing, Commissioning &amp; Quality Checks</span>
              </div>
              <div className="flex flex-col gap-1 relative pl-6 border-l-2 border-transparent">
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-background border-2 border-accent shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
                <span className="font-bold text-accent text-sm sm:text-base">Single-Point Accountability &amp; Smooth Handover</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
