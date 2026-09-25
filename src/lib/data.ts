import { Zap, Wind, Droplets, PenTool, Calculator, PackageCheck } from "lucide-react";

export const servicesData = [
  {
    slug: "electrical-services",
    title: "Electrical Services",
    description: "Electrical design, AutoCAD layouts, lighting design, power distribution, load calculation, DB & MCB planning, wiring, earthing, BOQ, material supply, installation and commissioning.",
    icon: Zap,
    image: "/images/electrical-layout-100sqyd.jpg",
  },
  {
    slug: "mechanical-hvac-services",
    title: "Mechanical / HVAC Services",
    description: "HVAC design, AC planning, copper & drain piping, ventilation, exhaust systems, ducting, equipment planning, installation, testing and commissioning.",
    icon: Wind,
    image: "/images/concept-villa.jpg",
  },
  {
    slug: "plumbing-services",
    title: "Plumbing Services",
    description: "Plumbing design, water supply, hot & cold lines, drainage systems, bathroom & kitchen plumbing, sanitary systems, water tank & pump connections, BOQ, installation & testing.",
    icon: Droplets,
    image: "/images/sample-lighting-plan.jpg",
  },
  {
    slug: "mep-design-engineering",
    title: "MEP Design & Engineering",
    description: "Comprehensive MEP planning, integrated AutoCAD drawings, electrical layouts, HVAC layouts, plumbing layouts, load calculations, and technical estimation.",
    icon: PenTool,
    image: "/images/sample-floor-plan.jpg",
  },
  {
    slug: "boq-estimation",
    title: "BOQ & Estimation",
    description: "Detailed Bill of Quantities, material quantities, technical specifications, accurate cost estimation, and transparent project-based quotations.",
    icon: Calculator,
    image: "/images/about-company.jpg",
  },
  {
    slug: "material-supply",
    title: "Material Supply",
    description: "Procurement and supply of certified MEP materials strictly aligned with approved drawings, specifications, and project BOQ.",
    icon: PackageCheck,
    image: "/images/concept-renovation.jpg",
  },
];

