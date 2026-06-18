import { GalleryImage } from '../../data/galleryData';

type GalleryCardProps = {
  image: GalleryImage;
};

export default function GalleryCard({ image }: GalleryCardProps) {
  return (
    <article className="group overflow-hidden rounded-[32px] border border-white/10 bg-black/70 transition hover:shadow-soft">
        <figure className="relative overflow-hidden">
        <img
          src={image.src}
          alt={image.title}
          className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </figure>
      <div className="p-6">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{image.title}</h3>
        <p className="mt-3 text-sm leading-7 text-white/70">{image.description}</p>
      </div>
    </article>
  );
}
