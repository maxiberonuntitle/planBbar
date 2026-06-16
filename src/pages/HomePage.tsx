import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Seo from '../components/layout/Seo';
import { WHATSAPP_URL, encodeWhatsAppMessage } from '../lib/whatsapp';
import { FadeInOnScroll, ScrollParallax } from '../components/common/ScrollParallax';

export default function HomePage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-cream">
      <Seo
        title="Bar Plan B - Inicio"
        description="Plan B es el bar lounge premium de Lloret de Mar con coctelería de autor, gastronomía selecta y ambiente nocturno exclusivo."
        path="/"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(208,178,123,0.1),transparent_35%)]" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto w-full max-w-3xl text-center"
        >
          <span className="inline-block text-sm uppercase tracking-[0.4em] text-gold">Bar & Lounge</span>
          <h1 className="mt-6 text-5xl font-black uppercase tracking-[0.2em] text-white sm:text-6xl lg:text-7xl">
            Plan B
          </h1>
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
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl hover:border-gold/30 transition-colors">
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
                  className="aspect-[4/3] rounded-3xl bg-[url('https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center hover:scale-105 transition-transform overflow-hidden"
                  whileHover={{ scale: 1.08 }}
                />
                <motion.div
                  className="aspect-[4/3] rounded-3xl bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center hover:scale-105 transition-transform overflow-hidden"
                  whileHover={{ scale: 1.08 }}
                />
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
                  title: 'Noche de DJ',
                  description: 'Música electrónica suave y cócteles de autor.',
                  date: 'Sábado 22 Jun',
                },
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
