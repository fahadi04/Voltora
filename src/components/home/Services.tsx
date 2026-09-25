"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  X, 
  Maximize2, 
  CheckCircle2, 
  Phone, 
  ShieldCheck, 
  Sparkles,
  Zap
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { servicesData } from "@/lib/data";

const serviceDetailsMap: Record<string, {
  highlights: string[];
  deliverables: string[];
  specs: string;
}> = {
  "electrical-services": {
    highlights: [
      "HT/LT Power Distribution & Substation Planning",
      "Main LT Panels, Distribution Boards (DBs) & MCB Sizing",
      "Architectural Indoor/Outdoor Lighting & Smart Automation",
      "Comprehensive Earthing & Lightning Arrestor Systems",
      "Cable Tray Routing & Heavy-duty Conduit Execution"
    ],
    deliverables: [
      "Single Line Diagrams (SLD) & Load Schedule",
      "AutoCAD Conduit & Light Point Layouts",
      "Megger Insulation Testing & Safety Certification"
    ],
    specs: "All work compliant with Indian Electricity Rules (IER) & NBC codes."
  },
  "mechanical-hvac-services": {
    highlights: [
      "Central Air Conditioning, VRF/VRV & Chiller Plant Systems",
      "Ductwork Engineering, Air Balancing & Diffuser Layouts",
      "Basement & Kitchen Exhaust Ventilation Systems",
      "Refrigerant Copper Piping with High-grade Insulation",
      "Fresh Air & Energy Recovery Ventilators (ERV)"
    ],
    deliverables: [
      "Heat Load & CFM Calculations",
      "Duct Sizing & Coordinated Routing Plans",
      "Airflow Commissioning & CFM Balancing Report"
    ],
    specs: "Designed as per ASHRAE & ISHRAE standards for maximum energy efficiency."
  },
  "plumbing-services": {
    highlights: [
      "Hot & Cold Domestic Water Distribution Networks",
      "Soil, Waste & Vent (SWR) Piping with Anti-siphon Systems",
      "Hydro-Pneumatic Pumping & Overhead Tank Connections",
      "Stormwater Management & Rainwater Harvesting Drainage",
      "Fire Hydrant, Hose Reel & Automatic Sprinkler Networks"
    ],
    deliverables: [
      "Hydraulic Flow Rate & Pipe Sizing Calculations",
      "Isometric Plumbing & Drain Slope Drawings",
      "Hydrostatic Pressure Testing Reports"
    ],
    specs: "Executed using premium CPVC/UPVC/GI materials per National Plumbing Code."
  },
  "mep-design-engineering": {
    highlights: [
      "Integrated MEP BIM Modeling & CAD Drafting",
      "Inter-service Clash Detection & Resolution",
      "Comprehensive Electrical, Mechanical & Plumbing Drawings",
      "Engineering Space & Riser Shaft Optimization",
      "Authority Approval Support Documentation"
    ],
    deliverables: [
      "Complete Coordinated MEP CAD Drawings",
      "Equipment Schedule & Schematic Riser Diagrams",
      "Technical Design Basis Reports (DBR)"
    ],
    specs: "Zero-clash engineering to eliminate site rework and contractor confusion."
  },
  "boq-estimation": {
    highlights: [
      "Line-by-Line Itemized Bill of Quantities (BOQ)",
      "High-precision Material Take-off (MTO) from CAD",
      "Current Market Rate Analysis & Brand Benchmarking",
      "Value Engineering to Optimize Material Costs",
      "Transparent Milestone-based Payment Breakdown"
    ],
    deliverables: [
      "Detailed Excel & PDF BOQ Documentation",
      "Material Specification Sheets",
      "Comparative Cost Estimates"
    ],
    specs: "Prevents hidden costs, budget escalations, and material shortages."
  },
  "material-supply": {
    highlights: [
      "Direct OEM Procurement of Certified MEP Equipment",
      "ISI/ISO Marked Cables, Switchgear, Pipes & Valves",
      "Batch-tested Copper Piping & High-efficiency Motors",
      "Proper On-site Warehousing & Staging Coordination",
      "Manufacturer Warranty & Test Certificates"
    ],
    deliverables: [
      "Material Approval Requests (MAR) & Sample Submissions",
      "Manufacturer Test Certificates (MTC)",
      "Warranty Cards & Handover Dossiers"
    ],
    specs: "100% genuine materials strictly matched to approved engineer BOQ."
  }
};

