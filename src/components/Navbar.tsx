import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const { isLoggedIn, userData } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold font-montserrat">
            <span className="text-gold">Gold</span>
            <span className="text-custom-black">Fashion</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => 
              `nav-link font-medium ${isActive ? 'active' : ''} ${isScrolled ? 'text-custom-black' : 'text-custom-black'}`
            }>
              Главная
            </NavLink>
            <NavLink to="/catalog" className={({ isActive }) => 
              `nav-link font-medium ${isActive ? 'active' : ''} ${isScrolled ? 'text-custom-black' : 'text-custom-black'}`
            }>
              Каталог
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              `nav-link font-medium ${isActive ? 'active' : ''} ${isScrolled ? 'text-custom-black' : 'text-custom-black'}`
            }>
              О нас
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              `nav-link font-medium ${isActive ? 'active' : ''} ${isScrolled ? 'text-custom-black' : 'text-custom-black'}`
            }>
              Контакты
            </NavLink>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/register" className="flex items-center space-x-1 font-medium">
              <User size={20} className="text-gold" />
              <span>{isLoggedIn ? userData?.name || 'Аккаунт' : 'Войти'}</span>
            </NavLink>
            <NavLink to="/cart" className="flex items-center space-x-1 font-medium relative">
              <ShoppingBag size={20} className="text-gold" />
              <span>Корзина</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-custom-black" />
            ) : (
              <Menu size={24} className="text-custom-black" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white mt-4 pb-4 rounded-md shadow-lg">
            <nav className="flex flex-col space-y-4 p-4">
              <NavLink to="/" className={({ isActive }) => 
                `font-medium ${isActive ? 'text-gold' : 'text-custom-black'}`
              }>
                Главная
              </NavLink>
              <NavLink to="/catalog" className={({ isActive }) => 
                `font-medium ${isActive ? 'text-gold' : 'text-custom-black'}`
              }>
                Каталог
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => 
                `font-medium ${isActive ? 'text-gold' : 'text-custom-black'}`
              }>
                О нас
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => 
                `font-medium ${isActive ? 'text-gold' : 'text-custom-black'}`
              }>
                Контакты
              </NavLink>
              <div className="border-t border-gray-200 pt-4 mt-2 flex flex-col space-y-4">
                <NavLink to="/register" className="flex items-center space-x-2 font-medium">
                  <User size={20} className="text-gold" />
                  <span>{isLoggedIn ? userData?.name || 'Аккаунт' : 'Войти'}</span>
                </NavLink>
                <NavLink to="/cart" className="flex items-center space-x-2 font-medium relative">
                  <ShoppingBag size={20} className="text-gold" />
                  <span>Корзина</span>
                  {totalItems > 0 && (
                    <span className="ml-2 bg-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </NavLink>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;