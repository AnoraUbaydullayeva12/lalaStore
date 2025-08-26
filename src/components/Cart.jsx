import React from 'react';
import { Trash2 } from 'lucide-react';
import CartItem from './CartItem';

const Cart = ({ items, onItemsChange }) => {
  const handleQuantityChange = (id, quantity) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    onItemsChange(updatedItems);
  };

  const handleRemove = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    onItemsChange(updatedItems);
  };

  const handleToggleSelect = (id) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, isSelected: !item.isSelected } : item
    );
    onItemsChange(updatedItems);
  };

  const handleClearAll = () => {
    onItemsChange([]);
  };

  const selectedItems = items.filter(item => item.isSelected);
  const totalCount = selectedItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const originalTotalPrice = selectedItems.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
  const discount = originalTotalPrice - totalPrice;

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Корзина</h1>
        <button
          onClick={handleClearAll}
          className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          <span className="text-sm">Удалить все</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => (
            <CartItem
              key={item.id}
              {...item}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemove}
              onToggleSelect={handleToggleSelect}
            />
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Итого:</h2>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Общее кол-во товаров:</span>
                <span>{totalCount}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-sm text-green-600">
                  <span>Вместо продажи:</span>
                  <span>-{discount}₽</span>
                </div>
              )}
            </div>

            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">К оплате:</span>
                <span className="text-2xl font-bold text-gray-900">{totalPrice}₽</span>
              </div>
              {discount > 0 && (
                <div className="text-sm text-green-600 text-right">
                  Экономия {discount}₽
                </div>
              )}
            </div>

            <div className="space-y-3">
              <button
                disabled={selectedItems.length === 0}
                className="w-full py-3 px-4 bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-300 disabled:cursor-not-allowed text-gray-900 font-semibold rounded-lg transition-colors"
              >
                Оформить заказ
              </button>
              <button
                disabled={selectedItems.length === 0}
                className="w-full py-3 px-4 border border-gray-300 hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-700 font-medium rounded-lg transition-colors"
              >
                Быстрый заказ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;