export function Services() {
  const [selectedService, setSelectedService] = useState<typeof servicesData[0] | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<{ src: string; title: string } | null>(null);

  const handleImageClick = (e: React.MouseEvent, imageSrc: string, title: string) => {
    e.stopPropagation(); // Don't trigger card open when clicking image
    setFullscreenImage({ src: imageSrc, title });
  };

  const scrollToContact = (serviceTitle?: string) => {
    setSelectedService(null);
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-10 md:py-14 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Integrated MEP Services"
          subtitle="Complete Mechanical, Electrical & Plumbing solutions — from initial design and BOQ to material supply, installation and commissioning."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                onClick={() => setSelectedService(service)}
                className="group flex flex-col rounded-xl border border-border bg-surface/50 hover:bg-surface overflow-hidden hover:shadow-xl hover:border-accent/40 transition-all duration-300 cursor-pointer"
              >
                {/* Image Container with Fullscreen Trigger */}
                <div 
                  className="relative h-44 w-full overflow-hidden bg-slate-900 group/img"
                  onClick={(e) => handleImageClick(e, service.image, service.title)}
                  title="Click to view image fullscreen"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover/img:bg-black/10 transition-colors" />
                  
                  {/* Fullscreen Badge Indicator on Image */}
                  <div className="absolute top-2.5 right-2.5 z-10 bg-black/60 hover:bg-accent text-white p-1.5 rounded-lg backdrop-blur-md transition-all opacity-80 group-hover/img:opacity-100 shadow-md flex items-center gap-1 text-[11px] font-medium">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="hidden group-hover/img:inline text-[10px]">Fullscreen</span>
                  </div>

                  <div className="absolute bottom-2 left-2 z-10">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-black/70 text-accent backdrop-blur-sm">
                      Click image for Full View
                    </span>
                  </div>
                </div>
                
                {/* Card Body (Clicking opens Service Modal) */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="shrink-0 p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-5 w-5 text-accent transition-colors" />
                    </div>
                    <span className="text-[11px] font-bold text-accent tracking-widest uppercase ml-auto">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-base text-foreground mb-1.5 flex items-center justify-between group-hover:text-accent transition-colors">
                    {service.title}
                    <ArrowRight className="h-4 w-4 text-border group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed flex-1 font-light line-clamp-3 mb-3">
                    {service.description}
                  </p>

                  <div className="pt-2 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-accent">
                    <span>Open Service Details</span>
                    <span className="text-foreground/40 text-[11px] font-normal group-hover:text-foreground/70 transition-colors">Click Card →</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 1. SERVICE DETAILS MODAL (Card Open View) */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-background rounded-2xl shadow-2xl border border-border z-10 flex flex-col"
            >
              {/* Modal Header Image */}
              <div 
                className="relative h-56 sm:h-64 w-full bg-slate-900 group/modalImg cursor-pointer"
                onClick={() => setFullscreenImage({ src: selectedService.image, title: selectedService.title })}
                title="Click to view image fullscreen"
              >
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-black/50" />
                
                {/* Close Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedService(null);
                  }}
                  className="absolute top-4 right-4 z-20 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors backdrop-blur-md"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Fullscreen click hint */}
                <div className="absolute top-4 left-4 z-20 bg-black/60 hover:bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>View Image Fullscreen</span>
                </div>

                <div className="absolute bottom-4 left-5 right-5 z-20">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded border border-accent/20">
                    Innovate MEP Solutions
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mt-1.5">
                    {selectedService.title}
                  </h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-7 flex-1 space-y-6">
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-accent mb-2">
                    Service Overview
                  </h4>
                  <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
                    {selectedService.description}
                  </p>
                </div>

                {/* Key Inclusions & Scope */}
                {serviceDetailsMap[selectedService.slug] && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs uppercase font-bold tracking-wider text-accent mb-3 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-accent" /> Key Scope of Execution
                      </h4>
                      <div className="grid sm:grid-cols-1 gap-2.5">
                        {serviceDetailsMap[selectedService.slug].highlights.map((item) => (
                          <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-surface border border-border/80 space-y-2">
                      <h5 className="text-xs font-bold text-foreground uppercase tracking-wide">
                        Key Engineering Deliverables
                      </h5>
                      <ul className="text-xs text-foreground/75 space-y-1">
                        {serviceDetailsMap[selectedService.slug].deliverables.map((del) => (
                          <li key={del} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-[11px] text-accent font-semibold pt-1 border-t border-border/50">
                        {serviceDetailsMap[selectedService.slug].specs}
                      </p>
                    </div>
                  </div>
                )}

                {/* Modal Footer CTA */}
                <div className="pt-4 border-t border-border flex flex-col sm:flex-row gap-3 items-center justify-between">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-11 px-6 text-sm font-semibold shadow-md shadow-accent/20 flex items-center justify-center gap-2"
                    onClick={() => scrollToContact(selectedService.title)}
                  >
                    <Zap className="w-4 h-4 fill-primary-foreground" />
                    <span>Get Free Consultation For This</span>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-11 px-6 text-sm font-semibold border-border"
                    onClick={() => setSelectedService(null)}
                  >
                    Close Details
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. FULL-SCREEN IMAGE LIGHTBOX (Image Click View) */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 sm:p-6 select-none"
            onClick={() => setFullscreenImage(null)}
          >
            {/* Top Toolbar */}
            <div 
              className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-black/60 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
                <p className="text-xs sm:text-sm font-semibold text-white">
                  {fullscreenImage.title}
                </p>
              </div>

              <button
                onClick={() => setFullscreenImage(null)}
                className="p-2.5 bg-white/10 hover:bg-white/25 text-white rounded-full transition-colors backdrop-blur-md border border-white/20 cursor-pointer"
                aria-label="Close fullscreen"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* High-res Image in Viewport */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="relative max-w-5xl max-h-[82vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[70vh] sm:h-[80vh] rounded-xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src={fullscreenImage.src}
                  alt={fullscreenImage.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Bottom Tip */}
            <div 
              className="absolute bottom-4 z-20 bg-black/60 px-4 py-1.5 rounded-full border border-white/20 text-[11px] sm:text-xs text-white/80 backdrop-blur-md"
              onClick={(e) => e.stopPropagation()}
            >
              Click anywhere outside or press Close to exit full screen
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
