import i18n from '../i18n';

export function generateReservationMessage(data: {
  name: string;
  date: string;
  time: string;
  guests: number;
  phone?: string;
  email?: string;
  notes?: string;
}): string {
  const t = i18n.t.bind(i18n);
  const lines = [
    t('whatsapp.reservation.title'),
    '',
    `${t('whatsapp.reservation.name')}: ${data.name}`,
    `${t('whatsapp.reservation.date')}: ${data.date}`,
    `${t('whatsapp.reservation.time')}: ${data.time}`,
    `${t('whatsapp.reservation.guests')}: ${data.guests}`,
    ...(data.phone ? [`${t('whatsapp.reservation.phone')}: ${data.phone}`] : []),
    ...(data.email ? [`${t('whatsapp.reservation.email')}: ${data.email}`] : []),
    ...(data.notes ? [`${t('whatsapp.reservation.notes')}: ${data.notes}`] : []),
  ];
  return lines.join('\n');
}

export function generateContactMessage(data: {
  name: string;
  phone?: string;
  message: string;
}): string {
  const t = i18n.t.bind(i18n);
  const lines = [
    t('whatsapp.contactMsg.title'),
    '',
    `${t('whatsapp.contactMsg.name')}: ${data.name}`,
    ...(data.phone ? [`${t('whatsapp.contactMsg.phone')}: ${data.phone}`] : []),
    '',
    `${t('whatsapp.contactMsg.message')}:\n${data.message}`,
  ];
  return lines.join('\n');
}

export const WHATSAPP_NUMBER = '393883732257';
export const WHATSAPP_PHONE_DISPLAY = '+39 388 373 22 57';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function encodeWhatsAppMessage(message: string): string {
  return encodeURIComponent(message);
}
