import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutInfo, setCheckoutInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    paymentMethod: 'card'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCheckoutInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically process the order
    alert('Заказ успешно оформлен!');
    clearCart();
    setIsCheckingOut(false);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  if (cartItems.length === 0) {
    return (
      <div className="page-transition pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2 font-montserrat">Корзина</h1>
          <div className="w-24 h-1 bg-gold mb-8"></div>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-100">
              <ShoppingBag size={32} className="text-custom-gray" />
            </div>
            <h2 className="text-2xl font-semibold mb-4 font-montserrat">Ваша корзина пуста</h2>
            <p className="text-gray-600 mb-6">Добавьте товары в корзину, чтобы оформить заказ</p>
            <Link to="/catalog" className="btn-gold px-6 py-3 rounded-md inline-block">
              Перейти в каталог
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-transition pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2 font-montserrat">Корзина</h1>
        <div className="w-24 h-1 bg-gold mb-8"></div>
        
        {isCheckingOut ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6 font-montserrat">Оформление заказа</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-4">Контактная информация</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Имя*
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={checkoutInfo.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={checkoutInfo.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Телефон*
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={checkoutInfo.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-4">Адрес доставки</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                          Адрес*
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={checkoutInfo.address}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
                        />
                      </div>
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                          Город*
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={checkoutInfo.city}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
                        />
                      </div>
                      <div>
                        <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                          Почтовый индекс*
                        </label>
                        <input
                          type="text"
                          id="zip"
                          name="zip"
                          value={checkoutInfo.zip}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-4">Способ оплаты</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="card"
                          name="paymentMethod"
                          value="card"
                          checked={checkoutInfo.paymentMethod === 'card'}
                          onChange={() => setCheckoutInfo(prev => ({ ...prev, paymentMethod: 'card' }))}
                          className="w-4 h-4 text-gold focus:ring-gold border-gray-300"
                        />
                        <label htmlFor="card" className="ml-2 text-gray-700">
                          Банковская карта
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="cash"
                          name="paymentMethod"
                          value="cash"
                          checked={checkoutInfo.paymentMethod === 'cash'}
                          onChange={() => setCheckoutInfo(prev => ({ ...prev, paymentMethod: 'cash' }))}
                          className="w-4 h-4 text-gold focus:ring-gold border-gray-300"
                        />
                        <label htmlFor="cash" className="ml-2 text-gray-700">
                          Наличными при получении
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <button
                      type="button"
                      onClick={() => setIsCheckingOut(false)}
                      className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      Вернуться в корзину
                    </button>
                    <button
                      type="submit"
                      className="btn-gold px-6 py-3 rounded-md"
                    >
                      Оформить заказ
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4 font-montserrat">Ваш заказ</h2>
                
                <div className="border-t border-gray-200 py-4">
                  {cartItems.map(item => (
                    <div key={`${item.product.id}-${item.size}`} className="flex justify-between py-2">
                      <div>
                        <p className="font-medium">{item.product.name}</p>
                        <p className="text-sm text-gray-500">
                          {item.quantity} шт. {item.size && `/ ${item.size}`}
                        </p>
                      </div>
                      <p className="font-medium">{formatPrice(item.product.price * item.quantity)} ₽</p>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 pt-4 pb-2">
                  <div className="flex justify-between py-2">
                    <p>Сумма заказа</p>
                    <p className="font-medium">{formatPrice(getCartTotal())} ₽</p>
                  </div>
                  <div className="flex justify-between py-2">
                    <p>Доставка</p>
                    <p className="font-medium">Бесплатно</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center py-2">
                    <p className="font-semibold">Итого</p>
                    <p className="text-xl font-bold">{formatPrice(getCartTotal())} ₽</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold font-montserrat">Товары в корзине ({cartItems.length})</h2>
                </div>
                
                <div>
                  {cartItems.map(item => (
                    <div 
                      key={`${item.product.id}-${item.size}`} 
                      className="flex flex-col sm:flex-row items-start sm:items-center p-6 border-b border-gray-200"
                    >
                      <div className="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden mb-4 sm:mb-0 sm:mr-6">
                        <img 
                          src={item.product.images[0]} 
                          alt={item.product.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <Link to={`/catalog/${item.product.id}`} className="font-medium text-lg hover:text-gold transition-colors">
                          {item.product.name}
                        </Link>
                        {item.size && (
                          <p className="text-gray-500 text-sm">Размер: {item.size}</p>
                        )}
                        <div className="flex flex-wrap items-center gap-4 mt-2">
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button 
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center hover:bg-gray-100"
                              disabled={item.quantity <= 1}
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-10 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center hover:bg-gray-100"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-red-500 hover:text-red-700 transition-colors flex items-center gap-1"
                          >
                            <X size={16} />
                            <span>Удалить</span>
                          </button>
                        </div>
                      </div>
                      <div className="mt-4 sm:mt-0 sm:ml-4">
                        <p className="font-bold text-lg">{formatPrice(item.product.price * item.quantity)} ₽</p>
                        <p className="text-sm text-gray-500">{formatPrice(item.product.price)} ₽ за шт.</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-6 flex justify-between items-center">
                  <button 
                    onClick={clearCart}
                    className="text-red-500 hover:text-red-700 transition-colors flex items-center gap-1"
                  >
                    <X size={16} />
                    <span>Очистить корзину</span>
                  </button>
                  <Link to="/catalog" className="text-custom-black hover:text-gold transition-colors flex items-center gap-1">
                    <ArrowRight size={16} className="transform rotate-180" />
                    <span>Продолжить покупки</span>
                  </Link>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4 font-montserrat">Сумма заказа</h2>
                
                <div className="border-t border-gray-200 py-4">
                  <div className="flex justify-between py-2">
                    <p>Сумма заказа</p>
                    <p className="font-medium">{formatPrice(getCartTotal())} ₽</p>
                  </div>
                  <div className="flex justify-between py-2">
                    <p>Доставка</p>
                    <p className="font-medium">Бесплатно</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4 pb-6">
                  <div className="flex justify-between items-center py-2">
                    <p className="font-semibold">Итого</p>
                    <p className="text-xl font-bold">{formatPrice(getCartTotal())} ₽</p>
                  </div>
                </div>
                
                <button
                  onClick={() => setIsCheckingOut(true)}
                  className="w-full btn-gold py-3 rounded-md"
                >
                  Оформить заказ
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;