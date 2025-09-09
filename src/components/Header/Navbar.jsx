import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="bg-[#F4F4F4]">
      <nav className="flex justify-around items-center py-5">
        <a href="https://yandex.uz/maps/213/moscow/house/elektrolitny_proyezd_3bs6/Z04YcAZjSUIFQFtvfXp2dHRkYA==/?ll=37.613072%2C55.675875&z=16" target="_blank">
          <span className="flex items-center gap-5  text-black">
            <FaLocationDot />
            г. Москва, Электролитный проезд 3Б стр 6
          </span>
        </a>
        <a href="tel:+79163613000">
          <span className="flex items-center gap-5 text-black">
            <FaPhoneAlt />
            +7 916 361-30-00
          </span>
        </a>

        <ul className="flex items-center gap-3 text-gray-400 ">
        <Link to='/catalog'>  <li className="hover:text-black transition">Каталог</li></Link>
          <Link to='/home'> <li className="hover:text-black transition">Главная</li></Link>
          <li className="hover:text-black transition">Как купить</li>
          <li className="hover:text-black transition">Доставка</li>
          <Link to='/about'>  <li className="hover:text-black transition">О компании</li></Link>
          <a href="https://www.instagram.com/accounts/login/" target="_blank">  <li className="hover:text-black transition">Мы в instagram</li></a>
          
          <li className="hover:text-black transition">Мы в instagram</li>
          <Link to='/promotion'> <li className="hover:text-black transition">Акции</li></Link>
          <Link to='/personal'>       <li className="hover:text-black transition">Личный кабинет</li></Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
