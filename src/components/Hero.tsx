// src/components/Hero.tsx
import Image from 'next/image';

export default function Hero() {
  const bgImage = "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1000";

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 1. FONDO: 1 Columna en Mobile, 3 en Desktop */}
      <div className="absolute inset-0 z-0 opacity-60">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 w-full h-full">
          <div className="relative h-full hidden md:block overflow-hidden">
             <Image src={bgImage} alt="Background" fill className="object-cover grayscale blur-[8px] scale-110 object-left" />
          </div>
          <div className="relative h-full overflow-hidden">
             <Image src={bgImage} alt="Background" fill className="object-cover grayscale blur-[8px] scale-110 object-center" />
          </div>
          <div className="relative h-full hidden md:block overflow-hidden">
             <Image src={bgImage} alt="Background" fill className="object-cover grayscale blur-[8px] scale-110 object-right" />
          </div>
        </div>
      </div>

      {/* 2. TEXTOS DE LAS ESQUINAS */}
      {/*<div className="absolute top-8 left-8 md:top-10 md:left-10 z-20">
        <span className="text-[#D80E0E] font-black text-[10px] md:text-sm tracking-[0.3em] uppercase">Portfolio</span>
      </div>
      <div className="absolute top-8 right-8 md:top-10 md:right-10 z-20">
        <span className="text-[#D80E0E] font-black text-[10px] md:text-sm tracking-[0.3em] uppercase">2026</span>
      </div>*/}
      <div className="absolute bottom-8 left-8 md:bottom-10 md:left-10 z-20">
        <span className="text-[#D80E0E] font-black text-[10px] md:text-sm tracking-[0.3em] uppercase">Frame Creatives Lab</span>
      </div>

      {/* 3. CENTRO: TU LOGO SVG Y EL BOTÓN OVALADO */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
        <div className="relative w-[90vw] md:w-[75vw] h-[25vh] md:h-[40vh]">
          <Image src="/frame-logo.svg" alt="FRAME Logo" fill className="object-contain" priority />
        </div>
        <div className="relative z-20 mt-4 md:mt-8">
          <div className="border-[3px] md:border-[4px] border-[#D80E0E] rounded-[50px] px-8 py-2 md:px-16 md:py-3 bg-transparent hover:bg-[#D80E0E] group transition-colors duration-300">
            <span className="text-[#D80E0E] font-black text-lg md:text-4xl tracking-[0.2em] uppercase group-hover:text-white transition-colors duration-300">
              Creatives' Lab
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}