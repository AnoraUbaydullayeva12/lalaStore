import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import BgImg from "../../assets/HomeImg/bgImg.png";
import BgImgTwo from "../../assets/HomeImg/bgImgTwo.png";
import BgImgThree from "../../assets/HomeImg/Block2.2.png";
import BgImgFour from "../../assets/HomeImg/Block3.4.png";

const BlockOne = () => {
  return (
    <div className="w-full mt-5 mb-15">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-around gap-8">
            <div
              className="flex-1 bg-no-repeat bg-cover bg-center p-8 rounded-lg text-white"
              style={{
                backgroundImage: `url(${BgImg})`,
                minHeight: "400px",
                maxWidth: "75%",
              }}
            >
              <h1 className="text-black text-4xl font-bold mb-4">
                Большая зимняя <br /> распродажа от LeoKid
              </h1>
              <p className="text-lg text-[#33394F9E] w-110">
                Конверт Leokid Classic подходит для использования в любых
                колясках, автокреслах и санках. Для прогулок осенью, зимой,
                весной и даже прохладным летом.
              </p>
            </div>

            <div
              className="flex-1 bg-no-repeat bg-cover bg-center p-8 rounded-lg flex items-center justify-center"
              style={{
                backgroundImage: `url(${BgImgTwo})`,
                minHeight: "400px",
                maxWidth: "25%",
              }}
            >
              <button className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition">
                Подборка №106
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* You can duplicate or generate more SwiperSlides below */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-around gap-8">
            <div
              className="flex-1 bg-no-repeat bg-cover bg-center p-8 rounded-lg text-white"
              style={{
                backgroundImage: `url(${BgImgThree})`,
                minHeight: "400px",
                maxWidth: "75%",
              }}
            >
              <h1 className="text-white text-4xl font-bold mb-4">
                Весенняя коллекция <br /> LeoKid уже здесь
              </h1>
              <p className="text-lg text-[#33394F9E] w-110">
                Новая коллекция уже доступна! Одежда и аксессуары для малышей,
                созданные с заботой.
              </p>
            </div>

            <div
              className="flex-1 bg-no-repeat bg-cover bg-center p-8 rounded-lg flex items-center justify-center"
              style={{
                backgroundImage: `url(${BgImgFour})`,
                minHeight: "400px",
                maxWidth: "25%",
              }}
            >
              <button className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition">
                Подборка №107
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BlockOne;
