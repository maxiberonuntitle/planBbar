import { siteMetadata } from '../../data/siteData';
import Logo from '../common/Logo';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10 text-cream" role="contentinfo">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="space-y-4">
          <Logo className="h-12 w-auto" />
          <p className="max-w-md text-sm leading-7 text-white/80">
            Bar & Pizzería en Lloret de Mar. Coctelería de autor, ambiente nocturno y gastronomía selecta.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Contacto</h3>
            <p className="text-sm text-white/70">Av. de Joan Llaverias, 47 - Playa</p>
            <p className="text-sm text-white/70">17310 Lloret de Mar, Girona</p>
            <p className="text-sm text-white/70">{siteMetadata.phone}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Horario</h3>
            <p className="text-sm text-white/70">Lun - Dom: 13:00 - 16:00 y 17:00 - 01:00</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Redes</h3>
            <a
              href="https://www.instagram.com/planb_lloretdemar/"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white/70 transition hover:text-gold"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
        © 2026 Plan B. Sitio diseñado para una experiencia premium en Lloret de Mar.
      </div>
    </footer>
  );
}
