"use client";

import { motion } from "framer-motion";
import { Cpu, FileSpreadsheet, ShieldCheck, Wrench, Layers, Workflow, CheckCircle, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    title: "Integrated MEP Solutions",
    description: "Single-window coordination for Mechanical, Electrical and Plumbing disciplines.",
    icon: Layers,
  },
  {
    title: "Professional Engineering",
    description: "AutoCAD drafting, load calculations, and technical planning before execution.",
    icon: Cpu,
  },
  {
    title: "Detailed BOQ & Estimation",
    description: "Accurate itemized quantities and transparent pricing to eliminate unexpected costs.",
    icon: FileSpreadsheet,
  },
  {
    title: "Quality Material Supply",
    description: "Procurement strictly aligned with approved drawings, standards, and specifications.",
    icon: ShieldCheck,
  },
  {
    title: "Skilled Site Execution",
    description: "Trained engineers and technicians ensuring compliance with safety and building codes.",
    icon: Wrench,
  },
  {
    title: "End-to-End Support",
    description: "From concept design to testing, commissioning, and final project handover.",
    icon: Workflow,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-10 md:py-14 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Why Choose Innovate MEP Solutions"
          subtitle="Engineering rigor, transparent estimations, and professional on-site execution delivered across every stage of your project."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group relative bg-background rounded-xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-surface rounded-lg group-hover:bg-accent/10 transition-colors duration-300">
                      <Icon className="h-5 w-5 text-foreground group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <span className="text-3xl font-black text-surface group-hover:text-border transition-colors duration-300">
                      0{index + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm text-foreground/70 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
