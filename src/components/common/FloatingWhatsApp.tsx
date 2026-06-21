import { useTranslation } from 'react-i18next';
import { WHATSAPP_URL } from '../../lib/whatsapp';

export default function FloatingWhatsApp() {
  const { t } = useTranslation();

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:bg-green-600 hover:scale-110 active:scale-95"
      aria-label={t('common.contactWhatsApp')}
    >
      <span className="text-2xl">💬</span>
    </a>
  );
}
