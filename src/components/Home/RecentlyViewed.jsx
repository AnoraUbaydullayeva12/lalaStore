import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const RecentlyViewed = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Лучшие Продукты</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {products.map(product => (
          <ProductCard
            key={product.id}
            {...product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;