import { useMemo, useState } from 'react';
import { galleryCategories, galleryImages } from '../data/galleryData';
import SectionTitle from '../components/common/SectionTitle';
import GalleryCard from '../components/gallery/GalleryCard';
import Seo from '../components/layout/Seo';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = useMemo(
    () => [{ id: 'all', title: 'Todas' }, ...galleryCategories],
    [],
  );

  const visibleImages = useMemo(
    () => (selectedCategory === 'all' ? galleryImages : galleryImages.filter((image) => image.categoryId === selectedCategory)),
    [selectedCategory],
  );

  return (
    <section className="bg-black pt-28 text-cream">
      <Seo
        title="Galería - Bar Plan B"
        description="Galería del bar Plan B en Lloret de Mar. Descubre el ambiente, la terraza y la coctelería premium."
        path="/galeria"
      />
      <div className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl lg:p-16">
          <SectionTitle
            eyebrow="Galería"
            title="Ambiente e inspiración"
            description="Navega nuestras categorías visuales y descubre el estilo nocturno que define a Plan B."
          />
        </div>

        <div className="mt-16">
          <div className="flex flex-wrap gap-4 text-sm text-white/70">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full border px-4 py-2 transition ${
                  selectedCategory === category.id
                    ? 'border-gold bg-gold/10 text-gold'
                    : 'border-white/10 bg-white/5 hover:border-gold hover:text-gold'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleImages.map((image) => (
              <GalleryCard key={image.id} image={image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
