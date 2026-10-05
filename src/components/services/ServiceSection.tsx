// Sección de servicio compartida: tarjeta crema o charcoal, título con eco rojo y fotos escalonadas
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import type { Service } from './data';

const OFFSETS = ['', 'md:mt-14', 'md:mt-5', 'md:mt-20', 'md:mt-9'];
const PERFORATIONS_TOP = ['.400', '53', 'Kodak Portra 400', '.400', '53', 'Kodak Portra 400'];
const PERFORATIONS_BOTTOM = ['11', '11A', '12', '12A'];

function Title({ lines, dark }: { lines: string[]; dark: boolean }) {
  const cls = 'font-display uppercase leading-[0.85] text-[17vw] md:text-[min(11vw,160px)]';
  return (
    <h2 className={`${cls} ${dark ? 'text-white' : 'text-ink'}`}>
      {lines.map((l, i) => (
        <span key={i} className="block">{l}</span>
      ))}
    </h2>
  );
}

function Items({ items, dark }: { items: string[]; dark: boolean }) {
  return (
    <ul className="flex flex-col gap-1.5 md:items-end md:text-right">
      {items.map((item) => (
        <li key={item} className={`font-mono text-[11px] md:text-sm uppercase tracking-widest ${dark ? 'text-white' : 'text-ink'}`}>
          {item}
        </li>
      ))}
      <li aria-hidden="true" className="mt-2 h-[3px] w-12 bg-frame-red" />
    </ul>
  );
}

function FilmStrip({ images, alt, top }: { images: string[]; alt: string; top: boolean }) {
  return (
    <div className={`bg-ink p-2 md:p-4 shadow-2xl w-[94%] md:w-[88%] ${top ? 'self-end' : 'self-start -mt-2 md:-mt-6'}`}>
      <div className="flex justify-around font-mono text-[6px] md:text-[10px] uppercase tracking-[0.2em] text-white/40 pb-1 md:pb-3">
        {PERFORATIONS_TOP.map((t, i) => <span key={i}>{t}</span>)}
      </div>
      <div className="grid grid-cols-2 gap-1.5 md:gap-5">
        {images.map((src, i) => (
          <div key={src + i} className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden">
            <Image src={src} alt={`${alt} ${i + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
      <div className="flex justify-around font-mono text-[6px] md:text-[10px] text-white/40 pt-1 md:pt-3">
        {PERFORATIONS_BOTTOM.map((t) => <span key={t}>{t}</span>)}
      </div>
    </div>
  );
}

export default function ServiceSection({ service }: { service: Service }) {
  const { title, items, images, tone, variant } = service;
  const dark = tone === 'charcoal';
  const alt = title.join(' ');
  const single = images.length === 1;

  return (
    <div className={`${dark ? 'bg-charcoal text-white' : 'paper-card text-ink'} w-full px-5 md:px-12 py-20 md:py-28`}>
      <div className="mx-auto max-w-[1400px]">
        <div className={`flex justify-between font-mono text-[10px] md:text-xs uppercase tracking-widest mb-10 md:mb-14 ${dark ? 'text-white/50' : 'text-ink/50'}`}>
          <span>( Frame Creatives Lab )</span>
        </div>

        {variant === 'film' ? (
          <div className="flex flex-col">
            <FilmStrip images={images.slice(0, 2)} alt={alt} top />
            <div className="relative z-10 my-8 md:-my-4 md:flex md:items-end md:justify-between gap-8 md:px-4">
              <Items items={items} dark={dark} />
              <Title lines={title} dark={dark} />
            </div>
            <FilmStrip images={images.slice(2, 4)} alt={alt} top={false} />
          </div>
        ) : (
          <>
            <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16">
              <Title lines={title} dark={dark} />
              <Items items={items} dark={dark} />
            </Reveal>

            <div
              className={
                single
                  ? 'max-w-4xl'
                  : 'flex md:grid gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-pl-5 md:overflow-visible -mx-5 px-5 md:mx-0 md:px-0 md:items-start'
              }
              style={single ? undefined : { gridTemplateColumns: `repeat(${images.length}, minmax(0, 1fr))` }}
            >
              {images.map((src, i) => (
                <Reveal
                  key={src + i}
                  delay={i * 0.08}
                  className={`${single ? '' : `flex-none w-[62vw] md:w-auto snap-start ${OFFSETS[i % OFFSETS.length]}`}`}
                >
                  <div className={`relative overflow-hidden bg-ink ${single ? 'aspect-[16/10]' : 'aspect-[3/4]'}`}>
                    <Image
                      src={src}
                      alt={`${alt} ${i + 1}`}
                      fill
                      className="object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
