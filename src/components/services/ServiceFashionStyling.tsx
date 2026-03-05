// src/components/ServiceFashionStyling.tsx
import Image from 'next/image';

export default function ServiceFashionStyling() {
  const images = [
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000", // Foto 1
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000", // Foto 2
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000", // Foto 3
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000"  // Foto 4
  ];

  return (
    <section className="relative w-full bg-white py-12 md:py-24 overflow-hidden font-sans">
      
      {/* CONTENEDOR DE IMÁGENES ASIMÉTRICAS */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 items-end">
          
          {/* Columna 1 - Altura Normal */}
          <div className="relative aspect-[2/3] w-full overflow-hidden">
            <Image src={images[0]} alt="Fashion 1" fill className="object-cover" />
          </div>

          {/* Columna 2 - Más Alta */}
          <div className="relative aspect-[2/3] md:aspect-[2/3.5] w-full overflow-hidden">
            <Image src={images[1]} alt="Fashion 2" fill className="object-cover" />
          </div>

          {/* Columna 3 - Altura Media */}
          <div className="relative aspect-[2/3] md:aspect-[2/3.2] w-full overflow-hidden">
            <Image src={images[2]} alt="Fashion 3" fill className="object-cover" />
          </div>

          {/* Columna 4 - Altura Normal */}
          <div className="relative aspect-[2/3] w-full overflow-hidden">
            <Image src={images[3]} alt="Fashion 4" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* CONTENEDOR DE TEXTO (SUPERPUESTO) */}
      <div className="max-w-[1400px] mx-auto relative px-4 md:px-10 -mt-10 md:-mt-20">
        <div className="flex flex-col items-end text-right">
          
            {/* Título Principal */}
            <h2 className="text-[#D80E0E] font-[1000] text-[16vw] md:text-[10vw] leading-[0.8] tracking-tighter uppercase z-10">
            FASHION <br /> STYLING
            </h2>

          {/* Bullet Points */}
          <div className="mt-4 md:mt-6 mr-2 md:mr-4">
            <ul className="flex flex-col gap-1">
              {["Celebrity Styling", "Fashion Editorial", "Fashion Consulting"].map((item) => (
                <li key={item} className="text-black font-black uppercase text-[10px] md:text-[18px] leading-none tracking-wider">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER BRANDING */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 mt-16 md:mt-32">
        <p className="text-[#D80E0E] font-black uppercase text-[10px] md:text-[16px] tracking-[0.3em]">
          Frame Creatives Lab
        </p>
      </div>

    </section>
  );
}