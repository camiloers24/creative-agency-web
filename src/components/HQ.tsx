// src/components/HQ.tsx
import Image from 'next/image';
import { Paperclip } from '@/components/marks';

const PROFILES = [
  {
    name: ['DANIELA', 'CERQUERA'],
    handle: '@danicer21',
    role: 'CREATIVE & EVENT PRODUCER | BRANDING EXPERIENCES & ART DIRECTION',
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000',
    tilt: '-rotate-2',
    offset: '',
  },
  {
    name: ['DANIELA', 'GONZÁLEZ'],
    handle: '@nielazalab',
    role: 'CREATIVE DIRECTOR & FASHION STYLIST | PR & BRAND COLLABORATIONS | EVENT CURATOR',
    src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000',
    tilt: 'rotate-3',
    offset: 'md:mt-40 md:justify-self-end',
  },
];

export default function HQ() {
  return (
    <section className="relative w-full bg-charcoal text-white py-20 md:py-32 px-5 md:px-12 overflow-hidden">
      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-x-32 items-start">
        {PROFILES.map(({ name, handle, role, src, tilt, offset }) => (
          <div key={handle} className={`flex flex-col items-center md:items-start gap-10 group ${offset}`}>
            {/* Polaroid */}
            <div className={`polaroid relative w-[78vw] md:w-80 ${tilt} transition-transform group-hover:rotate-0 duration-700`}>
              <Paperclip className="absolute -top-7 right-5 w-6 h-14" />
              <div className="relative aspect-[4/5] overflow-hidden grayscale bg-zinc-200">
                <Image src={src} alt={name.join(' ')} fill className="object-cover" />
              </div>
              <span className="absolute bottom-2 left-4 font-script text-ink text-2xl">{handle}</span>
            </div>

            <div className="flex flex-col text-center md:text-left">
              <h3 className="text-frame-red font-display uppercase text-5xl md:text-7xl leading-[1.08] mb-4">
                {name[0]} <br /> {name[1]}
              </h3>
              <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest leading-relaxed max-w-[300px]">
                {role}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* HQ Y UBICACIÓN */}
      <div className="relative z-10 max-w-[1400px] mx-auto mt-20 md:mt-10 flex flex-col gap-4">
        <div className="flex flex-col">
          <span className="font-mono text-[10px] tracking-widest uppercase mb-1 text-white/50">( Location )</span>
          <span className="font-mono text-xs md:text-sm tracking-widest uppercase text-frame-red">Miami and Mexico City.</span>
        </div>
        <div className="relative select-none">
          <div
            aria-hidden="true"
            className="font-display text-frame-red leading-[0.8] text-[40vw] md:text-[min(22vw,320px)]"
            style={{ filter: 'url(#redGrain)' }}
          >
            HQ
          </div>
          <h2 className="absolute inset-0 font-display text-white leading-[0.8] text-[40vw] md:text-[min(22vw,320px)]">
            HQ
          </h2>
        </div>
      </div>
    </section>
  );
}
