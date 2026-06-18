import type { MenuData, Cocktails } from '../types/menu';

export const cocktails: Cocktails = {
  precio: 9.5,

  vodka: [
    {
      id: 'porn-star-martini',
      nombre: 'Porn Star Martini',
      descripcion: 'Vodka infusionado con vainilla, maracuyá y zumo de limón natural.',
    },
    {
      id: 'galaxy',
      nombre: 'Galaxy',
      descripcion: 'Vodka, licor de arándano y zumo de limón.',
    },
  ],

  gin: [
    {
      id: 'pink-panther',
      nombre: 'Pink Panther',
      descripcion: 'Gin, sirope de fresa y zumo de limón.',
    },
  ],

  whisky: [
    {
      id: 'whiskey-sour',
      nombre: 'Whiskey Sour',
      descripcion: 'Whisky, zumo de limón, azúcar y clara de huevo.',
    },
    {
      id: 'bourbon-smash',
      nombre: 'Bourbon Smash',
      descripcion: 'Bourbon, frambuesa y sirope de azúcar.',
    },
    {
      id: 'honey-whiskey-fizz',
      nombre: 'Honey Whiskey Fizz',
      descripcion: 'Whiskey, miel y licor de naranja.',
    },
  ],

  ron: [
    {
      id: 'between-the-sheets',
      nombre: 'Between the Sheets',
      descripcion: 'Ron infusionado con mango, sirope de azúcar y zumo de lima.',
    },
    {
      id: 'mojito',
      nombre: 'Mojito',
      descripcion: 'Ron, menta, lima y azúcar.',
    },
    {
      id: 'cherry-cabaret',
      nombre: 'Cherry Cabaret',
      descripcion: 'Ron, sirope de cereza, arándano y zumo de lima.',
    },
    {
      id: 'coconut-kiss',
      nombre: 'Coconut Kiss',
      descripcion: 'Ron, sirope de coco, zumo de piña y lima.',
    },
  ],
};

