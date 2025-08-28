import React from 'react';
import { Link } from 'react-router-dom';
import { Package, History, User, Lock, FileText, Bell } from 'lucide-react';

const HomePage = () => {
  const dashboardCards = [
    {
      path: '/current-orders',
      title: 'Текущие заказы',
      icon: Package,
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Просмотр и управление текущими заказами'
    },
    {
      path: '/order-history',
      title: 'История заказов',
      icon: History,
      image: 'https://images.pexels.com/photos/3760089/pexels-photo-3760089.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Полная история ваших заказов'
    },
    {
      path: '/personal-data',
      title: 'Личные данные',
      icon: User,
      image: 'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Управление личной информацией'
    },
    {
      path: '/change-password',
      title: 'Сменить пароль',
      icon: Lock,
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Изменение пароля для безопасности'
    },
    {
      path: '/order-profile',
      title: 'Профиль заказов',
      icon: FileText,
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Управление профилями пользователей'
    },
    {
      path: '/subscriptions',
      title: 'Подписки',
      icon: Bell,
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Настройка email уведомлений'
    }
  ];

  return (
    <div className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dashboardCards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.path}
              to={card.path}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden transform hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                <div className="absolute bottom-6 left-6">
                  <Icon className="text-white mb-3 drop-shadow-lg" size={36} />
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300 drop-shadow-lg">
                    {card.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;