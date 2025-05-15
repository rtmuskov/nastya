import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById, getRelatedProducts } from '../data/products';
import { ShoppingBag, Heart, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { Product } from '../types/product';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      const productId = parseInt(id);
      const foundProduct = getProductById(productId);
      
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedImage(0);
        setQuantity(1);
        setSelectedSize(foundProduct.sizes?.[0] || '');
        
        const related = getRelatedProducts(productId);
        setRelatedProducts(related);
      } else {
        navigate('/catalog');
      }
    }
  }, [id, navigate]);

  if (!product) {
    return (
      <div className="page-transition pt-24 pb-16">
        <div className="container mx-auto px-4 flex justify-center items-center min-h-[50vh]">
          <p>Загрузка...</p>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
  };

  const incrementQuantity = () => {
    setQuantity(q => q + 1);
  };

  const decrementQuantity = () => {
    setQuantity(q => Math.max(1, q - 1));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  return (
    <div className="page-transition pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link to="/catalog" className="inline-flex items-center text-custom-black hover:text-gold transition-colors">
            <ArrowLeft size={16} className="mr-1" />
            <span>Назад в каталог</span>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 p-6">
            {/* Image Gallery */}
            <div className="lg:col-span-3">
              <div className="relative overflow-hidden rounded-lg mb-4 h-[400px] md:h-[500px]">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded">
                    -{product.discount}%
                  </div>
                )}
                {product.isNew && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-sm font-bold px-3 py-1 rounded">
                    Новинка
                  </div>
                )}
              </div>
              
              {product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button 
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
                        selectedImage === index ? 'border-gold' : 'border-transparent'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} - вид ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="lg:col-span-2">
              <h1 className="text-2xl md:text-3xl font-bold mb-2 font-montserrat">{product.name}</h1>
              
              {product.rating && (
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-gold' : 'text-gray-300'}`}
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-500">({product.rating})</span>
                </div>
              )}
              
              <div className="flex items-end gap-2 mb-6">
                <span className="text-2xl font-bold text-custom-black">{formatPrice(product.price)} ₽</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">{formatPrice(product.originalPrice)} ₽</span>
                )}
              </div>
              
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Размер:</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-1 border rounded-md ${
                          selectedSize === size 
                            ? 'border-gold bg-gold/10 text-custom-black' 
                            : 'border-gray-300 text-gray-700 hover:border-gold/50'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Цвет:</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map(color => (
                      <div
                        key={color}
                        className="px-3 py-1 border border-gray-300 rounded-md"
                      >
                        {color}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Количество:</h3>
                <div className="flex items-center">
                  <button 
                    onClick={decrementQuantity}
                    className="w-10 h-10 border border-gray-300 rounded-l-md flex items-center justify-center hover:bg-gray-100"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <input 
                    type="number" 
                    value={quantity} 
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 h-10 border-t border-b border-gray-300 text-center focus:outline-none"
                    min="1"
                  />
                  <button 
                    onClick={incrementQuantity}
                    className="w-10 h-10 border border-gray-300 rounded-r-md flex items-center justify-center hover:bg-gray-100"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 btn-gold py-3 px-6 rounded-md flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={20} />
                  <span>Добавить в корзину</span>
                </button>
                <button className="sm:w-12 h-12 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100">
                  <Heart size={20} className="text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-2 font-montserrat">Похожие товары</h2>
            <div className="w-24 h-1 bg-gold mb-8"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;