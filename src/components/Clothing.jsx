import React from 'react';
import { motion } from 'framer-motion';
import mensTshirt from './images/1.jpg';
import womensDress from './images/2.jpg';
import jeans from './images/3.jpg';
import jacket from './images/4.jpg';
import sweater from './images/5.jpg';
import skirt from './images/6.jpg';
import hoodie from './images/7.jpg';
import blazer from './images/8.jpg';

const Clothing = ({ darkMode, addToCart, isLoggedIn }) => {
  const clothingItems = [
    { id: 1, name: 'Men\'s T-Shirt', price: '$29.99', image: mensTshirt },
    { id: 2, name: 'Women\'s Dress', price: '$59.99', image: womensDress },
    { id: 3, name: 'Jeans', price: '$49.99', image: jeans },
    { id: 4, name: 'Jacket', price: '$89.99', image: jacket },
    { id: 5, name: 'Sweater', price: '$39.99', image: sweater },
    { id: 6, name: 'Skirt', price: '$34.99', image: skirt },
    { id: 7, name: 'Hoodie', price: '$49.99', image: hoodie },
    { id: 8, name: 'Blazer', price: '$99.99', image: blazer },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Clothing Section</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {clothingItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`border p-4 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} hover:shadow-xl transition-shadow duration-300`}
          >
            <img src={item.image} alt={item.name} className="w-full h-32 object-cover mb-2 rounded-lg" />
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.price}</p>
            <button onClick={() => addToCart(item)} className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Clothing;