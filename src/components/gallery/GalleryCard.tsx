import { GalleryImage } from '../../data/galleryData';

type GalleryCardProps = {
  image: GalleryImage;
};

export default function GalleryCard({ image }: GalleryCardProps) {
  return (
    <div className="group overflow-hidden rounded-[32px] border border-white/10 bg-black/70 transition hover:shadow-soft">
      <div
        className="aspect-[4/3] bg-cover bg-center transition duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${image.src})` }}
      />
      <div className="p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{image.title}</p>
        <p className="mt-3 text-sm leading-7 text-white/70">{image.description}</p>
      </div>
    </div>
  );
}
