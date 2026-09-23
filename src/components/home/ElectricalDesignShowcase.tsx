"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const tabs = [
  { id: "floor-plan", label: "Floor Plan", image: "/images/sample-floor-plan.jpg" },
  { id: "electrical", label: "Electrical Points", image: "/images/sample-switchboard-layout.jpg" },
  { id: "lighting", label: "Lighting", image: "/images/sample-lighting-plan.jpg" },
  { id: "power", label: "Power & AC", image: "/images/sample-floor-plan.jpg" },
  { id: "boq", label: "BOQ / Material", image: "/images/sample-floor-plan.jpg" },
];

export function ElectricalDesignShowcase() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeImage = tabs.find((t) => t.id === activeTab)?.image;

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="See What Professional Electrical Planning Looks Like"
          subtitle="From electrical points to load planning and material estimation, every requirement can be organized before execution begins."
        />

        <div className="mt-16 flex flex-col lg:flex-row gap-12">
          {/* Tabs */}
          <div className="flex-1 lg:max-w-xs flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center text-left px-6 py-4 rounded-xl transition-all whitespace-nowrap lg:whitespace-normal shrink-0 ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-background text-foreground/70 hover:bg-background/80 hover:text-foreground"
                }`}
              >
                <span className="font-semibold">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Visual Showcase */}
          <div className="flex-[3] relative">
            <div className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground px-3 py-1 text-xs font-bold tracking-wider uppercase rounded">
              Concept / Sample Design
            </div>
            
            <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-xl bg-background">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeImage || ""}
                    alt={`Sample ${activeTab}`}
                    fill
                    className="object-cover"
                  />
                  {/* Overlay for blueprint feel */}
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="mt-8 text-center lg:text-left">
              <Button size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Request Your House Electrical Plan
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
