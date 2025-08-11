'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems: Array<{ label: string; href: string }> = [
  { label: 'Quiénes somos', href: '#about' },
  { label: 'Misión y Visión', href: '#stand-for' },
  { label: 'Objetivos', href: '#objectives' },
  { label: 'Servicios', href: '#services' },
  { label: 'Contacto', href: '#contact' }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Disable page scroll when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="#hero"
          className="flex items-center gap-3"
          aria-label="Ir al inicio"
        >
          <img
            src="/logo-dataia.png"
            alt="DataAI Services"
            className="max-h-[35px] rounded-md"
          />
          <span className="font-semibold tracking-tight text-blue-900">
            DataAI Services
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="text-[16px] leading-[17px] font-medium text-blue-900/80 transition-colors hover:text-blue-900 hover:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen(o => !o)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white text-slate-700 transition-colors hover:bg-slate-50 md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
          <span className="sr-only">Abrir menú</span>
        </button>
      </div>

      {/* Mobile fullscreen overlay menu with animation */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 bg-white transition-opacity duration-300 md:hidden ${
          isOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <button
          type="button"
          aria-label="Cerrar menú"
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200"
        >
          <X size={20} />
        </button>
        <div
          className={`mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-center gap-6 px-6 py-10 text-center transition-transform duration-300 ${
            isOpen ? 'translate-y-0' : 'translate-y-3'
          }`}
          onClick={e => e.stopPropagation()}
        >
          <nav className="flex flex-col gap-4">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-3 text-lg font-medium text-blue-900/90 transition-colors hover:bg-slate-50"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
