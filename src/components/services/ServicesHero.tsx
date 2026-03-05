// src/components/ServicesHero.tsx
import Image from 'next/image';

export default function ServicesHero() {
  const modelImg = "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000";

  return (
    <section className="relative min-h-screen w-full bg-white flex items-center justify-center overflow-hidden">
      
      {/* 1. IMAGEN IZQUIERDA (Desktop) */}
      <div className="absolute left-0 top-0 w-1/2 h-full hidden md:block">
        <div className="relative w-full h-full grayscale opacity-90">
          <Image 
            src={modelImg} 
            alt="Service Model Left" 
            fill 
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* 2. IMAGEN DERECHA (Desktop - Espejo simétrico) */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden md:block">
        <div className="relative w-full h-full grayscale opacity-90">
          <Image 
            src={modelImg} 
            alt="Service Model Right" 
            fill 
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* 3. TEXTO CENTRAL (Repetitivo / Stacked) */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex flex-col text-[#D80E0E] font-black text-[15vw] md:text-[10vw] leading-[0.8] tracking-tighter uppercase text-center">
          <span className="blur-[2px] opacity-40">SERVICES.</span>
          <span className="relative z-20">SERVICES.</span>
          <span className="blur-[2px] opacity-40">SERVICES.</span>
        </div>
        
        <div className="mt-8 flex flex-col items-center">
          <div className="w-16 h-[2px] bg-[#D80E0E] mb-2"></div>
          <span className="text-[#D80E0E] font-black text-[10px] tracking-[0.5em] uppercase">
            Frame Creatives Lab
          </span>
        </div>
      </div>      

      {/* 4. VERSIÓN MOBILE (Imagen completa de fondo con overlay blanco para legibilidad) */}
      <div className="absolute inset-0 md:hidden">
        <Image 
          src={modelImg} 
          alt="Mobile Background" 
          fill 
          className="object-cover grayscale opacity-90" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/80" />
      </div>
      
    </section>
  );
}