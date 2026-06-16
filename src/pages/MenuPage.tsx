import { useMemo, useState } from 'react';
import { menuCategories, menuItems } from '../data/menuData';
import SectionTitle from '../components/common/SectionTitle';
import MenuCard from '../components/menu/MenuCard';
import Seo from '../components/layout/Seo';

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = useMemo(() => [{ id: 'all', title: 'Todo', description: 'Explora toda nuestra carta.' }, ...menuCategories], []);

  const visibleItems = useMemo(
    () => (selectedCategory === 'all' ? menuItems : menuItems.filter((item) => item.categoryId === selectedCategory)),
    [selectedCategory],
  );

  return (
    <section className="bg-black pt-28 text-cream">
      <Seo
        title="Menú - Bar Plan B"
        description="Explora nuestro menú premium en Plan B. Cócteles, tapas y platos exclusivos para una experiencia gourmet en Lloret de Mar."
        path="/menu"
      />
      <div className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl lg:p-16">
          <SectionTitle
            eyebrow="Menú"
            title="Nuestra carta premium"
            description="Explora una selección de cócteles, tapas y platos creados para una experiencia gourmet en Lloret de Mar."
          />
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="rounded-[32px] border border-white/10 bg-black/70 p-8">
            <h2 className="text-xl font-semibold text-white">Categorías</h2>
            <div className="mt-8 space-y-3 text-sm text-white/70">
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full rounded-3xl border px-4 py-3 text-left transition ${
                    selectedCategory === category.id
                      ? 'border-gold bg-gold/10 text-gold'
                      : 'border-white/10 bg-white/5 hover:border-gold hover:text-gold'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </aside>

          <div className="space-y-8">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    {categories.find((category) => category.id === selectedCategory)?.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-white/70">
                    {categories.find((category) => category.id === selectedCategory)?.description}
                  </p>
                </div>
                <p className="text-sm text-white/60">{visibleItems.length} opciones disponibles</p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {visibleItems.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
