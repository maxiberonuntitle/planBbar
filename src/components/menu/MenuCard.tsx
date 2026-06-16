import { MenuItem } from '../../data/menuData';
import Tag from '../common/Tag';

type MenuCardProps = {
  item: MenuItem;
};

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-black/80 p-6 transition hover:-translate-y-1 hover:border-gold/40 hover:shadow-soft">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{item.name}</h3>
          <p className="mt-3 text-sm leading-7 text-white/70">{item.description}</p>
        </div>
        <span className="text-sm font-semibold text-gold" aria-label="Precio">{item.price}</span>
      </header>
      {item.tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      ) : null}
    </article>
  );
}
