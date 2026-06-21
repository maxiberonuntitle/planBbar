import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Seo from '../components/layout/Seo';
import MenuSection from '../components/menu/MenuSection';
import MenuItem from '../components/menu/MenuItem';
import BurgerCard from '../components/menu/BurgerCard';
import CocktailCard from '../components/menu/CocktailCard';
import PriceTag from '../components/menu/PriceTag';
import { menuData, formatPrice } from '../data/menu';
import { images } from '../data/images';
import { COCKTAIL_SPIRITS, MENU_SECTIONS, type MenuItem as MenuItemType } from '../types/menu';

function ItemGrid({ items }: { items: MenuItemType[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-4">
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
}

function TagList({ title, items, translatePrefix, accent }: { title: string; items: string[]; translatePrefix: string; accent?: string }) {
  const { t } = useTranslation();
  return (
    <div className="rounded-2xl border border-white/10 bg-black/60 p-5 transition hover:border-gold/30">
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{title}</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/75 transition hover:border-gold/40 hover:text-gold">
            {t(`${translatePrefix}.${item}`)}
          </li>
        ))}
      </ul>
      {accent ? <p className="mt-3 text-xs text-white/50">{accent}</p> : null}
    </div>
  );
}

export default function Menu() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState(MENU_SECTIONS[0].id);

  const selectedSectionContent = useMemo(() => {
    switch (activeSection) {
      case 'entrantes':
        return (
          <MenuSection id="entrantes" title={t('menu.sections.entrantes')}>
            <ItemGrid items={menuData.entrantes} />
          </MenuSection>
        );
      case 'ensaladas':
        return (
          <MenuSection id="ensaladas" title={t('menu.sections.ensaladas')}>
            <ItemGrid items={menuData.ensaladas} />
          </MenuSection>
        );
      case 'hamburguesas':
        return (
          <MenuSection id="hamburguesas" title={t('menu.sections.hamburguesas')} description={t('menu.descriptions.hamburguesas')}>
            <BurgerCard burgers={menuData.hamburguesas} />
          </MenuSection>
        );
      case 'carnes':
        return (
          <MenuSection id="carnes" title={t('menu.sections.carnes')}>
            <ItemGrid items={menuData.carnes} />
          </MenuSection>
        );
      case 'pescados':
        return (
          <MenuSection id="pescados" title={t('menu.sections.pescados')}>
            <ItemGrid items={menuData.pescados} />
          </MenuSection>
        );
      case 'pasta':
        return (
          <MenuSection id="pasta" title={t('menu.sections.pasta')} description={t('menu.descriptions.pasta')}>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-2xl border border-gold/30 bg-gold/10 p-5">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{t('menu.basePrice')}</span>
                <PriceTag precio={menuData.pasta.precioBase} className="text-lg" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <TagList title={t('menu.labels.pastaTypes')} items={menuData.pasta.tipos} translatePrefix="menu.pasta" />
                <TagList title={t('menu.labels.sauces')} items={menuData.pasta.salsas} translatePrefix="menu.pasta" />
              </div>
            </div>
          </MenuSection>
        );
      case 'pizzas':
        return (
          <MenuSection id="pizzas" title={t('menu.sections.pizzas')} description={t('menu.descriptions.pizzas')}>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-2xl border border-gold/30 bg-gold/10 p-5">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{t('menu.basePrice')}</span>
                <PriceTag precio={menuData.pizzas.precioBase} className="text-lg" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <TagList title={t('menu.labels.pizzaBases')} items={menuData.pizzas.bases} translatePrefix="menu.pizzas" />
                <TagList title={t('menu.labels.cheeses')} items={menuData.pizzas.quesos} translatePrefix="menu.pizzas" />
                <TagList title={t('menu.labels.ingredients150')} items={menuData.pizzas.ingredientes150} translatePrefix="menu.pizzas" accent={t('menu.labels.supplement')} />
                <TagList title={t('menu.labels.ingredients200')} items={menuData.pizzas.ingredientes200} translatePrefix="menu.pizzas" accent={t('menu.labels.supplement')} />
              </div>
            </div>
          </MenuSection>
        );
      case 'bebidas':
        return (
          <MenuSection id="bebidas" title={t('menu.sections.bebidas')}>
            <ItemGrid items={menuData.bebidas} />
          </MenuSection>
        );
      case 'cervezas':
        return (
          <MenuSection id="cervezas" title={t('menu.sections.cervezas')}>
            <ItemGrid items={menuData.cervezas} />
          </MenuSection>
        );
      case 'vinos':
        return (
          <MenuSection id="vinos" title={t('menu.sections.vinos')}>
            <ItemGrid items={menuData.vinos} />
          </MenuSection>
        );
      case 'botellas':
        return (
          <MenuSection id="botellas" title={t('menu.sections.botellas')}>
            <ItemGrid items={menuData.botellas} />
          </MenuSection>
        );
      case 'cubatas':
        return (
          <MenuSection id="cubatas" title={t('menu.sections.cubatas')}>
            <ItemGrid items={menuData.cubatas} />
          </MenuSection>
        );
      case 'cocktails':
        return (
          <MenuSection
            id="cocktails"
            title={t('menu.sections.cocktails')}
            description={t('menu.descriptions.cocktails', { price: formatPrice(menuData.cocktails.precio) })}
          >
            <div className="space-y-10">
              {COCKTAIL_SPIRITS.filter((spirit) => menuData.cocktails[spirit].length > 0).map((spirit) => (
                <div key={spirit}>
                  <h3 className="mb-4 text-lg font-semibold uppercase tracking-[0.25em] text-gold">{t(`menu.spirits.${spirit}`)}</h3>
                  <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                    {menuData.cocktails[spirit].map((cocktail) => (
                      <CocktailCard key={cocktail.id} cocktail={cocktail} precio={menuData.cocktails.precio} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </MenuSection>
        );
      default:
        return null;
    }
  }, [activeSection, t]);

  return (
    <section className="bg-black pt-28 text-cream">
      <Seo page="menu" path="/menu" />
      <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <img src={images.coctails[1]} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/60" />
          <div className="relative p-8 sm:p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-gold">{t('menu.eyebrow')}</p>
            <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{t('menu.title')}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">{t('menu.intro')}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <img src={images.comida[0]} alt={t('menu.featuredDishAlt')} className="h-48 w-full rounded-[24px] border border-white/10 object-cover" loading="lazy" />
              <img src={images.comida[1]} alt={t('menu.mainDishAlt')} className="h-48 w-full rounded-[24px] border border-white/10 object-cover" loading="lazy" />
            </div>
          </div>
        </motion.header>

        <nav aria-label={t('menu.navAria')} className="sticky top-[72px] z-30 -mx-4 mt-8 border-b border-white/10 bg-black/90 px-4 py-3 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 pb-1">
            {MENU_SECTIONS.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => setActiveSection(section.id)}
                className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] transition duration-300 sm:text-sm ${
                  activeSection === section.id
                    ? 'border-gold bg-gold/15 text-gold'
                    : 'border-white/10 bg-white/5 text-white/70 hover:border-gold/40 hover:text-gold'
                }`}
              >
                {t(`menu.sections.${section.id}`)}
              </button>
            ))}
          </div>
        </nav>

        <div className="mt-12">{selectedSectionContent}</div>
      </div>
    </section>
  );
}
