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
  { id: 'ambiente', title: 'Ambiente' },
  { id: 'coctel', title: 'Cócteles' },
  { id: 'gastronomia', title: 'Gastronomía' },
  { id: 'eventos', title: 'Eventos' },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 'bar-01',
    categoryId: 'ambiente',
    title: 'Bar Principal',
    description: 'Mostrador de cócteles con iluminación premium',
    src: 'https://images.unsplash.com/photo-1551632786-fb3cc1d541b3?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'bar-02',
    categoryId: 'ambiente',
    title: 'Zona Lounge',
    description: 'Área VIP con confortables sofás y vista al mar',
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'bar-03',
    categoryId: 'ambiente',
    title: 'Terraza Nocturna',
    description: 'Ambiente exterior con vistas premium',
    src: 'https://images.unsplash.com/photo-1415886307814-b21b20cb1914?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'coctel-01',
    categoryId: 'coctel',
    title: 'Cócteles Signature',
    description: 'Bebidas artesanales con presentación premium',
    src: 'https://images.unsplash.com/photo-1609953227369-7438e3306759?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'coctel-02',
    categoryId: 'coctel',
    title: 'Mojito Premium',
    description: 'Preparado al momento con ingredientes selectos',
    src: 'https://images.unsplash.com/photo-1542937660-a8a0e42e2e18?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'coctel-03',
    categoryId: 'coctel',
    title: 'Bebidas de Autor',
    description: 'Cócteles exclusivos creados por nuestros mixólogos',
    src: 'https://images.unsplash.com/photo-1536181286813-e91d77c0b808?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'tapas-01',
    categoryId: 'gastronomia',
    title: 'Tabla de Ibéricos',
    description: 'Selección de jamón ibérico y quesos artesanales',
    src: 'https://images.unsplash.com/photo-1604874294730-351fd90ba747?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'tapas-02',
    categoryId: 'gastronomia',
    title: 'Degustación Premium',
    description: 'Menú degustación de tapas con maridaje',
    src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'tapas-03',
    categoryId: 'gastronomia',
    title: 'Tabla Mediterránea',
    description: 'Delicias selectas del mediterráneo',
    src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'evento-001',
    categoryId: 'eventos',
    title: 'Noche de DJ',
    description: 'Vibra nocturna con música en vivo',
    src: 'https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=900&q=80',
  },
];
