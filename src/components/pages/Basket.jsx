import React, { useEffect, useState } from 'react';
import Cart from '../../components/Home/Cart';
import ProductCard from '../../components/Home/ProductCard';
import { toast } from 'react-toastify';

function Basket() {
  const [cartItems, setCartItems] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  useEffect(() => {
    const fetchRecentlyViewed = async () => {
      try {
        const response = await fetch('http://localhost:3000/products?_limit=10');
        const data = await response.json();
        setRecentlyViewed(data);
      } catch (error) {
        console.error('Error fetching recently viewed products:', error);
      }
    };
    fetchRecentlyViewed();
  }, []);

  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (id) => {
    const product = recentlyViewed.find((item) => item.id === id);
    if (product) {
      setCartItems((prev) => [...prev, { ...product, quantity: 1, isSelected: false }]);
      toast.success(`Товар "${product.title}" добавлен в корзину 🛒`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Cart items={cartItems} onItemsChange={setCartItems} />
      <div className="max-w-[90%] mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-6">Недавно просмотренные</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {recentlyViewed.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image_url={product.image_url}
              badge={product.availability}
              badgeColor={
                product.availability === 'В наличии'
                  ? 'green'
                  : product.availability === 'Нет в наличии'
                  ? 'red'
                  : 'blue'
              }
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Basket;
