import React from "react";
import { Link } from "react-router-dom";
import { Package, History, User, Lock, FileText, Bell } from "lucide-react";

const HomePage = () => {
  const dashboardCards = [
    {
      path: "/current-orders",
      title: "Текущие заказы",
      icon: Package,
      image:
        "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      path: "/order-history",
      title: "История заказов",
      icon: History,
      image:
        "https://images.pexels.com/photos/3760089/pexels-photo-3760089.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      path: "/personal-data",
      title: "Личные данные",
      icon: User,
      image:
        "https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      path: "/change-password",
      title: "Сменить пароль",
      icon: Lock,
      image:
        "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      path: "/order-profile",
      title: "Профиль заказов",
      icon: FileText,
      image:
        "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      path: "/subscriptions",
      title: "Подписки",
      icon: Bell,
      image:
        "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Yuqori 2 ta card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {dashboardCards.slice(0, 2).map((card) => (
          <Link
            key={card.path}
            to={card.path}
            className="relative rounded-xl overflow-hidden shadow-md group h-56"
          >
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient overlay - chapdan oq, o‘ngdan shaffof */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent"></div>
            <div className="absolute inset-0 flex items-center px-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                {card.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {/* Pastki 4 ta card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {dashboardCards.slice(2).map((card) => (
          <Link
            key={card.path}
            to={card.path}
            className="relative rounded-xl overflow-hidden shadow-md group h-40"
          >
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent"></div>
            <div className="absolute inset-0 flex items-center px-4">
              <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
