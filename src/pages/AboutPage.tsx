import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Seo from '../components/layout/Seo';
import Logo from '../components/common/Logo';
import { images } from '../data/images';

const cards = ['philosophy', 'experience', 'values'] as const;

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <section className="bg-black pt-28 text-cream">
      <Seo page="about" path="/sobre-nosotros" />
      <div className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[280px] lg:min-h-full">
              <img src={images.exterior} alt={t('about.exteriorAlt')} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/60" />
            </div>
            <div className="p-10 lg:p-16">
              <Logo className="h-16 w-auto" />
              <p className="mt-6 text-sm uppercase tracking-[0.35em] text-gold">{t('about.eyebrow')}</p>
              <h1 className="mt-4 text-4xl font-semibold text-white">{t('about.title')}</h1>
              <p className="mt-6 text-base leading-8 text-white/70">{t('about.intro')}</p>
              <div className="mt-6 space-y-4 text-sm leading-8 text-white/70">
                <p>{t('about.p1')}</p>
                <p>{t('about.p2')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {cards.map((item) => (
            <div key={item} className="rounded-[32px] border border-white/10 bg-black/70 p-8">
              <h2 className="text-2xl font-semibold text-white">{t(`about.${item}.title`)}</h2>
              <p className="mt-4 text-sm leading-7 text-white/70">{t(`about.${item}.description`)}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">
            <img src={images.interior} alt={t('about.premium.alt')} className="aspect-[16/10] w-full object-cover" loading="lazy" />
            <div className="p-10">
              <h2 className="text-3xl font-semibold text-white">{t('about.premium.title')}</h2>
              <p className="mt-4 text-sm leading-7 text-white/70">{t('about.premium.description')}</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">
            <img src={images.coctails[0]} alt={t('about.cocktails.alt')} className="aspect-[16/10] w-full object-cover" loading="lazy" />
            <div className="p-10">
              <h2 className="text-3xl font-semibold text-white">{t('about.cocktails.title')}</h2>
              <p className="mt-4 text-sm leading-7 text-white/70">{t('about.cocktails.description')}</p>
              <Link to="/menu" className="mt-6 inline-flex rounded-full border border-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold transition hover:bg-gold hover:text-black">
                {t('common.viewMenuCard')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
