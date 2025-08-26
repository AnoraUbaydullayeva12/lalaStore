import React from 'react';

const ProductCard = ({
  id,
  name,
  price,
  image,
  badge,
  badgeColor = 'green',
  onAddToCart,
}) => {
  const badgeColors = {
    green: 'bg-green-500 text-white',
    red: 'bg-red-500 text-white',
    blue: 'bg-blue-500 text-white',
    yellow: 'bg-yellow-400 text-gray-900',
  };

  return (
    <div className="bg-white relative rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      {badge && (
        <div className={`absolute top-2 left-2 z-10 px-2 py-1 rounded-full text-xs font-medium ${badgeColors[badgeColor]}`}>
          {badge}
        </div>
      )}
      
      <div className="relative aspect-square bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
          {name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">{price}$</span>
        </div>
        <button
          onClick={() => onAddToCart(id)}
          className="w-full mt-3 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium text-sm rounded-lg transition-colors"
        >
          Купить в 1 клик
        </button>
      </div>
    </div>
  );
};

export default ProductCard;