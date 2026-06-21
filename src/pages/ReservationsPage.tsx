import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import Seo from '../components/layout/Seo';
import { WHATSAPP_URL, WHATSAPP_PHONE_DISPLAY, generateReservationMessage, encodeWhatsAppMessage } from '../lib/whatsapp';

type ReservationFormValues = {
  name: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
};

export default function ReservationsPage() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);

  const reservationSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, t('validation.nameMin')),
        phone: z.string().min(6, t('validation.phoneInvalid')),
        email: z.string().email(t('validation.emailInvalid')).optional().or(z.literal('')),
        date: z.string().min(10, t('validation.dateRequired')),
        time: z.string().min(4, t('validation.timeRequired')),
        guests: z.number().min(1, t('validation.guestsMin')),
        notes: z.string().max(300).optional(),
      }),
    [t],
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: { name: '', phone: '', email: '', date: '', time: '', guests: 2, notes: '' },
  });

  const onSubmit = (values: ReservationFormValues) => {
    window.open(`${WHATSAPP_URL}?text=${encodeWhatsAppMessage(generateReservationMessage(values))}`, '_blank');
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 3000);
  };

  const scheduleHours = t('reservations.schedule.hours').split('\n');

  return (
    <section className="bg-black pt-28 text-cream">
      <Seo page="reservations" path="/reservas" />
      <div className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">{t('reservations.eyebrow')}</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">{t('reservations.title')}</h1>
          <p className="mt-6 text-base leading-8 text-white/70">{t('reservations.intro')}</p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          <div className="rounded-[32px] border border-white/10 bg-black/70 p-10 lg:col-span-1">
            <h2 className="text-3xl font-semibold text-white">{t('reservations.schedule.title')}</h2>
            <div className="mt-8 space-y-4 text-sm leading-7 text-white/70">
              <p>
                <span className="font-semibold text-gold">{t('reservations.schedule.days')}</span>
                <br />
                {scheduleHours.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
            <div className="mt-10 rounded-3xl border border-white/10 bg-gold/10 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{t('reservations.directContact')}</p>
              <a
                href={`${WHATSAPP_URL}?text=${encodeWhatsAppMessage(t('whatsapp.reserveTable'))}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-green-700"
              >
                💬 WhatsApp {WHATSAPP_PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl lg:col-span-2">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-3 text-sm text-white/70">
                {t('reservations.form.name')}
                <input type="text" {...register('name')} className="rounded-2xl border border-white/10 bg-black/80 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20" />
                {errors.name && <span className="text-xs text-red-400">{errors.name.message}</span>}
              </label>
              <label className="flex flex-col gap-3 text-sm text-white/70">
                {t('reservations.form.phone')}
                <input type="tel" {...register('phone')} placeholder={t('reservations.form.phonePlaceholder')} className="rounded-2xl border border-white/10 bg-black/80 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20" />
                {errors.phone && <span className="text-xs text-red-400">{errors.phone.message}</span>}
              </label>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-3 text-sm text-white/70">
                {t('reservations.form.email')}
                <input type="email" {...register('email')} className="rounded-2xl border border-white/10 bg-black/80 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20" />
                {errors.email && <span className="text-xs text-red-400">{errors.email.message}</span>}
              </label>
              <label className="flex flex-col gap-3 text-sm text-white/70">
                {t('reservations.form.date')}
                <input type="date" {...register('date')} className="rounded-2xl border border-white/10 bg-black/80 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20" />
                {errors.date && <span className="text-xs text-red-400">{errors.date.message}</span>}
              </label>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-3 text-sm text-white/70">
                {t('reservations.form.time')}
                <input type="time" {...register('time')} className="rounded-2xl border border-white/10 bg-black/80 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20" />
                {errors.time && <span className="text-xs text-red-400">{errors.time.message}</span>}
              </label>
              <label className="flex flex-col gap-3 text-sm text-white/70">
                {t('reservations.form.guests')}
                <input type="number" min={1} {...register('guests', { valueAsNumber: true })} aria-label={t('reservations.form.guestsAria')} className="rounded-2xl border border-white/10 bg-black/80 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20" />
                {errors.guests && <span className="text-xs text-red-400">{errors.guests.message}</span>}
              </label>
            </div>
            <label className="flex flex-col gap-3 text-sm text-white/70">
              {t('reservations.form.notes')}
              <textarea rows={4} {...register('notes')} aria-label={t('reservations.form.notesAria')} placeholder={t('reservations.form.notesPlaceholder')} className="rounded-2xl border border-white/10 bg-black/80 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20" />
            </label>
            {sent ? <p className="rounded-3xl bg-green-600/20 p-4 text-sm text-green-400">{t('reservations.form.success')}</p> : null}
            <button type="submit" disabled={isSubmitting} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition disabled:cursor-not-allowed disabled:opacity-60 hover:bg-[#e4c88a]">
              💬 {t('reservations.form.submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
