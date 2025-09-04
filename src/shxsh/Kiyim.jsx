import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, Heart, Star, Truck, Shield, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const BabyClothesGallery = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [favorites, setFavorites] = useState(new Set());

  const products = [
    {
      id: 1,
      name: "Комплект для новорожденного",
      price: 28,
      originalPrice: 35,
      description: "Мягкий комплект из натурального хлопка включает боди, штанишки и шапочку.",
      images: [
        "https://basket-12.wbbasket.ru/vol1814/part181449/181449412/images/big/1.webp",
        "https://basket-12.wbbasket.ru/vol1814/part181449/181449412/images/big/1.webp",
        "https://basket-12.wbbasket.ru/vol1814/part181449/181449412/images/big/1.webp"
      ],
      sizes: ["56", "62", "68"],
      colors: ["Бежевый", "Белый", "Розовый"],
      material: "100% органический хлопок",
      badge: "ХИТ",
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: "Пижама с принтом животных",
      price: 22,
      originalPrice: null,
      description: "Уютная пижама с милым принтом животных для комфортного сна.",
      images: [
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&h=600&fit=crop&crop=center"
      ],
      sizes: ["74", "80", "86", "92"],
      colors: ["Белый с принтом", "Серый с принтом", "Голубой с принтом"],
      material: "Хлопок интерлок премиум",
      badge: "НОВИНКА",
      rating: 4.6,
      reviews: 89
    },
    {
      id: 3,
      name: "Яркий спортивный костюм",
      price: 35,
      originalPrice: 42,
      description: "Спортивный костюм из качественного трикотажа для активного отдыха.",
      images: [
        "https://images.uzum.uz/cqt1cgesbq7g1s98qrig/original.jpg",
        "https://images.uzum.uz/cqt1cgesbq7g1s98qrig/original.jpg",
        "https://images.uzum.uz/cqt1cgesbq7g1s98qrig/original.jpg"
      ],
      sizes: ["92", "98", "104", "110"],
      colors: ["Синий", "Желтый", "Белый", "Зеленый"],
      material: "Хлопок-полиэстер (80/20)",
      badge: "ПОПУЛЯРНОЕ",
      rating: 4.9,
      reviews: 203
    },
    {
      id: 4,
      name: "Летний комплект",
      price: 24,
      originalPrice: null,
      description: "Легкий летний комплект: футболка и шортики для жаркой погоды.",
      images: [
        "https://basket-25.wbbasket.ru/vol4538/part453809/453809904/images/c516x688/1.webp",
        "https://basket-25.wbbasket.ru/vol4538/part453809/453809904/images/c516x688/1.webp",
        "https://basket-25.wbbasket.ru/vol4538/part453809/453809904/images/c516x688/1.webp"
      ],
      sizes: ["80", "86", "92", "98"],
      colors: ["Зеленый", "Салатовый", "Желтый"],
      material: "Легкий дышащий хлопок",
      badge: "ЛЕТО",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 5,
      name: "Романтичное платье с рюшами",
      price: 32,
      originalPrice: 38,
      description: "Нежное платье с рюшами и цветочным принтом для особых случаев.",
      images: [
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&h=600&fit=crop&crop=center"
      ],
      sizes: ["86", "92", "98", "104"],
      colors: ["Розовый", "Белый", "Лавандовый"],
      material: "Хлопок с эластаном (95/5)",
      badge: "ХИТ",
      rating: 4.9,
      reviews: 278
    },
    {
      id: 6,
      name: "Теплый комбинезон",
      price: 48,
      originalPrice: 55,
      description: "Утепленный комбинезон для прохладной погоды.",
      images: [
        "https://www.okaidi.com.uz/3597019-large_default/unisex-baby-warm-beige-lined-snowsuit.webp",
        "https://www.okaidi.com.uz/3597019-large_default/unisex-baby-warm-beige-lined-snowsuit.webp",
        "https://www.okaidi.com.uz/3597019-large_default/unisex-baby-warm-beige-lined-snowsuit.webp"
      ],
      sizes: ["68", "74", "80", "86"],
      colors: ["Синий", "Серый", "Черный"],
      material: "Утепленный полиэстер с мембраной",
      badge: "ЗИМА",
      rating: 4.8,
      reviews: 167
    },
    {
      id: 7,
      name: "Домашний костюм",
      price: 19,
      originalPrice: null,
      description: "Мягкий домашний костюмчик для максимального комфорта.",
      images: [
        "https://basket-17.wbbasket.ru/vol2652/part265259/265259983/images/c516x688/1.webp",
        "https://basket-17.wbbasket.ru/vol2652/part265259/265259983/images/c516x688/1.webp",
        "https://basket-17.wbbasket.ru/vol2652/part265259/265259983/images/c516x688/1.webp"
      ],
      sizes: ["74", "80", "86", "92"],
      colors: ["Желтый", "Коричневый", "Бежевый"],
      material: "Мягкий велюровый хлопок",
      badge: "КОМФОРТ",
      rating: 4.5,
      reviews: 92
    },
    {
      id: 8,
      name: "Праздничный наряд",
      price: 42,
      originalPrice: 48,
      description: "Элегантный праздничный костюм для торжественных мероприятий.",
      images: [
        "https://avatars.mds.yandex.net/get-marketpic/11797891/picb9eff29e12ca512241a7af5bc1fac422/orig",
        "https://avatars.mds.yandex.net/get-marketpic/11797891/picb9eff29e12ca512241a7af5bc1fac422/orig",
        "https://avatars.mds.yandex.net/get-marketpic/11797891/picb9eff29e12ca512241a7af5bc1fac422/orig"
      ],
      sizes: ["86", "92", "98", "104"],
      colors: ["Красный", "Белый", "Темно-синий"],
      material: "Премиум хлопок с шелком",
      badge: "ПРАЗДНИК",
      rating: 4.9,
      reviews: 145
    },
    {
      id: 9,
      name: "Зимний комбинезон",
      price: 52,
      originalPrice: 60,
      description: "Теплый комбинезон с флисовой подкладкой для зимних прогулок.",
      images: [
        "https://basket-02.wbbasket.ru/vol159/part15969/15969937/images/big/1.webp",
        "https://basket-02.wbbasket.ru/vol159/part15969/15969937/images/big/1.webp",
        "https://basket-02.wbbasket.ru/vol159/part15969/15969937/images/big/1.webp"
      ],
      sizes: ["68", "74", "80", "86"],
      colors: ["Темно-зеленый", "Серый", "Синий"],
      material: "Полиэстер с флисом",
      badge: "ЗИМА",
      rating: 4.7,
      reviews: 130
    },
    {
      id: 10,
      name: "Летний сарафан",
      price: 20,
      originalPrice: null,
      description: "Легкий сарафан с ярким принтом для летних дней.",
      images: [
        "https://alena-opt.ru/uploads/image/file/47340/main_%D0%A1%D0%A414-4358-2_1__1_.jpg",
        "https://alena-opt.ru/uploads/image/file/47340/main_%D0%A1%D0%A414-4358-2_1__1_.jpg",
        "https://alena-opt.ru/uploads/image/file/47340/main_%D0%A1%D0%A414-4358-2_1__1_.jpg"
      ],
      sizes: ["80", "86", "92", "98"],
      colors: ["Желтый", "Розовый", "Голубой"],
      material: "Хлопок 100%",
      badge: "ЛЕТО",
      rating: 4.6,
      reviews: 110
    },
    {
      id: 11,
      name: "Вязаный свитер",
      price: 30,
      originalPrice: 36,
      description: "Теплый вязаный свитер с узором для прохладных дней.",
      images: [
        "https://cdn-sh1.vigbo.com/shops/82511/products/18914427/images/3-405ba7b1c7a0bff9683fe8dabfae5a70.jpg",
        "https://cdn-sh1.vigbo.com/shops/82511/products/18914427/images/3-405ba7b1c7a0bff9683fe8dabfae5a70.jpg",
        "https://cdn-sh1.vigbo.com/shops/82511/products/18914427/images/3-405ba7b1c7a0bff9683fe8dabfae5a70.jpg"
      ],
      sizes: ["86", "92", "98", "104"],
      colors: ["Кремовый", "Серый", "Голубой"],
      material: "Шерсть с хлопком",
      badge: "ОСЕНЬ",
      rating: 4.8,
      reviews: 180
    },
    {
      id: 12,
      name: "Джинсовый комбинезон",
      price: 38,
      originalPrice: null,
      description: "Стильный джинсовый комбинезон для повседневной носки.",
      images: [
        "https://basket-11.wbbasket.ru/vol1637/part163757/163757622/images/big/1.webp",
        "https://basket-11.wbbasket.ru/vol1637/part163757/163757622/images/big/1.webp",
        "https://basket-11.wbbasket.ru/vol1637/part163757/163757622/images/big/1.webp"
      ],
      sizes: ["92", "98", "104", "110"],
      colors: ["Синий", "Темно-синий", "Серый"],
      material: "Джинсовая ткань с эластаном",
      badge: "ПОПУЛЯРНОЕ",
      rating: 4.7,
      reviews: 150
    }
  ];

  const formatPrice = (price) => `${price} €`;
 
  const toggleFavorite = (productId, e) => {
    e?.stopPropagation();
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setSelectedSize(product.sizes[0]);
    setSelectedColor(product.colors[0]);
    setSelectedImageIndex(0);
  };

  const handleBackClick = () => {
    setSelectedProduct(null);
    setSelectedSize('');
    setSelectedColor('');
    setSelectedImageIndex(0);
  };

  const getBadgeStyle = (badge) => {
    const styles = {
      "ХИТ": "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg",
      "НОВИНКА": "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg",
      "ПОПУЛЯРНОЕ": "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg",
      "ЛЕТО": "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-lg",
      "ЗИМА": "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg",
      "КОМФОРТ": "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg",
      "ПРАЗДНИК": "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg",
      "ОСЕНЬ": "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg",
      "СПОРТ": "bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg"
    };
    return styles[badge] || "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-lg";
  };

  const nextImage = () => {
    setSelectedImageIndex(prev => 
      prev === selectedProduct.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex(prev => 
      prev === 0 ? selectedProduct.images.length - 1 : prev - 1
    );
  };

  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={handleBackClick}
            className="flex items-center gap-3 mb-8 text-gray-600 hover:text-black transition-all group"
          >
            <div className="p-3 rounded-full bg-white shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
              <ArrowLeft size={20} />
            </div>
            <span className="font-semibold">Назад к каталогу</span>
          </button>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="relative aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                <img 
                  src={selectedProduct.images[selectedImageIndex]} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/600x600?text=Image+Not+Found'; }}
                />
                {selectedProduct.images.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-xl hover:bg-white transition-all hover:scale-110"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-xl hover:bg-white transition-all hover:scale-110"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {selectedProduct.images.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all ${
                        selectedImageIndex === index ? 'bg-white scale-125' : 'bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex gap-4 overflow-x-auto">
                {selectedProduct.images.map((image, index) => (
                  <div 
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-24 h-24 bg-white rounded-2xl overflow-hidden cursor-pointer border-3 transition-all ${
                      selectedImageIndex === index 
                        ? 'border-indigo-400 shadow-lg scale-105' 
                        : 'border-gray-200 hover:border-gray-300 shadow-md'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt=""
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/96x96?text=Image+Not+Found'; }}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-bold ${getBadgeStyle(selectedProduct.badge)}`}>
                    {selectedProduct.badge}
                  </span>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-gray-900">{selectedProduct.rating}</span>
                    <span className="text-gray-500">({selectedProduct.reviews})</span>
                  </div>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {selectedProduct.name}
                </h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl font-bold text-gray-900">
                    {formatPrice(selectedProduct.price)}
                  </div>
                  {selectedProduct.originalPrice && (
                    <>
                      <div className="text-2xl text-gray-500 line-through">
                        {formatPrice(selectedProduct.originalPrice)}
                      </div>
                      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        -{Math.round((1 - selectedProduct.price / selectedProduct.originalPrice) * 100)}%
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                {selectedProduct.description}
              </p>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Размер</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProduct.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 border-2 text-sm font-semibold rounded-xl transition-all ${
                        selectedSize === size 
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-lg scale-105' 
                          : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                      }`}
                    >
                      {size} см
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Цвет</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProduct.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-6 py-3 border-2 text-sm font-semibold rounded-xl transition-all ${
                        selectedColor === color 
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-lg scale-105' 
                          : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 space-y-4 border border-gray-200">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Материал</h3>
                  <p className="text-gray-600">{selectedProduct.material}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-green-600 font-semibold">
                    <Shield className="w-5 h-5" />
                    <span>Безопасно для детей</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold">
                    <Truck className="w-5 h-5" />
                    <span>Быстрая доставка</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="flex-1 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-4 px-6 hover:from-indigo-600 hover:to-indigo-700 transition-all font-semibold rounded-xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <ShoppingCart size={20} />
                  Добавить в корзину
                </button>
                <button 
                  onClick={(e) => toggleFavorite(selectedProduct.id, e)}
                  className={`p-4 rounded-xl border-2 transition-all shadow-lg hover:shadow-xl ${
                    favorites.has(selectedProduct.id)
                      ? 'border-red-400 bg-red-50 text-red-600' 
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <Heart 
                    size={20} 
                    className={favorites.has(selectedProduct.id) ? 'fill-current' : ''} 
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const renderProductCards = () => {
    const rows = [];
    for (let i = 0; i < products.length; i += 3) {
      const group = products.slice(i, i + 3);
      rows.push(
        <div key={i} className="grid grid-cols-12 gap-6 mb-8">
          {/* Первая карточка - широкая (занимает 6 колонок) */}
          {group[0] && (
            <div 
              className="col-span-12 lg:col-span-6 bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group border border-gray-200 flex flex-col transform hover:scale-[1.02]"
              onClick={() => handleProductClick(group[0])}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={group[0].images[0]} 
                  alt={group[0].name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/600x450?text=Image+Not+Found'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-5 left-5">
                  <span className={`px-4 py-2 rounded-full text-sm font-bold ${getBadgeStyle(group[0].badge)}`}>
                    {group[0].badge}
                  </span>
                </div>
                {group[0].originalPrice && (
                  <div className="absolute top-5 right-5">
                    <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold px-3 py-2 rounded-full shadow-lg">
                      -{Math.round((1 - group[0].price / group[0].originalPrice) * 100)}%
                    </span>
                  </div>
                )}
                <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button 
                    onClick={(e) => toggleFavorite(group[0].id, e)}
                    className={`p-3 rounded-full shadow-xl transition-all hover:scale-110 backdrop-blur-sm ${
                      favorites.has(group[0].id)
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/90 text-gray-600 hover:bg-white'
                    }`}
                  >
                    <Heart 
                      className={`w-5 h-5 ${favorites.has(group[0].id) ? 'fill-current' : ''}`} 
                    />
                  </button>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-bold text-gray-900 text-xl mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                  {group[0].name}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold">{group[0].rating}</span>
                  <span className="text-sm text-gray-500">({group[0].reviews})</span>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-gray-900">
                      {formatPrice(group[0].price)}
                    </span>
                    {group[0].originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(group[0].originalPrice)}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {group[0].sizes.length} размеров
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Две узкие карточки справа (по 3 колонки каждая) */}
          <div className="col-span-12 lg:col-span-6 grid grid-rows-2 gap-6">
            {group[1] && (
              <div 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer group border border-gray-200 flex flex-col transform hover:scale-[1.02]"
                onClick={() => handleProductClick(group[1])}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={group[1].images[0]} 
                    alt={group[1].name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getBadgeStyle(group[1].badge)}`}>
                      {group[1].badge}
                    </span>
                  </div>
                  {group[1].originalPrice && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                        -{Math.round((1 - group[1].price / group[1].originalPrice) * 100)}%
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button 
                      onClick={(e) => toggleFavorite(group[1].id, e)}
                      className={`p-2 rounded-full shadow-lg transition-all hover:scale-110 backdrop-blur-sm ${
                        favorites.has(group[1].id)
                          ? 'bg-red-500 text-white' 
                          : 'bg-white/90 text-gray-600 hover:bg-white'
                      }`}
                    >
                      <Heart 
                        className={`w-4 h-4 ${favorites.has(group[1].id) ? 'fill-current' : ''}`} 
                      />
                    </button>
                  </div>
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                    {group[1].name}
                  </h3>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-semibold">{group[1].rating}</span>
                    <span className="text-xs text-gray-500">({group[1].reviews})</span>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-900">
                        {formatPrice(group[1].price)}
                      </span>
                      {group[1].originalPrice && (
                        <span className="text-xs text-gray-500 line-through">
                          {formatPrice(group[1].originalPrice)}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {group[1].sizes.length}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {group[2] && (
              <div 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer group border border-gray-200 flex flex-col transform hover:scale-[1.02]"
                onClick={() => handleProductClick(group[2])}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={group[2].images[0]} 
                    alt={group[2].name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getBadgeStyle(group[2].badge)}`}>
                      {group[2].badge}
                    </span>
                  </div>
                  {group[2].originalPrice && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                        -{Math.round((1 - group[2].price / group[2].originalPrice) * 100)}%
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button 
                      onClick={(e) => toggleFavorite(group[2].id, e)}
                      className={`p-2 rounded-full shadow-lg transition-all hover:scale-110 backdrop-blur-sm ${
                        favorites.has(group[2].id)
                          ? 'bg-red-500 text-white' 
                          : 'bg-white/90 text-gray-600 hover:bg-white'
                      }`}
                    >
                      <Heart 
                        className={`w-4 h-4 ${favorites.has(group[2].id) ? 'fill-current' : ''}`} 
                      />
                    </button>
                  </div>
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                    {group[2].name}
                  </h3>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-semibold">{group[2].rating}</span>
                    <span className="text-xs text-gray-500">({group[2].reviews})</span>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-900">
                        {formatPrice(group[2].price)}
                      </span>
                      {group[2].originalPrice && (
                        <span className="text-xs text-gray-500 line-through">
                          {formatPrice(group[2].originalPrice)}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {group[2].sizes.length}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }
    return rows;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Готовые подборки
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Качественная детская одежда для ваших малышей с заботой о комфорте и стиле. 
            Каждая вещь создана с любовью и вниманием к деталям.
          </p>
        </div>
        <div className="space-y-8">
          {renderProductCards()}
        </div>
      </div>
    </div>
  );
};

export default BabyClothesGallery;