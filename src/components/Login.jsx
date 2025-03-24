// Login.jsx
import React, { useState } from 'react';

const Login = ({ handleLogin, darkMode }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === loginData.email && user.password === loginData.password) {
      handleLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className={`flex justify-center items-center min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <form onSubmit={handleSubmit} className={`p-8 rounded-lg shadow-xl ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Login</button>
      </form>
    </div>
  );
};

export default Login;