import React, { useState } from 'react';
import { Bell, Mail, User, Settings, Check, X, Plus } from 'lucide-react';

const SubscriptionsPage = () => {
  const [formData, setFormData] = useState({
    name: 'Иванов Иван Иванович',
    email: 'ivanov@gmail.com',
    formats: {
      pdf: true,
      html: true
    },
    categories: {
      news: true,
      promotions: false,
      updates: true,
      newsletters: false
    },
    agreeToProcessing: true
  });

  const [subscriptions, setSubscriptions] = useState([
    {
      id: 1,
      email: 'ivanov@gmail.com',
      status: 'active',
      categories: ['Новости магазина', 'Обновления'],
      formats: ['PDF', 'HTML'],
      dateCreated: '15.03.2022',
      lastEmail: '01.04.2022'
    },
    {
      id: 2,
      email: 'work@company.com',
      status: 'pending',
      categories: ['Новости магазина'],
      formats: ['PDF'],
      dateCreated: '20.03.2022',
      lastEmail: null
    }
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormatChange = (format) => {
    setFormData(prev => ({
      ...prev,
      formats: {
        ...prev.formats,
        [format]: !prev.formats[format]
      }
    }));
  };

  const handleCategoryChange = (category) => {
    setFormData(prev => ({
      ...prev,
      categories: {
        ...prev.categories,
        [category]: !prev.categories[category]
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика подписки
    console.log('Subscription data:', formData);
  };

  const handleUnsubscribe = (subscriptionId) => {
    setSubscriptions(prev => prev.filter(sub => sub.id !== subscriptionId));
  };

  const SubscriptionCard = ({ subscription }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <Mail className="text-blue-500" size={20} />
          <div>
            <h4 className="font-semibold text-gray-900">{subscription.email}</h4>
            <p className="text-sm text-gray-600">Создана: {subscription.dateCreated}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          subscription.status === 'active' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {subscription.status === 'active' ? 'Активна' : 'Ожидает подтверждения'}
        </span>
      </div>

      <div className="space-y-3 mb-4">
        <div>
          <p className="text-sm text-gray-600 mb-1">Рубрики:</p>
          <div className="flex flex-wrap gap-2">
            {subscription.categories.map((category, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                {category}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">Форматы:</p>
          <div className="flex flex-wrap gap-2">
            {subscription.formats.map((format, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                {format}
              </span>
            ))}
          </div>
        </div>
        {subscription.lastEmail && (
          <div>
            <p className="text-sm text-gray-600">
              Последнее письмо: {subscription.lastEmail}
            </p>
          </div>
        )}
      </div>

      <div className="flex gap-3">
        <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors">
          Редактировать
        </button>
        <button 
          onClick={() => handleUnsubscribe(subscription.id)}
          className="flex-1 bg-red-100 hover:bg-red-200 text-red-700 py-2 px-4 rounded-lg font-medium transition-colors"
        >
          Отписаться
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Управление подписками</h2>
        <p className="text-gray-600">Настройте email уведомления и подписки</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* New Subscription Form */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3 mb-6">
            <Plus className="text-yellow-500" size={24} />
            <h3 className="text-lg font-semibold text-gray-900">Новая подписка</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User size={16} className="inline mr-2" />
                Ваше имя*
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-gray-50"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail size={16} className="inline mr-2" />
                Почта*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                required
              />
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">
                <Settings size={16} className="inline mr-2" />
                Предпочтительный формат:
              </p>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    checked={formData.formats.pdf}
                    onChange={() => handleFormatChange('pdf')}
                    className="mr-3 rounded w-4 h-4 text-yellow-400 focus:ring-yellow-400" 
                  />
                  <span className="text-sm">PDF</span>
                </label>
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    checked={formData.formats.html}
                    onChange={() => handleFormatChange('html')}
                    className="mr-3 rounded w-4 h-4 text-yellow-400 focus:ring-yellow-400" 
                  />
                  <span className="text-sm">HTML</span>
                </label>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">
                <Bell size={16} className="inline mr-2" />
                Рубрики подписки*:
              </p>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    checked={formData.categories.news}
                    onChange={() => handleCategoryChange('news')}
                    className="mr-3 rounded w-4 h-4 text-yellow-400 focus:ring-yellow-400" 
                  />
                  <span className="text-sm">Новости магазина</span>
                </label>
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    checked={formData.categories.promotions}
                    onChange={() => handleCategoryChange('promotions')}
                    className="mr-3 rounded w-4 h-4 text-yellow-400 focus:ring-yellow-400" 
                  />
                  <span className="text-sm">Акции и скидки</span>
                </label>
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    checked={formData.categories.updates}
                    onChange={() => handleCategoryChange('updates')}
                    className="mr-3 rounded w-4 h-4 text-yellow-400 focus:ring-yellow-400" 
                  />
                  <span className="text-sm">Обновления продуктов</span>
                </label>
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    checked={formData.categories.newsletters}
                    onChange={() => handleCategoryChange('newsletters')}
                    className="mr-3 rounded w-4 h-4 text-yellow-400 focus:ring-yellow-400" 
                  />
                  <span className="text-sm">Еженедельная рассылка</span>
                </label>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                После добавления или изменения адреса подписки вам будет выслан код подтверждения. 
                Подписка будет неактивной до ввода кода подтверждения.
              </p>
            </div>

            <div>
              <label className="flex items-start">
                <input 
                  type="checkbox" 
                  checked={formData.agreeToProcessing}
                  onChange={(e) => setFormData(prev => ({...prev, agreeToProcessing: e.target.checked}))}
                  className="mr-3 mt-1 rounded w-4 h-4 text-yellow-400 focus:ring-yellow-400" 
                />
                <span className="text-xs text-gray-600">
                  Я согласен на обработку персональных данных
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={!formData.agreeToProcessing}
              className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-300 disabled:cursor-not-allowed text-gray-900 py-3 rounded-lg font-medium transition-colors"
            >
              ПОДПИСАТЬСЯ
            </button>
          </form>
        </div>

        {/* Current Subscriptions */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <Bell className="text-blue-500" size={24} />
            <h3 className="text-lg font-semibold text-gray-900">Текущие подписки</h3>
          </div>

          <div className="space-y-4">
            {subscriptions.map((subscription) => (
              <SubscriptionCard key={subscription.id} subscription={subscription} />
            ))}
          </div>

          {subscriptions.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
              <Bell className="mx-auto text-gray-300 mb-4" size={64} />
              <p className="text-gray-500 text-lg">У вас нет активных подписок</p>
              <p className="text-gray-400 text-sm mt-2">Создайте новую подписку, чтобы получать уведомления</p>
            </div>
          )}
        </div>
      </div>

      {/* Subscription Statistics */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">
            {subscriptions.filter(s => s.status === 'active').length}
          </div>
          <p className="text-gray-600">Активных подписок</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
          <div className="text-3xl font-bold text-yellow-600 mb-2">
            {subscriptions.filter(s => s.status === 'pending').length}
          </div>
          <p className="text-gray-600">Ожидают подтверждения</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {subscriptions.length}
          </div>
          <p className="text-gray-600">Всего подписок</p>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h4 className="font-semibold text-blue-900 mb-3">Справка по подпискам:</h4>
        <ul className="text-sm text-blue-800 space-y-2">
          <li>• После создания подписки на указанный email будет отправлено письмо с кодом подтверждения</li>
          <li>• Подписка станет активной только после подтверждения email адреса</li>
          <li>• Вы можете изменить настройки подписки в любое время</li>
          <li>• Для отписки используйте ссылку в письме или кнопку "Отписаться" в личном кабинете</li>
        </ul>
      </div>
    </div>
  );
};

export default SubscriptionsPage;