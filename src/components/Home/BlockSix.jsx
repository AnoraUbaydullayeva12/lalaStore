import React from 'react'
import { CiClock2 } from "react-icons/ci";
import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineDiscount } from "react-icons/md";

const BlockSix = () => {
  return (
    <div className="">
      <div className='flex justify-center items-center py-10'>
        <div className="text-center">
          <h1 className="text-4xl text-black font-bold">О компании</h1>
          <p className="text-gray-400 w-195 text-center my-10">LalaStore - магазин качественной и модной одежды и товаров для новорожденных и малышей до года.
            У нас вы подберете стильный комплект на выписку и базовый гардероб на первый год вашего ребенка.
            <br />
            <br />
            Качество товаров на высоте, так как мы работаем только с проверенными поставщиками. Все изделия имеют сертификаты качества.
            <br />
            <br />
            Нам доверяют, и к нам возвращаются!
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center px-[10%]">
        <div className="flex items-center flex-col">
          <div className="bg-[#F7D05E] py-2 w-17 flex justify-center items-center rounded-full">
            <CiClock2 size={50} />
          </div>
          <h3 className="text-black font-bold">Быстрая доставка</h3>
          <p className="w-50 text-center text-gray-400 text-sm">Бережно доставляем товары
            по России за 24 часа</p>

        </div>
        <div className="flex items-center flex-col mb-10">
          <div className="bg-[#F7D05E] flex justify-center items-center py-1 w-15 rounded-full">
            <IoMdStarOutline size={50} />
          </div>
          <h3 className="text-black font-bold">Гарантия качества</h3>
          <p className=" text-gray-400 text-sm text-center w-50">Соответствуем требованиям и стандартам качества</p>
        </div>

        <div className="flex items-center flex-col mb-10">
          <div className="bg-[#F7D05E] flex justify-center items-center py-2 w-15 rounded-full">
            <MdOutlineDiscount
              size={50} />
          </div>
          <h3 className="text-black font-bold">Доступные цены</h3>
          <p className=" text-gray-400 text-sm text-center w-50">Работаем напрямую с ведущими производителями</p>
        </div>
      </div>
    </div>
  )
}

export default BlockSix
