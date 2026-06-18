import type { Burger } from '../../types/menu';
import { formatPrice } from '../../data/menu';
import PriceTag from './PriceTag';

type BurgerCardProps = {
  burgers: Burger;
};

export default function BurgerCard({ burgers }: BurgerCardProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-black/60 p-5 transition hover:border-gold/30">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Panes disponibles</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            {burgers.panes.map((pan) => (
              <li key={pan} className="flex items-center gap-2">
                <span className="text-gold" aria-hidden="true">•</span>
                {pan}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/60 p-5 transition hover:border-gold/30">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Carnes disponibles</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            {burgers.carnes.map((carne) => (
              <li key={carne} className="flex items-center gap-2">
                <span className="text-gold" aria-hidden="true">•</span>
                {carne}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 transition hover:border-gold/40">
          Extra doble carne: <strong className="text-gold">{formatPrice(burgers.extraCarne)}</strong>
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 transition hover:border-gold/40">
          Extra patatas: <strong className="text-gold">{formatPrice(burgers.extraPatatas)}</strong>
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {burgers.planes.map((plan) => (
          <article
            key={plan.id}
            className="group rounded-2xl border border-white/10 bg-gradient-to-br from-black/80 to-graphite/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-glow sm:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-bold tracking-wide text-gold transition-colors group-hover:text-cream">
                {plan.nombre}
              </h3>
              <PriceTag precio={plan.precio} />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{plan.descripcion}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
