/**
 * Interface untuk item menu coffee shop.
 */
export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'coffee' | 'non-coffee' | 'refresher' | 'food';
  popular?: boolean;
  image?: string;
}

/**
 * Dummy data menu inspired by Fore Coffee
 */
export const menuItems: MenuItem[] = [
  // COFFEE
  {
    id: "c1",
    name: "Aren Latte",
    price: 28000,
    description: "Kopi susu kekinian dengan gula aren asli nusantara yang manis dan legit.",
    category: "coffee",
    popular: true,
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "c2",
    name: "Pandan Latte",
    price: 29000,
    description: "Perpaduan unik espresso dengan aroma pandan wangi dan susu creamy.",
    category: "coffee",
    popular: true,
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "c5",
    name: "Classic Latte",
    price: 32000,
    description: "Espresso klasik dengan fresh milk pilihan untuk menemani harimu.",
    category: "coffee",
    image: "https://images.unsplash.com/photo-1595434091143-b375ced5fe5c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "c6",
    name: "Cappuccino",
    price: 32000,
    description: "Espresso dengan foam tebal yang lembut dan taburan cokelat.",
    category: "coffee",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=600"
  },

  // NON-COFFEE
  {
    id: "nc1",
    name: "Matcha Green Tea",
    price: 32000,
    description: "Premium Japanese Matcha dengan susu segar yang creamy.",
    category: "non-coffee",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "nc2",
    name: "Dark Chocolate",
    price: 30000,
    description: "Cokelat Belgia pekat dengan rasa manis yang pas.",
    category: "non-coffee",
    popular: true,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=600"
  },

  // REFRESHER
  {
    id: "r1",
    name: "Hibiscus Berry",
    price: 28000,
    description: "Teh bunga hibiscus segar dengan potongan buah beri asli.",
    category: "refresher",
    popular: true,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "r2",
    name: "Sunny Citrus",
    price: 28000,
    description: "Perpaduan lemon, jeruk, dan soda yang menyegarkan dahaga.",
    category: "refresher",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600"
  },

  // FOOD
  {
    id: "f1",
    name: "Butter Croissant",
    price: 22000,
    description: "Pastry klasik renyah dengan aroma mentega yang menggugah.",
    category: "food",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "f2",
    name: "Almond Croissant",
    price: 28000,
    description: "Croissant dengan isian krim almond dan taburan kacang almond panggang.",
    category: "food",
    popular: true,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "f3",
    name: "Pain Au Chocolat",
    price: 25000,
    description: "Roll pastry dengan lelehan cokelat di dalamnya.",
    category: "food",
    image: "https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?auto=format&fit=crop&q=80&w=600"
  },
];