// src/app/services/page.tsx
import ServicesHero from '@/components/services/ServicesHero';
import ServiceSection from '@/components/services/ServiceSection';
import { SERVICES } from '@/components/services/data';

export default function ServicesPage() {
  return (
    <main className="bg-black">
      <ServicesHero />
      {SERVICES.map((service) => (
        <section key={service.id} id={service.id} className="scroll-mt-32">
          <ServiceSection service={service} />
        </section>
      ))}
    </main>
  );
}
