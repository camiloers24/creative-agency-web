// src/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-black p-3 md:p-6">
      <div className="paper-card mx-auto max-w-[1400px] rounded-3xl px-5 md:px-12 pt-10 md:pt-14 pb-6 text-ink">
        <div className="flex flex-col md:flex-row justify-between gap-8 font-mono text-[10px] md:text-[11px] uppercase">
          <ul className="flex flex-col gap-1">
            <li><Link href="/who-are-we" className="hover:text-frame-red transition-colors">Who Are We</Link></li>
            <li><Link href="/services" className="hover:text-frame-red transition-colors">Services</Link></li>
            <li><Link href="/contact" className="hover:text-frame-red transition-colors">Contact</Link></li>
          </ul>
          <ul className="flex flex-col gap-1">
            <li><Link href="https://www.instagram.com/framecreativeslab/" className="hover:text-frame-red transition-colors">Instagram</Link></li>
            <li><Link href="#" className="hover:text-frame-red transition-colors">Behance</Link></li>
            <li><Link href="#" className="hover:text-frame-red transition-colors">LinkedIn</Link></li>
          </ul>
          <p>Miami / <br /> Mexico City</p>
          <p className="md:max-w-xs md:text-right text-ink/60">
            © 2026 FRAME CREATIVES LAB — ALL RIGHTS RESERVED
          </p>
        </div>

        {/* Wordmark gigante (ref. Juanma) */}
        <div className="mt-10 md:mt-14 flex items-end justify-between font-display uppercase leading-[0.8] text-[16vw] md:text-[min(17vw,240px)]">
          <span className="text-ink">Frame</span>
          <span className="text-frame-red">.CLAB</span>
        </div>
      </div>
    </footer>
  );
}
