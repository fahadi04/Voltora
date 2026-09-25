"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const tabs = [
  { id: "electrical", label: "Electrical Layout", image: "/images/electrical-layout-100sqyd.jpg" },
  { id: "hvac", label: "HVAC & Ducting", image: "/images/concept-villa.jpg" },
  { id: "plumbing", label: "Plumbing & Drainage", image: "/images/sample-lighting-plan.jpg" },
  { id: "floor-plan", label: "Integrated MEP Plan", image: "/images/sample-floor-plan.jpg" },
  { id: "boq", label: "BOQ & Estimation", image: "/images/about-company.jpg" },
];

export function ElectricalDesignShowcase() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeImage = tabs.find((t) => t.id === activeTab)?.image;

  return (
    <section className="py-10 md:py-14 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="See What Professional MEP Engineering Looks Like"
          subtitle="Integrated drawings, load calculations, and itemized BOQ estimation planned systematically before site execution begins."
        />

        <div className="mt-10 flex flex-col lg:flex-row gap-8 items-start">
          {/* Tabs */}
          <div className="w-full lg:w-72 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-3 lg:pb-0 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center text-left px-4 py-3 rounded-xl transition-all whitespace-nowrap lg:whitespace-normal shrink-0 text-sm ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-md font-semibold"
                    : "bg-background text-foreground/70 hover:bg-background/80 hover:text-foreground font-medium"
                }`}
              >
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Visual Showcase */}
          <div className="flex-1 w-full relative">
            <div className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase rounded">
              MEP Engineering Deliverable
            </div>
            
            <div className="relative h-[320px] sm:h-[400px] lg:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg bg-background border border-border/50">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
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
            
            <div className="mt-6 text-center lg:text-left">
              <Button size="lg" className="h-11 px-6 text-sm" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Request MEP Project Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
