// src/components/services/ServicesHero.tsx
import Image from 'next/image';

export default function ServicesHero() {
  const modelImg = "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1600";
  const cls = 'font-display uppercase leading-[0.85] text-center text-[19vw] md:text-[min(13vw,190px)]';

  return (
    <section className="relative w-full bg-black overflow-hidden p-3 md:p-6">
      <Image src={modelImg} alt="" fill priority className="object-cover grayscale opacity-80" />

      <div className="paper-card relative z-10 mx-auto max-w-[1400px] rounded-3xl px-5 md:px-12 pt-28 md:pt-36 pb-14 md:pb-20 overflow-hidden">
        <h1 className={`${cls} text-ink`}>Services.</h1>

        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="w-16 h-[3px] bg-frame-red" />
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-ink">Frame Creatives Lab</span>
        </div>
      </div>
    </section>
  );
}
