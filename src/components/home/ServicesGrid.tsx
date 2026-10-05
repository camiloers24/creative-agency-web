// Core Services: fila escalonada de fotos con pie de foto (ref. Juanma)
import Image from 'next/image';
import Link from 'next/link';

const SERVICES = [
  { id: 'styling-videoclips', title: 'Styling Videoclips', src: 'photo-1516035069371-29a1b244cc32', offset: 'md:mt-0' },
  { id: 'gifting-pr-kits', title: 'Gifting & PR Kits', src: 'photo-1513201099705-a9746e1e201f', offset: 'md:mt-16' },
  { id: 'art-direction', title: 'Art Direction', src: 'photo-1550684848-fac1c5b4e853', offset: 'md:mt-6' },
  { id: 'release-parties', title: 'Release Parties', src: 'photo-1492684223066-81342ee5ff30', offset: 'md:mt-24' },
  { id: 'artist-experiences', title: 'Artist Experiences', src: 'photo-1501281668745-f7f57925c3b4', offset: 'md:mt-10' },
];

export default function ServicesGrid() {
  return (
    <section className="paper-card w-full px-5 md:px-12 py-20 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <h2 className="font-display text-ink uppercase leading-[0.85] text-[16vw] md:text-[min(9vw,130px)]">
            Core <br className="md:hidden" /> Services
          </h2>
          <span className="hidden md:block font-mono text-xs uppercase tracking-widest text-ink">Expertise</span>
        </div>

        <div className="flex md:grid md:grid-cols-5 gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory md:overflow-visible -mx-5 px-5 md:mx-0 md:px-0">
          {SERVICES.map(({ id, title, src, offset }, i) => (
            <Link
              key={id}
              href={`/services#${id}`}
              className={`group flex-none w-[62vw] md:w-auto snap-start ${offset}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-ink">
                <Image
                  src={`https://images.unsplash.com/${src}?q=80&w=900`}
                  alt={title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="mt-2 flex justify-between font-mono text-[9px] md:text-[10px] uppercase text-ink">
                <span className="group-hover:text-frame-red transition-colors">{title}</span>
                <span>(00{i + 1})</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
