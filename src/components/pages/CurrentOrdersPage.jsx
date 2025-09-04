import React, { useState } from 'react';
import { Package, Calendar, CreditCard, Truck } from 'lucide-react';

const CurrentOrdersPage = () => {
  const [activeTab, setActiveTab] = useState('current');
  
  const currentOrders = [
    {
      id: '#4844',
      date: '31.01.2022 16:44:41',
      status: 'Оплачен, формируется к отправке',
      amount: '2 728,75₽',
      completedDate: '31.01.2022',
      items: 2,
      statusColor: 'bg-yellow-100 text-yellow-800'
    },
    {
      id: '#4845',
      date: '28.01.2022 14:22:15',
      status: 'В обработке',
      amount: '1 450,00₽',
      completedDate: '29.01.2022',
      items: 1,
      statusColor: 'bg-blue-100 text-blue-800'
    }
  ];

  const shippedOrders = [
    {
      id: '#4843',
      date: '25.01.2022 12:30:20',
      status: 'Отправлен',
      amount: '3 200,50₽',
      completedDate: '26.01.2022',
      items: 3,
      statusColor: 'bg-green-100 text-green-800'
    }
  ];

  const cancelledOrders = [
    {
      id: '#4842',
      date: '20.01.2022 09:15:30',
      status: 'Отменен',
      amount: '890,00₽',
      completedDate: '20.01.2022',
      items: 1,
      statusColor: 'bg-red-100 text-red-800'
    }
  ];

  const OrderCard = ({ order }) => (
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
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
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
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Управление заказами</h2>
        <p className="text-gray-600">Просматривайте и управляйте своими заказами</p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('current')}
            className={`px-6 py-3 rounded-md transition-colors font-medium ${
              activeTab === 'current' 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Текущие заказы
          </button>
          <button
            onClick={() => setActiveTab('shipped')}
            className={`px-6 py-3 rounded-md transition-colors font-medium ${
              activeTab === 'shipped' 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Отправленные
          </button>
          <button
            onClick={() => setActiveTab('cancelled')}
            className={`px-6 py-3 rounded-md transition-colors font-medium ${
              activeTab === 'cancelled' 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Отмененные заказы
          </button>
        </div>
      </div>

      {/* Orders Content */}
      <div className="space-y-6">
        {activeTab === 'current' && (
          <div>
            <div className="mb-6">
              <h3 className="font-semibold text-lg text-gray-800 mb-4">
                Заказы в статусе "Оплачен, формируется к отправке"
              </h3>
              <div className="space-y-4">
                {currentOrders.map((order) => (
                  <OrderCard key={order.id} order={order} />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'shipped' && (
          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-4">
              Отправленные заказы
            </h3>
            <div className="space-y-4">
              {shippedOrders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'cancelled' && (
          <div>
            {cancelledOrders.length > 0 ? (
              <>
                <h3 className="font-semibold text-lg text-gray-800 mb-4">
                  Отмененные заказы
                </h3>
                <div className="space-y-4">
                  {cancelledOrders.map((order) => (
                    <OrderCard key={order.id} order={order} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <Package className="mx-auto text-gray-300 mb-4" size={64} />
                <p className="text-gray-500 text-lg">Отмененных заказов нет</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrentOrdersPage;