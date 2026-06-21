import { useTranslation } from 'react-i18next';
import type { MenuItem as MenuItemType } from '../../types/menu';
import PriceTag from './PriceTag';

type MenuItemProps = {
  item: MenuItemType;
};

export default function MenuItem({ item }: MenuItemProps) {
  const { t } = useTranslation();
  const description = t(`menu.items.${item.id}.description`, { defaultValue: '' });

  return (
    <article className="group flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-black/60 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:bg-black/80 hover:shadow-glow sm:p-5">
      <div className="min-w-0 flex-1">
        <h3 className="text-base font-semibold text-white transition-colors group-hover:text-gold sm:text-lg">
          {t(`menu.items.${item.id}.name`)}
        </h3>
        {description ? (
          <p className="mt-2 text-sm leading-relaxed text-white/65">{description}</p>
        ) : null}
      </div>
      <PriceTag precio={item.precio} />
    </article>
  );
}
