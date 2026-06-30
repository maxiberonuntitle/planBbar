import { WHATSAPP_PHONE_DISPLAY } from '../lib/whatsapp';
import { images } from './images';

export const siteMetadata = {
  businessName: 'Plan B',
  title: 'Plan B | Bar, Pizzería & Lounge Premium en Lloret de Mar',
  description:
    'Plan B: bar, pizzería y lounge premium en Lloret de Mar. Pizzas artesanales personalizables, coctelería de autor y retransmisión de todos los partidos del Mundial 2026. Reserva tu mesa.',
  keywords:
    'pizzería Lloret de Mar, pizza Lloret de Mar, pizzas artesanales Lloret, bar Lloret de Mar, restaurante Lloret de Mar, Plan B bar, coctelería Lloret de Mar, ver mundial 2026 Lloret, partidos mundial bar, bar para ver fútbol Lloret, lounge Lloret de Mar, bar playa Lloret, cena y pizza Lloret',
  url: 'https:// planblloret.es',
  image: 'https:// planblloret.es/images/exterior1.jpg',
  menuUrl: 'https:// planblloret.es/menu',
  phone: WHATSAPP_PHONE_DISPLAY,
  email: 'info@ planblloret.es',
  address: 'Calle Santa Clotilde, 28 - Playa, Lloret de Mar, Girona',
  streetAddress: 'Calle Santa Clotilde, 28 - Playa',
  addressLocality: 'Lloret de Mar',
  addressRegion: 'Girona',
  postalCode: '17310',
  addressCountry: 'ES',
  latitude: 41.7074,
  longitude: 2.8371,
  servesCuisine: ['Pizza', 'Italian', 'Mediterranean', 'Tapas', 'Cocktails'],
  locale: 'es_ES',
};

export const mundialSeo = {
  title: 'Mundial 2026 en Plan B',
  description:
    'Retransmisión de todos los partidos del Mundial FIFA 2026 en Plan B, Lloret de Mar. Pantallas en directo, pizzas artesanales, coctelería premium y ambiente lounge. Reserva tu mesa.',
  startDate: '2026-06-11',
  endDate: '2026-07-19',
};

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: siteMetadata.streetAddress,
  addressLocality: siteMetadata.addressLocality,
  addressRegion: siteMetadata.addressRegion,
  postalCode: siteMetadata.postalCode,
  addressCountry: siteMetadata.addressCountry,
};

const geoCoordinates = {
  '@type': 'GeoCoordinates',
  latitude: siteMetadata.latitude,
  longitude: siteMetadata.longitude,
};

const openingHoursSpecification = [
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
];

export function buildSeoGraph(pageDescription: string, pageImage: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['BarOrPub', 'Restaurant'],
        '@id': `${siteMetadata.url}/#business`,
        name: siteMetadata.businessName,
        alternateName: 'Plan B Bar & Pizzería',
        description: pageDescription,
        url: siteMetadata.url,
        telephone: siteMetadata.phone,
        email: siteMetadata.email,
        image: pageImage,
        menu: siteMetadata.menuUrl,
        servesCuisine: siteMetadata.servesCuisine,
        priceRange: '€€',
        address: postalAddress,
        geo: geoCoordinates,
        openingHoursSpecification,
        knowsAbout: [
          'Pizza artesanal',
          'Coctelería de autor',
          'Mundial FIFA 2026',
          'Retransmisión de fútbol',
        ],
      },
      {
        '@type': 'Event',
        '@id': `${siteMetadata.url}/#mundial-2026`,
        name: mundialSeo.title,
        description: mundialSeo.description,
        startDate: mundialSeo.startDate,
        endDate: mundialSeo.endDate,
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        location: {
          '@type': 'BarOrPub',
          name: siteMetadata.businessName,
          url: siteMetadata.url,
          address: postalAddress,
          geo: geoCoordinates,
        },
        organizer: {
          '@type': 'Organization',
          name: siteMetadata.businessName,
          url: siteMetadata.url,
        },
        offers: {
          '@type': 'Offer',
          url: `${siteMetadata.url}/reservas`,
          availability: 'https://schema.org/InStock',
          price: '0',
          priceCurrency: 'EUR',
          description: 'Reserva de mesa para ver los partidos del Mundial 2026',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteMetadata.url}/#website`,
        name: siteMetadata.businessName,
        url: siteMetadata.url,
        description: siteMetadata.description,
        inLanguage: 'es-ES',
        publisher: { '@id': `${siteMetadata.url}/#business` },
      },
    ],
  };
}

export { images };
