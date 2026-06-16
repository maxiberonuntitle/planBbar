import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { encodeFormData } from '../lib/netlify';
import Seo from '../components/layout/Seo';

const reservationSchema = z.object({
  name: z.string().min(2, 'Ingrese su nombre'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(6, 'Teléfono inválido'),
  date: z.string().min(10, 'Seleccione una fecha'),
  time: z.string().min(4, 'Seleccione una hora'),
  guests: z.number().min(1, 'Indique número de personas'),
  notes: z.string().max(300).optional(),
  botField: z.string().optional(),
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

export default function ReservationsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: 2,
      notes: '',
      botField: '',
    },
  });

  const onSubmit = async (values: ReservationFormValues) => {
    if (values.botField) return;

    const payload = {
      'form-name': 'reservas',
      name: values.name,
      email: values.email,
      phone: values.phone,
      date: values.date,
      time: values.time,
      guests: String(values.guests),
      notes: values.notes ?? '',
      botField: values.botField ?? '',
    };

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData(payload),
      });

      if (!response.ok) {
        throw new Error('Error al enviar la reserva.');
      }

      setSubmitted(true);
      setErrorMessage('');
      reset();
    } catch (error) {
      setErrorMessage('No se pudo enviar la reserva. Intenta de nuevo más tarde.');
      setSubmitted(false);
    }
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
          <h1 className="mt-4 text-4xl font-semibold text-white">Solicita tu mesa</h1>
          <p className="mt-6 text-base leading-8 text-white/70">
            Completa el formulario y nos pondremos en contacto para confirmar tu experiencia en Plan B.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-black/70 p-10">
            <h2 className="text-3xl font-semibold text-white">Horario de reservas</h2>
            <p className="mt-4 text-sm leading-7 text-white/70">Lun - Dom: 18:00 - 03:00</p>
            <p className="mt-4 text-sm leading-7 text-white/70">Recomendamos reservar con antelación para fines de semana y noches de evento.</p>
            <div className="mt-8 space-y-4 rounded-[24px] bg-white/5 p-6 text-sm text-white/70">
              <p>Dirección: Carrer de la Platja, 12, Lloret de Mar</p>
              <p>Teléfono: +34 972 00 00 00</p>
              <p>Email: reservas@planbbar.com</p>
            </div>
          </div>

          <form
            name="reservas"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="botField"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >
            <input type="hidden" name="form-name" value="reservas" />
            <input type="hidden" {...register('botField')} />
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
                Email
                <input
                  type="email"
                  {...register('email')}
                  className="rounded-2xl border border-white/10 bg-black/80 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                />
                {errors.email && <span className="text-xs text-red-400">{errors.email.message}</span>}
              </label>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-3 text-sm text-white/70">
                Teléfono
                <input
                  type="tel"
                  {...register('phone')}
                  className="rounded-2xl border border-white/10 bg-black/80 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                />
                {errors.phone && <span className="text-xs text-red-400">{errors.phone.message}</span>}
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
                Personas
                <input
                  type="number"
                  min={1}
                  {...register('guests', { valueAsNumber: true })}
                  className="rounded-2xl border border-white/10 bg-black/80 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                />
                {errors.guests && <span className="text-xs text-red-400">{errors.guests.message}</span>}
              </label>
            </div>

            <label className="flex flex-col gap-3 text-sm text-white/70">
              Comentarios
              <textarea
                rows={4}
                {...register('notes')}
                className="rounded-2xl border border-white/10 bg-black/80 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
              />
              {errors.notes && <span className="text-xs text-red-400">{errors.notes.message}</span>}
            </label>

            {errorMessage ? <p className="text-sm text-red-400">{errorMessage}</p> : null}
            {submitted ? (
              <p className="rounded-3xl bg-gold/10 p-4 text-sm text-gold">Gracias. Tu solicitud de reserva se ha enviado con éxito.</p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitted ? 'Reserva enviada' : 'Enviar reserva'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
