import React, { useState } from 'react';
import axios from '../lib/axios';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/user/login', { username, password });
      
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
      <h2 className="text-2xl mb-4">Log In</h2>
      <div className="mb-4">
        <label className="block mb-2">Username</label>
        <input
          type="email"
          value={username}
          placeholder="Enter Username"
          onChange={(event) => setUsername(event.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded">
        Log In
      </button>
    </form>
  );
};

export default LogIn;
