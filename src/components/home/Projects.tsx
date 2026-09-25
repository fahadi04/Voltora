"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const projects = [
  {
    id: 1,
    title: "Residential Projects",
    image: "/images/concept-3bhk.jpg",
    desc: "Complete Mechanical, Electrical & Plumbing systems for multi-unit and single-family residences.",
    details: [
      "Load balancing & power distribution",
      "Concealed electrical conduit & wiring",
      "Hot & cold water plumbing lines",
      "Dedicated AC circuit & drain planning",
    ],
  },
  {
    id: 2,
    title: "Luxury Villas",
    image: "/images/concept-villa.jpg",
    desc: "High-end MEP engineering with smart distribution and efficient HVAC integration.",
    details: [
      "VRV / VRF HVAC piping & duct planning",
      "Landscape lighting & earthing pits",
      "Pressure booster pump & plumbing lines",
      "Integrated electrical automation conduits",
    ],
  },
  {
    id: 3,
    title: "Commercial Buildings",
    image: "/images/concept-independent-house.jpg",
    desc: "Heavy-duty power infrastructure, ventilation systems, and commercial plumbing.",
    details: [
      "LT panel & 3-phase power distribution",
      "Fresh air & exhaust ventilation systems",
      "Commercial restroom plumbing networks",
      "Fire safety line coordination & testing",
    ],
  },
  {
    id: 4,
    title: "Corporate Offices",
    image: "/images/concept-2bhk.jpg",
    desc: "Precision MEP execution tailored for workplace productivity and energy efficiency.",
    details: [
      "Modular workstation power & data cabling",
      "HVAC duct zoning & temperature control",
      "Pantry & washroom plumbing layouts",
      "Energy-efficient LED lighting control",
    ],
  },
  {
    id: 5,
    title: "Construction & Turnkey Projects",
    image: "/images/concept-renovation.jpg",
    desc: "Full-scope MEP contracting from initial BOQ and supply to site execution and testing.",
    details: [
      "Complete MEP BOQ & cost estimation",
      "Material procurement & quality certification",
      "On-site installation & supervision",
      "Testing, commissioning & project handover",
    ],
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<{ src: string; title: string } | null>(null);

  const handleImageClick = (e: React.MouseEvent, src: string, title: string) => {
    e.stopPropagation();
    setFullscreenImage({ src, title });
  };

  return (
    <section id="projects" className="py-10 md:py-14 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="MEP Project Scopes &amp; Sectors"
          subtitle="Delivering integrated Mechanical, Electrical and Plumbing engineering solutions across diverse building formats."
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-background rounded-xl overflow-hidden border border-border cursor-pointer hover:shadow-lg transition-all duration-300 flex flex-col"
              onClick={() => setSelectedProject(project)}
            >
              <div 
                className="relative h-48 w-full overflow-hidden group/img"
                onClick={(e) => handleImageClick(e, project.image, project.title)}
                title="Click to view image fullscreen"
              >
                <div className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase rounded shadow-sm">
                  Concept Project
                </div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover/img:bg-black/10 transition-colors duration-300" />
                
                <div className="absolute bottom-2 right-2 z-10 bg-black/70 text-white text-[10px] font-semibold px-2 py-0.5 rounded backdrop-blur-sm opacity-80 group-hover/img:opacity-100">
                  Full Image ⤢
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-foreground mb-1.5">{project.title}</h3>
                <p className="text-xs sm:text-sm text-foreground/70 mb-4 flex-1 font-light leading-relaxed">{project.desc}</p>
                <div className="flex items-center text-accent font-semibold text-xs sm:text-sm group-hover:underline">
                  View Concept Scope <ExternalLink className="ml-1 h-3.5 w-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background rounded-2xl shadow-2xl z-50"
            >
              <div 
                className="relative h-[300px] sm:h-[400px] w-full cursor-pointer group/modalImg"
                onClick={() => setFullscreenImage({ src: selectedProject.image, title: selectedProject.title })}
                title="Click to view image fullscreen"
              >
                <div className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground px-3 py-1 text-xs font-bold tracking-wider uppercase rounded shadow-md">
                  Concept Project
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(null);
                  }}
                  className="absolute top-4 right-4 z-20 p-2 bg-background/80 hover:bg-background rounded-full backdrop-blur-sm transition-colors text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-3 right-3 z-10 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                  Click for Fullscreen ⤢
                </div>
              </div>
              
              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-bold text-foreground mb-4">{selectedProject.title}</h3>
                <p className="text-lg text-foreground/80 mb-8 pb-8 border-b border-border">
                  {selectedProject.desc}
                </p>
                
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Sample MEP Scope
                </h4>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {selectedProject.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-surface p-4 rounded-xl">
                      <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center shrink-0">
                        <span className="text-foreground font-bold text-sm">{idx + 1}</span>
                      </div>
                      <span className="font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-end">
                  <Button onClick={() => {
                    setSelectedProject(null);
                    setTimeout(() => {
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                  }}>
                    Discuss Similar Project
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Full-Screen Image Lightbox */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 sm:p-6 select-none"
            onClick={() => setFullscreenImage(null)}
          >
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
