import React from 'react';
import { Minus, Plus, X } from 'lucide-react';

const CartItem = ({
  id,
  title,
  color,
  size,
  price,
  originalPrice,
  quantity,
  image_url,
  isSelected,
  onQuantityChange,
  onRemove,
  onToggleSelect,
}) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onToggleSelect(id)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
        />
      </div>

      <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={image_url}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-gray-900 truncate">{title}</h3>
        <div className="flex items-center space-x-4 mt-1">
          <span className="text-xs text-gray-500">{color}</span>
          {size && <span className="text-xs text-gray-500">Размер: {size}</span>}
        </div>
      </div>

      <div className="text-right">
        <div className="text-sm font-semibold text-gray-900">{price}₽</div>
        {originalPrice && ( 
          <div className="text-xs text-gray-400 line-through">{originalPrice}₽</div>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-xs text-gray-500">Количество</span>
        <div className="flex items-center border border-gray-300 rounded">
          <button
            onClick={() => onQuantityChange(id, Math.max(1, quantity - 1))}
            className="p-1 hover:bg-gray-100 transition-colors"
          >
            <Minus className="w-3 h-3" />
          </button>
          <span className="px-3 py-1 text-sm">{quantity}</span>
          <button
            onClick={() => onQuantityChange(id, quantity + 1)}
            className="p-1 hover:bg-gray-100 transition-colors"
          >
            <Plus className="w-3 h-3" />
          </button>
        </div>
      </div>

      <div className="text-right">
        <div className="text-sm font-semibold text-gray-900">{price * quantity}₽</div>
        {originalPrice && (
          <div className="text-xs text-gray-400">{originalPrice * quantity}₽</div>
        )}
      </div>

      <button
        onClick={() => onRemove(id)}
        className="p-1 text-gray-400 hover:text-red-500 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default CartItem;
