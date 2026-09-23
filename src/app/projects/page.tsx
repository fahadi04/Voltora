import { Projects } from "@/components/home/Projects";
import { ElectricalDesignShowcase } from "@/components/home/ElectricalDesignShowcase";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function ProjectsPage() {
  return (
    <main className="pt-24 min-h-screen">
      <Projects />
      <ElectricalDesignShowcase />
      <ContactCTA />
    </main>
  );
}
