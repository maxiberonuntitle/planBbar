import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Seo from '../components/layout/Seo';
import { WHATSAPP_URL, WHATSAPP_PHONE_DISPLAY, generateReservationMessage, encodeWhatsAppMessage } from '../lib/whatsapp';

const reservationSchema = z.object({
  name: z.string().min(2, 'Ingrese su nombre'),
  phone: z.string().min(6, 'Teléfono inválido'),
  email: z.string().email('Email inválido').optional(),
  date: z.string().min(10, 'Seleccione una fecha'),
  time: z.string().min(4, 'Seleccione una hora'),
  guests: z.number().min(1, 'Indique número de personas'),
  notes: z.string().max(300).optional(),
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

export default function ReservationsPage() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      guests: 2,
      notes: '',
    },
  });

  const formValues = watch();

  const onSubmit = (values: ReservationFormValues) => {
    const message = generateReservationMessage(values);
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
        title="Reservas - Bar Plan B"
        description="Reserva tu mesa en Plan B. Solicita tu experiencia premium en Lloret de Mar con nuestro formulario de reservas."
        path="/reservas"
      />
      <div className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">Reservas</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Reserva tu mesa</h1>
          <p className="mt-6 text-base leading-8 text-white/70">
            Completa el formulario y nos contactaremos vía WhatsApp para confirmar tu reserva en Plan B.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          <div className="rounded-[32px] border border-white/10 bg-black/70 p-10 lg:col-span-1">
            <h2 className="text-3xl font-semibold text-white">Horarios</h2>
            <div className="mt-8 space-y-4 text-sm leading-7 text-white/70">
              <p>
                <span className="font-semibold text-gold">Lunes - Domingo</span>
                <br />
                13:00 - 16:00
                <br />
                17:00 - 01:00
              </p>
            </div>

            <div className="mt-10 rounded-3xl border border-white/10 bg-gold/10 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Contacto directo</p>
              <a
                href={`${WHATSAPP_URL}?text=${encodeWhatsAppMessage('Hola Plan B, quiero reservar una mesa')}`}
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
            className="space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl lg:col-span-2"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-3 text-sm text-white/70">
                Nombre completo
                <input
                  type="text"
                  {...register('name')}
                  className="rounded-2xl border border-white/10 bg-black/80 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                />
                {errors.name && <span className="text-xs text-red-400">{errors.name.message}</span>}
              </label>
              <label className="flex flex-col gap-3 text-sm text-white/70">
                Teléfono
                <input
                  type="tel"
                  {...register('phone')}
                  className="rounded-2xl border border-white/10 bg-black/80 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                  placeholder="+34..."
                />
                {errors.phone && <span className="text-xs text-red-400">{errors.phone.message}</span>}
              </label>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-3 text-sm text-white/70">
                Email (opcional)
                <input
                  type="email"
                  {...register('email')}
                  className="rounded-2xl border border-white/10 bg-black/80 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                />
                {errors.email && <span className="text-xs text-red-400">{errors.email.message}</span>}
              </label>
              <label className="flex flex-col gap-3 text-sm text-white/70">
                Fecha
                <input
                  type="date"
                  {...register('date')}
                  className="rounded-2xl border border-white/10 bg-black/80 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                />
                {errors.date && <span className="text-xs text-red-400">{errors.date.message}</span>}
              </label>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-3 text-sm text-white/70">
                Hora
                <input
                  type="time"
                  {...register('time')}
                  className="rounded-2xl border border-white/10 bg-black/80 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                />
                {errors.time && <span className="text-xs text-red-400">{errors.time.message}</span>}
              </label>
              <label className="flex flex-col gap-3 text-sm text-white/70">
                Número de personas
                <input
                  type="number"
                  min={1}
                  {...register('guests', { valueAsNumber: true })}
                  className="rounded-2xl border border-white/10 bg-black/80 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                  aria-label="Número de personas"
                />
                {errors.guests && <span className="text-xs text-red-400">{errors.guests.message}</span>}
              </label>
            </div>

            <label className="flex flex-col gap-3 text-sm text-white/70">
              Comentarios (opcional)
              <textarea
                rows={4}
                {...register('notes')}
                className="rounded-2xl border border-white/10 bg-black/80 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                aria-label="Comentarios adicionales para la reserva"
                placeholder="Alergias, preferencias, ocasión especial..."
              />
              {errors.notes && <span className="text-xs text-red-400">{errors.notes.message}</span>}
            </label>

            {sent ? (
              <p className="rounded-3xl bg-green-600/20 p-4 text-sm text-green-400">
                ✓ Se abrió WhatsApp. Envía el mensaje para confirmar tu reserva.
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
