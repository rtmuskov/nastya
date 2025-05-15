export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: 'men' | 'women' | 'accessories' | 'shoes';
  images: string[];
  sizes?: string[];
  colors?: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  discount?: number;
  rating?: number;
}

export interface Category {
  id: string;
  name: string;
  image?: string;
}

export interface FilterOptions {
  category?: string;
  priceRange?: [number, number];
  colors?: string[];
  sizes?: string[];
  sort?: 'price-asc' | 'price-desc' | 'popularity' | 'newest';
}