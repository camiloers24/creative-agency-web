// src/components/WhoAreWe.tsx
import Image from 'next/image';

export default function WhoAreWe() {
  const whoAreWeImg = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000";

  return (
    <section className="relative w-full bg-black overflow-hidden p-3 md:p-6">
      <Image src={whoAreWeImg} alt="" fill priority className="object-cover grayscale opacity-80" />

      <div className="paper-card relative z-10 mx-auto max-w-[1400px] rounded-3xl px-5 md:px-12 pt-28 md:pt-36 pb-12 md:pb-16 overflow-hidden grid md:grid-cols-2 gap-12 md:gap-10">
        {/* TEXTOS */}
        <div className="flex flex-col justify-between gap-12">
          <div>
            <h1 className="font-display text-ink uppercase leading-[0.85] text-[24vw] md:text-[min(10vw,150px)]">
              Who are <br /> we?
            </h1>

            <h2 className="mt-8 font-mono text-[11px] md:text-xs uppercase tracking-widest text-frame-red max-w-sm">
              FRAME IS A 360° CREATIVE AGENCY BASED IN MIAMI AND MEXICO CITY.
            </h2>
          </div>

          <div className="flex flex-col gap-6 md:items-end md:text-right">
            <p className="text-ink font-medium text-sm md:text-base leading-relaxed max-w-sm">
              Fusionamos moda, música, arte y estrategia para crear conceptos visuales con alma que posicionan a artistas y marcas en el centro de la cultura.
            </p>
            <p className="text-ink font-medium text-sm md:text-base leading-relaxed max-w-sm">
              Desde el styling hasta el evento. Desde la campaña hasta el contenido. Cada proyecto es una experiencia dirigida con visión artística y una red de talentos lista para hacerlo realidad.
            </p>
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink/60">Frame Creatives Lab</span>
          </div>
        </div>

        {/* IMAGEN REPETIDA EN 3 COLUMNAS (se conserva el efecto original) */}
        <div className="relative min-h-[70vw] md:min-h-[620px] grid grid-cols-3 gap-2">
          {['30%', '40%', '45%'].map((pos, i) => (
            <div key={i} className="relative overflow-hidden bg-ink">
              <Image
                src={whoAreWeImg}
                alt={`Model ${i + 1}`}
                fill
                className="object-cover grayscale scale-105"
                style={{ objectPosition: `${pos} center` }}
              />
            </div>
          ))}
          <div className="absolute bottom-4 right-4 bg-paper rounded-full p-3 shadow-lg">
            <Image src="/frame-icon.svg" alt="FRAME Icon" width={48} height={48} className="w-9 h-9 md:w-12 md:h-12 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
