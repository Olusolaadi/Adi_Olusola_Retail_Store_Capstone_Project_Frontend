/*
import React from 'react';
import LogIn from '../components/LogIn';

const LogInPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <LogIn />
    </div>
  );
};

export default LogInPage;
*/


/*
import React, { useState } from 'react';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
      <h2 className="text-2xl mb-4">Log In</h2>
      <div className="mb-4">
        <label className="block mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
        Log In
      </button>
    </form>
  );
};

export default LogIn;
*/
