"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";
import { servicesData } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Complete Residential Electrical Services"
          subtitle="Everything your home needs — planned, supplied and executed through one coordinated team."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex flex-col rounded-2xl border border-border bg-background overflow-hidden hover:shadow-lg transition-all"
              >
                <Link href={`/services/${service.slug}`} className="flex flex-col h-full">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="shrink-0 p-2 bg-foreground/5 rounded-lg group-hover:bg-accent/10 transition-colors">
                      <Icon className="h-6 w-6 text-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <span className="text-xs font-bold text-accent tracking-widest uppercase ml-auto">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-lg text-foreground mb-2 flex items-center justify-between">
                    {service.title}
                    <ArrowRight className="h-4 w-4 text-border group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed flex-1">
                    {service.description}
                  </p>
                </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
