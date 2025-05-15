import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../data/products';
import { getFeaturedProducts, getNewProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts().slice(0, 4);
  const newProducts = getNewProducts().slice(0, 4);

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` 
          }}
        ></div>
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <div className="max-w-xl pt-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-montserrat">
              Элегантность в каждой детали
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Откройте для себя мир премиальной одежды и аксессуаров. Создайте свой неповторимый стиль вместе с GoldFashion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/catalog" className="btn-gold px-8 py-3 rounded-full font-semibold text-center">
                Перейти в каталог
              </Link>
              <Link to="/about" className="border-2 border-white text-white hover:bg-white hover:text-custom-black transition-colors duration-300 px-8 py-3 rounded-full font-semibold text-center">
                О нас
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 font-montserrat text-center">Категории</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                to={`/catalog?category=${category.id}`}
                className="group relative overflow-hidden rounded-lg shadow-md h-64"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 z-10"></div>
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                  <h3 className="text-white text-xl font-semibold font-montserrat">{category.name}</h3>
                  <div className="mt-4 border border-gold text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300 px-6 py-2 rounded-full">
                    Смотреть
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-custom-cream">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2 font-montserrat">Рекомендуемые товары</h2>
              <div className="w-24 h-1 bg-gold"></div>
            </div>
            <Link to="/catalog" className="flex items-center gap-2 text-custom-black font-medium hover:text-gold transition-colors">
              <span>Смотреть все</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` 
          }}
        ></div>
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
            Скидка 20% на новую коллекцию
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Только до конца месяца специальное предложение на всю новую коллекцию. Успейте обновить свой гардероб по выгодной цене.
          </p>
          <Link to="/catalog?discount=true" className="btn-gold px-8 py-3 rounded-full font-semibold inline-block">
            Посмотреть коллекцию
          </Link>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2 font-montserrat">Новые поступления</h2>
              <div className="w-24 h-1 bg-gold"></div>
            </div>
            <Link to="/catalog?new=true" className="flex items-center gap-2 text-custom-black font-medium hover:text-gold transition-colors">
              <span>Смотреть все</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-custom-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gold text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 font-montserrat">Премиальное качество</h3>
              <p className="text-custom-gray">Только отборные материалы и безупречное исполнение</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gold text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8 4-8-4V5l8 4 8-4V7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 font-montserrat">Быстрая доставка</h3>
              <p className="text-custom-gray">Доставляем заказы в любую точку России</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gold text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 font-montserrat">Лучшие цены</h3>
              <p className="text-custom-gray">Регулярные акции и выгодные предложения</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gold text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 font-montserrat">Уникальный дизайн</h3>
              <p className="text-custom-gray">Эксклюзивные модели от талантливых дизайнеров</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-custom-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-montserrat">Подпишитесь на рассылку</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Получайте уведомления о новых коллекциях, специальных предложениях и эксклюзивных акциях.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Ваш email" 
              className="flex-grow px-4 py-3 rounded-full text-custom-black focus:outline-none focus:ring-2 focus:ring-gold"
              required
            />
            <button type="submit" className="btn-gold px-6 py-3 rounded-full font-semibold whitespace-nowrap">
              Подписаться
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;