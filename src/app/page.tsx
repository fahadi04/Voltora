import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { ElectricalDesignShowcase } from "@/components/home/ElectricalDesignShowcase";
import { Comparison } from "@/components/home/Comparison";
import { Projects } from "@/components/home/Projects";
import { ContractorSection } from "@/components/home/ContractorSection";
import { ContactCTA } from "@/components/home/ContactCTA";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Process />
      <ElectricalDesignShowcase />
      <Comparison />
      <Projects />
      <ContractorSection />
      <ContactCTA />
      <FinalCTA />
    </>
  );
}
