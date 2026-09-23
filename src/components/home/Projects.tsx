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
    title: "2BHK Residential House",
    image: "/images/concept-villa.jpg",
    desc: "Complete electrical planning and execution for a modern 2BHK.",
    details: [
      "Load calculation for 2 ACs",
      "Concealed wiring layout",
      "Inverter point planning",
      "Standard switchboard heights",
    ],
  },
  {
    id: 2,
    title: "3BHK Residential House",
    image: "/images/concept-independent-house.jpg",
    desc: "End-to-end electrical solution for a spacious 3BHK family home.",
    details: [
      "3-phase distribution board",
      "Smart lighting provisions",
      "Heavy appliance circuits",
      "Dedicated earthing pit",
    ],
  },
  {
    id: 3,
    title: "Independent House",
    image: "/images/concept-3bhk.jpg",
    desc: "Multi-floor electrical distribution and load balancing.",
    details: [
      "Floor-wise DB setup",
      "Exterior lighting plan",
      "Gate automation provision",
      "CCTV conduit routing",
    ],
  },
  {
    id: 4,
    title: "Premium Villa",
    image: "/images/concept-2bhk.jpg",
    desc: "High-end electrical execution with smart home integration.",
    details: [
      "Home automation wiring",
      "Centralized AC load management",
      "Landscape lighting circuits",
      "EV charger provisioning",
    ],
  },
  {
    id: 5,
    title: "Renovation Project",
    image: "/images/concept-renovation.jpg",
    desc: "Safe electrical rewiring and modernizing an older property.",
    details: [
      "Old wiring removal",
      "RCCB safety integration",
      "Load capacity upgrade",
      "Conduit concealment",
    ],
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Residential Project Concepts"
          subtitle="Explore sample scopes of our electrical planning and execution across different residential formats."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-background rounded-2xl overflow-hidden border border-border cursor-pointer hover:shadow-xl transition-all duration-300 flex flex-col"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground px-3 py-1 text-xs font-bold tracking-wider uppercase rounded shadow-md">
                  Concept Project
                </div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-6 flex-1">{project.desc}</p>
                <div className="flex items-center text-accent font-semibold text-sm group-hover:underline">
                  View Concept <ExternalLink className="ml-1 h-4 w-4" />
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
              <div className="relative h-[300px] sm:h-[400px] w-full">
                <div className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground px-3 py-1 text-xs font-bold tracking-wider uppercase rounded shadow-md">
                  Concept Project
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-background/80 hover:bg-background rounded-full backdrop-blur-sm transition-colors text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-bold text-foreground mb-4">{selectedProject.title}</h3>
                <p className="text-lg text-foreground/80 mb-8 pb-8 border-b border-border">
                  {selectedProject.desc}
                </p>
                
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Sample Electrical Scope
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
    </section>
  );
}
