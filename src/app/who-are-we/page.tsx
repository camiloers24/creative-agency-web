// src/app/who-are-we/page.tsx
import WhoAreWe from '@/components/WhoAreWe';
import HQ from '@/components/HQ';
import RedGrainFilter from '@/components/RedGrainFilter';

export default function WhoAreWePage() {
  return (
    <main>
      <RedGrainFilter />
      <WhoAreWe />
      <HQ />
    </main>
  );
}
