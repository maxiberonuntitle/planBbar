import { useEffect } from 'react';
import { siteMetadata } from '../../data/siteData';

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
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
  let element = document.querySelector("script[type='application/ld+json'][data-jsonld='local-business']");
  if (!element) {
    element = document.createElement('script');
    element.setAttribute('type', 'application/ld+json');
    element.setAttribute('data-jsonld', 'local-business');
    document.head.appendChild(element);
  }
  element.textContent = content;
}

export default function Seo({ title, description, path, image }: SeoProps) {
  useEffect(() => {
    const pageTitle = title ? `${title} | ${siteMetadata.title}` : siteMetadata.title;
    const pageDescription = description || siteMetadata.description;
    const pageUrl = path ? `${siteMetadata.url}${path}` : `${siteMetadata.url}${window.location.pathname}`;
    const pageImage = image || siteMetadata.image;

    document.title = pageTitle;

    setMeta('description', pageDescription);
    setMeta('twitter:title', pageTitle);
    setMeta('twitter:description', pageDescription);
    setMeta('twitter:image', pageImage);

    setOpenGraph('og:title', pageTitle);
    setOpenGraph('og:description', pageDescription);
    setOpenGraph('og:url', pageUrl);
    setOpenGraph('og:image', pageImage);
    setOpenGraph('og:type', 'website');

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageUrl);

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BarOrPub',
      name: siteMetadata.title,
      description: pageDescription,
      url: siteMetadata.url,
      telephone: siteMetadata.phone,
      email: siteMetadata.email,
      image: pageImage,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteMetadata.streetAddress,
        addressLocality: siteMetadata.addressLocality,
        addressRegion: siteMetadata.addressRegion,
        postalCode: siteMetadata.postalCode,
        addressCountry: siteMetadata.addressCountry,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: siteMetadata.latitude,
        longitude: siteMetadata.longitude,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '13:00',
          closes: '16:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '17:00',
          closes: '01:00',
        },
      ],
      priceRange: '€€',
    };

    setJsonLd(JSON.stringify(jsonLd));
  }, [title, description, path, image]);

  return null;
}
