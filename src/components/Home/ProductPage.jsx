import React, { useState } from "react";
import odej from "../assets/odejds.png";
import ode from "../assets/ode.png";
import od from "../assets/od.png";

// Товар
const product = {
  id: 101,
  name: "Боди без рукавов «ФРУК-ТИК», розовый",
  price: 349,
  code: "3027948530",
  sizes: [74, 75, 76],
  status: "На складе",
  statusColor: "bg-blue-400",
  images: [odej, ode, od],
  description:
    "Боди-майка из мягчайшего интерлока. Прекрасный вариант для жаркого лета. Кнопки расположены на плечиках и между ножками, что позволяет быстрее переодеть малыша или сменить подгузник.",
  composition: "100% хлопок",
};

// Рекомендованные товары
const recommended = [
  { id: 1, name: "Боди «ФРУК-ТИК», розовый", price: 349, status: "В наличии", statusColors: "bg-red-500", img: ode },
  { id: 2, name: "Боди «ФРУК-ТИК», голубой", price: 349, status: "В наличии", statusColors: "bg-green-400", img: ode },
  { id: 3, name: "Боди «ФРУК-ТИК», розовый", price: 349, status: "В наличии", statusColors: "bg-green-400", img: od },
  { id: 4, name: "Боди «ФРУК-ТИК», розовый", price: 349, status: "Нет в наличии", statusColors: "bg-green-400", img: odej },
  { id: 5, name: "Боди «ФРУК-ТИК», белый", price: 349, status: "На складе", statusColors: "bg-green-400", img: ode },
  { id: 6, name: "Боди «ФРУК-ТИК», розовый", price: 349, status: "В наличии", statusColors: "bg-green-400", img: od },
];

// ✅ Карточка товара (маленькая)
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center relative w-[180px] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <span
        className={`absolute top-2 left-2 text-white text-xs px-2 py-1 rounded-md ${product.statusColors}`}
      >
        {product.status}
      </span>

      <img
        src={product.img}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md hover:scale-105 transition-transform duration-300"
      />
      <p className="mt-3 text-sm text-center">{product.name}</p>
      <p className="mt-2 font-bold">{product.price} som/шт</p>
      <button className="mt-3 bg-yellow-400 text-black px-4 py-2 rounded-xl hover:bg-yellow-500 active:scale-95 transition">
        Купить в 1 клик
      </button>
    </div>
  );
};

// Секция для "Рекомендуем" и "Ранее вы смотрели"
const Section = ({ title, items }) => (
  <div className="mt-12">
    <h2 className="text-2xl font-bold mb-6">{title}</h2>
    <div className="flex flex-wrap gap-6">
      {items.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  </div>
);

// ✅ Страница товара
const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [cartMessage, setCartMessage] = useState("");
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");

  const addToCart = () => {
    setCartMessage("✅ Добавлено в корзину!");
    setTimeout(() => setCartMessage(""), 2000);
  };

  const addReview = () => {
    if (newReview.trim()) {
      setReviews([...reviews, newReview]);
      setNewReview("");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Верхний блок товара */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Фото */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Фото ${i + 1}`}
                className="w-24 h-28 object-cover rounded-lg border hover:scale-105 transition-transform"
              />
            ))}
          </div>
          <img
            src={product.images[1]}
            alt={product.name}
            className="w-full max-w-sm rounded-lg shadow-md"
          />
        </div>

        {/* Инфо */}
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-500 text-sm mt-2">Код товара: {product.code}</p>
          <p className="text-3xl font-bold mt-4">{product.price} som/шт</p>

          {/* Размеры */}
          <div className="mt-3 flex gap-2">
            {product.sizes.map((size) => (
              <span
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`border px-3 py-1 rounded-lg cursor-pointer transition ${
                  selectedSize === size
                    ? "bg-yellow-400 text-black font-bold"
                    : "hover:bg-yellow-100"
                }`}
              >
                {size}
              </span>
            ))}
          </div>

          {/* Кнопка */}
          <button
            onClick={addToCart}
            className="mt-5 bg-yellow-400 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 active:scale-95 transition"
          >
            В корзину
          </button>

          {cartMessage && (
            <p className="mt-3 text-green-600 font-medium">{cartMessage}</p>
          )}

          {/* Доставка */}
          <p className="text-gray-600 text-sm mt-4">
            Доставка в Краснодар — бесплатно. Самовывоз — бесплатно. Доставка
            завтра — 370 ₽.
          </p>
        </div>
      </div>
my
      {/* Описание и отзывы */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl font-bold">Описание</h2>
          <p className="mt-2 text-gray-700">{product.description}</p>
          <p className="mt-2 text-gray-700">Состав: {product.composition}</p>
        </div>

        <div>
          <h2 className="text-xl font-bold">Отзывы</h2>
          {reviews.length === 0 ? (
            <p className="mt-2 text-gray-500">У данного товара нет отзывов.</p>
          ) : (
            <ul className="mt-2 space-y-2">
              {reviews.map((r, i) => (
                <li key={i} className="bg-gray-100 p-2 rounded-md">
                  {r}
                </li>
              ))}
            </ul>
          )}
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Напишите отзыв..."
            className="w-full mt-3 p-2 border rounded-md"
          />
          <button
            onClick={addReview}
            className="mt-3 bg-yellow-400 px-5 py-2 rounded-xl hover:bg-yellow-500 active:scale-95 transition"
          >
            Оставить отзыв
          </button>
        </div>
      </div>

      {/* Секции */}
      <Section title="Рекомендуем" items={recommended} />
      <Section title="Ранее вы смотрели" items={recommended} />
    </div>
  );
};

// ✅ Экспортим именно страницу!
export default ProductPage;
