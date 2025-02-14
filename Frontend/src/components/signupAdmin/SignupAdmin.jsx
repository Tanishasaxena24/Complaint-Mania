
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupAdmin = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.cpassword) {
      alert("Passwords do not match");
      return;
    }
    const url = "http://localhost:3000/api/admin";
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password
      })
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) { // Check if response is successful
      localStorage.setItem('manager', data.manager);
      alert(data.message);
      navigate('/admindashboard');
    } else {
      alert(data.error);
    }
  };

  const onHandleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value.trim() });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-red-300">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-pink-950">Admin Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
            <input
              type="text"
              name="name"
              onChange={onHandleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-pink-900 focus:ring-pink-900"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              onChange={onHandleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-pink-900 focus:ring-pink-900"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              onChange={onHandleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-pink-900 focus:ring-pink-900"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              name="cpassword"
              onChange={onHandleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-pink-900 focus:ring-pink-900"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-950 text-white font-medium py-2 px-4 rounded-md hover:bg-pink-900 focus:outline-none focus:ring-2 focus:ring-pink-900 focus:ring-offset-2"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupAdmin;


