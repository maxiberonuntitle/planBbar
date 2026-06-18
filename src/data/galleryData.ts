import { images } from './images';

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
    id: 'exterior',
    categoryId: 'ambiente',
    title: 'Terraza Plan B',
    description: 'Vistas exteriores y ambiente nocturno en Lloret de Mar',
    src: images.exterior,
  },
  {
    id: 'interior',
    categoryId: 'ambiente',
    title: 'Salón interior',
    description: 'Espacio lounge con iluminación cálida y diseño premium',
    src: images.interior,
  },
  {
    id: 'barra',
    categoryId: 'ambiente',
    title: 'Barra principal',
    description: 'Coctelería de autor servida en nuestra barra',
    src: images.barra,
  },
  {
    id: 'coctel-01',
    categoryId: 'coctel',
    title: 'Cóctel signature',
    description: 'Creaciones de autor con presentación cuidada',
    src: images.coctails[0],
  },
  {
    id: 'coctel-02',
    categoryId: 'coctel',
    title: 'Mixología premium',
    description: 'Bebidas preparadas al momento con ingredientes selectos',
    src: images.coctails[1],
  },
  {
    id: 'coctel-03',
    categoryId: 'coctel',
    title: 'Coctelería Plan B',
    description: 'Sabores tropicales y clásicos reinventados',
    src: images.coctails[2],
  },
  {
    id: 'coctel-04',
    categoryId: 'coctel',
    title: 'Tragos de la casa',
    description: 'Nuestra selección de cócteles exclusivos',
    src: images.coctails[3],
  },
  {
    id: 'comida-01',
    categoryId: 'gastronomia',
    title: 'Gastronomía',
    description: 'Platos y tapas para compartir en buena compañía',
    src: images.comida[0],
  },
  {
    id: 'comida-02',
    categoryId: 'gastronomia',
    title: 'Cocina Plan B',
    description: 'Sabores mediterráneos con un toque premium',
    src: images.comida[1],
  },
  
];
