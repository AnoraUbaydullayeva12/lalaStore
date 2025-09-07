import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    color: "",
    size: "",
    status: "",
    priceFrom: "",
    priceTo: ""
  });

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filtered = products.filter((p) => {
    return (
      (filters.color ? p.color === filters.color : true) &&
      (filters.size ? p.size.includes(Number(filters.size)) : true) &&
      (filters.status ? p.status === filters.status : true) &&
      (filters.priceFrom ? p.price >= Number(filters.priceFrom) : true) &&
      (filters.priceTo ? p.price <= Number(filters.priceTo) : true)
    );
  });

  return (
    <div className="flex gap-6 p-6">
      {/* Фильтры */}
      <div className="w-64 border p-4 rounded-xl shadow">
        <h2 className="font-bold mb-2">Фильтры</h2>

        <div className="mb-3">
          <label className="block mb-1">Цвет</label>
          <select
            className="border rounded p-1 w-full"
            onChange={(e) => setFilters({ ...filters, color: e.target.value })}
          >
            <option value="">Все</option>
            <option value="белый">Белый</option>
            <option value="голубой">Голубой</option>
            <option value="розовый">Розовый</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="block mb-1">Размер</label>
          <select
            className="border rounded p-1 w-full"
            onChange={(e) => setFilters({ ...filters, size: e.target.value })}
          >
            <option value="">Все</option>
            <option value="56">56</option>
            <option value="62">62</option>
            <option value="68">68</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="block mb-1">Статус</label>
          <select
            className="border rounded p-1 w-full"
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          >
            <option value="">Все</option>
            <option value="В наличии">Скидка 50%</option>
            <option value="Нет в наличии">Скидка 35%</option>
            <option value="На складе">Скидка 20%</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="block mb-1">Цена от</label>
          <input
            type="number"
            className="border rounded p-1 w-full"
            onChange={(e) =>
              setFilters({ ...filters, priceFrom: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label className="block mb-1">Цена до</label>
          <input
            type="number"
            className="border rounded p-1 w-full"
            onChange={(e) =>
              setFilters({ ...filters, priceTo: e.target.value })
            }
          />
        </div>
      </div>

      {/* Товары */}
      <div className="grid grid-cols-3 gap-4 flex-1">
        {filtered.map((p) => (
          <div key={p.id} className="border rounded-xl shadow p-3">
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-lg font-bold mt-2">{p.title}</h2>
            <p className="text-gray-600">{p.price} ₽</p>
            <p className="text-sm">Размеры: {p.size.join(", ")}</p>
            <span
              className={`inline-block mt-2 px-2 py-1 rounded ${
                p.status === "В наличии"
                  ? "bg-green-200 text-green-700"
                  : p.status === "Нет в наличии"
                  ? "bg-red-200 text-red-700"
                  : "bg-blue-200 text-blue-700"
              }`}
            >
              {p.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
