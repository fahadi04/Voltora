import Image from "next/image";
import { Process } from "@/components/home/Process";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function ProcessPage() {
  return (
    <main className="pt-24 min-h-screen">
      <Process />
      
      {/* Process Visuals */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Execution Excellence
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Visualizing our standard operating procedures from raw layout to final handover.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group">
              <Image 
                src="/images/concept-3bhk.jpg" 
                alt="Site Planning" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <h3 className="text-white font-bold text-xl">1. Site Planning</h3>
              </div>
            </div>
            
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group">
              <Image 
                src="/images/sample-switchboard-layout.jpg" 
                alt="Conduit Layout" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <h3 className="text-white font-bold text-xl">2. Conduit Layout</h3>
              </div>
            </div>
            
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group">
              <Image 
                src="/images/hero-residential-electrical.jpg" 
                alt="Final Handover" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <h3 className="text-white font-bold text-xl">3. Final Handover</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
