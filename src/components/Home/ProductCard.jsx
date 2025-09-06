import React from 'react';

const ProductCard = ({
  id,
  title,
  price,
  image_url,
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
    <div className="rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative bg-gray-100">
        {badge && (
          <span
            className={`absolute top-2 left-2 px-2 py-1 rounded-md text-xs font-medium ${badgeColors[badgeColor]}`}
          >
            {badge}
          </span>
        )}
        <img
          src={image_url}
          alt={title}
          className="w-full h-60 object-cover"
        />
      </div>

      <div className="p-3 flex flex-col items-center">
        <h3 className="text-sm font-medium text-gray-900 text-center mb-1 line-clamp-2">
          {title}
        </h3>
        <span className="text-lg font-bold text-gray-900 mb-2">
          {price} ₽/шт
        </span>
        <button
          onClick={() => onAddToCart(id)}
          className="w-full px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium text-sm rounded-lg transition-colors"
        >
          КУПИТЬ В 1 КЛИК
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
