// src/components/ServiceSocialMedia.tsx
import Image from 'next/image';

export default function ServiceSocialMedia() {
  const images = [
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1000",
    "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1000",
  ];

  return (
    <section className="relative w-full bg-white font-sans overflow-hidden">
      <div className="flex flex-col md:flex-row w-full min-h-screen">
        
        {/* LADO IZQUIERDO: Imagen (50% en Desktop) */}
        <div className="w-full md:w-1/2 relative h-[60vh] md:h-screen">
          <Image src={images[0]} alt="Art" fill className="object-cover" />
          <span className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-[#D80E0E] font-black text-[8px] md:text-[10px] uppercase">
            FRAME CREATIVES LAB
          </span>
        </div>

        {/* LADO DERECHO: Composición sobre blanco */}
        <div className="w-full md:w-1/2 bg-white relative flex flex-col min-h-[50vh] md:min-h-screen p-6 md:p-12">
          
          {/* 1. Secuencia de fotos (Arriba derecha) */}
          <div className="flex justify-end gap-2 md:gap-4 mb-auto">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="relative w-20 h-24 md:w-40 md:h-52 overflow-hidden shadow-sm">
                <Image src={images[1]} alt="Seq" fill className="object-cover" />
              </div>
            ))}
          </div>

          {/* 2. Servicios y Título (Abajo derecha) */}
          <div className="mt-auto flex flex-col items-end text-right pb-10 md:pb-20">
            
            {/* Lista de Servicios */}
            <ul className="flex flex-col gap-0 mb-4 md:mb-10">
              {["Web Design", "Video Edition", "Social Media Strategy"].map((item) => (
                <li key={item} className="text-black font-black uppercase text-[10px] md:text-[15px] leading-tight tracking-tighter">
                  {item}
                </li>
              ))}
            </ul>

            {/* Título con Glow - En móvil permitimos que rompa línea para que no se vea minúsculo */}
            <div className="relative">
              <h2 className="text-[#D80E0E] font-[1000] text-[16vw] md:text-[11vw] leading-[0.75] tracking-tighter uppercase relative z-10 whitespace-normal md:whitespace-nowrap md:-ml-40 lg:-ml-64">
                SOCIAL <br className="md:hidden" /> MEDIA
              </h2>
              {/* Glow Rojo del referente */}
              <h2 className="absolute top-0 right-0 text-[#D80E0E] font-[1000] text-[16vw] md:text-[11vw] leading-[0.75] tracking-tighter uppercase blur-[25px] md:blur-[40px] opacity-60 -z-10 pointer-events-none whitespace-normal md:whitespace-nowrap md:-ml-40 lg:-ml-64">
                SOCIAL <br className="md:hidden" /> MEDIA
              </h2>
            </div>
          </div>

          

        </div>
      </div>
    </section>
  );
}