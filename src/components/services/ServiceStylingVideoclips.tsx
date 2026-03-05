// src/components/ServiceStylingVideoclips.tsx
import Image from 'next/image';

export default function ServiceStylingVideoclips() {
  const images = [    
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000",
    "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000",
    "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000"
  ];

  return (
    <section className="relative w-full bg-black overflow-hidden font-sans">
      
      {/* GRILLA DE IMÁGENES: Ajustada para mayor altura en desktop */}
      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 items-start">
          
          {/* Foto 1 */}
          <div className="relative aspect-[3/4] md:aspect-[2/4.5] w-full overflow-hidden">
            <Image src={images[0]} alt="Video 1" fill className="object-cover" />
          </div>

          {/* Foto 2 */}
          <div className="relative aspect-[3/4] md:aspect-[2/4.5] w-full overflow-hidden">
            <Image src={images[1]} alt="Video 2" fill className="object-cover" />
          </div>

          {/* Foto 3 */}
          <div className="relative aspect-[3/4] md:aspect-[2/4.5] w-full overflow-hidden">
            <Image src={images[2]} alt="Video 3" fill className="object-cover" />
          </div>

          {/* Foto 4 */}
          <div className="relative aspect-[3/4] md:aspect-[2/4.5] w-full overflow-hidden">
            <Image src={images[3]} alt="Video 4" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* BLOQUE DE TEXTO SUPERPUESTO */}
      <div className="max-w-[1400px] mx-auto relative px-4 md:px-10 -mt-16 md:-mt-32 pb-24">
        <div className="flex flex-col items-end text-right">
          
            <div className="relative z-10">
            <h2 className="text-[#D80E0E] font-[1000] text-[16vw] md:text-[11vw] leading-[0.8] tracking-tighter uppercase">
                STYLING <br /> VIDEOCLIPS
            </h2>
            
            <h2 className="absolute top-0 right-0 text-[#D80E0E] font-[1000] text-[16vw] md:text-[11vw] leading-[0.8] tracking-tighter uppercase blur-[30px] opacity-40 -z-10 pointer-events-none">
                STYLING <br /> VIDEOCLIPS
            </h2>
            </div>

            <div className="mt-6 md:mt-8 mr-2 md:mr-4">
                <ul className="flex flex-col gap-1 md:gap-2">
                {["Fashion Concept", "Fashion Design", "Brand Hunting"].map((item) => (
                    <li key={item} className="text-white font-black uppercase text-[10px] md:text-[16px] leading-none tracking-widest">
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