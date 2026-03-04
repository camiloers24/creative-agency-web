// src/components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-white/10 py-16 md:py-24 px-8 md:px-16 text-white">
      
      <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8">
        
        {/* 1. EL ICONO (En blanco) */}
        <div className="relative w-12 h-12 md:w-16 md:h-16">
          <Image 
            src="/frame-icon.svg" 
            alt="FRAME Icon" 
            fill 
            className="object-contain brightness-0 invert" 
          />
        </div>

        {/* 2. SITE MAP */}
        <div className="flex flex-col gap-6">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Site Map</span>
          <ul className="flex flex-col gap-3 font-black text-sm md:text-base uppercase tracking-widest">
            <li><Link href="/who-are-we" className="hover:text-[#D80E0E] transition-colors">Who Are We</Link></li>
            <li><Link href="#services" className="hover:text-[#D80E0E] transition-colors">Services</Link></li>
            <li><Link href="#contact" className="hover:text-[#D80E0E] transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* 3. SOCIALS */}
        <div className="flex flex-col gap-6">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Socials</span>
          <ul className="flex flex-col gap-3 font-black text-sm md:text-base uppercase tracking-widest">
            <li><Link href="https://www.instagram.com/framecreativeslab/" className="hover:text-[#D80E0E] transition-colors">Instagram</Link></li>
            <li><Link href="#" className="hover:text-[#D80E0E] transition-colors">Behance</Link></li>
            <li><Link href="#" className="hover:text-[#D80E0E] transition-colors">LinkedIn</Link></li>
          </ul>
        </div>

        {/* 4. INFO / LOCATION */}
        <div className="flex flex-col gap-6 md:text-right">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Location</span>
          <p className="font-black text-sm md:text-base uppercase tracking-widest leading-relaxed">
            Miami / <br /> Mexico City
          </p>
        </div>
      </div>

      {/* 5. COPYRIGHT */}
      <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
          © 2026 FRAME CREATIVES LAB — ALL RIGHTS RESERVED
        </span>
        {/*<div className="flex gap-6 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
          <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
        </div>*/}
      </div>

    </footer>
  );
}