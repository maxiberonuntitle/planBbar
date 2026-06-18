import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Seo from '../components/layout/Seo';
import MenuSection from '../components/menu/MenuSection';
import MenuItem from '../components/menu/MenuItem';
import BurgerCard from '../components/menu/BurgerCard';
import CocktailCard from '../components/menu/CocktailCard';
import PriceTag from '../components/menu/PriceTag';
import { menuData, formatPrice } from '../data/menu';
import { images } from '../data/images';
import {
  COCKTAIL_SPIRIT_LABELS,
  MENU_SECTIONS,
  type CocktailSpirit,
  type MenuItem as MenuItemType,
} from '../types/menu';

const COCKTAIL_SPIRITS: CocktailSpirit[] = ['vodka', 'gin', 'whisky', 'ron'];

function ItemGrid({ items }: { items: MenuItemType[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-2">
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
}

function TagList({ title, items, accent }: { title: string; items: string[]; accent?: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/60 p-5 transition hover:border-gold/30">
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{title}</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/75 transition hover:border-gold/40 hover:text-gold"
          >
            {item}
          </li>
        ))}
      </ul>
      {accent ? <p className="mt-3 text-xs text-white/50">{accent}</p> : null}
    </div>
  );
}

export default function Menu() {
  const [activeSection, setActiveSection] = useState(MENU_SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5] },
    );

    MENU_SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="bg-black pt-28 text-cream">
      <Seo
        title="Menú - Bar Plan B"
        description="Carta completa de Plan B en Lloret de Mar: entrantes, hamburguesas, carnes, pizzas, cócteles y más."
        path="/menu"
      />

      <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <img
            src={images.coctails[1]}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-30"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/60" />
          <div className="relative p-8 sm:p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-gold">Plan B</p>
            <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Nuestra carta</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
              Sabores mediterráneos y coctelería de autor en un ambiente tropical y elegante. Explora nuestra selección
              completa.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
                <img
                  src={images.comida[0]}
                  alt="Plato destacado de Plan B"
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
                <img
                  src={images.comida[1]}
                  alt="Plato principal de Plan B"
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </motion.header>

        <nav
          aria-label="Categorías del menú"
          className="sticky top-[72px] z-30 -mx-4 mt-8 border-b border-white/10 bg-black/90 px-4 py-3 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
        >
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {MENU_SECTIONS.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] transition duration-300 sm:text-sm ${
                  activeSection === section.id
                    ? 'border-gold bg-gold/15 text-gold'
                    : 'border-white/10 bg-white/5 text-white/70 hover:border-gold/40 hover:text-gold'
                }`}
              >
                {section.titulo}
              </button>
            ))}
          </div>
        </nav>

        <div className="mt-12 space-y-16 sm:space-y-20">
          <MenuSection id="entrantes" title="Entrantes">
            <ItemGrid items={menuData.entrantes} />
          </MenuSection>

          <MenuSection id="ensaladas" title="Ensaladas">
            <ItemGrid items={menuData.ensaladas} />
          </MenuSection>

          <MenuSection
            id="hamburguesas"
            title="Hamburguesas"
            description="Elige tu pan, carne y uno de nuestros modelos exclusivos PLAN B."
          >
            <BurgerCard burgers={menuData.hamburguesas} />
          </MenuSection>

          <MenuSection id="carnes" title="Carnes">
            <ItemGrid items={menuData.carnes} />
          </MenuSection>

          <MenuSection id="pescados" title="Pescados">
            <ItemGrid items={menuData.pescados} />
          </MenuSection>

          <MenuSection id="pasta" title="Pasta" description="Elige tipo de pasta y salsa. Precio base por ración.">
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-2xl border border-gold/30 bg-gold/10 p-5">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Precio base</span>
                <PriceTag precio={menuData.pasta.precioBase} className="text-lg" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <TagList title="Tipos de pasta" items={menuData.pasta.tipos} />
                <TagList title="Salsas" items={menuData.pasta.salsas} />
              </div>
            </div>
          </MenuSection>

          <MenuSection
            id="pizzas"
            title="Pizzas"
            description="Personaliza tu pizza con bases, quesos e ingredientes premium."
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-2xl border border-gold/30 bg-gold/10 p-5">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Precio base</span>
                <PriceTag precio={menuData.pizzas.precioBase} className="text-lg" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <TagList title="Bases disponibles" items={menuData.pizzas.bases} />
                <TagList title="Quesos disponibles" items={menuData.pizzas.quesos} />
                <TagList
                  title="Ingredientes +1,50 €"
                  items={menuData.pizzas.ingredientes150}
                  accent="Suplemento por ingrediente"
                />
                <TagList
                  title="Ingredientes +2 €"
                  items={menuData.pizzas.ingredientes200}
                  accent="Suplemento por ingrediente"
                />
              </div>
            </div>
          </MenuSection>

          <MenuSection id="bebidas" title="Bebidas">
            <ItemGrid items={menuData.bebidas} />
          </MenuSection>

          <MenuSection id="cervezas" title="Cervezas">
            <ItemGrid items={menuData.cervezas} />
          </MenuSection>

          <MenuSection id="vinos" title="Sangría y vinos">
            <ItemGrid items={menuData.vinos} />
          </MenuSection>

          <MenuSection id="botellas" title="Botellas">
            <ItemGrid items={menuData.botellas} />
          </MenuSection>

          <MenuSection id="cubatas" title="Cubatas">
            <ItemGrid items={menuData.cubatas} />
          </MenuSection>

          <MenuSection
            id="cocktails"
            title="Cocktails"
            description={`Todos nuestros cócteles de autor a ${formatPrice(menuData.cocktails.precio)}.`}
          >
            <div className="space-y-10">
              {COCKTAIL_SPIRITS.filter((spirit) => menuData.cocktails[spirit].length > 0).map((spirit) => (
                <div key={spirit}>
                  <h3 className="mb-4 text-lg font-semibold uppercase tracking-[0.25em] text-gold">
                    {COCKTAIL_SPIRIT_LABELS[spirit]}
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                    {menuData.cocktails[spirit].map((cocktail) => (
                      <CocktailCard key={cocktail.id} cocktail={cocktail} precio={menuData.cocktails.precio} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </MenuSection>
        </div>
      </div>
    </section>
  );
}
