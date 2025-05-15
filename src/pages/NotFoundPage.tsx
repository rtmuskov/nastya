import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="page-transition pt-24 pb-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-6xl font-bold text-gold mb-4 font-montserrat">404</h1>
          <h2 className="text-2xl font-semibold mb-4 font-montserrat">Страница не найдена</h2>
          <p className="text-gray-600 mb-8">
            Извините, запрашиваемая страница не существует или была перемещена.
          </p>
          <Link to="/" className="btn-gold px-6 py-3 rounded-md inline-flex items-center">
            <ArrowLeft className="mr-2" size={18} />
            <span>Вернуться на главную</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;