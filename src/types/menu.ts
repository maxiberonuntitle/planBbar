export interface MenuItem {
  id: string;
  precio: number;
}

export interface MenuSection {
  id: string;
}

export interface BurgerPlan {
  id: string;
  precio: number;
}

export interface Burger {
  panes: string[];
  carnes: string[];
  extraCarne: number;
  extraPatatas: number;
  planes: BurgerPlan[];
}

export interface Pizza {
  precioBase: number;
  bases: string[];
  quesos: string[];
  ingredientes150: string[];
  ingredientes200: string[];
}

export interface Pasta {
  precioBase: number;
  tipos: string[];
  salsas: string[];
}

export interface Drink extends MenuItem {}

export type CocktailSpirit = 'vodka' | 'gin' | 'whisky' | 'ron';

export interface CocktailItem {
  id: string;
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

export const COCKTAIL_SPIRITS: CocktailSpirit[] = ['vodka', 'gin', 'whisky', 'ron'];

export const MENU_SECTIONS: MenuSection[] = [
  { id: 'entrantes' },
  { id: 'ensaladas' },
  { id: 'hamburguesas' },
  { id: 'carnes' },
  { id: 'pescados' },
  { id: 'pasta' },
  { id: 'pizzas' },
  { id: 'bebidas' },
  { id: 'cervezas' },
  { id: 'vinos' },
  { id: 'botellas' },
  { id: 'cubatas' },
  { id: 'cocktails' },
];
