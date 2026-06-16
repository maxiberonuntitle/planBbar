export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10 text-cream" role="contentinfo">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Plan B</p>
          <p className="max-w-md text-sm leading-7 text-white/80">
            Bar & Lounge premium en Lloret de Mar. Coctelería de autor, ambiente nocturno y gastronomía selecta.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Contacto</h3>
            <p className="text-sm text-white/70">Carrer de la Platja, 12</p>
            <p className="text-sm text-white/70">Lloret de Mar, Girona</p>
            <p className="text-sm text-white/70">+34 972 00 00 00</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Horario</h3>
            <p className="text-sm text-white/70">Lun - Dom: 18:00 - 03:00</p>
            <p className="text-sm text-white/70">Sábados con DJ en vivo</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Redes</h3>
            <p className="text-sm text-white/70">Instagram</p>
            <p className="text-sm text-white/70">Facebook</p>
            <p className="text-sm text-white/70">TikTok</p>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
        © 2026 Plan B. Sitio diseñado para una experiencia premium en Lloret de Mar.
      </div>
    </footer>
  );
}
