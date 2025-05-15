import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-custom-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-bold font-montserrat mb-4 block">
              <span className="text-gold">Gold</span>
              <span className="text-white">Fashion</span>
            </Link>
            <p className="text-gray-300 mt-4">
              Премиальная одежда для создания вашего неповторимого стиля и элегантного образа.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-gold transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold font-montserrat mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-300 hover:text-gold transition-colors">Каталог</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold transition-colors">О нас</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">Контакты</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold font-montserrat mb-4">Категории</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog?category=men" className="text-gray-300 hover:text-gold transition-colors">Мужская одежда</Link>
              </li>
              <li>
                <Link to="/catalog?category=women" className="text-gray-300 hover:text-gold transition-colors">Женская одежда</Link>
              </li>
              <li>
                <Link to="/catalog?category=accessories" className="text-gray-300 hover:text-gold transition-colors">Аксессуары</Link>
              </li>
              <li>
                <Link to="/catalog?category=shoes" className="text-gray-300 hover:text-gold transition-colors">Обувь</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold font-montserrat mb-4">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-gold flex-shrink-0 mt-1" />
                <span className="text-gray-300">г. Рязань, ул. Соборная, 15</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-gold" />
                <a href="tel:+74912555555" className="text-gray-300 hover:text-gold transition-colors">+7 915 594 87 55</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-gold" />
                <a href="mailto:nastya123ryaz@gmail.com" className="text-gray-300 hover:text-gold transition-colors">nastya123ryaz@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 GoldFashion. Все права защищены.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 justify-center">
                <li>
                  <a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">Политика конфиденциальности</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">Условия использования</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;