import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignupUser = () => {
  
  const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
      name:"",
      email: "",
      password: "",
      cpassword:""
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if(credentials.password!==credentials.cpassword){
        // toast.error('Pasword not matched')
        alert("password not matched")
        return
      }
      const url = "http://localhost:3000/api/users";
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password})
      });
      const data = await response.json();
      console.log(data);
      if (data.client) {
        localStorage.setItem('client', data.client);
        // toast.success(data.message)
        alert(data.message)
        navigate('/');
      }else{
        // toast.error(data.error)
        alert(data.error)
      }
    };
    
    const onHandleChange = (e) => {
      // console.log(credentials);
      setCredentials({ ...credentials, [e.target.name]: e.target.value.trim() });
    };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-red-300">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-pink-950">User Signup</h2>
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
              // id="email"
              name="email"
              // value={formData.email}
              onChange={onHandleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-pink-900 focus:ring-pink-900"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              // id="password"
              name="password"
              // value={formData.password}
              onChange={onHandleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-pink-900 focus:ring-pink-900"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              // id="confirmPassword"
              name="cpassword"
              // value={formData.confirmPassword}
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

export default SignupUser;
