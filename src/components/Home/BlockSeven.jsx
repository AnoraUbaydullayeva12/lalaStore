import React, { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

// Images
import Img1 from "../../assets/HomeImg/Block7.1.png";
import Img2 from "../../assets/HomeImg/Block7.2.png";
import Img3 from "../../assets/HomeImg/Block7.3.png";
import Img4 from "../../assets/HomeImg/Block7.4.png";
import Img5 from "../../assets/HomeImg/Block7.5.png";
import Img6 from "../../assets/HomeImg/Block7.6.png";

// Products data
const products = [
  { img: Img1, title: "Боди без рукавов 'ФРУКТИК', розовый", price: "349 ₴", status: "В наличии" },
  { img: Img2, title: "Боди без рукавов 'ФРУКТИК', розовый", price: "349 ₴", status: "В наличии" },
  { img: Img3, title: "Боди без рукавов 'ФРУКТИК', розовый", price: "349 ₴", status: "В наличии" },
  { img: Img4, title: "Боди без рукавов 'ФРУКТИК', розовый", price: "349 ₴", status: "Нет в наличии" },
  { img: Img5, title: "Боди без рукавов 'ФРУКТИК', розовый", price: "349 ₴", status: "На складе" },
  { img: Img6, title: "Боди без рукавов 'ФРУКТИК', розовый", price: "349 ₴", status: "В наличии" },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "В наличии":
      return "bg-green-300 text-green-900";
    case "Нет в наличии":
      return "bg-red-300 text-red-900";
    case "На складе":
      return "bg-blue-300 text-blue-900";
    default:
      return "bg-gray-300 text-gray-700";
  }
};

const BlockSeven = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 5;

  const handleNext = () => {
    if (currentIndex + visibleCount < products.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className="py-10 bg-white">
      <h2 className="px-[13%] font-bold text-4xl py-10 text-black">Ранее вы смотрели</h2>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex items-center gap-4">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`text-2xl px-3 py-2 bg-gray-400 rounded hover:bg-gray-300 transition ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <GrFormPrevious />
          </button>

          {/* Products */}
          <div className="flex gap-4 overflow-hidden w-full justify-center">
            {visibleProducts.map((product, index) => (
              <div
                key={index}
                className="w-[220px] flex-shrink-0 border rounded p-3 bg-white shadow-md text-center"
              >
                <div className={`text-sm px-2 py-1 mb-2 rounded-full inline-block ${getStatusStyle(product.status)}`}>
                  {product.status}
                </div>
                <img src={product.img} alt={product.title} className="w-full h-auto rounded mb-3" />
                <p className="text-sm text-gray-700 mb-1">{product.title}</p>
                <p className="font-semibold text-black mb-3">{product.price}</p>
                <button className="bg-yellow-400 text-white px-3 py-2 text-sm rounded hover:bg-yellow-500 transition">
                  Купить в 1 клик
                </button>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentIndex + visibleCount >= products.length}
            className={`text-2xl px-3 py-2 bg-gray-400 rounded hover:bg-gray-300 transition ${
              currentIndex + visibleCount >= products.length
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            <MdOutlineNavigateNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlockSeven;
