import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Seo from '../components/layout/Seo';
import { WHATSAPP_URL, WHATSAPP_PHONE_DISPLAY, generateContactMessage, encodeWhatsAppMessage } from '../lib/whatsapp';
import { siteMetadata } from '../data/siteData';

const contactSchema = z.object({
  name: z.string().min(2, 'Ingrese su nombre'),
  phone: z.string().optional(),
  message: z.string().min(15, 'Mensaje demasiado corto'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (values: ContactFormValues) => {
    const message = generateContactMessage(values);
    const encodedMessage = encodeWhatsAppMessage(message);
    const whatsappLink = `${WHATSAPP_URL}?text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');
    setSent(true);
    reset();

    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  return (
    <section className="bg-black pt-28 text-cream">
      <Seo
        title="Contacto - Bar Plan B"
        description="Contacta con Plan B en Lloret de Mar. Envía tu consulta, reserva o solicitud de evento privado."
        path="/contacto"
      />
      <div className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">Contacto</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Hablemos</h1>
          <p className="mt-6 text-base leading-8 text-white/70">
            ¿Tienes dudas o quieres reservar un evento privado? Contáctanos vía WhatsApp y te responderemos a la brevedad.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-black/70 p-10">
            <h2 className="text-3xl font-semibold text-white">Datos de contacto</h2>
            <div className="mt-8 space-y-4 text-sm leading-7 text-white/70">
              <p>Dirección: Av. de Joan Llaverias, 47, Lloret de Mar</p>
              <p>Teléfono: {siteMetadata.phone}</p>
              <p>Horario de atención: 13:00 - 16:00 y 17:00 - 01:00</p>
            </div>
            <div className="mt-10 rounded-3xl border border-white/10 bg-green-600/20 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">WhatsApp directo</p>
              <a
                href={`${WHATSAPP_URL}?text=${encodeWhatsAppMessage('Hola Plan B, tengo una consulta')}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-green-700"
              >
                💬 WhatsApp {WHATSAPP_PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >
            <label className="flex flex-col gap-3 text-sm text-white/70">
              Nombre
              <input
                type="text"
                {...register('name')}
                className="rounded-2xl border border-white/10 bg-black/80 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
              />
              {errors.name && <span className="text-xs text-red-400">{errors.name.message}</span>}
            </label>
            <label className="flex flex-col gap-3 text-sm text-white/70">
              Teléfono (opcional)
              <input
                type="tel"
                {...register('phone')}
                className="rounded-2xl border border-white/10 bg-black/80 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                placeholder="+34..."
              />
            </label>
            <label className="flex flex-col gap-3 text-sm text-white/70">
              Mensaje
              <textarea
                rows={5}
                {...register('message')}
                className="rounded-2xl border border-white/10 bg-black/80 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                placeholder="Cuéntanos cómo podemos ayudarte..."
              />
              {errors.message && <span className="text-xs text-red-400">{errors.message.message}</span>}
            </label>

            {sent ? (
              <p className="rounded-3xl bg-green-600/20 p-4 text-sm text-green-400">
                ✓ Se abrió WhatsApp. Envía tu consulta para que te ayudemos.
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition disabled:cursor-not-allowed disabled:opacity-60 hover:bg-[#e4c88a]"
            >
              💬 Enviar por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
