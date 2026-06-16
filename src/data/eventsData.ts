export type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  summary: string;
  image: string;
};

export const events: EventItem[] = [
  {
    id: 'dj-night',
    title: 'Noche de DJ',
    date: 'Sábado 22 Jun',
    time: '23:00 - 03:00',
    summary: 'Música electrónica suave y cocteles de autor para una experiencia nocturna premium.',
    image: 'https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'cocktail-tasting',
    title: 'Cocktail Tasting',
    date: 'Viernes 28 Jun',
    time: '20:00 - 23:00',
    summary: 'Degustación de cócteles signature y creaciones exclusivas de nuestro bartender.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'afterwork-lounge',
    title: 'Afterwork Lounge',
    date: 'Miércoles 3 Jul',
    time: '19:00 - 23:00',
    summary: 'Ambientación lounge, tapas premium y compañía selecta para cerrar el día.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  },
];
