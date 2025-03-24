import React from 'react';
import { motion } from 'framer-motion';
import a from './images/9.jpg';
import b from './images/10.jpg';
import c from './images/11.jpg';
import d from './images/12.jpg';
import e from './images/13.jpg';
import f from './images/14.jpg';
import g from './images/15.jpg';
import h from './images/16.jpg';

const Jewellery = ({ darkMode, addToCart, isLoggedIn }) => {
  const jewelleryItems = [
    { id: 1, name: 'Gold Necklace', price: '$199.99', image: a },
    { id: 2, name: 'Diamond Ring', price: '$499.99', image: b },
    { id: 3, name: 'Silver Bracelet', price: '$99.99', image: c },
    { id: 4, name: 'Pearl Earrings', price: '$149.99', image: d },
    { id: 5, name: 'Platinum Chain', price: '$299.99', image: e },
    { id: 6, name: 'Ruby Pendant', price: '$399.99', image: f },
    { id: 7, name: 'Emerald Bracelet', price: '$249.99', image: g },
    { id: 8, name: 'Sapphire Ring', price: '$599.99', image: h },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Jewellery Section</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {jewelleryItems.map((item, index) => (
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

export default Jewellery;