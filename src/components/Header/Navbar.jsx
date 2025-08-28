import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="bg-[#F4F4F4]">
      <nav className="flex justify-around items-center py-5">
        <span className="flex items-center gap-5  text-black">
          <FaLocationDot />
          г. Москва, Электролитный проезд 3Б стр 6
        </span>
        <span className="flex items-center gap-5 text-black">
          <FaPhoneAlt />
          +7 916 361-30-00
        </span>
        <ul className="flex items-center gap-3 text-gray-400 ">
          <li className="hover:text-black transition">Каталог</li>
         <Link to='/home'> <li className="hover:text-black transition">Главная</li></Link>
        <li className="hover:text-black transition">Как купить</li>  
          <li className="hover:text-black transition">Доставка</li>
       <Link to='/about'>  <li className="hover:text-black transition">О компании</li></Link>
          <li className="hover:text-black transition">Мы в instagram</li>
          <li className="hover:text-black transition">Акции</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
