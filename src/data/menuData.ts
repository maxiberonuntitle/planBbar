export type MenuCategory = {
  id: string;
  title: string;
  description: string;
};

export type MenuItem = {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  price: string;
  tags?: string[];
};

export const menuCategories: MenuCategory[] = [
  { id: 'cocteles', title: 'Cócteles', description: 'Bebidas de autor para la noche.' },
  { id: 'cervezas', title: 'Cervezas', description: 'Selección de cervezas nacionales e internacionales.' },
  { id: 'vinos', title: 'Vinos', description: 'Vinos premium para maridar tu experiencia.' },
  { id: 'premium', title: 'Premium', description: 'Opciones exclusivas de la carta.' },
  { id: 'tapas', title: 'Tapas', description: 'Bocados perfectos para compartir.' },
  { id: 'hamburguesas', title: 'Hamburguesas', description: 'Sabor premium con ingredientes seleccionados.' },
  { id: 'bocadillos', title: 'Bocadillos', description: 'Preparaciones ligeras y sofisticadas.' },
  { id: 'postres', title: 'Postres', description: 'Finaliza la noche con dulzura.' },
];

export const menuItems: MenuItem[] = [
  {
    id: 'planb-signature',
    categoryId: 'cocteles',
    name: 'Plan B Signature',
    description: 'Ginebra premium, vermut casero, cítricos y toque de humo.',
    price: '14€',
    tags: ['signature', 'premium'],
  },
  {
    id: 'mango-fiesta',
    categoryId: 'cocteles',
    name: 'Mango Fiesta',
    description: 'Mezcal, mango fresco, lima y azúcar de jengibre.',
    price: '13€',
    tags: ['frutal', 'refrescante'],
  },
  {
    id: 'cerveza-artesanal',
    categoryId: 'cervezas',
    name: 'Cerveza artesanal',
    description: 'Cerveza local fría servida en copa especial.',
    price: '6€',
  },
  {
    id: 'vino-nadal',
    categoryId: 'vinos',
    name: 'Vino tinto reserva',
    description: 'Copa de vino tinto con notas de frutos rojos.',
    price: '9€',
  },
  {
    id: 'secreto-iberico',
    categoryId: 'premium',
    name: 'Secreto ibérico',
    description: 'Servido con reducción de vino y setas.',
    price: '18€',
  },
  {
    id: 'bravas-planb',
    categoryId: 'tapas',
    name: 'Bravas Plan B',
    description: 'Tradicionales con mayonesa de ajo negro.',
    price: '9€',
  },
  {
    id: 'truffle-burger',
    categoryId: 'hamburguesas',
    name: 'Truffle Burger',
    description: 'Carne premium, queso suizo y salsa de trufa.',
    price: '16€',
  },
  {
    id: 'baguette-pulpo',
    categoryId: 'bocadillos',
    name: 'Bocadillo de pulpo',
    description: 'Pulpo marinado con pimentón y mayonesa suave.',
    price: '12€',
  },
  {
    id: 'cheesecake',
    categoryId: 'postres',
    name: 'Cheesecake de chocolate blanco',
    description: 'Servido con coulis de frutos rojos.',
    price: '8€',
  },
];
