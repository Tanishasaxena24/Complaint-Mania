
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginAdmin = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3000/api/admin/login";
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email:credentials.email,password:credentials.password})
    });
    
    const data = await response.json();
    console.log(data);
    console.log("res",response);
    if (response.ok) { // Check if response is successful
      localStorage.setItem('manager', data.manager);
      alert(data.message);
      navigate('/admindashboard');
    } else {
      alert(data.error);
    }
    } catch (error) {
      alert("error",error)
    }
    
  };

  const onHandleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value.trim() });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-red-300">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-pink-950">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={onHandleChange}
              className="w-full px-3 py-2 border border-gray-300 text-pink-900 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-900"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={onHandleChange}
              className="w-full px-3 py-2 border border-gray-300 text-pink-900 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-900"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-950 text-white font-medium py-2 px-4 rounded-md hover:bg-pink-900 focus:outline-none focus:ring-2 focus:ring-pink-900 focus:ring-offset-2"
          >
            Login
          </button>
          <p className="mt-5 text-center">
            Not an registered admin?
            <Link to="/signupadmin" className="text-pink-950 font-semibold p-2">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
