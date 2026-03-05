// src/components/ServiceArtistExperiences.tsx
import Image from 'next/image';

export default function ServiceArtistExperiences() {
  const images = [
    "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000",
    "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1000",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000",
    "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000",
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000"
  ];

  return (
    <section className="relative w-full bg-black py-20 md:py-32 overflow-hidden font-sans">
      
      {/* Marcador lateral izquierdo (Vertical) */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left hidden md:block z-10">
        <span className="text-gray-700 font-bold text-xs uppercase tracking-widest whitespace-nowrap">
          FRAME CREATIVES LAB
        </span>
      </div>

      <div className="max-w-[1500px] mx-auto px-6 md:px-12 relative">
        
        {/* GRILLA DE FOTOS: Limpia y sin marcos */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          
          <div className="md:col-span-4 relative md:-mt-10 self-start">
            <div className="relative aspect-[3/4] overflow-hidden shadow-2xl">
              <Image src={images[0]} alt="Artist Exp 1" fill className="object-cover" />
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-5 md:mt-24 z-20 relative">
            <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
              <Image src={images[1]} alt="Artist Exp 2" fill className="object-cover" />
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9 md:mt-[-30px] relative">
            <div className="relative aspect-[3/4] overflow-hidden shadow-2xl">
              <Image src={images[2]} alt="Artist Exp 3" fill className="object-cover" />
            </div>
          </div>

          <div className="md:col-span-5 md:-mt-20 relative z-10 self-end">
            <div className="relative aspect-[16/10] overflow-hidden shadow-2xl">
              <Image src={images[3]} alt="Artist Exp 4" fill className="object-cover" />
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7 md:-mt-10 self-end">
            <div className="relative aspect-[16/9] overflow-hidden shadow-2xl">
              <Image src={images[4]} alt="Artist Exp 5" fill className="object-cover" />
            </div>
          </div>

        </div>

        {/* BLOQUE DE TEXTO SUPERPUESTO */}
        <div className="mt-16 md:mt-[-120px] z-30 relative flex flex-col items-end text-right md:pr-4">
          
          {/* TÍTULO GIGANTE CORREGIDO: Dividido en 2 líneas y confinado a la pantalla */}
          <div className="relative mb-8 w-full flex justify-end">
            <h2 className="text-[#D80E0E] font-[1000] text-[15vw] md:text-[11vw] leading-[0.8] tracking-tighter uppercase z-10 relative">
              ARTIST <br /> EXPERIENCES
            </h2>
            {/* Sombra de apoyo (Glow Rojo) */}
            <h2 className="absolute top-0 right-0 text-[#D80E0E] font-[1000] text-[15vw] md:text-[11vw] leading-[0.8] tracking-tighter uppercase blur-[40px] opacity-60 -z-10 pointer-events-none">
              ARTIST <br /> EXPERIENCES
            </h2>
          </div>

          {/* LISTA DE SERVICIOS */}
          <div className="mr-2">
            <ul className="flex flex-col gap-1 md:gap-2">
              {[
                "Marketing Campaigns",
                "Experience Activations",
                "Brand/Music Experiences"
              ].map((item) => (
                <li key={item} className="text-white font-black uppercase text-[12px] md:text-[16px] leading-none tracking-widest">
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