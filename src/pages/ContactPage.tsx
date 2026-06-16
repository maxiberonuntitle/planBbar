import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { encodeFormData } from '../lib/netlify';
import Seo from '../components/layout/Seo';

const contactSchema = z.object({
  name: z.string().min(2, 'Ingrese su nombre'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  message: z.string().min(15, 'Mensaje demasiado corto'),
  botField: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    if (values.botField) return;

    const payload = {
      'form-name': 'contacto',
      name: values.name,
      email: values.email,
      phone: values.phone ?? '',
      message: values.message,
      botField: values.botField ?? '',
    };

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData(payload),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje.');
      }

      setSubmitted(true);
      setErrorMessage('');
      reset();
    } catch (error) {
      setErrorMessage('No se pudo enviar el mensaje. Intenta de nuevo más tarde.');
      setSubmitted(false);
    }
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
            ¿Tienes dudas o quieres reservar un evento privado? Escríbenos y te responderemos a la brevedad.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-black/70 p-10">
            <h2 className="text-3xl font-semibold text-white">Datos de contacto</h2>
            <div className="mt-8 space-y-4 text-sm leading-7 text-white/70">
              <p>Dirección: Carrer de la Platja, 12, Lloret de Mar</p>
              <p>Teléfono: +34 972 00 00 00</p>
              <p>Email: contacto@planbbar.com</p>
              <p>Horario de atención: 18:00 - 03:00</p>
            </div>
          </div>

          <form
            name="contacto"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="botField"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >
            <input type="hidden" name="form-name" value="contacto" />
            <input type="hidden" {...register('botField')} />
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
              Email
              <input
                type="email"
                {...register('email')}
                className="rounded-2xl border border-white/10 bg-black/80 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
              />
              {errors.email && <span className="text-xs text-red-400">{errors.email.message}</span>}
            </label>
            <label className="flex flex-col gap-3 text-sm text-white/70">
              Teléfono
              <input
                type="tel"
                {...register('phone')}
                className="rounded-2xl border border-white/10 bg-black/80 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
              />
            </label>
            <label className="flex flex-col gap-3 text-sm text-white/70">
              Mensaje
              <textarea
                rows={5}
                {...register('message')}
                className="rounded-2xl border border-white/10 bg-black/80 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
              />
              {errors.message && <span className="text-xs text-red-400">{errors.message.message}</span>}
            </label>

            {errorMessage ? <p className="text-sm text-red-400">{errorMessage}</p> : null}
            {submitted ? (
              <p className="rounded-3xl bg-gold/10 p-4 text-sm text-gold">Gracias. Tu mensaje ha sido enviado con éxito.</p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitted ? 'Mensaje enviado' : 'Enviar mensaje'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
