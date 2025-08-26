import React from 'react';
import ProductCard from './ProductCard';

const RecentlyViewed = ({ products, onAddToCart }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Ранее вы смотрели</h2>
      
      <div className="grid relative grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
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