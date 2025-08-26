import React from "react";
import { MdNavigateNext } from "react-icons/md";

const BlockFive = () => {
  return (
    <div className="bg-[#F4F4F4] py-10">
      <div className="text-center"> 
        <h1 className="text-black text-4xl font-bold">Подпишитесь на нашу рассылку</h1>
        <p className="text-gray-400 my-5">Присоединяйтесь к программе LFLF STORE, чтобы получать <br /> постоянные скидки и персональные предложения</p>
        <button className=" mt-3 py-2 px-6 bg-yellow-400 text-white font-semibold rounded-full hover:bg-yellow-500 transition">
       <p className="flex items-center"> оформить подписку <MdNavigateNext  size={24}/></p>  
{" "}
        </button>
      </div>
    </div>
  );
};

export default BlockFive;
