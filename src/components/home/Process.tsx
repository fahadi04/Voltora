"use client";

import { motion } from "framer-motion";
import { FileSearch, PenTool, LayoutTemplate, Calculator, HardHat, CheckSquare } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Structural Analysis",
    desc: "We analyze your architectural layout to understand spatial dynamics and family power requirements before drafting.",
    icon: FileSearch,
  },
  {
    num: "02",
    title: "Load Calculation",
    desc: "Mapping out strategic placements for lighting, appliances, and distribution boards based on calculated load.",
    icon: LayoutTemplate,
  },
  {
    num: "03",
    title: "AutoCAD Drafting",
    desc: "Translating concepts into precise, dimensioned technical drawings for flawless on-site execution.",
    icon: PenTool,
  },
  {
    num: "04",
    title: "Material BOQ",
    desc: "Generating an exact Bill of Quantities to ensure transparent costing and zero material wastage.",
    icon: Calculator,
  },
  {
    num: "05",
    title: "Precision Execution",
    desc: "Our trained technicians install everything from conduits to final fittings exactly as engineered.",
    icon: HardHat,
  },
  {
    num: "06",
    title: "Megger Testing",
    desc: "Rigorous safety checks and insulation testing before final handover to guarantee a lifetime of safety.",
    icon: CheckSquare,
  },
];

export function Process() {
  return (
    <section id="process" className="py-32 bg-surface text-foreground overflow-hidden relative border-y border-border/50">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#eab308 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Methodology</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            The Six-Stage Engineering Protocol
          </h2>
          <p className="text-foreground/70 text-lg font-light">
            We leave nothing to chance. Every project follows a strict, sequential protocol from the first blueprint analysis to the final safety certification.
          </p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative mt-24">
          <div className="absolute top-12 left-[8%] right-[8%] h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="grid grid-cols-6 gap-6 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-background border border-border flex items-center justify-center relative z-10 group-hover:border-accent group-hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] transition-all duration-500 overflow-hidden">
                      <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      <Icon className="h-8 w-8 text-foreground/70 group-hover:text-accent transition-colors duration-500 relative z-10" />
                    </div>
                    
                    <div className="mt-8 relative pt-6">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-4 bg-border group-hover:bg-accent transition-colors duration-500" />
                      <span className="text-accent font-black text-2xl opacity-20 absolute top-2 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity duration-500">
                        {step.num}
                      </span>
                      <h3 className="font-bold text-lg mb-3 mt-4">
                        {step.title}
                      </h3>
                      <p className="text-sm text-foreground/60 leading-relaxed font-light">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden relative mt-16 max-w-md mx-auto">
          <div className="absolute top-0 left-8 bottom-0 w-px bg-border" />
          
          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex gap-6"
                >
                  <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center shrink-0 relative z-10">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  
                  <div className="pt-2">
                    <span className="text-accent font-bold text-sm tracking-wider mb-1 block">
                      PHASE {step.num}
                    </span>
                    <h3 className="font-bold text-xl mb-2">
                      {step.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
