"use client";

import { motion } from "framer-motion";
import { Lightbulb, PenTool, Package, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    title: "Smart Electrical Planning",
    description: "Plan electrical points according to your house layout, lifestyle and requirements.",
    icon: Lightbulb,
  },
  {
    title: "Professional AutoCAD Design",
    description: "Organized electrical layouts for better visibility and execution.",
    icon: PenTool,
  },
  {
    title: "Complete Material Supply",
    description: "BOQ-based material planning and coordinated supply.",
    icon: Package,
  },
  {
    title: "End-to-End Installation",
    description: "From wiring and conduits to final testing and handover.",
    icon: Wrench,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Electrical Work Planned Right From The Start"
          subtitle="Good electrical work begins before the first wire is installed. We combine planning, design, material and execution into one coordinated process."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-background rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-surface rounded-xl group-hover:bg-accent/10 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-foreground group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <span className="text-4xl font-black text-surface group-hover:text-border transition-colors duration-300">
                      0{index + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-foreground/70 leading-relaxed">
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
