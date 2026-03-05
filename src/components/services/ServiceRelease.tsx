// src/components/ServiceRelease.tsx
import Image from 'next/image';

export default function ServiceRelease() {
  const serviceImg = "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000";

  return (
    <section className="relative min-h-screen w-full bg-white flex flex-col md:flex-row overflow-hidden">
      
      {/* IMAGEN: Lado Izquierdo */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen">
        <Image 
          src={serviceImg} 
          alt="Release Party Event" 
          fill 
          className="object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* CONTENIDO: Lado Derecho */}
      <div className="relative w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-20 md:py-0">
        
        {/* TÍTULO: Con desborde sobre la imagen en Desktop */}
        <div className="relative z-10 md:-ml-48 lg:-ml-64">
          <h2 className="text-[#D80E0E] font-black text-[15vw] md:text-[10vw] leading-[0.8] tracking-tighter uppercase">
            RELEASE <br /> PARTIES
          </h2>
          {/* Sombra de apoyo para el efecto de profundidad */}
          <h2 className="absolute top-0 left-0 text-[#D80E0E] font-black text-[15vw] md:text-[10vw] leading-[0.8] tracking-tighter uppercase blur-[25px] opacity-20 -z-10">
            RELEASE <br /> PARTIES
          </h2>
        </div>

        {/* DESGLOSE TÉCNICO: Alineado a la derecha en mobile, izquierda en desktop */}
        <div className="mt-12 md:mt-16 flex flex-col items-end md:items-start text-right md:text-left">
          <ul className="flex flex-col gap-1">
            {[
              "Creative Direction",
              "Art Direction",
              "Production",
              "Design",
              "Venue"
            ].map((item) => (
              <li key={item} className="font-black text-[10px] md:text-xs uppercase tracking-[0.3em] text-black/40 hover:text-black transition-colors duration-300 cursor-default">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

    </section>
  );
}