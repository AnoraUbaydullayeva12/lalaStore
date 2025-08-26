import React, { useState } from "react";

// Импорт изображений
import Img1 from "../../assets/HomeImg/Block3.1.png";
import Img2 from "../../assets/HomeImg/Block3.2.png";
import Img3 from "../../assets/HomeImg/Block3.3.png";
import Img4 from "../../assets/HomeImg/Block3.4.png";
import Img5 from "../../assets/HomeImg/Block3.1.png";
import Img6 from "../../assets/HomeImg/Block3.2.png";
import Img7 from "../../assets/HomeImg/Block3.3.png";
import Img8 from "../../assets/HomeImg/Block3.4.png";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8];

const BlockThree = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 5;

  const handleNext = () => {
    if (currentIndex + visibleCount < images.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleImages = images.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex items-center gap-4">
          {/* Кнопка назад */}
          <button
            onClick={handlePrev}
            className={`text-2xl px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 transition ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentIndex === 0}
          >
            <GrFormPrevious />
          </button>

          {/* Слайдер изображений */}
          <div className="flex gap-4 overflow-hidden w-full justify-center">
            {visibleImages.map((img, index) => (
              <div key={index} className="w-[250px] flex-shrink-0 text-center">
                <img
                  src={img}
                  alt={`Item ${index}`}
                  className="w-full h-auto rounded mb-2"
                />
                <p className="text-sm font-medium">Подборка №106</p>
              </div>
            ))}
          </div>

          {/* Кнопка вперёд */}
          <button
            onClick={handleNext}
            className={`text-2xl px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 transition ${
              currentIndex + visibleCount >= images.length
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={currentIndex + visibleCount >= images.length}
          >
            <MdOutlineNavigateNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlockThree;
