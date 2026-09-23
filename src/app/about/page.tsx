import { About } from "@/components/home/About";
import { Comparison } from "@/components/home/Comparison";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function AboutPage() {
  return (
    <main className="pt-24 min-h-screen">
      <About />
      <Comparison />
      <ContactCTA />
    </main>
  );
}
