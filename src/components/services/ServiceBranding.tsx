// src/components/ServiceBranding.tsx
import Image from 'next/image';

export default function ServiceBranding() {
  const imageColor = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000"; 
  const imageBw = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000"; 

  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden">
      
      {/* 1. CUADRÍCULA: 1 columna en mobile, 3 en desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full min-h-screen">
        
        {/* COLUMNA 1: Imagen Color */}
        <div className="relative h-[45vh] md:h-full w-full">
          <Image 
            src={imageColor} 
            alt="Color Editorial" 
            fill 
            className="object-cover"
          />
        </div>

        {/* COLUMNA 2: Imagen B&W */}
        <div className="relative h-[45vh] md:h-full w-full">
          <Image 
            src={imageBw} 
            alt="B&W Editorial" 
            fill 
            className="object-cover grayscale"
          />
        </div>

        {/* COLUMNA 3: Texto Técnico */}
        {/* Reducimos el padding en mobile (py-16) para que el texto suba y no lo tape BRANDING */}
        <div className="relative h-auto md:h-full w-full flex flex-col justify-center px-8 md:px-12 py-16 md:py-0 bg-white">
          <div className="space-y-1 mb-12 md:mb-0">
            {[
              "VISUAL CONCEPT",
              "BRAND BOOK",
              "FOR ARTIST",
              "IDENTITY"
            ].map((text) => (
              <p key={text} className="font-black text-xl md:text-2xl leading-[1.1] text-black uppercase tracking-tighter">
                {text}
              </p>
            ))}
            <div className="mt-4 w-12 h-2 bg-[#D80E0E]"></div>
          </div>
        </div>
      </div>

      {/* 2. TÍTULO BRANDING: Ajustado matemáticamente para mobile */}
      {/* Mobile: bottom-10 y text-[12.5vw] asegura que quepa perfectamente entre los márgenes */}
      <div className="absolute bottom-10 md:bottom-24 left-8 md:left-[15%] z-20 pointer-events-none w-fit">
        <div className="relative">
          <h2 className="text-[#D80E0E] font-black text-[12.5vw] md:text-[12vw] leading-none tracking-tighter uppercase whitespace-nowrap">
            BRANDING
          </h2>
          {/* Glow sutil */}
          <h2 className="absolute top-0 left-0 text-[#D80E0E] font-black text-[12.5vw] md:text-[12vw] leading-none tracking-tighter uppercase blur-[25px] opacity-30 -z-10 whitespace-nowrap">
            BRANDING
          </h2>
        </div>
      </div>

      {/* Identificador de marca opcional para mobile */}
      <div className="absolute bottom-4 left-8 md:hidden">
        <span className="text-[#D80E0E] font-black text-[8px] tracking-[0.4em] uppercase opacity-40">
          Frame Creatives Lab
        </span>
      </div>

    </section>
  );
}