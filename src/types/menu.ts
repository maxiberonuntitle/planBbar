/** Cadena preparada para futuras traducciones (i18n). */
export type TranslatableString = string;

export interface MenuItem {
  id: string;
  nombre: TranslatableString;
  precio: number;
  descripcion?: TranslatableString;
}

export interface MenuSection {
  id: string;
  titulo: TranslatableString;
  descripcion?: TranslatableString;
}

export interface BurgerPlan {
  id: string;
  nombre: TranslatableString;
  precio: number;
  descripcion: TranslatableString;
}

export interface Burger {
  panes: TranslatableString[];
  carnes: TranslatableString[];
  extraCarne: number;
  extraPatatas: number;
  planes: BurgerPlan[];
}

export interface Pizza {
  precioBase: number;
  bases: TranslatableString[];
  quesos: TranslatableString[];
  ingredientes150: TranslatableString[];
  ingredientes200: TranslatableString[];
}

export interface Pasta {
  precioBase: number;
  tipos: TranslatableString[];
  salsas: TranslatableString[];
}

export interface Drink extends MenuItem {}

export type CocktailSpirit = 'vodka' | 'gin' | 'whisky' | 'ron';

export interface CocktailItem {
  id: string;
  nombre: TranslatableString;
  descripcion: TranslatableString;
}

export interface Cocktails {
  precio: number;
  vodka: CocktailItem[];
  gin: CocktailItem[];
  whisky: CocktailItem[];
  ron: CocktailItem[];
}

export interface MenuData {
  entrantes: MenuItem[];
  ensaladas: MenuItem[];
  hamburguesas: Burger;
  carnes: MenuItem[];
  pescados: MenuItem[];
  pasta: Pasta;
  pizzas: Pizza;
  bebidas: Drink[];
  cervezas: Drink[];
  vinos: Drink[];
  botellas: Drink[];
  cubatas: Drink[];
  cocktails: Cocktails;
}

export const COCKTAIL_SPIRIT_LABELS: Record<CocktailSpirit, TranslatableString> = {
  vodka: 'Vodka',
  gin: 'Gin',
  whisky: 'Whisky',
  ron: 'Ron',
};

export const MENU_SECTIONS: MenuSection[] = [
  { id: 'entrantes', titulo: 'Entrantes' },
  { id: 'ensaladas', titulo: 'Ensaladas' },
  { id: 'hamburguesas', titulo: 'Hamburguesas' },
  { id: 'carnes', titulo: 'Carnes' },
  { id: 'pescados', titulo: 'Pescados' },
  { id: 'pasta', titulo: 'Pasta' },
  { id: 'pizzas', titulo: 'Pizzas' },
  { id: 'bebidas', titulo: 'Bebidas' },
  { id: 'cervezas', titulo: 'Cervezas' },
  { id: 'vinos', titulo: 'Sangría y vinos' },
  { id: 'botellas', titulo: 'Botellas' },
  { id: 'cubatas', titulo: 'Cubatas' },
  { id: 'cocktails', titulo: 'Cocktails' },
];
