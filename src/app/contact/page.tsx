// src/app/contact/page.tsx
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { Scribble } from '@/components/marks';

export default function ContactPage() {
  return (
    <main className="relative w-full bg-black overflow-hidden">
      <section className="relative w-full p-3 md:p-6">
        <Image
          src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2000"
          alt=""
          fill
          priority
          className="object-cover grayscale opacity-80"
        />

        <div className="paper-card relative z-10 mx-auto max-w-[1400px] rounded-3xl px-5 md:px-12 pt-28 md:pt-36 pb-14 md:pb-20 overflow-hidden">
          <div className="relative select-none">
            <h1 className="font-display text-ink uppercase leading-[0.85] text-[15vw] md:text-[min(14vw,200px)]">
              Ready to work <br />
              <span className="flex items-center gap-4 md:gap-8">
                <span className="h-[3vw] w-[18vw] md:w-[12vw] bg-frame-red inline-block" />
                with us?
              </span>
            </h1>
            <Scribble className="hidden md:block absolute right-0 top-0 w-24 rotate-6" />
          </div>

          {/* DATOS DE CONTACTO + POLAROID */}
          <div className="mt-14 md:mt-20 grid md:grid-cols-5 gap-12 md:gap-8 items-start">
            <Reveal className="md:col-span-3 flex flex-col divide-y divide-ink/15 border-y border-ink/15">
              <div className="py-6 md:py-8 flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-frame-red">( Email us )</span>
                <a
                  href="mailto:HELLO@FRAMECREATIVESLAB.COM"
                  className="font-display uppercase text-ink hover:text-frame-red transition-colors text-[5.4vw] md:text-[min(2.6vw,38px)] leading-none"
                >
                  HELLO@FRAMECREATIVESLAB.COM
                </a>
              </div>
              <div className="py-6 md:py-8 flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-frame-red">( Call us )</span>
                <div className="font-display text-ink text-[7vw] md:text-[min(2.6vw,38px)] leading-tight md:text-right">
                  <p>+1 (305) 744-6470</p>
                  <p>+52 (55) 7553-7416</p>
                </div>
              </div>
              <div className="py-6 md:py-8 flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-frame-red">( Follow us )</span>
                <a
                  href="https://instagram.com/framecreativeslab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display uppercase text-ink hover:text-frame-red transition-colors text-[7vw] md:text-[min(2.6vw,38px)] leading-none"
                >
                  @FRAMECREATIVESLAB
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="md:col-span-2 flex justify-center md:justify-end">
              <div className="polaroid relative w-[60vw] md:w-[22vw] md:max-w-[300px] rotate-3 bg-white">
                <div className="relative aspect-square bg-ink">
                  <Image src="/frame-icon.svg" alt="Frame Icon" fill className="object-contain p-8" />
                </div>
                <span className="absolute bottom-2 left-3 font-script text-ink text-xl">Frame Creatives Lab</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
