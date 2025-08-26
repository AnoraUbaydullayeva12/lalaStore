import React, { useState } from 'react';
import Cart from './components/Cart';
import RecentlyViewed from './components/RecentlyViewed';

function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Боди без рукавов "ФРУК-ТИК", розовый',
      color: 'Голубой',
      size: '74',
      price: 349,
      originalPrice: 349,
      quantity: 1,
      image: 'https://images.pexels.com/photos/7876447/pexels-photo-7876447.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      isSelected: true,
    },
    {
      id: 2,
      name: 'Боди без рукавов "ФРУК-ТИК", розовый',
      color: 'Голубой',
      size: '74',
      price: 349,
      originalPrice: 349,
      quantity: 1,
      image: 'https://images.pexels.com/photos/7876447/pexels-photo-7876447.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      isSelected: false,
    },
    {
      id: 3,
      name: 'Боди без рукавов "ФРУК-ТИК", розовый',
      color: 'Голубой',
      size: '74',
      price: 349,
      originalPrice: 349,
      quantity: 1,
      image: 'https://images.pexels.com/photos/7876447/pexels-photo-7876447.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      isSelected: true,
    },
  ]);

  const recentlyViewedProducts = [
    {
      id: 4,
      name: 'Боди без рукавов "ФРУК-ТИК", розовый',
      price: 349,
      image: 'https://images.pexels.com/photos/7876447/pexels-photo-7876447.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      badge: 'В наличии',
      badgeColor: 'green',
    },
    {
      id: 5,
      name: 'Боди без рукавов "ФРУК-ТИК", розовый',
      price: 349,
      image: 'https://images.pexels.com/photos/7876447/pexels-photo-7876447.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      badge: 'В наличии',
      badgeColor: 'green',
    },
    {
      id: 6,
      name: 'Боди без рукавов "ФРУК-ТИК", розовый',
      price: 349,
      image: 'https://images.pexels.com/photos/7876447/pexels-photo-7876447.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      badge: 'В наличии',
      badgeColor: 'green',
    },
    {
      id: 7,
      name: 'Боди без рукавов "ФРУК-ТИК", розовый',
      price: 349,
      image: 'https://images.pexels.com/photos/7876447/pexels-photo-7876447.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      badge: 'Хит продаж',
      badgeColor: 'red',
    },
    {
      id: 8,
      name: 'Боди без рукавов "ФРУК-ТИК", розовый',
      price: 349,
      image: 'https://images.pexels.com/photos/7876447/pexels-photo-7876447.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      badge: 'В наличии',
      badgeColor: 'blue',
    },
    {
      id: 9,
      name: 'Боди без рукавов "ФРУК-ТИК", розовый',
      price: 349,
      image: 'https://images.pexels.com/photos/7876447/pexels-photo-7876447.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      badge: 'В наличии',
      badgeColor: 'green',
    },
  ];

  const handleAddToCart = (productId) => {
    const product = recentlyViewedProducts.find(p => p.id === productId);
    if (product) {
      const newCartItem = {
        id: Date.now(),
        name: product.name,
        color: 'Розовый',
        size: '74',
        price: product.price,
        originalPrice: product.price,
        quantity: 1,
        image: product.image,
        isSelected: true,
      };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Cart items={cartItems} onItemsChange={setCartItems} />
      <RecentlyViewed 
        products={recentlyViewedProducts} 
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default App;