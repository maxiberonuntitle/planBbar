import { useTranslation } from 'react-i18next';
import type { GalleryImage } from '../../data/galleryData';

type GalleryCardProps = {
  image: GalleryImage;
};

export default function GalleryCard({ image }: GalleryCardProps) {
  const { t } = useTranslation();

  return (
    <article className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-gold/40">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image.src}
          alt={t(`gallery.images.${image.id}.title`)}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{t(`gallery.images.${image.id}.title`)}</h3>
        <p className="mt-3 text-sm leading-7 text-white/70">{t(`gallery.images.${image.id}.description`)}</p>
      </div>
    </article>
  );
}
