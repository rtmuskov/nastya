import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="page-transition pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2 font-montserrat">О нас</h1>
        <div className="w-24 h-1 bg-gold mb-8"></div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="relative h-80 md:h-96">
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img 
              src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg" 
              alt="О компании GoldFashion" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-montserrat">
                GoldFashion
              </h2>
            </div>
          </div>
          
          <div className="p-6 md:p-8 lg:p-10">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-6 leading-relaxed">
                <span className="text-gold font-semibold">GoldFashion</span> - это премиальный бренд одежды, который создает элегантные и стильные коллекции для мужчин и женщин, ценящих качество и уникальность.
              </p>
              
              <p className="mb-6 leading-relaxed">
                Наша история началась в 2010 году с маленького бутика в центре Рязани. Основатели бренда - талантливые дизайнеры с многолетним опытом в индустрии моды - стремились создать коллекции, которые сочетают в себе элегантность, комфорт и инновационный дизайн.
              </p>
              
              <p className="mb-10 leading-relaxed">
                Сегодня GoldFashion - это признанный бренд с сетью бутиков в крупнейших городах России. Мы продолжаем развиваться, сохраняя верность нашим главным принципам: безупречное качество, внимание к деталям и индивидуальный подход к каждому клиенту.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gold text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-montserrat">15+ бутиков</h3>
                  <p className="text-gray-600">По всей России</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gold text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-montserrat">50+ сотрудников</h3>
                  <p className="text-gray-600">Профессиональная команда</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gold text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-montserrat">10000+ клиентов</h3>
                  <p className="text-gray-600">Довольных нашей продукцией</p>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 font-montserrat">Наша миссия</h3>
              <p className="mb-8 leading-relaxed">
                Мы стремимся создавать одежду, которая не только следует современным трендам, но и отражает индивидуальность каждого клиента. Наша цель - помочь людям выразить себя через стиль, чувствовать себя уверенно и комфортно в любой ситуации.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 font-montserrat">Что делает нас особенными</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold mb-2 font-montserrat">Качество материалов</h4>
                  <p className="text-gray-700">
                    Мы тщательно отбираем только лучшие ткани и материалы для наших коллекций, сотрудничая с проверенными поставщиками из Италии, Франции и Японии.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 font-montserrat">Уникальный дизайн</h4>
                  <p className="text-gray-700">
                    Каждая модель разрабатывается нашими талантливыми дизайнерами, которые находят вдохновение в мировых трендах, искусстве и культуре.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 font-montserrat">Внимание к деталям</h4>
                  <p className="text-gray-700">
                    Мы уделяем особое внимание каждой детали - от выбора пуговиц до финальной отделки изделия, чтобы гарантировать безупречное качество.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 font-montserrat">Персональный подход</h4>
                  <p className="text-gray-700">
                    Наши консультанты помогут подобрать идеальный образ, учитывая индивидуальные особенности и предпочтения каждого клиента.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;