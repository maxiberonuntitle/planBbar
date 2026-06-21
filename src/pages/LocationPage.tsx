import { useTranslation } from 'react-i18next';
import Seo from '../components/layout/Seo';
import { siteMetadata } from '../data/siteData';
import { images } from '../data/images';

export default function LocationPage() {
  const { t } = useTranslation();

  return (
    <section className="bg-black pt-28 text-cream">
      <Seo page="location" path="/ubicacion" />
      <div className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">
          <img src={images.exterior} alt={t('location.imageAlt')} className="aspect-[21/9] w-full object-cover" loading="lazy" />
          <div className="p-10 backdrop-blur-xl lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-gold">{t('location.eyebrow')}</p>
            <h1 className="mt-4 text-4xl font-semibold text-white">{t('location.title')}</h1>
            <p className="mt-6 text-base leading-8 text-white/70">{t('location.intro')}</p>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-white">{t('location.details.title')}</h2>
            <div className="mt-8 space-y-4 text-sm leading-7 text-white/70">
              <p>{t('location.details.address')}</p>
              <p>{t('location.details.city')}</p>
              <p>{t('location.details.schedule')}</p>
              <p>{t('location.details.phone')}: {siteMetadata.phone}</p>
              <p>{t('location.details.email')}: {siteMetadata.email}</p>
            </div>
            <a href="https://www.google.com/maps" target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full border border-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold transition hover:bg-gold hover:text-black">
              {t('common.openMaps')}
            </a>
          </div>

          <div className="aspect-[16/10] overflow-hidden rounded-[32px] border border-white/10 bg-black/70">
            <iframe
              title={t('location.mapTitle')}
              aria-label={t('location.mapAria')}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.2989870393155!2d2.837364315563836!3d41.70773607922513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b084680cf3f2f7%3A0xe6bfcbfd7fde9d14!2sLloret%20de%20Mar!5e0!3m2!1ses!2ses!4v1694562714569!5m2!1ses!2ses"
              className="h-full w-full border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
