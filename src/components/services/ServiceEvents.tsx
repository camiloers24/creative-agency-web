// src/components/ServiceEvents.tsx
import Image from 'next/image';

export default function ServiceEvents() {
  const images = [
    "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1000",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000",
    "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1000"
  ];

  const subServices = ["Production", "Art Design", "Logistics", "Bookings"];

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col">
      
      {/* 1. GRID DE IMÁGENES (Tríptico) */}
      {/* En mobile cada imagen toma 1/3 de la altura (h-1/3) */}
      <div className="absolute inset-0 flex flex-col md:grid md:grid-cols-3 w-full h-full">
        {images.map((src, i) => (
          <div key={i} className="relative h-1/3 md:h-full w-full overflow-hidden group">
            <Image
              src={src}
              alt={`Event panel ${i + 1}`}
              fill
              className="object-cover grayscale opacity-60 md:opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-black/30 md:bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
          </div>
        ))}
      </div>

      {/* 2. TÍTULO GIGANTE */}
        <div className="relative z-10 flex-grow flex items-center justify-center pt-20 md:pt-0">
        <div className="relative w-full text-center px-4">
            {/* Cambiamos 175vw por 20vw para que sea impactante pero legible en móvil */}
            <h2 className="text-[#D80E0E] font-black text-[20vw] md:text-[12vw] leading-none tracking-tighter uppercase relative z-10 drop-shadow-2xl">
            EVENTS
            </h2>
        </div>
        </div>

      {/* 3. DESGLOSE TÉCNICO Y MARCA */}
      {/* Contenedor inferior para alinear ambos elementos en mobile */}
      <div className="relative z-20 w-full px-8 pb-12 md:pb-16 flex flex-row justify-between items-end">
        
        {/* Identificador de marca (Izquierda) */}
        <div className="flex flex-col gap-1">
          <span className="text-white font-black text-[10px] tracking-[0.4em] uppercase opacity-60">
            Frame
          </span>
          <span className="text-white font-black text-[10px] tracking-[0.4em] uppercase opacity-40 hidden md:block">
            Creatives Lab
          </span>
        </div>

        {/* Sub-servicios (Derecha) */}
        <ul className="flex flex-col gap-1 text-right md:text-left">
          {subServices.map((item) => (
            <li key={item} className="font-black text-[10px] md:text-xs uppercase tracking-[0.3em] text-white whitespace-nowrap">
              {item}
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}