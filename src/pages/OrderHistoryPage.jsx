import React, { useState } from 'react';
import { Package, Calendar, CreditCard, Truck, Search, Filter } from 'lucide-react';

const OrderHistoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const orderHistory = [
    {
      id: '#4844',
      date: '31.01.2022 16:44:41',
      status: 'Выполнен',
      amount: '2 728,75₽',
      completedDate: '31.01.2022',
      items: 2,
      statusColor: 'bg-green-100 text-green-800',
      products: ['Товар 1', 'Товар 2']
    },
    {
      id: '#4843',
      date: '28.01.2022 14:22:15',
      status: 'Выполнен',
      amount: '1 450,00₽',
      completedDate: '29.01.2022',
      items: 1,
      statusColor: 'bg-green-100 text-green-800',
      products: ['Товар 3']
    },
    {
      id: '#4842',
      date: '25.01.2022 12:30:20',
      status: 'Выполнен',
      amount: '3 200,50₽',
      completedDate: '26.01.2022',
      items: 3,
      statusColor: 'bg-green-100 text-green-800',
      products: ['Товар 4', 'Товар 5', 'Товар 6']
    },
    {
      id: '#4841',
      date: '20.01.2022 09:15:30',
      status: 'Отменен',
      amount: '890,00₽',
      completedDate: '20.01.2022',
      items: 1,
      statusColor: 'bg-red-100 text-red-800',
      products: ['Товар 7']
    }
  ];

  const filteredOrders = orderHistory.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.products.some(product => product.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = filterStatus === 'all' || order.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const OrderHistoryCard = ({ order }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <Package className="text-gray-400" size={20} />
          <div>
            <h3 className="font-semibold text-lg text-gray-900">Заказ {order.id}</h3>
            <p className="text-sm text-gray-600 flex items-center mt-1">
              <Calendar size={14} className="mr-1" />
              {order.date}
            </p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${order.statusColor}`}>
          {order.status}
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="flex items-center space-x-2">
          <CreditCard className="text-gray-400" size={16} />
          <div>
            <p className="text-xs text-gray-500">Сумма</p>
            <p className="font-semibold">{order.amount}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Package className="text-gray-400" size={16} />
          <div>
            <p className="text-xs text-gray-500">Товаров</p>
            <p className="font-semibold">{order.items}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Truck className="text-gray-400" size={16} />
          <div>
            <p className="text-xs text-gray-500">Выполнен</p>
            <p className="font-semibold">{order.completedDate}</p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-xs text-gray-500 mb-2">Товары:</p>
        <div className="flex flex-wrap gap-2">
          {order.products.map((product, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
              {product}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex gap-3">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors flex-1 md:flex-none">
          ПОДРОБНЕЕ О ЗАКАЗЕ
        </button>
        <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex-1 md:flex-none">
          ПОВТОРИТЬ ЗАКАЗ
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">История заказов</h2>
        <p className="text-gray-600">Полная история всех ваших заказов</p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Поиск по номеру заказа или товару..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-white"
            >
              <option value="all">Все статусы</option>
              <option value="Выполнен">Выполнен</option>
              <option value="Отменен">Отменен</option>
            </select>
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <OrderHistoryCard key={order.id} order={order} />
          ))
        ) : (
          <div className="text-center py-12">
            <Package className="mx-auto text-gray-300 mb-4" size={64} />
            <p className="text-gray-500 text-lg">Заказы не найдены</p>
            <p className="text-gray-400 text-sm mt-2">Попробуйте изменить параметры поиска</p>
          </div>
        )}
      </div>

      {/* Statistics */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">
            {orderHistory.filter(o => o.status === 'Выполнен').length}
          </div>
          <p className="text-gray-600">Выполненных заказов</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {orderHistory.reduce((sum, order) => sum + parseFloat(order.amount.replace(/[^\d,]/g, '').replace(',', '.')), 0).toLocaleString('ru-RU')}₽
          </div>
          <p className="text-gray-600">Общая сумма</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">
            {orderHistory.reduce((sum, order) => sum + order.items, 0)}
          </div>
          <p className="text-gray-600">Всего товаров</p>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryPage;