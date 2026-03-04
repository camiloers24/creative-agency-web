// src/app/page.tsx
import Hero from '@/components/Hero';
import WhoAreWe from '@/components/WhoAreWe';

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] selection:bg-[#D80E0E] selection:text-white">
      <Hero />
    </main>
  );
}