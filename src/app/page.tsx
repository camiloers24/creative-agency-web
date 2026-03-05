"use client";
import { useRef, useState } from 'react';
import Hero from '@/components/Hero';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // 1. LÓGICA DE DRAG (ARRASTRE)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiplicador de velocidad
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // 2. LÓGICA DE WHEEL (RUEDA DEL RATÓN)
  const onWheel = (e: React.WheelEvent) => {
    if (!scrollRef.current) return;
    if (e.deltaY === 0) return;
    scrollRef.current.scrollTo({
      left: scrollRef.current.scrollLeft + e.deltaY * 3,
      behavior: "auto"
    });
  };

  return (
    <main className="bg-black selection:bg-[#D80E0E] selection:text-white">
      {/* 1. HERO PRINCIPAL */}
      <Hero />

      {/* 2. WHO ARE WE - TEASER MONUMENTAL (Limpio y sin itálicas) */}
      <section className="relative w-full bg-white py-32 md:py-48 overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-6 md:px-16">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            <h2 className="text-black font-[1000] text-[18vw] md:text-[13vw] leading-[0.75] tracking-tighter uppercase">
              THE <br /> FRAME
            </h2>
            <div className="max-w-lg md:text-right md:self-end">
              <p className="text-black font-black text-base md:text-lg uppercase tracking-tighter leading-none mb-8">
                No somos una agencia. Somos el lente que enfoca la cultura, la moda y el sonido en una sola visión técnica.
              </p>
              <Link href="/who-are-we" className="text-[#D80E0E] font-[1000] text-xs tracking-[0.5em] uppercase hover:tracking-[0.7em] transition-all">
                Know the lab →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES PREVIEW - CON DRAG Y WHEEL ACTIVADOS */}
      <section className="relative w-full bg-black py-24 overflow-hidden">
        <div className="px-6 md:px-16 mb-16">
          <span className="text-[#D80E0E] font-black text-[10px] tracking-[0.6em] uppercase block mb-4">Expertise</span>
          <h2 className="text-white font-[1000] text-[12vw] md:text-[6vw] leading-none uppercase tracking-tighter">
            Core Services
          </h2>
        </div>

        <div 
          ref={scrollRef}
          onWheel={onWheel}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex overflow-x-auto snap-x md:snap-none snap-mandatory no-scrollbar gap-4 px-6 md:px-16 pb-10 ${isDown ? 'cursor-grabbing' : 'cursor-grab'} select-none`}
        >
          {/* 01. STYLING VIDEOCLIPS */}
          <Link href="/services" className="relative flex-none w-[80vw] md:w-[40vw] aspect-[4/5] md:aspect-[16/10] snap-start group overflow-hidden bg-[#111]">
            <Image 
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200" 
              alt="STYLING VIDEOCLIPS" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-60 group-hover:opacity-100"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-10 bg-gradient-to-t from-black via-transparent to-transparent">
              <h3 className="text-white font-[1000] text-[8vw] md:text-[4vw] uppercase tracking-tighter leading-[0.85]">
                STYLING <br/> VIDEOCLIPS
              </h3>
            </div>
          </Link>

          {/* 02. GIFTING & PR KITS */}
          <Link href="/services" className="relative flex-none w-[80vw] md:w-[40vw] aspect-[4/5] md:aspect-[16/10] snap-start group overflow-hidden bg-[#111]">
            <Image 
              src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1200" 
              alt="GIFTING & PR KITS" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-60 group-hover:opacity-100"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-10 bg-gradient-to-t from-black via-transparent to-transparent">
              <h3 className="text-white font-[1000] text-[8vw] md:text-[4vw] uppercase tracking-tighter leading-[0.85]">
                GIFTING <br/> & PR KITS
              </h3>
            </div>
          </Link>

          {/* 03. ART DIRECTION */}
          <Link href="/services" className="relative flex-none w-[80vw] md:w-[40vw] aspect-[4/5] md:aspect-[16/10] snap-start group overflow-hidden bg-[#111]">
            <Image 
              src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200" 
              alt="ART DIRECTION" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-60 group-hover:opacity-100"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-10 bg-gradient-to-t from-black via-transparent to-transparent">
              <h3 className="text-white font-[1000] text-[8vw] md:text-[4vw] uppercase tracking-tighter leading-[0.85]">
                ART <br/> DIRECTION
              </h3>
            </div>
          </Link>

          {/* 04. RELEASE PARTIES */}
          <Link href="/services" className="relative flex-none w-[80vw] md:w-[40vw] aspect-[4/5] md:aspect-[16/10] snap-start group overflow-hidden bg-[#111]">
            <Image 
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200" 
              alt="RELEASE PARTIES" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-60 group-hover:opacity-100"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-10 bg-gradient-to-t from-black via-transparent to-transparent">
              <h3 className="text-white font-[1000] text-[8vw] md:text-[4vw] uppercase tracking-tighter leading-[0.85]">
                RELEASE <br/> PARTIES
              </h3>
            </div>
          </Link>

          {/* 05. ARTIST EXPERIENCES */}
          <Link href="/services" className="relative flex-none w-[80vw] md:w-[40vw] aspect-[4/5] md:aspect-[16/10] snap-start group overflow-hidden bg-[#111]">
            <Image 
              src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1200" 
              alt="ARTIST EXPERIENCES" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-60 group-hover:opacity-100"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-10 bg-gradient-to-t from-black via-transparent to-transparent">
              <h3 className="text-white font-[1000] text-[8vw] md:text-[4vw] uppercase tracking-tighter leading-[0.85]">
                ARTIST <br/> EXPERIENCES
              </h3>
            </div>
          </Link>

          <div className="flex-none w-10 md:w-20" />
        </div>
      </section>

      {/* 4. CONTACT TEASER - THE RED F (Icono potente y sólido) */}
      <section className="relative w-full py-48 bg-black flex flex-col items-center justify-center overflow-hidden">
        {/* Logo F gigante (SVG) - Sin opacidad baja para que brille el rojo */}
        <div className="relative mb-16 w-[45vw] h-[45vw] md:w-[22vw] md:h-[22vw]">
           <Image 
            src="/frame-icon.svg" 
            alt="Frame Icon" 
            fill 
            className="object-contain"
           />
           {/* Glow sutil para que el icono se sienta vivo */}
           <div className="absolute inset-0 blur-[60px] opacity-30 bg-[#D80E0E] rounded-full -z-10 scale-75" />
        </div>

        <div className="relative z-10 text-center">
          <h2 className="text-white font-[1000] text-[12vw] md:text-[8vw] leading-[0.8] tracking-tighter uppercase mb-12">
            START THE <br /> <span className="text-[#D80E0E]">REVOLUTION</span>
          </h2>
          <Link 
            href="/contact" 
            className="inline-block bg-[#D80E0E] text-white font-black px-14 py-6 text-[10px] tracking-[0.6em] uppercase hover:bg-white hover:text-black transition-all"
          >
            Work with us
          </Link>
        </div>
      </section>
    </main>
  );
}