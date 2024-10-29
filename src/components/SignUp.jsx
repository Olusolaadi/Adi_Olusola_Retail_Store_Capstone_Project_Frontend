import React, { useState } from "react";
import axios from "../lib/axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/user/signup", {
        name,
        email,
        username,
        password,
      });
      // Handle successful signup (e.g., redirect to login)
    } catch (error) {
      console.error("Unable to sign up:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md w-96"
    >
      <h3 className="text-3xl mb-4">Sign Up</h3>

      <div className="mb-4">
        <label className="block mb-2">Name</label>
        <input
          type="name"
          value={name}
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input
          type="email"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Username</label>
        <input
          type="text"
          value={username}
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Password</label>
        <input
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-3 rounded"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
