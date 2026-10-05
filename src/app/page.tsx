import HeroCard from '@/components/home/HeroCard';
import ServicesGrid from '@/components/home/ServicesGrid';
import CtaSection from '@/components/home/CtaSection';

export default function Home() {
  return (
    <main className="bg-black selection:bg-frame-red selection:text-white">
      <HeroCard />
      <ServicesGrid />
      <CtaSection />
    </main>
  );
}
