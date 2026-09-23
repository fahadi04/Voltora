import { Box, Calculator, CheckSquare, Fan, FileText, LayoutDashboard, Lightbulb, PenTool, Shield, Snowflake, Thermometer, Zap } from "lucide-react";

export const servicesData = [
  { slug: "residential-electrical-design", title: "Residential Electrical Design", description: "Comprehensive planning for your home's complete electrical layout.", icon: LayoutDashboard, image: "/images/sample-floor-plan.jpg" },
  { slug: "autocad-electrical-layout", title: "AutoCAD Electrical Layout", description: "Detailed 2D drawings for precise execution.", icon: PenTool, image: "/images/sample-switchboard-layout.jpg" },
  { slug: "electrical-load-planning", title: "Electrical Load Planning", description: "Calculating and distributing power correctly.", icon: Calculator, image: "/images/concept-3bhk.jpg" },
  { slug: "boq-material-estimation", title: "BOQ & Material Estimation", description: "Accurate material lists to prevent wastage.", icon: FileText, image: "/images/about-company.jpg" },
  { slug: "wiring-conduit-work", title: "Wiring & Conduit Work", description: "Safe and organized hidden conduit laying.", icon: Zap, image: "/images/concept-renovation.jpg" },
  { slug: "switch-socket-installation", title: "Switch & Socket Installation", description: "Premium finishing for all electrical points.", icon: Box, image: "/images/concept-independent-house.jpg" },
  { slug: "lighting-installation", title: "Lighting Installation", description: "Perfect illumination for every room.", icon: Lightbulb, image: "/images/sample-lighting-plan.jpg" },
  { slug: "fan-installation", title: "Fan Installation", description: "Secure mounting and wiring for ceiling fans.", icon: Fan, image: "/images/concept-2bhk.jpg" },
  { slug: "ac-heavy-load-points", title: "AC & Heavy Load Points", description: "Dedicated circuits for high-power appliances.", icon: Snowflake, image: "/images/concept-villa.jpg" },
  { slug: "distribution-board-setup", title: "Distribution Board Setup", description: "Safe and organized MCB/RCCB installation.", icon: Shield, image: "/images/contractor-partnership.jpg" },
  { slug: "earthing", title: "Earthing", description: "Proper grounding for safety of life and appliances.", icon: Thermometer, image: "/images/final-cta-home.jpg" },
  { slug: "complete-contracting", title: "Complete Contracting", description: "Turnkey execution from start to finish.", icon: CheckSquare, image: "/images/hero-residential-electrical.jpg" },
];
