import Seo from '../components/layout/Seo';

export default function AboutPage() {
  return (
    <section className="bg-black pt-28 text-cream">
      <Seo
        title="Sobre Nosotros - Bar Plan B"
        description="Descubre la filosofía y experiencia de Plan B, el bar lounge premium de Lloret de Mar."
        path="/sobre-nosotros"
      />
      <div className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl lg:p-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-gold">Sobre nosotros</p>
              <h1 className="mt-4 text-4xl font-semibold text-white">La esencia de Plan B</h1>
              <p className="mt-6 text-base leading-8 text-white/70">
                Plan B es un bar & lounge premium en Lloret de Mar, creado para los amantes del diseño, la coctelería y la experiencia social de alta calidad.
              </p>
            </div>
            <div className="space-y-4 text-sm leading-8 text-white/70">
              <p>
                Nuestra filosofía combina una atmósfera nocturna envolvente con una carta de autor y un servicio atento. Cada detalle está pensado para ofrecer una propuesta distinguida.
              </p>
              <p>
                Desde la selección de ingredientes hasta el diseño del espacio, buscamos la elegancia moderna y el confort para crear noches memorables.
              </p>
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
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-white">Ambiente premium</h2>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Espacios diseñados para disfrutar la noche con estilo. Iluminación suave, materiales nobles y una disposición que favorece la conversación.
            </p>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-white">Coctelería de autor</h2>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Aprovechamos técnicas contemporáneas y recetas clásicas reinventadas con ingredientes selectos para crear una oferta de bebidas única.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
