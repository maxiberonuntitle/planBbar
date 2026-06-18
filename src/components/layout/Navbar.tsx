import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../common/Logo';

const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
  { label: 'Menú', href: '/menu' },
  { label: 'Galería', href: '/galeria' },
  { label: 'Eventos', href: '/eventos' },
  { label: 'Reservas', href: '/reservas' },
  { label: 'Ubicación', href: '/ubicacion' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <NavLink to="/" className="shrink-0 transition opacity-90 hover:opacity-100" aria-label="Plan B - Inicio">
          <Logo className="h-9 w-auto object-contain sm:h-11" />
        </NavLink>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
          {links.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `text-sm text-cream transition hover:text-gold ${isActive ? 'text-gold' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/reservas"
            className="rounded-full border border-gold px-5 py-3 text-sm font-semibold text-gold transition hover:bg-gold hover:text-black"
          >
            Reservar
          </NavLink>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 p-3 text-cream lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <span className="text-xl" aria-hidden="true">☰</span>
        </button>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="space-y-4 border-t border-white/10 bg-black/95 px-6 py-6">
            {links.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className="block text-base text-cream transition hover:text-gold"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/reservas"
              className="inline-flex rounded-full border border-gold px-5 py-3 text-sm font-semibold text-gold transition hover:bg-gold hover:text-black"
              onClick={() => setOpen(false)}
            >
              Reservar
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
