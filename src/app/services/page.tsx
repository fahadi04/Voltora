import { Services } from "@/components/home/Services";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ServicesHero } from "@/components/services/ServicesHero";

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesHero />
      <Services />
      <ContactCTA />
    </main>
  );
}
