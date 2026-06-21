import { useTranslation } from 'react-i18next';
import { supportedLanguages, type SupportedLanguage } from '../../i18n';

type LanguageSwitcherProps = {
  onSelect?: () => void;
  className?: string;
};

export default function LanguageSwitcher({ onSelect, className = '' }: LanguageSwitcherProps) {
  const { i18n, t } = useTranslation();
  const current = (i18n.language?.slice(0, 2) ?? 'es') as SupportedLanguage;

  const handleChange = (lang: SupportedLanguage) => {
    void i18n.changeLanguage(lang);
    onSelect?.();
  };

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 ${className}`}
      role="group"
      aria-label={t('language.label')}
    >
      {supportedLanguages.map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => handleChange(lang)}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition ${
            current === lang
              ? 'bg-gold text-black'
              : 'text-white/70 hover:text-gold'
          }`}
          aria-pressed={current === lang}
          aria-label={t(`language.${lang}`)}
        >
          {t(`language.${lang}`)}
        </button>
      ))}
    </div>
  );
}
