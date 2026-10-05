// CTA: sección oscura con tarjeta crema, polaroids y foto-tira (ref. Mzia)
import Image from 'next/image';
import Link from 'next/link';
import { CircleHighlight, Paperclip } from '@/components/marks';

const strip = [
  'photo-1516035069371-29a1b244cc32',
  'photo-1543857778-c4a1a3e0b2eb',
  'photo-1550684848-fac1c5b4e853',
  'photo-1492684223066-81342ee5ff30',
];

export default function CtaSection() {
  return (
    <section className="relative w-full bg-charcoal px-5 md:px-12 py-24 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1400px] grid md:grid-cols-2 gap-14 md:gap-8 items-center">
        {/* Polaroid con el icono F */}
        <div className="relative flex justify-center">
          <div className="polaroid relative w-[62vw] md:w-[26vw] -rotate-3">
            <Paperclip className="absolute -top-7 right-4 w-6 h-14" />
            <div className="relative aspect-square bg-ink">
              <Image src="/frame-icon.svg" alt="Frame Icon" fill className="object-contain p-8" />
            </div>
            <span className="absolute bottom-2 left-3 font-script text-ink text-xl">Frame Creatives Lab</span>
          </div>
        </div>

        <div className="relative">
          <h2 className="font-display text-white uppercase leading-[0.85] text-[16vw] md:text-[min(8vw,120px)]">
            Start the <br /> <span className="text-frame-red">Revolution</span>
          </h2>

          {/* Tarjeta tipo certificado */}
          <div className="paper-card mt-10 rounded-sm p-6 md:p-10 relative max-w-xl">
            <p className="font-mono text-xs uppercase tracking-widest text-frame-red">( Creatives&apos; Lab )</p>
            <div className="relative mt-8 inline-block">
              <Link
                href="/contact"
                className="relative z-10 inline-block px-8 py-3 font-mono text-xs uppercase tracking-widest text-ink hover:text-frame-red transition-colors"
              >
                Work with us
              </Link>
              <CircleHighlight className="absolute -inset-x-2 -inset-y-1 w-[calc(100%+1rem)] h-[calc(100%+0.5rem)] pointer-events-none" />
            </div>
            <Link
              href="/contact"
              className="mt-8 block bg-ink text-white text-center font-mono text-[10px] uppercase tracking-widest py-3 hover:bg-frame-red transition-colors"
            >
              Contact
            </Link>

            {/* Foto-tira */}
            <div className="hidden md:flex absolute -right-10 -top-14 flex-col gap-1 bg-white p-1.5 rotate-6 shadow-xl w-24">
              {strip.map((s) => (
                <div key={s} className="relative aspect-[4/5]">
                  <Image src={`https://images.unsplash.com/${s}?q=80&w=300`} alt="" fill className="object-cover grayscale" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
