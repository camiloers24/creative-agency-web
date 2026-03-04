// src/components/WhoAreWe.tsx
import Image from 'next/image';

export default function WhoAreWe() {
  const whoAreWeImg = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000";

  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row bg-white overflow-hidden">
      
      {/* MITAD SUPERIOR (Mobile) / IZQUIERDA (Desktop): Textos */}
      <div className="relative w-full md:w-1/2 min-h-screen pt-32 pb-20 md:py-16 px-8 md:px-16 flex flex-col justify-center">
        
        {/* Etiqueta Inferior Izquierda */}
        <div className="absolute bottom-10 left-8 md:left-16 hidden md:block">
          <span className="text-[#D80E0E] font-black text-[10px] md:text-sm tracking-[0.3em] uppercase">
            Frame Creatives Lab
          </span>
        </div>

        {/* Contenedor Central de Texto */}
        <div className="w-full flex flex-col">
          
          {/* Título: Ajustado a 18vw en mobile para que sea monumental */}
          <div className="relative mb-6 md:mb-0">
             <h2 className="text-[#D80E0E] font-black text-[18vw] md:text-[8vw] leading-[0.8] tracking-tighter uppercase relative z-10">
               WHO ARE <br /> WE?
             </h2>
          </div>

          <h3 className="text-[#D80E0E] font-black text-[12px] md:text-[13px] tracking-widest uppercase mt-4 max-w-[280px] md:max-w-sm">
            FRAME IS A 360° CREATIVE AGENCY BASED IN MIAMI AND MEXICO CITY.
          </h3>

          {/* Párrafos: Alineados a la derecha para empujar visualmente hacia la imagen */}
          <div className="mt-12 md:mt-24 flex flex-col items-end text-right">
            <p className="text-black font-medium text-sm md:text-base leading-relaxed max-w-[300px] md:max-w-[320px] mb-6">
              Fusionamos moda, música, arte y estrategia para crear conceptos visuales con alma que posicionan a artistas y marcas en el centro de la cultura.
            </p>
            <p className="text-black font-medium text-sm md:text-base leading-relaxed max-w-[300px] md:max-w-[320px]">
              Desde el styling hasta el evento. Desde la campaña hasta el contenido. Cada proyecto es una experiencia dirigida con visión artística y una red de talentos lista para hacerlo realidad.
            </p>
          </div>
        </div>
      </div>

      {/* MITAD INFERIOR (Mobile) / DERECHA (Desktop): Imagen "Glitch" */}
      <div className="relative w-full md:w-1/2 h-[70vh] md:h-screen bg-[#0a0a0a]">
        
        {/* Logo 'F' en la esquina inferior derecha de la imagen */}
        <div className="absolute bottom-10 right-8 md:right-16 z-20 flex flex-col items-center">
           <div className="w-12 md:w-16 h-[3px] bg-[#D80E0E] mb-1"></div>
           <span className="text-[#D80E0E] font-black text-4xl md:text-6xl leading-none italic">F</span>
        </div>

        {/* Grid de 3 columnas para el efecto de repetición */}
        <div className="absolute inset-0 grid grid-cols-3 w-full h-full">
          <div className="relative h-full overflow-hidden">
            <Image src={whoAreWeImg} alt="Model 1" fill className="object-cover grayscale object-[30%_center] scale-105" />
          </div>
          <div className="relative h-full overflow-hidden">
            <Image src={whoAreWeImg} alt="Model 2" fill className="object-cover grayscale object-[40%_center] scale-105" />
          </div>
          <div className="relative h-full overflow-hidden">
            <Image src={whoAreWeImg} alt="Model 3" fill className="object-cover grayscale object-[45%_center] scale-105" />
          </div>
        </div>
      </div>

      {/* Firma móvil (solo aparece al final del bloque de texto en mobile) */}
      <div className="md:hidden absolute bottom-[72vh] left-8">
        <span className="text-[#D80E0E] font-black text-[10px] tracking-[0.3em] uppercase">
          Frame Creatives Lab
        </span>
      </div>
    </section>
  );
}