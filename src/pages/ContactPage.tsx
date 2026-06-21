import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import Seo from '../components/layout/Seo';
import { WHATSAPP_URL, WHATSAPP_PHONE_DISPLAY, generateContactMessage, encodeWhatsAppMessage } from '../lib/whatsapp';
import { siteMetadata } from '../data/siteData';

type ContactFormValues = {
  name: string;
  phone?: string;
  message: string;
};

export default function ContactPage() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);

  const contactSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, t('validation.nameMin')),
        phone: z.string().optional(),
        message: z.string().min(15, t('validation.messageMin')),
      }),
    [t],
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (values: ContactFormValues) => {
    window.open(`${WHATSAPP_URL}?text=${encodeWhatsAppMessage(generateContactMessage(values))}`, '_blank');
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="bg-black pt-28 text-cream">
      <Seo page="contact" path="/contacto" />
      <div className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">{t('contact.eyebrow')}</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">{t('contact.title')}</h1>
          <p className="mt-6 text-base leading-8 text-white/70">{t('contact.intro')}</p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-black/70 p-10">
            <h2 className="text-3xl font-semibold text-white">{t('contact.details.title')}</h2>
            <div className="mt-8 space-y-4 text-sm leading-7 text-white/70">
              <p>{t('contact.details.address')}</p>
              <p>{t('contact.details.phone')}: {siteMetadata.phone}</p>
              <p>{t('contact.details.hours')}</p>
            </div>
            <div className="mt-10 rounded-3xl border border-white/10 bg-green-600/20 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">{t('contact.whatsappDirect')}</p>
              <a
                href={`${WHATSAPP_URL}?text=${encodeWhatsAppMessage(t('whatsapp.inquiry'))}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-green-700"
              >
                💬 WhatsApp {WHATSAPP_PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <label className="flex flex-col gap-3 text-sm text-white/70">
              {t('contact.form.name')}
              <input type="text" {...register('name')} className="rounded-2xl border border-white/10 bg-black/80 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20" />
              {errors.name && <span className="text-xs text-red-400">{errors.name.message}</span>}
            </label>
            <label className="flex flex-col gap-3 text-sm text-white/70">
              {t('contact.form.phone')}
              <input type="tel" {...register('phone')} placeholder={t('contact.form.phonePlaceholder')} className="rounded-2xl border border-white/10 bg-black/80 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20" />
            </label>
            <label className="flex flex-col gap-3 text-sm text-white/70">
              {t('contact.form.message')}
              <textarea rows={5} {...register('message')} placeholder={t('contact.form.messagePlaceholder')} className="rounded-2xl border border-white/10 bg-black/80 px-4 py-4 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20" />
              {errors.message && <span className="text-xs text-red-400">{errors.message.message}</span>}
            </label>
            {sent ? <p className="rounded-3xl bg-green-600/20 p-4 text-sm text-green-400">{t('contact.form.success')}</p> : null}
            <button type="submit" disabled={isSubmitting} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition disabled:cursor-not-allowed disabled:opacity-60 hover:bg-[#e4c88a]">
              💬 {t('contact.form.submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
