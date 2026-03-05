// src/components/ServicePRFashion.tsx
import Image from 'next/image';

export default function ServicePRFashion() {
  const images = [
    "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1000",
    "https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?q=80&w=1000",
    "https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=1000"
  ];

  return (
    <section className="relative w-full bg-black overflow-hidden font-sans">
      
      {/* GRILLA DE IMÁGENES: 3 columnas que ocupan todo el ancho */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-start">
          {images.map((img, index) => (
            <div key={index} className="relative aspect-[3/4] md:aspect-[2/3] w-full overflow-hidden">
              <Image 
                src={img} 
                alt={`PR Fashion ${index + 1}`} 
                fill 
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* BLOQUE DE TEXTO SUPERPUESTO */}
      <div className="max-w-[1400px] mx-auto relative px-4 md:px-10 -mt-24 md:-mt-40 pb-24">
        <div className="flex flex-col items-start text-left">
          
          {/* Título con efecto Glow (Blanco en esta sección) */}
          <div className="relative z-10">
            <h2 className="text-white font-[1000] text-[15vw] md:text-[10vw] leading-[0.8] tracking-tighter uppercase">
              PR <br /> FASHION BRANDS
            </h2>
            {/* Resplandor de apoyo */}
            <h2 className="absolute top-0 left-0 text-white font-[1000] text-[15vw] md:text-[10vw] leading-[0.8] tracking-tighter uppercase blur-[25px] opacity-30 -z-10 pointer-events-none">
              PR <br /> FASHION BRANDS
            </h2>
          </div>

          {/* Lista de servicios */}
          <div className="mt-6 md:mt-8 ml-1 md:ml-2">
            <ul className="flex flex-col gap-1">
              {["Brand Collabs", "Event & Brand PR", "Styling for Events"].map((item) => (
                <li key={item} className="text-white font-black uppercase text-[10px] md:text-[16px] leading-none tracking-[0.2em]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}