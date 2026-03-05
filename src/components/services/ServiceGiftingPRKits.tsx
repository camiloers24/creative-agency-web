// src/components/ServiceGiftingPRKits.tsx
import Image from 'next/image';

export default function ServiceGiftingPRKits() {
  const images = [
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000", // 1. Nueva: Caja/Interior minimalista
    "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?q=80&w=1000", // 2. Nueva: Textura/Abstracto elegante
    "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000"  // 3. Nueva: Sweater/Textil
  ];

  return (
    <section className="relative w-full bg-white py-20 md:py-32 overflow-hidden font-sans">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 relative">
        
        {/* COMPOSICIÓN DE 3 IMÁGENES GRANDES */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          
          {/* Imagen 1: Dominante Izquierda */}
          <div className="md:col-span-7 z-10">
            <div className="relative aspect-[4/5] md:aspect-square w-full overflow-hidden">
              <Image 
                src={images[0]} 
                alt="PR Kit Box" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* Imagen 2: Superior Derecha */}
          <div className="md:col-span-5 md:mt-20 z-0">
            <div className="relative aspect-square md:aspect-[3/4] w-full overflow-hidden">
              <Image 
                src={images[1]} 
                alt="Detail Shot" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* Imagen 3: Horizontal Inferior (Movida a la izquierda para no tocar los bullets) */}
          <div className="md:col-span-8 md:col-start-2 md:-mt-32 z-20">
            <div className="relative aspect-video w-full overflow-hidden">
              <Image 
                src={images[2]} 
                alt="Merch Collection" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* BLOQUE DE TEXTO Y TÍTULO (Derecha Inferior) */}
        <div className="mt-16 md:mt-[-100px] relative z-30 flex flex-col items-end text-right">
          
          {/* Lista de Servicios */}
          <div className="mb-6 mr-2">
            <ul className="flex flex-col gap-1 md:gap-2">
              {["Merch", "PR Kits", "Personalized Gifts"].map((item) => (
                <li key={item} className="text-black font-black uppercase text-[14px] md:text-[20px] leading-none tracking-tighter">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* TÍTULO GIGANTE CON GLOW ROJO */}
          <div className="relative w-full flex justify-end">
            <h2 className="text-[#D80E0E] font-[1000] text-[15vw] md:text-[10vw] leading-[0.8] tracking-tighter uppercase z-10 relative">
              GIFTING <br /> PR KITS
            </h2>
            <h2 className="absolute top-0 right-0 text-[#D80E0E] font-[1000] text-[15vw] md:text-[10vw] leading-[0.8] tracking-tighter uppercase blur-[40px] opacity-30 -z-10 pointer-events-none">
              GIFTING <br /> PR KITS
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
}