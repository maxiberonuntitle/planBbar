import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Seo from '../components/layout/Seo';
import Logo from '../components/common/Logo';
import { WHATSAPP_URL, encodeWhatsAppMessage } from '../lib/whatsapp';
import { FadeInOnScroll } from '../components/common/ScrollParallax';
import { images } from '../data/images';

export default function HomePage() {
  const { t } = useTranslation();

  const proposalItems = ['pizza', 'cocktails', 'worldCup'] as const;
  const highlightItems = ['pizza', 'cocktails', 'worldCup'] as const;
  const eventItems = ['worldCup', 'pizzaNight'] as const;
  const testimonialItems = ['marta', 'joan'] as const;

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-cream">
      <Seo page="home" path="/" />
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <img
          src={images.exterior}
          alt=""
          className="h-full w-full object-contain object-top opacity-70 sm:object-cover sm:object-center"
          aria-hidden="true"
          fetchPriority="high"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/50" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/60" />
      </div>
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto w-full max-w-3xl text-center"
        >
          <span className="inline-block text-sm uppercase tracking-[0.4em] text-gold">{t('home.hero.tagline')}</span>
          <h1 className="sr-only">{t('home.hero.h1')}</h1>
          <Logo className="mx-auto mt-6 h-28 w-auto sm:h-36 lg:h-44" />
          <p className="mt-8 text-base leading-8 text-white/70 sm:text-lg">{t('home.hero.subtitle')}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`${WHATSAPP_URL}?text=${encodeWhatsAppMessage(t('whatsapp.reserveTable'))}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-green-600 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-green-700"
            >
              {t('home.hero.reserveTable')}
            </a>
            <Link
              to="/menu"
              className="inline-flex rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-cream transition hover:border-gold hover:text-gold"
            >
              {t('home.hero.viewMenu')}
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 pb-28 lg:px-8">
        <FadeInOnScroll>
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl lg:p-14">
            <div className="grid gap-10 lg:grid-cols-3 lg:items-start">
              <div className="space-y-4 lg:col-span-1">
                <p className="text-sm uppercase tracking-[0.35em] text-gold">{t('home.proposal.eyebrow')}</p>
                <h2 className="text-3xl font-semibold text-white">{t('home.proposal.title')}</h2>
              </div>
              <div className="grid gap-6 lg:col-span-2">
                {proposalItems.map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    className="rounded-3xl border border-white/10 bg-black/70 p-8 hover:border-gold/50 transition-colors"
                  >
                    <h3 className="text-xl font-semibold text-white">{t(`home.proposal.${item}.title`)}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/70">{t(`home.proposal.${item}.description`)}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInOnScroll>

        <div className="grid gap-8 lg:grid-cols-2">
          <FadeInOnScroll delay={0.1}>
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl transition-colors hover:border-gold/30">
              <img src={images.comida[0]} alt={t('home.ambiance.foodAlt')} className="aspect-[16/9] w-full object-cover" loading="lazy" />
              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.35em] text-gold">{t('home.highlights.eyebrow')}</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">{t('home.highlights.title')}</h2>
                <p className="mt-4 text-sm leading-7 text-white/70">{t('home.highlights.description')}</p>
                <div className="mt-8 space-y-4">
                  {highlightItems.map((item) => (
                    <div key={item} className="rounded-3xl bg-black/70 p-6 hover:bg-black/50 transition-colors">
                      <p className="text-sm font-semibold text-white">{t(`home.highlights.${item}`)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2}>
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl hover:border-gold/30 transition-colors">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-gold">{t('home.ambiance.eyebrow')}</p>
                <h2 className="text-3xl font-semibold text-white">{t('home.ambiance.title')}</h2>
                <p className="text-sm leading-7 text-white/70">{t('home.ambiance.description')}</p>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <img src={images.interior} alt={t('home.ambiance.interiorAlt')} className="aspect-[4/3] rounded-3xl object-cover" loading="lazy" />
                <img src={images.barra} alt={t('home.ambiance.barAlt')} className="aspect-[4/3] rounded-3xl object-cover" loading="lazy" />
              </div>
            </div>
          </FadeInOnScroll>
        </div>

        <FadeInOnScroll delay={0.3}>
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-gold">{t('home.events.eyebrow')}</p>
                <h2 className="text-3xl font-semibold text-white">{t('home.events.title')}</h2>
              </div>
              {eventItems.map((event, idx) => (
                <motion.div
                  key={event}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="rounded-3xl border border-white/10 bg-black/70 p-8 hover:border-green-500/50 transition-colors"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-gold">{t(`home.events.${event}.date`)}</p>
                  <h3 className="mt-4 text-xl font-semibold text-white">{t(`home.events.${event}.title`)}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{t(`home.events.${event}.description`)}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.4}>
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-gold">{t('home.testimonials.eyebrow')}</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">{t('home.testimonials.title')}</h2>
              </div>
              <div className="space-y-6">
                {testimonialItems.map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-black/70 p-8 hover:border-gold/50 transition-colors">
                    <p className="text-base leading-8 text-white/80">"{t(`home.testimonials.${item}.quote`)}"</p>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">{t(`home.testimonials.${item}.author`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
