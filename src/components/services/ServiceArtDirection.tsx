// src/components/ServiceArtDirection.tsx
import Image from 'next/image';

export default function ServiceArtDirection() {
  const images = [
    "https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?q=80&w=1000",
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000",
    "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1000",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000"
  ];

  return (
    <section className="relative w-full bg-white py-12 md:py-24 overflow-hidden font-sans">
      
      {/* CONTENEDOR PRINCIPAL */}
      <div className="max-w-[1600px] mx-auto relative flex flex-col">
        
        {/* --- TIRA DE PELÍCULA 1 (Superior) --- */}
        <div className="flex justify-end w-full mb-4 md:mb-6">
          <div className="bg-black w-[92%] md:w-[85%] p-1.5 md:p-4 shadow-2xl relative">
            <div className="flex justify-around text-[5px] md:text-[10px] text-white/40 font-mono uppercase tracking-[0.2em] pb-1 md:pb-4">
              <span>.400</span><span>53</span><span>Kodak Portra 400</span><span>.400</span><span>53</span><span>Kodak Portra 400</span>
            </div>

            <div className="grid grid-cols-2 gap-1.5 md:gap-6">
              <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden">
                <Image src={images[0]} alt="Art 1" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden">
                <Image src={images[1]} alt="Art 2" fill className="object-cover" />
              </div>
            </div>

            <div className="flex justify-around text-[5px] md:text-[10px] text-white/40 font-mono pt-1 md:pt-4">
              <span>11</span><span>11A</span><span>12</span><span>12A</span>
            </div>
          </div>
        </div>

        {/* LISTA TÉCNICA - AJUSTE FINAL */}
        <div className="
            /* MOBILE: mt-16 para que en mobile baje y no toque la foto */
            px-6 mt-16 mb-4 
            
            /* DESKTOP: md:mt-0 es CLAVE para que no se sume a la posición absoluta */
            md:absolute 
            md:mt-0
            md:left-[2%]   
            md:top-[34%]
            
            z-50 pointer-events-none
            ">
            <ul className="flex flex-col gap-0.5 md:gap-1">
                {["Art Direction", "Art Assisting", "Decoration", "Renders"].map((t) => (
                <li key={t} className="text-black font-black uppercase text-[10px] md:text-[15px] leading-none tracking-wider whitespace-nowrap">
                    {t}
                </li>
                ))}
            </ul>
            <div className="w-10 md:w-14 h-[2px] md:h-[3px] bg-[#D80E0E] mt-2 md:mt-3"></div>
        </div>

        {/* --- TÍTULO "ART DIRECTION" --- */}
        <div className="relative md:absolute md:inset-0 flex items-center justify-end z-40 pointer-events-none px-6 md:px-20 my-8 md:my-0">
          <h2 className="text-[#D80E0E] font-[1000] text-[15vw] md:text-[12vw] leading-[0.8] tracking-tighter uppercase text-right">
            ART <br /> DIRECTION
          </h2>
        </div>

        {/* --- TIRA DE PELÍCULA 2 (Inferior) --- */}
        <div className="flex justify-start w-full -mt-4 md:-mt-10">
          <div className="bg-black w-[92%] md:w-[85%] p-1.5 md:p-4 shadow-2xl">
            <div className="flex justify-around text-[5px] md:text-[10px] text-white/40 font-mono uppercase tracking-[0.2em] pb-1 md:pb-4">
              <span>.400</span><span>53</span><span>Kodak Portra 400</span><span>.400</span><span>53</span><span>Kodak Portra 400</span>
            </div>

            <div className="grid grid-cols-2 gap-1.5 md:gap-6">
              <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden">
                <Image src={images[2]} alt="Art 3" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden">
                <Image src={images[3]} alt="Art 4" fill className="object-cover" />
              </div>
            </div>

            <div className="flex justify-around text-[5px] md:text-[10px] text-white/40 font-mono pt-1 md:pt-4">
              <span>11</span><span>11A</span><span>12</span><span>12A</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}