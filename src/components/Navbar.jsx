import React from 'react';
import { FaSun, FaMoon, FaUser, FaSignInAlt, FaSignOutAlt, FaShoppingCart, FaGem, FaTshirt } from 'react-icons/fa';
import logo from "./images/logo.jpg";
const Navbar = ({ toggleDarkMode, darkMode, handlePageChange, isLoggedIn, handleLogout, cart }) => {
  return (
    <nav className={`p-4 flex justify-between items-center ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-12 w-30" />
        <div className={`logo text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}></div>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded hover:bg-opacity-30 transition duration-300 flex items-center space-x-2 ${darkMode ? 'bg-black bg-opacity-20 text-white' : 'bg-gray-200 text-gray-900'}`}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        {!isLoggedIn && (
          <>
            <button
              onClick={() => handlePageChange('register')}
              className={`p-2 rounded hover:bg-opacity-30 transition duration-300 flex items-center space-x-2 ${darkMode ? 'bg-black bg-opacity-20 text-white' : 'bg-gray-200 text-gray-900'}`}
            >
              <FaUser /> <span>Register</span>
            </button>
            <button
              onClick={() => handlePageChange('login')}
              className={`p-2 rounded hover:bg-opacity-30 transition duration-300 flex items-center space-x-2 ${darkMode ? 'bg-black bg-opacity-20 text-white' : 'bg-gray-200 text-gray-900'}`}
            >
              <FaSignInAlt /> <span>Login</span>
            </button>
          </>
        )}
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className={`p-2 rounded hover:bg-opacity-30 transition duration-300 flex items-center space-x-2 ${darkMode ? 'bg-black bg-opacity-20 text-white' : 'bg-gray-200 text-gray-900'}`}
          >
            <FaSignOutAlt /> <span>Logout</span>
          </button>
        )}
        <button
          onClick={() => handlePageChange('jewellery')}
          className={`p-2 rounded hover:bg-opacity-30 transition duration-300 flex items-center space-x-2 ${darkMode ? 'bg-black bg-opacity-20 text-white' : 'bg-gray-200 text-gray-900'}`}
        >
          <FaGem /> <span>Jewellery</span>
        </button>
        <button
          onClick={() => handlePageChange('clothing')}
          className={`p-2 rounded hover:bg-opacity-30 transition duration-300 flex items-center space-x-2 ${darkMode ? 'bg-black bg-opacity-20 text-white' : 'bg-gray-200 text-gray-900'}`}
        >
          <FaTshirt /> <span>Clothing</span>
        </button>
        <button
          onClick={() => handlePageChange('cart')}
          className={`p-2 rounded hover:bg-opacity-30 transition duration-300 flex items-center space-x-2 ${darkMode ? 'bg-black bg-opacity-20 text-white' : 'bg-gray-200 text-gray-900'}`}
        >
          <FaShoppingCart /> <span>Cart ({cart.length})</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;