import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const defaultFilters = {
  color: "",
  size: "",
  status: "",
  priceFrom: "",
  priceTo: ""
};

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState(defaultFilters);

  // Массивы уникальных значений для фильтров
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setColors([...new Set(data.map((p) => p.color))]);
        setStatuses([...new Set(data.map((p) => p.status))]);
        const allSizes = data.flatMap((p) => p.size);
        setSizes([...new Set(allSizes)].sort((a, b) => a - b));
      });
  }, []);

  const resetFilters = () => setFilters(defaultFilters);

  const filtered = products.filter((p) => {
    return (
      (filters.color ? p.color === filters.color : true) &&
      (filters.size ? p.size.includes(Number(filters.size)) : true) &&
      (filters.status ? p.status === filters.status : true) &&
      (filters.priceFrom ? p.price >= Number(filters.priceFrom) : true) &&
      (filters.priceTo ? p.price <= Number(filters.priceTo) : true)
    );
  });

  const savetoCart = (product, e) => {    
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    cart.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cart));
    toast.success("Товар добавлен в корзину");
  }

  return (
    <div className="p-6 text-black">
      {/* Заголовок */}
      <div className="flex justify-center mb-8">
        <div className="bg-yellow-400 px-10 py-4 rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold text-white tracking-wide">Акции</h1>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Фильтры */}
        <div className="w-64 bg-white rounded-2xl shadow-lg p-5 self-start">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Фильтры</h2>

          {/* Цвет */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-semibold text-gray-700">Цвет</label>
            <select
              value={filters.color}
              className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              onChange={(e) => setFilters({ ...filters, color: e.target.value })}
            >
              <option value="">Все</option>
              {colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          {/* Размер */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-semibold text-gray-700">Размер</label>
            <select
              value={filters.size}
              className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              onChange={(e) => setFilters({ ...filters, size: e.target.value })}
            >
              <option value="">Все</option>
              {sizes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Статус */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-semibold text-gray-700">Статус</label>
            <select
              value={filters.status}
              className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            >
              <option value="">Все</option>
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          {/* Цена */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-semibold text-gray-700">Цена от</label>
            <input
              type="number"
              value={filters.priceFrom}
              className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              onChange={(e) => setFilters({ ...filters, priceFrom: e.target.value })}
              placeholder="мин"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-semibold text-gray-700">Цена до</label>
            <input
              type="number"
              value={filters.priceTo}
              className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              onChange={(e) => setFilters({ ...filters, priceTo: e.target.value })}
              placeholder="макс"
            />
          </div>

          {/* Кнопки */}
          <div className="flex gap-3">
            <button
              onClick={resetFilters}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 rounded-lg transition"
              type="button"
            >
              Сбросить фильтры
            </button>

            <button
              onClick={() => {}}
              className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-lg transition"
              type="button"
            >
              Применить
            </button>
          </div>
        </div>

        {/* Товары */}
        <div className="grid grid-cols-3 gap-4 flex-1">
          {filtered.map((p) => {
            const discounts = ["-20%", "-30%", "-50%"];
            const discount = discounts[p.id % discounts.length];

            let statusColor = "bg-gray-200 text-gray-800";
            if (p.status === "В наличии") statusColor = "bg-green-100 text-green-700";
            if (p.status === "На складе") statusColor = "bg-blue-100 text-blue-700";
            if (p.status === "Нет в наличии") statusColor = "bg-red-100 text-red-700";

            return (
              <div key={p.id} className="relative bg-white rounded-xl shadow p-3 flex flex-col">
                <span className="absolute top-3 left-3 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded">
                  {discount}
                </span>

                <img src={p.image} alt={p.title} className="w-full h-72 object-cover rounded" />

                <h2 className="text-lg font-bold mt-2 text-gray-900">{p.title}</h2>
                <p className="text-gray-800 font-semibold">{p.price} ₽</p>
                <p className="text-sm text-gray-700">Размеры: {p.size.join(", ")}</p>

                <span className={`inline-block mt-2 px-2 py-1 rounded text-sm font-medium ${statusColor}`}>
                  {p.status}
                </span>

                <button onClick={() => savetoCart(p)} className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-lg transition">
                  Купить в один клик
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
