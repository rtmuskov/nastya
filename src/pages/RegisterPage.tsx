import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const RegisterPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { login, register, isLoggedIn, logout, userData: currentUser } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      const success = login(userData.email, userData.password);
      if (success) {
        setSuccess('Вход выполнен успешно!');
        setTimeout(() => {
          navigate('/');
        }, 1500);
      } else {
        setError('Неверный email или пароль.');
      }
    } else {
      // Validate passwords match
      if (userData.password !== userData.confirmPassword) {
        setError('Пароли не совпадают.');
        return;
      }
      
      // Register
      const success = register({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        phone: userData.phone,
        address: userData.address
      });
      
      if (success) {
        setSuccess('Регистрация прошла успешно!');
        setTimeout(() => {
          navigate('/');
        }, 1500);
      } else {
        setError('Пользователь с таким email уже существует.');
      }
    }
  };

  const handleLogout = () => {
    logout();
    setSuccess('Вы успешно вышли из аккаунта.');
    setTimeout(() => {
      setSuccess('');
    }, 3000);
  };

  return (
    <div className="page-transition pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2 font-montserrat">
          {isLoggedIn ? 'Личный кабинет' : (isLogin ? 'Вход' : 'Регистрация')}
        </h1>
        <div className="w-24 h-1 bg-gold mb-8"></div>
        
        <div className="max-w-md mx-auto">
          {isLoggedIn ? (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6 font-montserrat">Добро пожаловать, {currentUser?.name}!</h2>
              
              {success && (
                <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
                  <p className="text-green-700">{success}</p>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Ваши данные:</h3>
                <p className="mb-1"><span className="font-medium">Имя:</span> {currentUser?.name}</p>
                <p className="mb-1"><span className="font-medium">Email:</span> {currentUser?.email}</p>
                {currentUser?.phone && (
                  <p className="mb-1"><span className="font-medium">Телефон:</span> {currentUser?.phone}</p>
                )}
                {currentUser?.address && (
                  <p className="mb-1"><span className="font-medium">Адрес:</span> {currentUser?.address}</p>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/cart" className="btn-gold px-4 py-2 rounded-md text-center">
                  Моя корзина
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Выйти
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex border-b border-gray-200">
                <button
                  className={`flex-1 py-4 text-center font-medium ${
                    isLogin ? 'bg-gold text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsLogin(true)}
                >
                  Вход
                </button>
                <button
                  className={`flex-1 py-4 text-center font-medium ${
                    !isLogin ? 'bg-gold text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsLogin(false)}
                >
                  Регистрация
                </button>
              </div>
              
              <div className="p-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
                    <p className="text-red-700">{error}</p>
                  </div>
                )}
                
                {success && (
                  <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
                    <p className="text-green-700">{success}</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  {!isLogin && (
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Имя*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                        required={!isLogin}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
                      />
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={userData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Пароль*
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={userData.password}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                  
                  {!isLogin && (
                    <>
                      <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          Подтверждение пароля*
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={userData.confirmPassword}
                          onChange={handleChange}
                          required={!isLogin}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Телефон
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={userData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
                        />
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                          Адрес
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={userData.address}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
                        />
                      </div>
                    </>
                  )}
                  
                  <button
                    type="submit"
                    className="w-full btn-gold py-3 rounded-md font-medium"
                  >
                    {isLogin ? 'Войти' : 'Зарегистрироваться'}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;