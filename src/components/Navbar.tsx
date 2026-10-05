'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { CircleHighlight } from '@/components/marks';

const LINKS = [
  { href: '/who-are-we', label: 'Who Are We' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  // Guardamos la ruta en la que se abrió el menú: al cambiar de ruta se cierra solo
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === '/';
  const isOpen = openedAt === pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setOpenedAt(isOpen ? null : pathname);

  // En home la barra vive dentro de la tarjeta (transparente); al hacer scroll o en subpáginas es una tarjeta crema
  const solid = !isHome || scrolled || isOpen;

  return (
    <>
      <nav className="fixed top-3 md:top-6 left-0 w-full z-[70] px-3 md:px-6 pointer-events-none">
        <div
          className={`pointer-events-auto mx-auto max-w-[1400px] flex items-center justify-between rounded-2xl px-5 md:px-10 py-4 md:py-5 transition-all duration-500 ${
            solid ? 'bg-paper/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
          }`}
        >
          <Link href="/" className="relative w-24 md:w-32 h-6 md:h-8 shrink-0">
            <Image src="/frame-logo-dark.svg" alt="FRAME" fill className="object-contain object-left" />
          </Link>

          {/* ENLACES DESKTOP */}
          <ul className="hidden md:flex items-center gap-14 text-ink">
            {LINKS.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href} className="relative">
                  <Link
                    href={href}
                    className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-60 ${
                      active ? 'italic' : ''
                    }`}
                  >
                    {label}
                  </Link>
                  {active && (
                    <CircleHighlight className="absolute -inset-x-4 -inset-y-3 w-[calc(100%+2rem)] h-[calc(100%+1.5rem)] pointer-events-none" />
                  )}
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact"
            className="hidden md:block bg-frame-red text-white text-[11px] font-bold uppercase tracking-[0.2em] px-6 py-3 rounded-full hover:bg-ink transition-colors"
          >
            Work with us
          </Link>

          {/* BOTÓN MENÚ MOBILE (estilo Mzia) */}
          <button
            className="md:hidden relative z-[80] font-mono text-[11px] uppercase tracking-widest border border-ink rounded px-3 py-1.5 text-ink"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            ( {isOpen ? 'Close' : 'Menu'} )
          </button>
        </div>
      </nav>

      {/* OVERLAY MOBILE */}
      <div
        className={`fixed inset-0 bg-charcoal z-[60] flex flex-col justify-center items-center transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <ul className="flex flex-col items-center gap-10 font-display text-6xl uppercase">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={pathname === href ? 'text-white' : 'text-frame-red'}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
