import { Link } from 'react-router-dom';
import Seo from '../components/layout/Seo';
import Logo from '../components/common/Logo';
import { images } from '../data/images';

export default function AboutPage() {
  return (
    <section className="bg-black pt-28 text-cream">
      <Seo
        title="Sobre Nosotros - Bar Plan B"
        description="Descubre la filosofía y experiencia de Plan B, el bar lounge premium de Lloret de Mar."
        path="/sobre-nosotros"
      />
      <div className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[280px] lg:min-h-full">
              <img
                src={images.exterior}
                alt="Exterior de Plan B en Lloret de Mar"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/60" />
            </div>
            <div className="p-10 lg:p-16">
              <Logo className="h-16 w-auto" />
              <p className="mt-6 text-sm uppercase tracking-[0.35em] text-gold">Sobre nosotros</p>
              <h1 className="mt-4 text-4xl font-semibold text-white">La esencia de Plan B</h1>
              <p className="mt-6 text-base leading-8 text-white/70">
                Plan B es un bar & lounge premium en Lloret de Mar, creado para los amantes del diseño, la coctelería y la experiencia social de alta calidad.
              </p>
              <div className="mt-6 space-y-4 text-sm leading-8 text-white/70">
                <p>
                  Nuestra filosofía combina una atmósfera nocturna envolvente con una carta de autor y un servicio atento. Cada detalle está pensado para ofrecer una propuesta distinguida.
                </p>
                <p>
                  Desde la selección de ingredientes hasta el diseño del espacio, buscamos la elegancia moderna y el confort para crear noches memorables.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {[
            {
              title: 'Filosofía',
              description: 'Diseño, sabor y ambiente se conjugan en cada detalle para una experiencia premium.',
            },
            {
              title: 'Experiencia',
              description: 'Un espacio social con música seleccionada y una atmósfera que invita a quedarse.',
            },
            {
              title: 'Valores',
              description: 'Calidad, exclusividad, hospitalidad y estilo europeo contemporáneo.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[32px] border border-white/10 bg-black/70 p-8">
              <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/70">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">
            <img src={images.interior} alt="Ambiente interior Plan B" className="aspect-[16/10] w-full object-cover" loading="lazy" />
            <div className="p-10">
              <h2 className="text-3xl font-semibold text-white">Ambiente premium</h2>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Espacios diseñados para disfrutar la noche con estilo. Iluminación suave, materiales nobles y una disposición que favorece la conversación.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">
            <img src={images.coctails[0]} alt="Coctelería de autor Plan B" className="aspect-[16/10] w-full object-cover" loading="lazy" />
            <div className="p-10">
              <h2 className="text-3xl font-semibold text-white">Coctelería de autor</h2>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Aprovechamos técnicas contemporáneas y recetas clásicas reinventadas con ingredientes selectos para crear una oferta de bebidas única.
              </p>
              <Link
                to="/menu"
                className="mt-6 inline-flex rounded-full border border-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold transition hover:bg-gold hover:text-black"
              >
                Ver carta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
