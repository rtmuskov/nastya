import { Product, Category } from '../types/product';

export const categories: Category[] = [
  {
    id: 'men',
    name: 'Мужская одежда',
    image: 'https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg'
  },
  {
    id: 'women',
    name: 'Женская одежда',
    image: 'https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg'
  },
  {
    id: 'accessories',
    name: 'Аксессуары',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg'
  },
  {
    id: 'shoes',
    name: 'Обувь',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg'
  }
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Элегантное платье',
    price: 9990,
    originalPrice: 12990,
    description: 'Элегантное вечернее платье, идеально подходящее для особых случаев. Изготовлено из высококачественного материала с изысканной отделкой.',
    category: 'women',
    images: [
      'https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg',
      'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Черный', 'Красный', 'Синий'],
    isNew: true,
    isFeatured: true,
    discount: 20,
    rating: 4.8
  },
  {
    id: 2,
    name: 'Классический костюм',
    price: 24990,
    description: 'Классический мужской костюм для деловых встреч и официальных мероприятий. Безупречный крой и качественная ткань.',
    category: 'men',
    images: [
      'https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg',
      'https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg'
    ],
    sizes: ['48', '50', '52', '54', '56'],
    colors: ['Черный', 'Темно-синий', 'Серый'],
    isFeatured: true,
    rating: 4.9
  },
  {
    id: 3,
    name: 'Кожаная сумка',
    price: 7990,
    originalPrice: 9990,
    description: 'Стильная кожаная сумка, которая подойдет под любой образ. Просторная и практичная.',
    category: 'accessories',
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
      'https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg'
    ],
    colors: ['Коричневый', 'Черный', 'Бежевый'],
    isNew: false,
    discount: 20,
    rating: 4.7
  },
  {
    id: 4,
    name: 'Кожаные туфли',
    price: 8990,
    description: 'Элегантные кожаные туфли ручной работы. Комфорт и стиль для уверенного шага.',
    category: 'shoes',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
      'https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg'
    ],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Черный', 'Коричневый'],
    isFeatured: true,
    rating: 4.6
  },
  {
    id: 5,
    name: 'Шелковая блузка',
    price: 6990,
    description: 'Изысканная шелковая блузка для создания женственного образа. Мягкая и приятная к телу.',
    category: 'women',
    images: [
      'https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg',
      'https://images.pexels.com/photos/6311158/pexels-photo-6311158.jpeg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Белый', 'Бежевый', 'Голубой'],
    isNew: true,
    rating: 4.5
  },
  {
    id: 6,
    name: 'Кашемировый свитер',
    price: 11990,
    description: 'Роскошный кашемировый свитер для тепла и комфорта. Легкий и мягкий, он станет любимой вещью в вашем гардеробе.',
    category: 'men',
    images: [
      'https://images.pexels.com/photos/10026492/pexels-photo-10026492.jpeg',
      'https://images.pexels.com/photos/10026491/pexels-photo-10026491.jpeg'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Серый', 'Бежевый', 'Темно-синий'],
    isFeatured: false,
    rating: 4.7
  },
  {
    id: 7,
    name: 'Золотые серьги',
    price: 15990,
    description: 'Изящные золотые серьги с драгоценными камнями. Идеальное дополнение к вечернему наряду.',
    category: 'accessories',
    images: [
      'https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg',
      'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg'
    ],
    colors: ['Золотой'],
    isNew: true,
    isFeatured: true,
    rating: 4.9
  },
  {
    id: 8,
    name: 'Замшевые ботинки',
    price: 12990,
    originalPrice: 15990,
    description: 'Стильные замшевые ботинки для осенне-зимнего сезона. Утепленные и комфортные.',
    category: 'shoes',
    images: [
      'https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg',
      'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg'
    ],
    sizes: ['38', '39', '40', '41', '42'],
    colors: ['Коричневый', 'Черный'],
    discount: 20,
    rating: 4.6
  },
  {
    id: 9,
    name: 'Джинсы slim fit',
    price: 5990,
    description: 'Стильные джинсы slim fit из высококачественного денима. Универсальная модель на каждый день.',
    category: 'men',
    images: [
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg',
      'https://images.pexels.com/photos/1082526/pexels-photo-1082526.jpeg'
    ],
    sizes: ['30', '32', '34', '36', '38'],
    colors: ['Синий', 'Черный', 'Серый'],
    rating: 4.5
  },
  {
    id: 10,
    name: 'Шелковый шарф',
    price: 4990,
    description: 'Элегантный шелковый шарф с уникальным принтом. Добавит изысканности любому образу.',
    category: 'accessories',
    images: [
      'https://images.pexels.com/photos/1451648/pexels-photo-1451648.jpeg',
      'https://images.pexels.com/photos/1038000/pexels-photo-1038000.jpeg'
    ],
    colors: ['Мультиколор', 'Синий', 'Зеленый'],
    isFeatured: false,
    rating: 4.4
  },
  {
    id: 11,
    name: 'Вечернее платье',
    price: 19990,
    description: 'Роскошное вечернее платье для особых случаев. Изысканный дизайн и высочайшее качество.',
    category: 'women',
    images: [
      'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg',
      'https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Черный', 'Красный', 'Синий'],
    isNew: true,
    isFeatured: true,
    rating: 5.0
  },
  {
    id: 12,
    name: 'Кожаный ремень',
    price: 3990,
    description: 'Классический кожаный ремень с элегантной пряжкой. Незаменимый аксессуар в гардеробе.',
    category: 'accessories',
    images: [
      'https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg',
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg'
    ],
    sizes: ['105', '110', '115', '120'],
    colors: ['Коричневый', 'Черный'],
    rating: 4.7
  }
];

// Function to get products by filter
export const getFilteredProducts = (filterOptions: {
  category?: string;
  search?: string;
  priceRange?: [number, number];
  sort?: string;
}): Product[] => {
  let filteredProducts = [...products];
  
  // Filter by category
  if (filterOptions.category && filterOptions.category !== 'all') {
    filteredProducts = filteredProducts.filter(
      product => product.category === filterOptions.category
    );
  }
  
  // Filter by search term
  if (filterOptions.search) {
    const searchLower = filterOptions.search.toLowerCase();
    filteredProducts = filteredProducts.filter(
      product => product.name.toLowerCase().includes(searchLower) || 
                 product.description.toLowerCase().includes(searchLower)
    );
  }
  
  // Filter by price range
  if (filterOptions.priceRange) {
    const [min, max] = filterOptions.priceRange;
    filteredProducts = filteredProducts.filter(
      product => product.price >= min && product.price <= max
    );
  }
  
  // Sort products
  if (filterOptions.sort) {
    switch (filterOptions.sort) {
      case 'price-asc':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'popularity':
        filteredProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'newest':
        // Assuming newer products have higher IDs
        filteredProducts.sort((a, b) => b.id - a.id);
        break;
    }
  }
  
  return filteredProducts;
};

// Function to get a product by ID
export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

// Function to get featured products
export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

// Function to get new products
export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

// Function to get related products
export const getRelatedProducts = (productId: number, limit: number = 4): Product[] => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, limit);
};