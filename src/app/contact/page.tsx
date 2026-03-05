// src/app/contact/page.tsx
import Image from 'next/image';

export default function ContactPage() {
  return (
    <main className="relative w-full bg-black font-sans overflow-hidden">
      
      {/* 1. HERO SECTION: READY TO WORK (Limpio y con título Rojo) */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo con overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2000" 
            alt="Contact Hero" 
            fill 
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
        </div>

        {/* Texto Central: Título en Rojo y Barra Roja (Estilo frame-15.jpg) */}
        <div className="relative z-10 flex flex-col items-start px-6 md:px-20 w-full max-w-[1500px]">
          <h1 className="text-[#D80E0E] font-[1000] text-[12vw] md:text-[9vw] leading-[0.85] tracking-tighter uppercase">
            READY TO WORK <br /> 
            <span className="flex items-center gap-4 md:gap-8 text-[#D80E0E]">
              <span className="h-[2.5vw] w-[18vw] md:w-[12vw] bg-[#D80E0E] inline-block mt-2"></span>
              WITH US?
            </span>
          </h1>
        </div>
      </section>

      {/* 2. CONTACT DATA SECTION: THE BIG F (Basado en frame-16.jpeg) */}
      <section className="relative w-full py-24 md:py-40 flex flex-col items-center justify-center bg-black">
        
        {/* Logo F Gigante (SVG) con Resplandor */}
        <div className="relative mb-20 md:mb-24 w-[60vw] h-[60vw] md:w-[35vw] md:h-[35vw]">
          {/* SVG Principal */}
          <div className="relative w-full h-full z-10">
            <Image src="/frame-icon.svg" alt="Frame Icon Large" fill className="object-contain" />
          </div>
          {/* SVG para el efecto Glow */}
          <div className="absolute inset-0 blur-[80px] opacity-50 -z-10 pointer-events-none scale-110">
            <Image src="/frame-icon.svg" alt="Frame Glow" fill className="object-contain" />
          </div>
        </div>

        {/* Datos de Contacto */}
        <div className="flex flex-col items-center text-center gap-6 px-6 z-20">
          <div className="flex flex-col gap-1">
            <span className="text-[#D80E0E] font-black text-[10px] tracking-widest uppercase mb-2">Email us</span>
            <a href="mailto:HELLO@FRAMECREATIVESLAB.COM" className="text-white font-black text-[5vw] md:text-[1.8vw] tracking-tighter hover:text-[#D80E0E] transition-colors uppercase leading-none">
              HELLO@FRAMECREATIVESLAB.COM
            </a>
          </div>
          
          <div className="h-10 w-px bg-white/20 my-2"></div>

          <div className="flex flex-col gap-4">
            <span className="text-[#D80E0E] font-black text-[10px] tracking-widest uppercase mb-2">Call us</span>
            <p className="text-white font-black text-[5vw] md:text-[1.5vw] tracking-tighter leading-none">+1 (305) 744-6470</p>
            <p className="text-white font-black text-[5vw] md:text-[1.5vw] tracking-tighter leading-none">+52 (55) 7553-7416</p>
          </div>

          <div className="h-10 w-px bg-white/20 my-2"></div>

          <div className="flex flex-col gap-1">
            <span className="text-[#D80E0E] font-black text-[10px] tracking-widest uppercase mb-2">Follow us</span>
            <a href="https://instagram.com/framecreativeslab" target="_blank" className="text-white font-black text-[5vw] md:text-[1.8vw] tracking-tighter hover:text-[#D80E0E] transition-colors uppercase leading-none">
              @FRAMECREATIVESLAB
            </a>
          </div>
        </div>

        
      </section>

    </main>
  );
}