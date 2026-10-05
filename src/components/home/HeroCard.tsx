// Hero: tarjeta clara flotando sobre foto B/N (ref. Juanma + Gills)
import Image from 'next/image';
import Link from 'next/link';
import { Scribble, XMark, Heart } from '@/components/marks';

const BG = 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1600';
const PHOTO_A = 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=900';
const PHOTO_B = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=900';
const PHOTO_C = 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=900';

export default function HeroCard() {
  return (
    <section className="relative w-full bg-black overflow-hidden p-3 md:p-6">
      {/* Fondo: foto B/N a pantalla completa */}
      <Image src={BG} alt="" fill priority className="object-cover grayscale opacity-80" />

      {/* Filtro SVG: desenfoque + grano para la palabra roja */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <filter id="redGrain" x="-10%" y="-20%" width="120%" height="140%">
          <feGaussianBlur stdDeviation="14" result="b" />
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" result="n" />
          <feDisplacementMap in="b" in2="n" scale="22" />
        </filter>
      </svg>

      <div className="paper-card relative z-10 mx-auto max-w-[1400px] rounded-3xl px-5 md:px-12 pt-28 md:pt-32 pb-12 md:pb-16 overflow-hidden">
        {/* WORDMARK: FRAME rojo desenfocado con grano (ref. Gills) */}
        <div className="relative select-none">
          <span
            aria-hidden="true"
            className="block font-display text-frame-red uppercase leading-[0.85] text-center text-[29vw] md:text-[min(25vw,340px)]"
            style={{ filter: 'url(#redGrain)' }}
          >
            FRAME
          </span>
          <h1 className="absolute left-0 top-0 font-display text-ink uppercase leading-[0.85] text-[16vw] md:text-[min(9vw,130px)]">
            Frame
          </h1>
          <span className="absolute right-0 top-[8%] font-mono text-[10px] md:text-xs uppercase tracking-widest text-ink">
            Creatives&apos; Lab
          </span>
          <span className="absolute right-0 bottom-[6%] font-display text-ink uppercase text-[7vw] md:text-[min(4vw,56px)] leading-none">
            Miami / Mexico City
          </span>
          <Scribble className="absolute left-[46%] top-0 w-12 md:w-20 -rotate-6" />
        </div>

        {/* Fila foto + título (ref. Gills "SUSHI") */}
        <div className="relative mt-8 md:mt-10 grid grid-cols-5 gap-3 md:gap-5 items-center">
          <div className="relative col-span-2 aspect-[5/2] overflow-hidden">
            <Image src={PHOTO_A} alt="Frame Creatives Lab" fill className="object-cover grayscale" />
          </div>
          <h2 className="col-span-3 font-display text-ink uppercase leading-[0.85] text-[11vw] md:text-[min(8vw,120px)]">
            Creatives&apos; Lab
          </h2>
        </div>

        {/* Bloque tipo Gills: fotos + texto + enlace rojo */}
        <div className="relative mt-12 md:mt-16 grid grid-cols-5 gap-3 md:gap-5">
          <div className="relative col-span-1 aspect-[3/4] overflow-hidden bg-ink">
            <Image src={PHOTO_C} alt="" fill className="object-cover grayscale" />
            <XMark className="absolute -top-1 -right-1 w-8 md:w-12" />
          </div>
          <div className="relative col-span-2 aspect-[3/4] overflow-hidden bg-ink">
            <Image src={PHOTO_B} alt="" fill className="object-cover grayscale" />
            <Heart className="absolute bottom-2 left-2 w-10 md:w-16" />
          </div>
          <div className="col-span-5 md:col-span-2 flex flex-col justify-between gap-6">
            <h2 className="font-display text-ink uppercase leading-[0.9] text-4xl md:text-[min(4.5vw,64px)]">
              The <br /> Frame
            </h2>
            <p className="text-ink/80 text-xs md:text-sm uppercase font-light leading-snug">
              No somos una agencia. Somos el lente que enfoca la cultura, la moda y el sonido en una sola visión técnica.
            </p>
            <Link
              href="/who-are-we"
              className="text-frame-red font-bold text-xs md:text-sm tracking-[0.35em] uppercase hover:tracking-[0.5em] transition-all"
            >
              Know the lab →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
