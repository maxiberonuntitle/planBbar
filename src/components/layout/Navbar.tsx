import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '../common/Logo';
import LanguageSwitcher from '../common/LanguageSwitcher';

const links = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/sobre-nosotros' },
  { key: 'menu', href: '/menu' },
  { key: 'gallery', href: '/galeria' },
  { key: 'events', href: '/eventos' },
  { key: 'reservations', href: '/reservas' },
  { key: 'location', href: '/ubicacion' },
  { key: 'contact', href: '/contacto' },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <NavLink to="/" className="shrink-0 transition opacity-90 hover:opacity-100" aria-label={t('nav.homeAria')}>
          <Logo className="h-9 w-auto object-contain sm:h-11" />
        </NavLink>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label={t('nav.mainNav')}>
          {links.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `text-sm text-cream transition hover:text-gold ${isActive ? 'text-gold' : ''}`
              }
            >
              {t(`nav.${link.key}`)}
            </NavLink>
          ))}
          <LanguageSwitcher />
          <NavLink
            to="/reservas"
            className="rounded-full border border-gold px-5 py-3 text-sm font-semibold text-gold transition hover:bg-gold hover:text-black"
          >
            {t('nav.book')}
          </NavLink>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/10 p-3 text-cream"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={open}
          >
            <span className="text-xl" aria-hidden="true">☰</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="space-y-4 border-t border-white/10 bg-black/95 px-6 py-6">
            {links.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className="block text-base text-cream transition hover:text-gold"
                onClick={closeMenu}
              >
                {t(`nav.${link.key}`)}
              </NavLink>
            ))}
            <NavLink
              to="/reservas"
              className="inline-flex rounded-full border border-gold px-5 py-3 text-sm font-semibold text-gold transition hover:bg-gold hover:text-black"
              onClick={closeMenu}
            >
              {t('nav.book')}
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
