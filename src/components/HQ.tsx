// src/components/HQ.tsx
import Image from 'next/image';

export default function HQ() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white py-20 md:py-32 px-8 md:px-16 overflow-hidden">
      
      {/* 1. CONTENIDO PRINCIPAL: PERFILES */}
      {/* Añadimos un max-width para que no se vea "raro" en pantallas ultra-wide */}
      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-x-32 items-start">
        
        {/* PERFIL 1: DANIELA CERQUERA */}
        <div className="flex flex-col items-center md:items-start gap-10 group md:justify-self-start">
          {/* Polaroid Frame */}
          <div className="relative w-[85vw] md:w-80 h-[105vw] md:h-[420px] bg-white p-4 pt-5 rotate-[-2deg] shadow-2xl transition-transform group-hover:rotate-0 duration-700">
             <div className="relative w-full h-[82%] overflow-hidden grayscale bg-zinc-200">
                <Image 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000" 
                  alt="Daniela Cerquera" 
                  fill 
                  className="object-cover" 
                />
             </div>
             <div className="h-[18%] flex items-center justify-center italic font-serif text-black text-2xl md:text-3xl pt-2">
                @danicer21
             </div>
          </div>
          
          <div className="flex flex-col text-center md:text-left">
            <h3 className="text-[#D80E0E] font-black text-4xl md:text-6xl uppercase tracking-tighter leading-[0.9] mb-4">
              DANIELA <br /> CERQUERA
            </h3>
            <p className="font-black text-[10px] md:text-xs uppercase tracking-[0.25em] leading-relaxed max-w-[280px]">
              CREATIVE & EVENT PRODUCER | BRANDING EXPERIENCES & ART DIRECTION
            </p>
          </div>
        </div>

        {/* PERFIL 2: DANIELA GONZÁLEZ */}
        {/* Ajustamos el margen superior para un balance visual mejor en desktop */}
        <div className="flex flex-col items-center md:items-start gap-10 group md:mt-40 md:justify-self-end">
          {/* Polaroid Frame */}
          <div className="relative w-[85vw] md:w-80 h-[105vw] md:h-[420px] bg-white p-4 pt-5 rotate-[3deg] shadow-2xl transition-transform group-hover:rotate-0 duration-700">
             <div className="relative w-full h-[82%] overflow-hidden grayscale bg-zinc-200">
                <Image 
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000" 
                  alt="Daniela González" 
                  fill 
                  className="object-cover" 
                />
             </div>
             <div className="h-[18%] flex items-center justify-center italic font-serif text-black text-2xl md:text-3xl pt-2">
                @nielazalab
             </div>
          </div>
          
          <div className="flex flex-col text-center md:text-left">
            <h3 className="text-[#D80E0E] font-black text-4xl md:text-6xl uppercase tracking-tighter leading-[0.9] mb-4">
              DANIELA <br /> GONZÁLEZ
            </h3>
            <p className="font-black text-[10px] md:text-xs uppercase tracking-[0.25em] leading-relaxed max-w-[280px]">
              CREATIVE DIRECTOR & FASHION STYLIST | PR & BRAND COLLABORATIONS | EVENT CURATOR
            </p>
          </div>
        </div>
      </div>

      {/* 2. FOOTER DE LA SECCIÓN: HQ Y UBICACIÓN */}
      {/* Ajustamos el posicionamiento para que no flote en medio de la nada en pantallas grandes */}
      <div className="mt-20 md:mt-0 md:absolute md:bottom-12 md:left-16 flex flex-col gap-4">
        <div className="flex flex-col">
          <span className="text-[#D80E0E] font-black text-[10px] tracking-[0.4em] uppercase mb-1">Location</span>
          <span className="text-[#D80E0E] font-black text-xs md:text-sm tracking-[0.2em] uppercase">Miami and Mexico City.</span>
        </div>
        
        <div className="relative">
           <h2 className="text-[#D80E0E] font-black text-[25vw] md:text-[15vw] leading-[0.8] tracking-tighter relative z-10">
             HQ
           </h2>
        </div>
      </div>

    </section>
  );
}