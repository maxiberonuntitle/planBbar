import { formatPrice } from '../../data/menu';

type PriceTagProps = {
  precio: number;
  className?: string;
};

export default function PriceTag({ precio, className = '' }: PriceTagProps) {
  return (
    <span
      className={`shrink-0 text-sm font-semibold tabular-nums text-gold sm:text-base ${className}`}
      aria-label={`Precio: ${formatPrice(precio)}`}
    >
      {formatPrice(precio)}
    </span>
  );
}
