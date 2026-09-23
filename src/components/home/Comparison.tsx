"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export function Comparison() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            The Traditional Way vs. <span className="text-accent">The Voltora Standard</span>
          </h2>
          <p className="text-foreground/70 text-lg font-light">
            Why deal with the headache of coordinating multiple vendors when you can have one accountable engineering team?
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Traditional Method */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 md:p-12 rounded-3xl bg-surface/50 border border-border/50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-[0.02]">
              <X className="w-64 h-64 text-red-500" />
            </div>
            
            <h3 className="text-2xl font-bold text-foreground/70 mb-8 flex items-center gap-3 relative z-10">
              <X className="h-6 w-6 text-red-500/80" />
              The Fragmented Approach
            </h3>
            
            <div className="space-y-6 relative z-10">
              <div className="flex flex-col gap-2 relative pl-8 pb-6 border-l-2 border-border/30 last:border-transparent last:pb-0">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-border" />
                <span className="font-medium text-foreground/50">Hire a Draftsman / Designer</span>
              </div>
              <div className="flex flex-col gap-2 relative pl-8 pb-6 border-l-2 border-border/30 last:border-transparent last:pb-0">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-border" />
                <span className="font-medium text-foreground/50">Find a Local Electrician</span>
              </div>
              <div className="flex flex-col gap-2 relative pl-8 pb-6 border-l-2 border-border/30 last:border-transparent last:pb-0">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-border" />
                <span className="font-medium text-foreground/50">Source Materials from Suppliers</span>
              </div>
              <div className="flex flex-col gap-2 relative pl-8 border-l-2 border-transparent">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-red-900/50 border-2 border-red-500/50" />
                <span className="font-bold text-red-400">You Coordinate Everyone (Prone to errors)</span>
              </div>
            </div>
          </motion.div>

          {/* Our Method */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground shadow-2xl relative overflow-hidden border border-accent/20"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <Check className="w-64 h-64 text-accent" />
            </div>
            
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[80px]" />
            
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 relative z-10 text-foreground">
              <Check className="h-6 w-6 text-accent" />
              The Voltora Standard
            </h3>
            
            <div className="space-y-6 relative z-10">
              <div className="flex flex-col gap-2 relative pl-8 pb-6 border-l-2 border-accent/30 last:border-transparent last:pb-0">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent" />
                <span className="font-semibold text-foreground/90">Detailed House Plan Analysis</span>
              </div>
              <div className="flex flex-col gap-2 relative pl-8 pb-6 border-l-2 border-accent/30 last:border-transparent last:pb-0">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent" />
                <span className="font-semibold text-foreground/90">Engineering & AutoCAD Design</span>
              </div>
              <div className="flex flex-col gap-2 relative pl-8 pb-6 border-l-2 border-accent/30 last:border-transparent last:pb-0">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent" />
                <span className="font-semibold text-foreground/90">Transparent BOQ Generation</span>
              </div>
              <div className="flex flex-col gap-2 relative pl-8 pb-6 border-l-2 border-accent/30 last:border-transparent last:pb-0">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent" />
                <span className="font-semibold text-foreground/90">Premium Material Sourcing</span>
              </div>
              <div className="flex flex-col gap-2 relative pl-8 pb-6 border-l-2 border-accent/30 last:border-transparent last:pb-0">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent" />
                <span className="font-semibold text-foreground/90">Professional Installation</span>
              </div>
              <div className="flex flex-col gap-2 relative pl-8 border-l-2 border-transparent">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-accent shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                <span className="font-bold text-accent text-lg">Flawless Handover</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
