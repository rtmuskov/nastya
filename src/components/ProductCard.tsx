import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { Product } from '../types/product';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  return (
    <Link to={`/catalog/${product.id}`} className="product-card block bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative overflow-hidden group">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{product.discount}%
          </div>
        )}
        {product.isNew && (
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            Новинка
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex justify-between">
            <button 
              onClick={handleAddToCart}
              className="flex items-center gap-1 text-white hover:text-gold transition-colors"
            >
              <ShoppingBag size={16} />
              <span>В корзину</span>
            </button>
            <button className="text-white hover:text-gold transition-colors">
              <Heart size={16} />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 text-custom-black">{product.name}</h3>
        <div className="flex items-end gap-2">
          <span className="text-lg font-bold text-custom-black">{formatPrice(product.price)} ₽</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)} ₽</span>
          )}
        </div>
        {product.rating && (
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating || 0) ? 'text-gold' : 'text-gray-300'}`}
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
            <span className="text-xs ml-1 text-gray-500">({product.rating})</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;