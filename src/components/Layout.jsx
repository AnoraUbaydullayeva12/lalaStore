import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Package, History, User, Lock, FileText, Bell } from 'lucide-react';

const Layout = ({ children }) => {
  const location = useLocation();

  const navigationItems = [
    { path: '/', icon: Home, title: 'Главная', label: 'Asosiy sahifa' },
    { path: '/current-orders', icon: Package, title: 'Текущие заказы', label: 'Joriy buyurtmalar' },
    { path: '/order-history', icon: History, title: 'История заказов', label: 'Buyurtmalar tarixi' },
    { path: '/personal-data', icon: User, title: 'Личные данные', label: 'Shaxsiy ma\'lumotlar' },
    { path: '/change-password', icon: Lock, title: 'Сменить пароль', label: 'Parolni o\'zgartirish' },
    { path: '/order-profile', icon: FileText, title: 'Профиль заказов', label: 'Buyurtma profili' },
    { path: '/subscriptions', icon: Bell, title: 'Подписки', label: 'Obunalar' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Личный кабинет</h1>
          <nav className="text-sm text-gray-600 mt-2">
            <Link to="/" className="hover:text-gray-900">Главная</Link>
            {location.pathname !== '/' && (
              <>
                <span className="mx-2">·</span>
                <span>{navigationItems.find(item => item.path === location.pathname)?.title || 'Страница'}</span>
              </>
            )}
          </nav>
        </div>
      </div>

      {/* Navigation Menu */}
      {location.pathname !== '/' && (
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex space-x-8 overflow-x-auto py-4">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                      isActive
                        ? 'bg-yellow-100 text-yellow-800 font-medium'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="text-sm">{item.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;