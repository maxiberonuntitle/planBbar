import { events } from '../data/eventsData';
import Seo from '../components/layout/Seo';
import { WHATSAPP_URL, generateEventReservationMessage, encodeWhatsAppMessage } from '../lib/whatsapp';

export default function EventsPage() {
  return (
    <section className="bg-black pt-28 text-cream">
      <Seo
        title="Eventos - Bar Plan B"
        description="Consulta los próximos eventos y noches premium en Plan B, el bar lounge de Lloret de Mar."
        path="/eventos"
      />
      <div className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">Eventos</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Próximas noches en Plan B</h1>
          <p className="mt-6 text-base leading-8 text-white/70">
            Consulta nuestra programación de eventos y reserva tu mesa para vivir una experiencia premium.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {events.map((event) => (
            <article key={event.id} className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">
              <img
                src={event.image}
                alt={event.title}
                className="aspect-[16/10] w-full object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <p className="text-xs uppercase tracking-[0.35em] text-gold">{event.date}</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">{event.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/70">{event.summary}</p>
                <p className="mt-4 text-sm font-semibold text-gold">{event.time}</p>
                <a
                  href={`${WHATSAPP_URL}?text=${encodeWhatsAppMessage(`Hola Plan B, quiero reservar para el evento: ${event.title} - ${event.date} a las ${event.time}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-full bg-green-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-green-700"
                >
                  💬 Reservar por WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
