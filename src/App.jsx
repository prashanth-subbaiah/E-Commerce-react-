import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Jewellery from './components/Jewellery';
import Clothing from './components/Clothing';
import Cart from './components/Cart';

const App = () => {
  const [currentPage, setCurrentPage] = useState('jewellery');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCart([]); // Clear cart on logout
  };

  const addToCart = (item) => {
    if (isLoggedIn) {
      setCart([...cart, item]);
    } else {
      alert('Please log in to add items to the cart.');
    }
  };

  return (
    <div className={darkMode ? 'dark bg-gray-900 text-white min-h-screen' : 'bg-white text-gray-900 min-h-screen'}>
      <Navbar 
        toggleDarkMode={toggleDarkMode} 
        darkMode={darkMode} 
        handlePageChange={handlePageChange} 
        isLoggedIn={isLoggedIn} 
        handleLogout={handleLogout}
        cart={cart}
      />
      <div className="p-4">
        {currentPage === 'register' && <Register handleLogin={handleLogin} darkMode={darkMode} />}
        {currentPage === 'login' && <Login handleLogin={handleLogin} darkMode={darkMode} />}
        {currentPage === 'jewellery' && <Jewellery darkMode={darkMode} addToCart={addToCart} isLoggedIn={isLoggedIn} />}
        {currentPage === 'clothing' && <Clothing darkMode={darkMode} addToCart={addToCart} isLoggedIn={isLoggedIn} />}
        {currentPage === 'cart' && <Cart cart={cart} darkMode={darkMode} />}
      </div>
    </div>
  );
};

export default App;