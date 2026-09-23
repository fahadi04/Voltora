import { ContractorSection } from "@/components/home/ContractorSection";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function ContractorsPage() {
  return (
    <main className="pt-24 min-h-screen">
      <ContractorSection />
      <ContactCTA />
    </main>
  );
}
