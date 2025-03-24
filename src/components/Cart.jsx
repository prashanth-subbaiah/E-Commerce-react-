import React from 'react';

const Cart = ({ cart, darkMode }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cart.map((item) => (
            <div key={item.id} className={`border p-4 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <img src={item.image} alt={item.name} className="w-full h-32 object-cover mb-2 rounded-lg" />
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;