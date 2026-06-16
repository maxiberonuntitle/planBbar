export type GalleryCategory = {
  id: string;
  title: string;
};

export type GalleryImage = {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  src: string;
};

export const galleryCategories: GalleryCategory[] = [
  { id: 'interior', title: 'Interior' },
  { id: 'terraza', title: 'Terraza' },
  { id: 'gastronomia', title: 'Gastronomía' },
  { id: 'cocteles', title: 'Cócteles' },
  { id: 'eventos', title: 'Eventos' },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 'interior-001',
    categoryId: 'interior',
    title: 'Sala principal',
    description: 'Un ambiente íntimo y sofisticado.',
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'terraza-001',
    categoryId: 'terraza',
    title: 'Terraza nocturna',
    description: 'Espacio exterior con iluminación cálida.',
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'coctel-001',
    categoryId: 'cocteles',
    title: 'Cocktail signature',
    description: 'Presentación premium con detalle dorado.',
    src: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'evento-001',
    categoryId: 'eventos',
    title: 'Noche de DJ',
    description: 'Vibra nocturna con música en vivo.',
    src: 'https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=900&q=80',
  },
];
