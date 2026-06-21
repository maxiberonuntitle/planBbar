import { images } from './images';

export type GalleryCategory = {
  id: string;
};

export type GalleryImage = {
  id: string;
  categoryId: string;
  src: string;
};

export const galleryCategories: GalleryCategory[] = [
  { id: 'ambiente' },
  { id: 'coctel' },
  { id: 'gastronomia' },
  { id: 'eventos' },
];

export const galleryImages: GalleryImage[] = [
  { id: 'exterior', categoryId: 'ambiente', src: images.exterior },
  { id: 'interior', categoryId: 'ambiente', src: images.interior },
  { id: 'barra', categoryId: 'ambiente', src: images.barra },
  { id: 'coctel-01', categoryId: 'coctel', src: images.coctails[0] },
  { id: 'coctel-02', categoryId: 'coctel', src: images.coctails[1] },
  { id: 'coctel-03', categoryId: 'coctel', src: images.coctails[2] },
  { id: 'coctel-04', categoryId: 'coctel', src: images.coctails[3] },
  { id: 'comida-01', categoryId: 'gastronomia', src: images.comida[0] },
  { id: 'comida-02', categoryId: 'gastronomia', src: images.comida[1] },
];
