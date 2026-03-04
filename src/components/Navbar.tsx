'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar el menú automáticamente si cambia la ruta
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Lógica de color: 
  // Si el menú está abierto, TODO es blanco (porque el overlay es negro).
  // Si está cerrado, es negro solo en subpáginas sin scroll.
  const isBlackText = !isHome && !scrolled && !isOpen;

  const navLinkClasses = (href: string) => {
    const isActive = pathname === href;
    if (isActive) return 'text-[#D80E0E] font-black text-[10px] tracking-[0.4em] uppercase';
    return `
      transition-colors duration-300 font-black text-[10px] tracking-[0.4em] uppercase
      ${isBlackText ? 'text-black hover:text-black/50' : 'text-white hover:text-white/60'}
    `;
  };

  return (
    <>
      {/* 1. BARRA SUPERIOR */}
      <nav className={`fixed top-0 left-0 w-full z-[70] transition-all duration-500 flex justify-between items-center px-8 md:px-16 ${
        scrolled && !isOpen
          ? 'py-4 md:py-6 bg-black/20 backdrop-blur-md' 
          : 'py-6 md:py-10 bg-transparent'
      }`}>
        
        {/* LOGO: Se vuelve blanco si isOpen es true */}
        <Link href="/" className="relative w-24 md:w-32 h-6 md:h-8">
          <Image 
            src="/frame-logo.svg" 
            alt="FRAME" 
            fill 
            className={`object-contain object-left transition-all duration-500 ${
              isBlackText ? 'brightness-0' : 'brightness-0 invert'
            }`}
          />
        </Link>

        {/* ENLACES DESKTOP */}
        <ul className="hidden md:flex items-center gap-12">
          <li><Link href="/who-are-we" className={navLinkClasses('/who-are-we')}>Who Are We</Link></li>
          <li><Link href="/services" className={navLinkClasses('/services')}>Services</Link></li>
          <li><Link href="/contact" className={navLinkClasses('/contact')}>Contact</Link></li>
        </ul>

        {/* BOTÓN HAMBURGUESA / CERRAR */}
        <button 
          className="md:hidden flex flex-col gap-[6px] p-2 relative z-[80]" 
          onClick={toggleMenu}
        >
          <span className={`block w-8 h-[1.5px] transition-all duration-500 ${
            isOpen ? 'rotate-45 translate-y-[8px] bg-white' : (isBlackText ? 'bg-black' : 'bg-white')
          }`}></span>
          <span className={`block w-8 h-[1.5px] transition-all duration-500 ${
            isOpen ? 'opacity-0' : (isBlackText ? 'bg-black' : 'bg-white')
          }`}></span>
          <span className={`block w-8 h-[1.5px] transition-all duration-500 ${
            isOpen ? '-rotate-45 -translate-y-[8px] bg-white' : (isBlackText ? 'bg-black' : 'bg-white')
          }`}></span>
        </button>
      </nav>

      {/* 2. OVERLAY MOBILE: Animación desde arriba */}
      <div className={`fixed inset-0 bg-black z-[60] flex flex-col justify-center items-center transition-transform duration-500 ease-in-out md:hidden ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <ul className="flex flex-col items-center gap-12 font-black text-2xl tracking-[0.3em] uppercase">
          <li>
            <Link href="/who-are-we" className={pathname === '/who-are-we' ? 'text-white' : 'text-[#D80E0E]'}>
              Who Are We
            </Link>
          </li>
          <li>
            <Link href="/services" className={pathname === '/services' ? 'text-white' : 'text-[#D80E0E]'}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className={pathname === '/contact' ? 'text-white' : 'text-[#D80E0E]'}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}