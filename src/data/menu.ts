import type { MenuData, Cocktails } from '../types/menu';

export const cocktails: Cocktails = {
  precio: 9.5,
  vodka: [
    { id: 'porn-star-martini' },
    { id: 'galaxy' },
  ],
  gin: [{ id: 'pink-panther' }],
  whisky: [
    { id: 'whiskey-sour' },
    { id: 'bourbon-smash' },
    { id: 'honey-whiskey-fizz' },
  ],
  ron: [
    { id: 'between-the-sheets' },
    { id: 'mojito' },
    { id: 'cherry-cabaret' },
    { id: 'coconut-kiss' },
  ],
};

export const menuData: MenuData = {
  entrantes: [
    { id: 'bravas', precio: 7 },
    { id: 'alitas-pollo', precio: 8 },
    { id: 'fingers-pollo', precio: 8 },
    { id: 'nachos-3-salsas', precio: 9.5 },
    { id: 'aros-cebolla', precio: 8 },
    { id: 'huevos-estrellados', precio: 9 },
    { id: 'pan-ajo', precio: 3.5 },
  ],
  ensaladas: [
    { id: 'ensalada-cesar', precio: 14.5 },
    { id: 'ensalada-caprese', precio: 12.5 },
    { id: 'ensalada-tropical', precio: 13.5 },
  ],
  hamburguesas: {
    panes: ['brioche', 'pan-sin-gluten'],
    carnes: ['ternera', 'pollo-crujiente', 'vegetariana'],
    extraCarne: 2,
    extraPatatas: 2,
    planes: [
      { id: 'plan-b', precio: 15 },
      { id: 'plan-b2', precio: 16 },
      { id: 'plan-c', precio: 14 },
      { id: 'plan-d', precio: 15 },
    ],
  },
  carnes: [
    { id: 'chuleton', precio: 27 },
    { id: 'entrecot', precio: 19.5 },
    { id: 'costillas-bbq', precio: 17.5 },
    { id: 'medio-pollo', precio: 11.5 },
  ],
  pescados: [
    { id: 'salmon', precio: 18.5 },
    { id: 'dorada', precio: 14.5 },
    { id: 'fish-chips', precio: 14.5 },
  ],
  pasta: {
    precioBase: 7.5,
    tipos: ['penne', 'tagliatelle', 'espagueti'],
    salsas: ['carbonara', 'bolonesa', 'pesto'],
  },
  pizzas: {
    precioBase: 9.5,
    bases: ['normal', 'base-con-gluten', 'base-sin-gluten'],
    quesos: [
      'mozzarella',
      'roquefort',
      'parmesano',
      'provolone',
      'queso-azul',
      'cheddar',
      'queso-cabra',
      'emmental',
    ],
    ingredientes150: [
      'aceituna-negra',
      'tomates-cherry',
      'champinones',
      'pimiento',
      'cebolla',
      'rucula',
    ],
    ingredientes200: [
      'salami',
      'bacon-napoles',
      'atun',
      'pepperoni',
      'jamon-dulce',
      'kebab',
      'jamon-serrano',
      'pollo-asado',
    ],
  },
  bebidas: [
    { id: 'coca-cola', precio: 2.7 },
    { id: 'coca-cola-zero', precio: 2.7 },
    { id: 'fanta-limon', precio: 2.7 },
    { id: 'fanta-naranja', precio: 2.7 },
    { id: 'aquarius', precio: 2.7 },
    { id: 'tonica-schweppes', precio: 2.7 },
    { id: 'sprite', precio: 2.7 },
    { id: 'nestea', precio: 2.7 },
    { id: 'agua', precio: 2.5 },
    { id: 'agua-gas', precio: 2.5 },
    { id: 'zumo', precio: 2.5 },
  ],
  cervezas: [
    { id: 'cana', precio: 2.8 },
    { id: 'jarra', precio: 4 },
    { id: 'tercio', precio: 4 },
    { id: 'desperados', precio: 4 },
  ],
  vinos: [
    { id: 'sangria-vino-1l', precio: 12.5 },
    { id: 'sangria-cava-1l', precio: 13.5 },
    { id: 'copa-sangria-vino', precio: 4 },
    { id: 'copa-vino-tinto', precio: 3.5 },
    { id: 'copa-vino-blanco', precio: 3.5 },
    { id: 'copa-vino-rosado', precio: 3.5 },
    { id: 'copa-cava', precio: 3 },
  ],
  botellas: [
    { id: 'botella-verdejo', precio: 19 },
    { id: 'botella-rioja', precio: 18 },
    { id: 'botella-cava', precio: 16 },
  ],
  cubatas: [
    { id: 'cubata-normal', precio: 8 },
    { id: 'cubata-premium', precio: 9.5 },
  ],
  cocktails,
};

export function formatPrice(precio: number): string {
  const formatted = Number.isInteger(precio) ? precio.toString() : precio.toFixed(2).replace('.', ',');
  return `${formatted} €`;
}
