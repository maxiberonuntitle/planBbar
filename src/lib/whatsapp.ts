export const WHATSAPP_NUMBER = '393883732257';
export const WHATSAPP_PHONE_DISPLAY = '+39 388 373 22 57';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function encodeWhatsAppMessage(message: string): string {
  return encodeURIComponent(message);
}

export function generateReservationMessage(data: {
  name: string;
  date: string;
  time: string;
  guests: number;
  phone?: string;
  email?: string;
  notes?: string;
}): string {
  const lines = [
    '🍾 *Solicitud de Reserva - Plan B*',
    '',
    `👤 Nombre: ${data.name}`,
    `📅 Fecha: ${data.date}`,
    `⏰ Hora: ${data.time}`,
    `👥 Personas: ${data.guests}`,
    ...(data.phone ? [`📱 Teléfono: ${data.phone}`] : []),
    ...(data.email ? [`📧 Email: ${data.email}`] : []),
    ...(data.notes ? [`📝 Comentarios: ${data.notes}`] : []),
  ];
  return lines.join('\n');
}

export function generateContactMessage(data: {
  name: string;
  phone?: string;
  message: string;
}): string {
  const lines = [
    '💬 *Mensaje de Contacto - Plan B*',
    '',
    `👤 Nombre: ${data.name}`,
    ...(data.phone ? [`📱 Teléfono: ${data.phone}`] : []),
    '',
    `📝 Mensaje:\n${data.message}`,
  ];
  return lines.join('\n');
}

export function generateEventReservationMessage(data: {
  eventTitle: string;
  name: string;
  date: string;
  time: string;
  guests: number;
  phone?: string;
  email?: string;
}): string {
  const lines = [
    '🎉 *Reserva de Evento - Plan B*',
    '',
    `🎭 Evento: ${data.eventTitle}`,
    `👤 Nombre: ${data.name}`,
    `📅 Fecha del evento: ${data.date}`,
    `⏰ Hora: ${data.time}`,
    `👥 Personas: ${data.guests}`,
    ...(data.phone ? [`📱 Teléfono: ${data.phone}`] : []),
    ...(data.email ? [`📧 Email: ${data.email}`] : []),
  ];
  return lines.join('\n');
}
