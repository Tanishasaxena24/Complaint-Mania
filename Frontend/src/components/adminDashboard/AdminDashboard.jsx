// import React, { useState, useEffect } from 'react';

// const AdminDashboard = () => {
//   const [complaints, setComplaints] = useState([]);

//   useEffect(() => {
//     // Mocking data fetching
//     const fetchedComplaints = [
//       {
//         id: 1,
//         name: 'John Doe',
//         email: 'john@example.com',
//         department: 'IT',
//         subject: 'Internet issues',
//         description: 'The internet connection is very slow in the IT department.',
//       },
//       {
//         id: 2,
//         name: 'Jane Smith',
//         email: 'jane@example.com',
//         department: 'HR',
//         subject: 'Work environment',
//         description: 'The work environment needs to be improved.',
//       },
//       // Add more mock complaints as needed
//     ];

//     setComplaints(fetchedComplaints);
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col">
//       <header className="bg-pink-950 text-white py-4 text-center">
//         <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//       </header>
//       <main className="flex-grow p-4">
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//             <thead className="bg-pink-800 text-white">
//               <tr>
//                 <th className="py-2 px-4">ID</th>
//                 <th className="py-2 px-4">Name</th>
//                 <th className="py-2 px-4">Email</th>
//                 <th className="py-2 px-4">Department</th>
//                 <th className="py-2 px-4">Subject</th>
//                 <th className="py-2 px-4">Description</th>
//               </tr>
//             </thead>
//             <tbody>
//               {complaints.map((complaint) => (
//                 <tr key={complaint.id} className="border-b">
//                   <td className="py-2 px-4">{complaint.id}</td>
//                   <td className="py-2 px-4">{complaint.name}</td>
//                   <td className="py-2 px-4">{complaint.email}</td>
//                   <td className="py-2 px-4">{complaint.department}</td>
//                   <td className="py-2 px-4">{complaint.subject}</td>
//                   <td className="py-2 px-4">{complaint.description}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </main>
//       <footer className="bg-pink-950 text-white py-4 text-center">
//         <p>&copy; 2024 Complaint Filing Application. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default AdminDashboard;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AdminDashboard = () => {
//   const [complaints, setComplaints] = useState([]);
//   const navigate=useNavigate();

//   useEffect(() => {
//     if (!localStorage.getItem('manager')) {
//       navigate('/');
//       return alert("Please login as a admin");
//     }
//   }, []);

//   useEffect(() => {
//     const fetchComplaints = async () => {
//       const response = await fetch('http://localhost:3000/api/complaint', {
//         headers: {
//           'Content-type': 'application/json',
//           'manager': localStorage.getItem('manager')
//         }
//       });
//       const data = await response.json();
//       console.log(data);
//       setComplaints(data);
//     };

//     fetchComplaints();
//   }, []);

//   return (

//     <div className="min-h-screen flex flex-col">

// { complaints && 

//       <header className="bg-pink-950 text-white py-4 text-center">
//         <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//       </header>
//       <main className="flex-grow p-4">
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//             <thead className="bg-pink-800 text-white">
//               <tr>
//                 <th className="py-2 px-4">ID</th>
//                 <th className="py-2 px-4">Name</th>
//                 <th className="py-2 px-4">Email</th>
//                 <th className="py-2 px-4">Department</th>
//                 <th className="py-2 px-4">Subject</th>
//                 <th className="py-2 px-4">Description</th>
      
//               </tr>
//             </thead>
//             <tbody>
//               {complaints.map((complaint) => (
//                 <tr key={complaint.id} className="border-b">
//                   <td className="py-2 px-4">{complaint.id}</td>
//                   <td className="py-2 px-4">{complaint.name}</td>
//                   <td className="py-2 px-4">{complaint.email}</td>
//                   <td className="py-2 px-4">{complaint.department}</td>
//                   <td className="py-2 px-4">{complaint.subject}</td>
//                   <td className="py-2 px-4">{complaint.description}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </main>
// }
//     </div>
    
//   );
// };

// export default AdminDashboard;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('manager')) {
      navigate('/');
      return alert("Please login as an admin");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchComplaints = async () => {
      const response = await fetch('http://localhost:3000/api/complaint', {
        headers: {
          'Content-type': 'application/json',
          'manager': localStorage.getItem('manager')
        }
      });
      const data = await response.json();
      console.log(data);
      setComplaints(data);
    };

    fetchComplaints();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-pink-950 text-white py-4 text-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </header>
      <main className="flex-grow p-4">
        <div className="overflow-x-auto">
          {complaints.length > 0 ? (
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-pink-800 text-white">
                <tr>
                  <th className="py-2 px-4">ID</th>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Department</th>
                  <th className="py-2 px-4">Subject</th>
                  <th className="py-2 px-4">Description</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map((complaint) => (
                  <tr key={complaint.id} className="border-b">
                    <td className="py-2 px-4">{complaint.id}</td>
                    <td className="py-2 px-4">{complaint.name}</td>
                    <td className="py-2 px-4">{complaint.email}</td>
                    <td className="py-2 px-4">{complaint.department}</td>
                    <td className="py-2 px-4">{complaint.subject}</td>
                    <td className="py-2 px-4">{complaint.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center text-gray-500 mt-4">No complaints to show</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

