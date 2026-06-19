import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Seo from '../components/layout/Seo';
import Logo from '../components/common/Logo';
import { WHATSAPP_URL, encodeWhatsAppMessage } from '../lib/whatsapp';
import { FadeInOnScroll } from '../components/common/ScrollParallax';
import { images } from '../data/images';

export default function HomePage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-cream">
      <Seo
        title="Bar Plan B - Inicio"
        description="Plan B es el bar lounge premium de Lloret de Mar con coctelería de autor, gastronomía selecta y ambiente nocturno exclusivo."
        path="/"
      />
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <img
          src={images.exterior}
          alt=""
          className="h-full w-full object-contain object-top opacity-70 sm:object-cover sm:object-center"
          aria-hidden="true"
          fetchPriority="high"
        />
        <div className="pointer-events-none absolute left-4 top-16 h-40 w-40 overflow-hidden rounded-full blur-3xl opacity-25 sm:left-10 sm:top-20 sm:h-56 sm:w-56">
          <img
            src={images.coctails[0]}
            alt=""
            className="h-full w-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="pointer-events-none absolute right-4 bottom-16 h-40 w-40 overflow-hidden rounded-full blur-3xl opacity-25 sm:right-10 sm:bottom-20 sm:h-56 sm:w-56">
          <img
            src={images.coctails[1]}
            alt=""
            className="h-full w-full object-cover"
            aria-hidden="true"
          />
        </div>
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
          <span className="inline-block text-sm uppercase tracking-[0.4em] text-gold">Bar & Lounge</span>
          <h1 className="sr-only">Plan B Bar & Lounge</h1>
          <Logo className="mx-auto mt-6 h-28 w-auto sm:h-36 lg:h-44" />
          <p className="mt-8 text-base leading-8 text-white/70 sm:text-lg">
            Experiencia premium en Lloret de Mar. Coctelería de autor, gastronomía selecta y ambiente nocturno exclusivo.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`${WHATSAPP_URL}?text=${encodeWhatsAppMessage('Hola Plan B, quiero reservar una mesa')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-green-600 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-green-700"
            >
              💬 Reservar Mesa
            </a>
            <Link
              to="/menu"
              className="inline-flex rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-cream transition hover:border-gold hover:text-gold"
            >
              Ver menú
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-28 lg:px-8">
        <FadeInOnScroll>
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl lg:p-14">
            <div className="grid gap-10 lg:grid-cols-3 lg:items-start">
              <div className="space-y-4 lg:col-span-1">
                <p className="text-sm uppercase tracking-[0.35em] text-gold">Nuestra propuesta</p>
                <h2 className="text-3xl font-semibold text-white">Una noche con identidad propia</h2>
              </div>
              <div className="grid gap-6 lg:col-span-2">
                {[
                  {
                    title: 'Ambiente lounge',
                    description: 'Espacios oscuros, música selecta y un servicio impecable.',
                  },
                  {
                    title: 'Cócteles signature',
                    description: 'Creaciones únicas con ingredientes premium y estilo europeo.',
                  },
                  {
                    title: 'Experiencia social',
                    description: 'Vive la noche en un bar que prioriza el diseño y la conversación.',
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    className="rounded-3xl border border-white/10 bg-black/70 p-8 hover:border-gold/50 transition-colors"
                  >
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/70">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInOnScroll>

        <div className="grid gap-8 lg:grid-cols-2">
          <FadeInOnScroll delay={0.1}>
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl transition-colors hover:border-gold/30">
              <img
                src={images.comida[0]}
                alt="Gastronomía Plan B"
                className="aspect-[16/9] w-full object-cover"
                loading="lazy"
              />
              <div className="p-10">
              <p className="text-sm uppercase tracking-[0.35em] text-gold">Destacados</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Sabores y sensaciones</h2>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Descubre un menú donde cada trago y cada plato está diseñado para elevar la experiencia de noche.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'Cócteles de autor',
                  'Tapas premium',
                  'Terraza con ambiente nocturno',
                ].map((item) => (
                  <motion.div
                    key={item}
                    className="rounded-3xl bg-black/70 p-6 hover:bg-black/50 transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    <p className="text-sm font-semibold text-white">{item}</p>
                  </motion.div>
                ))}
              </div>
              </div>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2}>
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl hover:border-gold/30 transition-colors">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-gold">Ambiente</p>
                <h2 className="text-3xl font-semibold text-white">Espacios creados para la noche</h2>
                <p className="text-sm leading-7 text-white/70">
                  Un diseño premium pensado para la conversación, la música y el placer de compartir.
                </p>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <motion.div
                  className="aspect-[4/3] overflow-hidden rounded-3xl transition-transform hover:scale-105"
                  whileHover={{ scale: 1.03 }}
                >
                  <img
                    src={images.interior}
                    alt="Interior lounge de Plan B"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
                <motion.div
                  className="aspect-[4/3] overflow-hidden rounded-3xl transition-transform hover:scale-105"
                  whileHover={{ scale: 1.03 }}
                >
                  <img
                    src={images.barra}
                    alt="Barra de coctelería Plan B"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>

        <FadeInOnScroll delay={0.3}>
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-gold">Eventos</p>
                <h2 className="text-3xl font-semibold text-white">Próximas noches</h2>
              </div>
              {[
                {
                  title: 'Cocktail tasting',
                  description: 'Selección exclusiva de creaciones premium.',
                  date: 'Viernes 28 Jun',
                },
                {
                  title: 'Afterwork lounge',
                  description: 'Ambiente relajado, tapas y música lounge.',
                  date: 'Miércoles 3 Jul',
                },
              ].map((event, idx) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="rounded-3xl border border-white/10 bg-black/70 p-8 hover:border-green-500/50 transition-colors"
                  whileHover={{ y: -4 }}
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-gold">{event.date}</p>
                  <h3 className="mt-4 text-xl font-semibold text-white">{event.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{event.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.4}>
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-gold">Testimonios</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">Historias de la noche Plan B</h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  quote: 'Un bar con una atmósfera única, ideal para comenzar la noche.',
                  author: 'Marta, Barcelona',
                },
                {
                  quote: 'Cócteles originales y un ambiente muy cuidado. Perfecto para grupos.',
                  author: 'Joan, Girona',
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.author}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="rounded-3xl border border-white/10 bg-black/70 p-8 hover:border-gold/50 transition-colors"
                >
                  <p className="text-base leading-8 text-white/80">"{item.quote}"</p>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">{item.author}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
