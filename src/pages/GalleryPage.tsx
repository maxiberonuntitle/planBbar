import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { galleryCategories, galleryImages } from '../data/galleryData';
import SectionTitle from '../components/common/SectionTitle';
import GalleryCard from '../components/gallery/GalleryCard';
import Seo from '../components/layout/Seo';
import { FadeInOnScroll } from '../components/common/ScrollParallax';
import { images } from '../data/images';

export default function GalleryPage() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = useMemo(
    () => [{ id: 'all' }, ...galleryCategories],
    [],
  );

  const visibleImages = useMemo(
    () => (selectedCategory === 'all' ? galleryImages : galleryImages.filter((image) => image.categoryId === selectedCategory)),
    [selectedCategory],
  );

  return (
    <section className="bg-black pt-28 text-cream">
      <Seo page="gallery" path="/galeria" />
      <div className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <FadeInOnScroll>
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">
            <img src={images.barra} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50" />
            <div className="relative p-10 lg:p-16">
              <SectionTitle eyebrow={t('gallery.eyebrow')} title={t('gallery.title')} description={t('gallery.description')} />
            </div>
          </div>
        </FadeInOnScroll>

        <div className="mt-16">
          <div className="flex flex-wrap gap-4 text-sm text-white/70">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                type="button"
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`rounded-full border px-4 py-2 transition ${
                  selectedCategory === category.id
                    ? 'border-gold bg-gold/10 text-gold'
                    : 'border-white/10 bg-white/5 hover:border-gold hover:text-gold'
                }`}
              >
                {category.id === 'all' ? t('common.all') : t(`gallery.categories.${category.id}`)}
              </motion.button>
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
