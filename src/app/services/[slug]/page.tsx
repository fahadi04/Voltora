import { notFound } from "next/navigation";
import Image from "next/image";
import { servicesData } from "@/lib/data";
import { ContactCTA } from "@/components/home/ContactCTA";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="pt-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl mb-6">
              <Icon className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed mb-8">
              {service.description}
            </p>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg border-b pb-2">Service Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-foreground/80">
                  <div className="h-2 w-2 bg-accent rounded-full" />
                  Premium materials and certified technicians
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <div className="h-2 w-2 bg-accent rounded-full" />
                  Transparent pricing and detailed BOQ
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <div className="h-2 w-2 bg-accent rounded-full" />
                  Timely execution and professional handover
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ContactCTA />
    </main>
  );
}
