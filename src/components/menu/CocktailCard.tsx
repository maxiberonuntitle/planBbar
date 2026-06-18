import type { CocktailItem } from '../../types/menu';
import PriceTag from './PriceTag';

type CocktailCardProps = {
  cocktail: CocktailItem;
  precio: number;
};

export default function CocktailCard({ cocktail, precio }: CocktailCardProps) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-black/60 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:bg-black/80 hover:shadow-glow sm:p-5">
      <div className="flex items-start justify-between gap-4">
        <h4 className="text-base font-semibold text-white transition-colors group-hover:text-gold sm:text-lg">
          {cocktail.nombre}
        </h4>
        <PriceTag precio={precio} />
      </div>
      <p className="mt-2 text-sm leading-relaxed text-white/65">{cocktail.descripcion}</p>
    </article>
  );
}
