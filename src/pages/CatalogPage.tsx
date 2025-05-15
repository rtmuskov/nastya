import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Filter, SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { getFilteredProducts, categories } from '../data/products';
import { Product, FilterOptions } from '../types/product';
import ProductCard from '../components/ProductCard';

const CatalogPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [sortOption, setSortOption] = useState('');

  // Extract category from URL on component mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    const search = params.get('search');
    const sort = params.get('sort');

    const newFilterOptions: FilterOptions = {};
    
    if (category) {
      newFilterOptions.category = category;
    }
    
    if (sort) {
      newFilterOptions.sort = sort as any;
      setSortOption(sort);
    }
    
    if (search) {
      setSearchTerm(search);
    }
    
    setFilterOptions(newFilterOptions);
  }, [location.search]);

  // Update products when filter options change
  useEffect(() => {
    const filtered = getFilteredProducts({
      ...filterOptions,
      search: searchTerm,
      priceRange: priceRange
    });
    setProducts(filtered);
  }, [filterOptions, searchTerm, priceRange]);

  const handleCategoryChange = (category: string | undefined) => {
    const newFilterOptions = { ...filterOptions, category };
    setFilterOptions(newFilterOptions);
    updateURLParams(newFilterOptions);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = e.target.value || undefined;
    setSortOption(sort);
    const newFilterOptions = { ...filterOptions, sort: sort as any };
    setFilterOptions(newFilterOptions);
    updateURLParams(newFilterOptions);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateURLParams({ ...filterOptions, search: searchTerm });
  };

  const handlePriceChange = (min: number, max: number) => {
    setPriceRange([min, max]);
  };

  const updateURLParams = (options: FilterOptions & { search?: string }) => {
    const params = new URLSearchParams();
    
    if (options.category) {
      params.set('category', options.category);
    }
    
    if (options.search) {
      params.set('search', options.search);
    }
    
    if (options.sort) {
      params.set('sort', options.sort);
    }
    
    navigate(`/catalog?${params.toString()}`);
  };

  const handleClearFilters = () => {
    setFilterOptions({});
    setSearchTerm('');
    setPriceRange([0, 50000]);
    setSortOption('');
    navigate('/catalog');
  };

  const currentCategory = filterOptions.category 
    ? categories.find(c => c.id === filterOptions.category)?.name 
    : 'Все категории';

  return (
    <div className="page-transition pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2 font-montserrat">Каталог</h1>
        <div className="w-24 h-1 bg-gold mb-8"></div>

        {/* Search and Filter Controls - Mobile */}
        <div className="lg:hidden mb-6">
          <div className="flex flex-col gap-4">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                placeholder="Поиск товаров..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-gold"
              />
              <button type="submit" className="btn-gold px-4 py-2 rounded-r-md">
                Поиск
              </button>
            </form>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center justify-center gap-2 border border-gray-300 px-4 py-3 rounded-md"
            >
              <Filter size={18} />
              <span>Фильтры и сортировка</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 font-montserrat">Фильтры</h2>
              
              <div className="mb-6">
                <h3 className="font-medium mb-3">Категории</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => handleCategoryChange(undefined)}
                      className={`text-left w-full ${!filterOptions.category ? 'text-gold font-medium' : 'text-custom-black'}`}
                    >
                      Все категории
                    </button>
                  </li>
                  {categories.map(category => (
                    <li key={category.id}>
                      <button
                        onClick={() => handleCategoryChange(category.id)}
                        className={`text-left w-full ${filterOptions.category === category.id ? 'text-gold font-medium' : 'text-custom-black'}`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-3">Цена</h3>
                <div className="flex gap-2 items-center">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => handlePriceChange(Number(e.target.value), priceRange[1])}
                    min="0"
                    max={priceRange[1]}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
                    placeholder="От"
                  />
                  <span>—</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceChange(priceRange[0], Number(e.target.value))}
                    min={priceRange[0]}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
                    placeholder="До"
                  />
                </div>
              </div>
              
              <button
                onClick={handleClearFilters}
                className="w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
              >
                Сбросить фильтры
              </button>
            </div>
          </div>

          {/* Filters - Mobile */}
          {isFilterOpen && (
            <div className="fixed inset-0 bg-black/50 z-50 lg:hidden overflow-auto">
              <div className="bg-white h-full w-full max-w-md ml-auto p-6 animate-slide-in-right">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold font-montserrat">Фильтры</h2>
                  <button onClick={() => setIsFilterOpen(false)}>
                    <X size={24} />
                  </button>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Категории</h3>
                  <ul className="space-y-2">
                    <li>
                      <button
                        onClick={() => handleCategoryChange(undefined)}
                        className={`text-left w-full ${!filterOptions.category ? 'text-gold font-medium' : 'text-custom-black'}`}
                      >
                        Все категории
                      </button>
                    </li>
                    {categories.map(category => (
                      <li key={category.id}>
                        <button
                          onClick={() => handleCategoryChange(category.id)}
                          className={`text-left w-full ${filterOptions.category === category.id ? 'text-gold font-medium' : 'text-custom-black'}`}
                        >
                          {category.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Цена</h3>
                  <div className="flex gap-2 items-center">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => handlePriceChange(Number(e.target.value), priceRange[1])}
                      min="0"
                      max={priceRange[1]}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
                      placeholder="От"
                    />
                    <span>—</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => handlePriceChange(priceRange[0], Number(e.target.value))}
                      min={priceRange[0]}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
                      placeholder="До"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Сортировка</h3>
                  <select
                    value={sortOption}
                    onChange={handleSortChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
                  >
                    <option value="">По умолчанию</option>
                    <option value="price-asc">Цена: по возрастанию</option>
                    <option value="price-desc">Цена: по убыванию</option>
                    <option value="popularity">По популярности</option>
                    <option value="newest">Сначала новые</option>
                  </select>
                </div>
                
                <div className="flex gap-4 mt-8">
                  <button
                    onClick={handleClearFilters}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    Сбросить
                  </button>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="flex-1 btn-gold px-4 py-3 rounded-md"
                  >
                    Применить
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Products Content */}
          <div className="flex-grow">
            {/* Search and Filter Controls - Desktop */}
            <div className="hidden lg:flex justify-between items-center mb-8">
              <div className="flex items-center">
                <div className="relative">
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md">
                    <Filter size={18} />
                    <span>{currentCategory}</span>
                    <ChevronDown size={16} />
                  </button>
                </div>
                
                {(filterOptions.category || searchTerm || sortOption) && (
                  <button
                    onClick={handleClearFilters}
                    className="ml-4 text-sm text-gray-600 hover:text-gold flex items-center gap-1"
                  >
                    <X size={16} />
                    <span>Сбросить фильтры</span>
                  </button>
                )}
              </div>

              <div className="flex gap-4">
                <form onSubmit={handleSearch} className="flex">
                  <input
                    type="text"
                    placeholder="Поиск товаров..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-64 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                  <button type="submit" className="btn-gold px-4 py-2 rounded-r-md">
                    Поиск
                  </button>
                </form>
                
                <div className="flex items-center">
                  <span className="mr-2 text-gray-700">Сортировка:</span>
                  <select
                    value={sortOption}
                    onChange={handleSortChange}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
                  >
                    <option value="">По умолчанию</option>
                    <option value="price-asc">Цена: по возрастанию</option>
                    <option value="price-desc">Цена: по убыванию</option>
                    <option value="popularity">По популярности</option>
                    <option value="newest">Сначала новые</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results info */}
            <div className="mb-6">
              <p className="text-gray-600">
                {searchTerm && (
                  <span>Результаты поиска по запросу "<strong>{searchTerm}</strong>". </span>
                )}
                Найдено: <strong>{products.length}</strong> товаров
              </p>
            </div>

            {/* Products Grid */}
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-xl font-semibold mb-2 font-montserrat">Товары не найдены</h3>
                <p className="text-gray-600 mb-4">
                  К сожалению, по вашему запросу ничего не найдено. Попробуйте изменить параметры фильтрации.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="btn-gold px-4 py-2 rounded-md"
                >
                  Сбросить фильтры
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;