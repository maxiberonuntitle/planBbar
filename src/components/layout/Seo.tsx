import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { buildSeoGraph } from '../../data/siteData';

type SeoProps = {
  page?: 'home' | 'menu' | 'events' | 'about' | 'gallery' | 'reservations' | 'location' | 'contact';
  path?: string;
  image?: string;
  keywords?: string;
};

function setMeta(name: string, content: string) {
  let element = document.querySelector(`meta[name='${name}']`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setOpenGraph(property: string, content: string) {
  let element = document.querySelector(`meta[property='${property}']`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setJsonLd(content: string) {
  let element = document.querySelector("script[type='application/ld+json'][data-jsonld='seo-graph']");
  if (!element) {
    element = document.createElement('script');
    element.setAttribute('type', 'application/ld+json');
    element.setAttribute('data-jsonld', 'seo-graph');
    document.head.appendChild(element);
  }
  element.textContent = content;
}

export default function Seo({ page, path, image, keywords }: SeoProps) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const pageTitle = page
      ? `${t(`seo.pages.${page}.title`)} | ${t('seo.siteTitle')}`
      : t('seo.siteTitle');
    const pageDescription = page ? t(`seo.pages.${page}.description`) : t('seo.siteDescription');
    const pageKeywords =
      keywords ??
      (page ? t(`seo.pages.${page}.keywords`, { defaultValue: t('seo.siteKeywords') }) : t('seo.siteKeywords'));
    const pageUrl = path ? `https://planblloret.es${path}` : `https://planblloret.es${window.location.pathname}`;
    const pageImage = image ?? 'https://planblloret.es/images/exterior1.jpg';
    const locale = i18n.language === 'fr' ? 'fr_FR' : i18n.language === 'en' ? 'en_GB' : 'es_ES';
    const htmlLang = i18n.language?.slice(0, 2) ?? 'es';

    document.documentElement.lang = htmlLang;
    document.title = pageTitle;

    setMeta('description', pageDescription);
    setMeta('keywords', pageKeywords);
    setMeta('geo.region', 'ES-CT');
    setMeta('geo.placename', 'Lloret de Mar');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', pageTitle);
    setMeta('twitter:description', pageDescription);
    setMeta('twitter:image', pageImage);

    setOpenGraph('og:title', pageTitle);
    setOpenGraph('og:description', pageDescription);
    setOpenGraph('og:url', pageUrl);
    setOpenGraph('og:image', pageImage);
    setOpenGraph('og:type', 'website');
    setOpenGraph('og:locale', locale);
    setOpenGraph('og:site_name', 'Plan B');

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageUrl);

    setJsonLd(JSON.stringify(buildSeoGraph(pageDescription, pageImage)));
  }, [t, i18n.language, page, path, image, keywords]);

  return null;
}
