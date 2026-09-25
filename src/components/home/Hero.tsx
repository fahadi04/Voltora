"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  Zap, 
  Wind, 
  Droplets, 
  Lightbulb, 
  LightbulbOff, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Building2,
  HardHat
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const mepPillars = [
  {
    letter: "M",
    title: "Mechanical / HVAC",
    desc: "Chillers, VRF, AHUs & Ventilation",
    icon: Wind,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    letter: "E",
    title: "Electrical & Power",
    desc: "HT/LT Panels, Lighting & Automation",
    icon: Zap,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
  {
    letter: "P",
    title: "Plumbing & Sanitary",
    desc: "Water Distribution, Drainage & Fire",
    icon: Droplets,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
];

const trustBadges = [
  "Turnkey BOQ & Supply",
  "Design to Handover",
  "Certified MEP Engineers",
  "100% Code Compliant",
];

export function Hero() {
  // Lighting simulation states
  const [lightsOn, setLightsOn] = useState(true);
  const [facadeLight, setFacadeLight] = useState(true);
  const [gardenLight, setGardenLight] = useState(true);

  const toggleAllLights = () => {
    const nextState = !lightsOn;
    setLightsOn(nextState);
    setFacadeLight(nextState);
    setGardenLight(nextState);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-background pt-3 sm:pt-4 md:pt-6 pb-4 md:pb-6">
      {/* Ambient background glow effects */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column (Content & MEP Pillars) - 7 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Top Brand Pill */}
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-surface/90 glass-effect border border-border shadow-sm mb-3 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-ping" />
              <span className="text-[11px] font-bold tracking-wider text-accent uppercase flex items-center gap-1.5">
                <Zap className="w-3 h-3 fill-accent" /> INNOVATE MEP SOLUTIONS
              </span>
              <span className="text-accent/60 text-[10px]">•</span>
              <span className="text-[11px] font-bold tracking-wider text-accent uppercase">
                PARTNERSHIPS OF TRUST
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-extrabold tracking-tight text-foreground leading-[1.15] mb-3">
              Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-500 to-orange-500">MEP Solutions</span> For Modern Buildings.
            </h1>
            
            {/* Subheading */}
            <p className="text-xs sm:text-sm lg:text-[14.5px] text-foreground/80 mb-5 max-w-[560px] leading-relaxed font-light">
              From Design and Engineering to Material Supply, Installation and Commissioning — Innovate MEP Solutions delivers complete Mechanical, Electrical &amp; Plumbing solutions for residential and commercial projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Button 
                size="lg" 
                className="h-11 px-6 text-xs sm:text-sm font-semibold shadow-md shadow-accent/25 group flex items-center gap-2" 
                onClick={() => scrollToSection("contact")}
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-11 px-6 text-xs sm:text-sm font-semibold border-border bg-surface/60 hover:bg-surface text-foreground" 
                onClick={() => scrollToSection("services")}
              >
                Explore Our Services
              </Button>
            </div>

            {/* 3 Interactive MEP Pillar Cards (Fills space nicely & looks premium) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-5">
              {mepPillars.map((pillar, i) => {
                const IconComponent = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="p-3 rounded-xl bg-surface/70 border border-border/80 hover:border-accent/40 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className={`p-1.5 rounded-lg ${pillar.bg} ${pillar.color} shrink-0`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-xs text-foreground group-hover:text-accent transition-colors">
                        {pillar.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-foreground/70 leading-snug">
                      {pillar.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Trust Indicators Strip */}
            <div className="pt-3 border-t border-border/60 flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs text-foreground/75 font-medium">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Column (Interactive Visual Card) - 5 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-[340px] sm:h-[380px] lg:h-[430px] w-full rounded-2xl overflow-hidden shadow-2xl border border-border/70 bg-slate-950 group">
              {/* Background Blueprint Grid overlay */}
              <div 
                className="absolute inset-0 opacity-[0.05] z-10 pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                  backgroundSize: '30px 30px'
                }}
              />
              
              {/* Base House Image */}
              <Image
                src="/images/hero-residential-electrical.jpg"
                alt="Interactive Smart MEP lighting house"
                fill
                priority
                className={`object-cover object-[82%_center] transition-all duration-700 ${
                  lightsOn ? "brightness-105 contrast-105" : "brightness-[0.40] contrast-125 saturate-50"
                }`}
                sizes="(max-width: 768px) 100vw, 45vw"
              />

              {/* Dark Night Overlay when lights are OFF */}
              <div 
                className={`absolute inset-0 bg-slate-950/55 transition-opacity duration-700 pointer-events-none ${
                  lightsOn ? "opacity-0" : "opacity-100"
                }`} 
              />

              {/* Glowing Warm Light Effects when ON */}
              <div 
                className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
                  lightsOn ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Interior Glow Orb */}
                <div className="absolute top-[28%] right-[22%] w-[240px] h-[160px] bg-amber-400/25 rounded-full blur-[50px] mix-blend-screen" />
                {/* Exterior Facade Light Glow */}
                {facadeLight && (
                  <div className="absolute top-[18%] right-[10%] w-[320px] h-[180px] bg-yellow-300/20 rounded-full blur-[60px] mix-blend-screen" />
                )}
                {/* Garden Lighting Glow */}
                {gardenLight && (
                  <div className="absolute bottom-[20%] left-[20%] w-[280px] h-[120px] bg-amber-300/30 rounded-full blur-[45px] mix-blend-screen" />
                )}
              </div>

              {/* Top Interactive Banner & Master Switch */}
              <div className="absolute top-3 left-3 right-3 z-30 flex items-center justify-between gap-2">
                <div className="glass-effect py-1 px-3 rounded-full border border-white/20 text-white flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
                  <span className="text-[10.5px] font-semibold tracking-wide">
                    Live MEP Lighting Demo
                  </span>
                </div>

                {/* Master Light Switch Button */}
                <button
                  onClick={toggleAllLights}
                  className={`flex items-center gap-1.5 py-1 px-3.5 rounded-full transition-all duration-300 text-xs font-bold shadow-lg border backdrop-blur-md cursor-pointer ${
                    lightsOn 
                      ? "bg-amber-500 text-white border-amber-300 shadow-amber-500/40 hover:bg-amber-600 scale-105" 
                      : "bg-slate-900/90 text-slate-300 border-slate-700 hover:bg-slate-800"
                  }`}
                  aria-label="Toggle House Lights"
                >
                  {lightsOn ? (
                    <>
                      <Lightbulb className="w-3.5 h-3.5 text-yellow-200 fill-yellow-200 animate-bounce" />
                      <span>LIGHTS ON</span>
                    </>
                  ) : (
                    <>
                      <LightbulbOff className="w-3.5 h-3.5 text-slate-400" />
                      <span>LIGHTS OFF</span>
                    </>
                  )}
                </button>
              </div>

              {/* Bottom Interactive Zone Controls & Status */}
              <div className="absolute bottom-3 left-3 right-3 z-30 glass-card p-3 rounded-xl flex items-center justify-between gap-2 border border-white/15">
                <div>
                  <p className="text-[9px] text-foreground/70 uppercase tracking-wider font-bold mb-0.5">
                    Simulation Mode
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span className={`h-2 w-2 rounded-full ${lightsOn ? "bg-green-500 animate-pulse" : "bg-slate-400"}`} />
                    <p className="text-foreground text-xs font-bold">
                      {lightsOn ? "Illuminated (Evening Active)" : "Energy Saver (Standby)"}
                    </p>
                  </div>
                </div>

                {/* Zone Control Buttons */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => {
                      const next = !facadeLight;
                      setFacadeLight(next);
                      if (next) setLightsOn(true);
                    }}
                    className={`px-2.5 py-1 rounded-md text-[10.5px] font-semibold border transition-all cursor-pointer ${
                      facadeLight && lightsOn
                        ? "bg-accent text-white border-accent shadow-sm shadow-accent/30" 
                        : "bg-surface/80 text-foreground/70 border-border hover:text-foreground"
                    }`}
                  >
                    Facade
                  </button>
                  <button
                    onClick={() => {
                      const next = !gardenLight;
                      setGardenLight(next);
                      if (next) setLightsOn(true);
                    }}
                    className={`px-2.5 py-1 rounded-md text-[10.5px] font-semibold border transition-all cursor-pointer ${
                      gardenLight && lightsOn
                        ? "bg-accent text-white border-accent shadow-sm shadow-accent/30" 
                        : "bg-surface/80 text-foreground/70 border-border hover:text-foreground"
                    }`}
                  >
                    Garden
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
