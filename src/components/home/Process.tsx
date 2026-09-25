"use client";

import { motion } from "framer-motion";
import { MessageSquareText, Compass, PenTool, Calculator, PackageCheck, HardHat, ShieldCheck, CheckCircle2 } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "Understanding project scope, architectural layouts, and client technical specifications.",
    icon: MessageSquareText,
  },
  {
    num: "02",
    title: "Site Assessment",
    desc: "Detailed site survey to verify physical conditions, routes, and structural requirements.",
    icon: Compass,
  },
  {
    num: "03",
    title: "MEP Design",
    desc: "AutoCAD drafting for Electrical, HVAC, and Plumbing layouts with exact load calculations.",
    icon: PenTool,
  },
  {
    num: "04",
    title: "BOQ & Estimation",
    desc: "Precise Bill of Quantities and transparent cost estimates to prevent overruns.",
    icon: Calculator,
  },
  {
    num: "05",
    title: "Material Supply",
    desc: "Procuring certified, brand-compliant MEP materials per approved BOQ specifications.",
    icon: PackageCheck,
  },
  {
    num: "06",
    title: "Installation",
    desc: "Skilled on-site execution adhering strictly to approved engineering drawings and codes.",
    icon: HardHat,
  },
  {
    num: "07",
    title: "Testing & Commissioning",
    desc: "Pressure testing, megger safety checks, and system calibration for optimal operation.",
    icon: ShieldCheck,
  },
  {
    num: "08",
    title: "Project Handover",
    desc: "As-built documentation, operational manuals, and smooth final project handover.",
    icon: CheckCircle2,
  },
];

export function Process() {
  return (
    <section id="process" className="py-10 md:py-14 bg-surface text-foreground overflow-hidden relative border-y border-border/50">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#eab308 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-accent font-bold tracking-widest uppercase text-xs mb-3 block">Our Process</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 leading-tight">
            From Design to Handover: The MEP Workflow
          </h2>
          <p className="text-foreground/75 text-sm sm:text-base font-light">
            A structured, engineering-first approach ensuring flawless coordination between Mechanical, Electrical, and Plumbing disciplines.
          </p>
        </div>

        {/* Desktop Process Grid */}
        <div className="hidden md:block relative mt-10">
          <div className="grid md:grid-cols-4 gap-5 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative group p-5 rounded-xl bg-background border border-border/60 hover:border-accent/50 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-xl bg-surface border border-border flex items-center justify-center relative z-10 group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] transition-all duration-300 overflow-hidden mb-3">
                      <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      <Icon className="h-6 w-6 text-foreground/70 group-hover:text-accent transition-colors duration-300 relative z-10" />
                    </div>
                    
                    <span className="text-accent font-bold text-[11px] tracking-widest uppercase mb-1">
                      Phase {step.num}
                    </span>
                    <h3 className="font-bold text-base mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-xs text-foreground/65 leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden relative mt-10 max-w-md mx-auto">
          <div className="absolute top-0 left-6 bottom-0 w-px bg-border" />
          
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center shrink-0 relative z-10">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  
                  <div className="pt-1">
                    <span className="text-accent font-bold text-xs tracking-wider mb-0.5 block">
                      PHASE {step.num}
                    </span>
                    <h3 className="font-bold text-base mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-foreground/70 leading-relaxed font-light">
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
