// import React, { useState,useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const UserComplaint = () => {
  
//   const navigate = useNavigate();

//   useEffect(() => {
//     // localStorage.clear('token')
//     if(!localStorage.getItem('client')){
//       navigate('/')
//       return alert("Please login as a user")
//     }
//     //eslint-disable-next-line
//   }, [])

  
//   const [credentials, setCredentials] = useState({
//     name: '',
//     email: '',
//     department: '',
//     subject: '',
//     description: ''
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if(!localStorage.getItem("client")){
//       return alert("Please Login first")
//     }
   
//     const url = "http://localhost:3000/api/complaint";
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//         'client':localStorage.getItem("client")
//       },
//       body: JSON.stringify({name:credentials.name,email:credentials.email,department:credentials.department,subject:credentials.subject,description:credentials.description})
//     });
//     const data = await response.json();
//     console.log(data);
//     if(data.error){
//       alert(data.error)
//     }
//     alert(data.message);
//   };
  
//   const onHandleChange = (e) => {
//     // console.log(credentials);
//     setCredentials({ ...credentials, [e.target.name]: e.target.value.trim() });
//   };



//   return (
//     <div className="min-h-screen flex flex-col">
//       <div className=' flex-grow flex items-center justify-center bg-gradient-to-r from-red-300  bg-cover p-4'>
//         <div className='bg-pink-950 bg-opacity-70 shadow-2xl text-white p-5 border-2 text-[20px] w-full max-w-lg md:max-w-2xl lg:max-w-4xl'>
//           <h2 className="p-4 rounded-lg font-bold bg-pink-950 text-white text-center">FILE COMPLAINT</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-white font-medium mb-2" htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 // id="name"
//                 name="name"
//                 placeholder='Enter your name'
//                 // value={formData.name}
//                 onChange={onHandleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-pink-950 focus:ring-pink-900"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-white font-medium mb-2" htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 // id="email"
//                 name="email"
//                 placeholder='Enter your email id'
//                 // value={formData.email}
//                 onChange={onHandleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-pink-950 focus:ring-pink-900"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-white font-medium mb-2" htmlFor="department">Department</label>
//               <input
//                 type='text'
//                 // id="department"
//                 placeholder='Enter Department'
//                 name="department"
//                 // value={formData.department}
//                 onChange={onHandleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-pink-950 focus:ring-pink-900"
//                 required />
            
//             </div>
//             <div className="mb-4">
//               <label className="block text-white font-medium mb-2" htmlFor="subject">Subject of concern</label>
//               <input
//                 type="text"
//                 // id="subject"
//                 name="subject"
//                 placeholder='Write the crux/subject'
//                 // value={formData.subject}
//                 onChange={onHandleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-pink-950 focus:ring-pink-900"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-white font-medium mb-2" htmlFor="description">Description</label>
//               <textarea
//                 // id="description"
//                 name="description"
//                 placeholder='Elaborate your complaint here'
//                 // value={formData.description}
//                 onChange={onHandleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-pink-950 focus:ring-pink-900"
//                 rows="4"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-pink-950 text-white font-medium py-2 px-4 rounded-md hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-900 focus:ring-offset-2"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserComplaint;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserComplaint = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('client')) {
      navigate('/');
      return alert("Please login as a user");
    }
  }, []);

  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    department: '',
    subject: '',
    description: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!localStorage.getItem("client")) {
      return alert("Please Login first");
    }

    const url = "http://localhost:3000/api/complaint";
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'client': localStorage.getItem("client")
      },
      body: JSON.stringify(credentials)
    });
    const data = await response.json();
    if (data.error) {
      alert(data.error);
    } else {
      alert(data.message);
    }
  };

  const onHandleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value.trim() });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className='flex-grow flex items-center justify-center bg-gradient-to-r from-red-300 bg-cover p-4'>
        <div className='bg-pink-950 bg-opacity-70 shadow-2xl text-white p-5 border-2 text-[20px] w-full max-w-lg md:max-w-2xl lg:max-w-4xl'>
          <h2 className="p-4 rounded-lg font-bold bg-pink-950 text-white text-center">FILE COMPLAINT</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white font-medium mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder='Enter your name'
                onChange={onHandleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-pink-950 focus:ring-pink-900"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white font-medium mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder='Enter your email id'
                onChange={onHandleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-pink-950 focus:ring-pink-900"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white font-medium mb-2" htmlFor="department">Department</label>
              <input
                type='text'
                placeholder='Enter Department'
                name="department"
                onChange={onHandleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-pink-950 focus:ring-pink-900"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white font-medium mb-2" htmlFor="subject">Subject of concern</label>
              <input
                type="text"
                name="subject"
                placeholder='Write the crux/subject'
                onChange={onHandleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-pink-950 focus:ring-pink-900"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white font-medium mb-2" htmlFor="description">Description</label>
              <textarea
                name="description"
                placeholder='Elaborate your complaint here'
                onChange={onHandleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-pink-950 focus:ring-pink-900"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-pink-950 text-white font-medium py-2 px-4 rounded-md hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-900 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserComplaint;
