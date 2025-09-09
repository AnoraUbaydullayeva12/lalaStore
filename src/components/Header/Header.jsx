import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { FaHeart } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import {Link} from "react-router-dom"
const SearchComponent = ({ query, setQuery, handleSearch }) => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="relative w-120">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full  p-3 pl-10 pr-16 border text-black font-bold border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-yellow-400 "
          placeholder="Начните писать"
        />
        <button
          onClick={handleSearch}
          className="absolute right-0 top-0 bottom-0 px-6 py-3 bg-yellow-400 text-white font-semibold rounded-r-3xl focus:outline-none"
        >
          НАЙТИ
        </button>
      </div>
    </div>
  );
};

const Header = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", query);
    // You can implement search logic here
  };

  return (
    <div className="flex justify-around items-center py-4   ">
      <div className="flex items-center gap-4">
        <img src={Logo} alt="Logo" className="w-34 h-auto" />
      </div>
      <div className="">
        <SearchComponent
          query={query}
          setQuery={setQuery}
          handleSearch={handleSearch}
        />
      </div>
      <div className="flex items-center gap-10">
        <span className="text-sm text-gray-500   gap-1">
          <FaHeart size={35} color="orange" />
          Избранное
        </span>
        <Link to="/basket">
          <span className="text-sm  text-gray-500 gap-1">
            <LuShoppingBag size={35} color=""/>
            Корзина
          </span>
        </Link>
        <span className="text-sm text-gray-500  gap-1">
          <FaRegUserCircle size={35} />
          Войти
        </span>
      </div>
    </div>
  );
};

export default Header;