export const menuData: MenuData = {
  entrantes: [
    { id: 'bravas', nombre: 'Bravas', precio: 7 },
    { id: 'alitas-pollo', nombre: 'Alitas de Pollo', precio: 8 },
    { id: 'fingers-pollo', nombre: 'Fingers de Pollo', precio: 8 },
    { id: 'nachos-3-salsas', nombre: 'Nachos 3 Salsas', precio: 9.5 },
    { id: 'aros-cebolla', nombre: 'Aros de cebolla', precio: 8 },
    { id: 'huevos-estrellados', nombre: 'Huevos estrellados', precio: 9 },
    { id: 'pan-ajo', nombre: 'Pan de ajo', precio: 3.5 },
  ],

  ensaladas: [
    {
      id: 'ensalada-cesar',
      nombre: 'Ensalada César',
      precio: 14.5,
      descripcion: 'Lechuga, pollo, parmesano, aderezo César, pan tostado, nueces y queso.',
    },
    {
      id: 'ensalada-caprese',
      nombre: 'Ensalada Caprese',
      precio: 12.5,
      descripcion: 'Tomate, mozzarella, albahaca, crema de balsámico.',
    },
    {
      id: 'ensalada-tropical',
      nombre: 'Ensalada Tropical',
      precio: 13.5,
      descripcion: 'Corazones de lechuga romana, pollo, membrillo, nueces y queso de cabra.',
    },
  ],

  hamburguesas: {
    panes: ['Brioche', 'Pan sin gluten'],
    carnes: ['Ternera', 'Pollo crujiente', 'Vegetariana'],
    extraCarne: 2,
    extraPatatas: 2,
    planes: [
      {
        id: 'plan-b',
        nombre: 'PLAN B',
        precio: 15,
        descripcion: 'Lechuga, tomate, cebolla, bacon, huevo y queso cheddar.',
      },
      {
        id: 'plan-b2',
        nombre: 'PLAN B²',
        precio: 16,
        descripcion: 'Lechuga, tomate, doble carne y cebolla caramelizada.',
      },
      {
        id: 'plan-c',
        nombre: 'PLAN C',
        precio: 14,
        descripcion: 'Doble queso cheddar, cebolla plancha, lechuga y tomate.',
      },
      {
        id: 'plan-d',
        nombre: 'PLAN D',
        precio: 15,
        descripcion: 'Lechuga, tomate, queso cheddar, bacon y aros de cebolla.',
      },
    ],
  },

  carnes: [
    { id: 'chuleton', nombre: 'Chuletón', precio: 27 },
    { id: 'entrecot', nombre: 'Entrecot', precio: 19.5 },
    { id: 'costillas-bbq', nombre: 'Costillas BBQ', precio: 17.5 },
    { id: 'medio-pollo', nombre: '½ Pollo', precio: 11.5 },
  ],

  pescados: [
    { id: 'salmon', nombre: 'Salmón', precio: 18.5 },
    { id: 'dorada', nombre: 'Dorada', precio: 14.5 },
    { id: 'fish-chips', nombre: 'Fish & Chips', precio: 14.5 },
  ],

  pasta: {
    precioBase: 7.5,
    tipos: ['Penne', 'Tagliatelle', 'Espagueti'],
    salsas: ['Carbonara', 'Boloñesa', 'Pesto'],
  },

  pizzas: {
    precioBase: 9.5,
    bases: ['Normal', 'Base con gluten', 'Base sin gluten (+1,50€)'],
    quesos: [
      'Mozzarella',
      'Roquefort',
      'Parmesano',
      'Provolone',
      'Queso azul',
      'Cheddar',
      'Queso de cabra',
      'Emmental',
    ],
    ingredientes150: [
      'Aceituna negra',
      'Tomates cherry',
      'Champiñones',
      'Pimiento',
      'Cebolla',
      'Rúcula',
    ],
    ingredientes200: [
      'Salami',
      'Bacon de Nápoles',
      'Atún',
      'Pepperoni',
      'Jamón dulce',
      'Kebab',
      'Jamón serrano',
      'Pollo asado',
    ],
  },

  bebidas: [
    { id: 'coca-cola', nombre: 'Coca-Cola', precio: 2.7 },
    { id: 'coca-cola-zero', nombre: 'Coca-Cola Zero', precio: 2.7 },
    { id: 'fanta-limon', nombre: 'Fanta Limón', precio: 2.7 },
    { id: 'fanta-naranja', nombre: 'Fanta Naranja', precio: 2.7 },
    { id: 'aquarius', nombre: 'Aquarius', precio: 2.7 },
    { id: 'tonica-schweppes', nombre: 'Tónica Schweppes', precio: 2.7 },
    { id: 'sprite', nombre: 'Sprite', precio: 2.7 },
    { id: 'nestea', nombre: 'Nestea', precio: 2.7 },
    { id: 'agua', nombre: 'Agua', precio: 2.5 },
    { id: 'agua-gas', nombre: 'Agua con gas', precio: 2.5 },
    { id: 'zumo', nombre: 'Zumo', precio: 2.5 },
  ],

  cervezas: [
    { id: 'cana', nombre: 'Caña', precio: 2.8 },
    { id: 'jarra', nombre: 'Jarra', precio: 4 },
    { id: 'tercio', nombre: 'Tercio', precio: 4 },
    { id: 'desperados', nombre: 'Desperados', precio: 4 },
  ],

  vinos: [
    { id: 'sangria-vino-1l', nombre: 'Sangría de vino 1L', precio: 12.5 },
    { id: 'sangria-cava-1l', nombre: 'Sangría de cava 1L', precio: 13.5 },
    { id: 'copa-sangria-vino', nombre: 'Copa de sangría vino', precio: 4 },
    { id: 'copa-vino-tinto', nombre: 'Copa de vino tinto casa', precio: 3.5 },
    { id: 'copa-vino-blanco', nombre: 'Copa de vino blanco casa', precio: 3.5 },
    { id: 'copa-vino-rosado', nombre: 'Copa de vino rosado casa', precio: 3.5 },
    { id: 'copa-cava', nombre: 'Copa de cava', precio: 3 },
  ],

  botellas: [
    { id: 'botella-verdejo', nombre: 'Botella Verdejo blanco', precio: 19 },
    { id: 'botella-rioja', nombre: 'Botella Rioja', precio: 18 },
    { id: 'botella-cava', nombre: 'Botella Cava Brut Nature', precio: 16 },
  ],

  cubatas: [
    { id: 'cubata-normal', nombre: 'Cubata Normal', precio: 8 },
    { id: 'cubata-premium', nombre: 'Cubata Premium', precio: 9.5 },
  ],

  cocktails,
};

export function formatPrice(precio: number): string {
  const formatted = Number.isInteger(precio) ? precio.toString() : precio.toFixed(2).replace('.', ',');
  return `${formatted} €`;
}
