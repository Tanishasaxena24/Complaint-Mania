// import React, { useState, useEffect } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { PiNotepadBold } from 'react-icons/pi';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css';
// import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check if the user is authenticated
//     const client = localStorage.getItem('client');
//     const manager = localStorage.getItem('manager');
//     setIsAuthenticated(client || manager); // set true if either client or manager is present
//   }, []);

//   const toggleNav = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     toast.error('Logged out');
//     setIsAuthenticated(false);
//     navigate('/');
//   };

//   return (
//     <nav className="w-full flex flex-wrap justify-between items-center p-7 top-0 bg-pink-950">
//       <Tippy content="Register complaints here!">
//         <Link to="/">
//           <div className="flex">
//             <PiNotepadBold className="text-white text-2xl" />
//             <h2 className="text-white font-bold ml-2 tracking-wider">ComplaintMania</h2>
//           </div>
//         </Link>
//       </Tippy>
//       <button
//         onClick={toggleNav}
//         className="text-white md:hidden block focus:outline-none"
//       >
//         {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//       </button>
//       <div
//         className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto`}
//       >
//         <ul className="text-white font-semibold md:flex flex-col md:flex-row gap-5 text-[18px] w-full md:w-auto">
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 `${isActive ? 'bg-pink-400 rounded p-2 text-black' : 'text-slate-300'} hover:text-white hover:border-white cursor-pointer`
//               }
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 `${isActive ? 'bg-pink-400 rounded p-2 text-black' : 'text-slate-300'} hover:text-white hover:border-white cursor-pointer`
//               }
//             >
//               About
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/complaint"
//               className={({ isActive }) =>
//                 `${isActive ? 'bg-pink-400 rounded p-2 text-black' : 'text-slate-300'} hover:text-white hover:border-white cursor-pointer`
//               }
//             >
//               Register Complaint
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/admindashboard"
//               className={({ isActive }) =>
//                 `${isActive ? 'bg-pink-400 rounded p-2 text-black' : 'text-slate-300'} hover:text-white hover:border-white cursor-pointer`
//               }
//             >
//               Admin Dashboard
//             </NavLink>
//           </li>
//           <li>
//             {!isAuthenticated ? (
//               <NavLink to="/loginsignup" className="bg-pink-800 p-2 rounded-lg hover:bg-pink-500 hover:text-black">
//                 Signin/Signup
//               </NavLink>
//             ) : (
//               <button onClick={handleLogout} className="bg-pink-800 p-2 rounded-lg hover:bg-pink-500 hover:text-black">
//                 Logout
//               </button>
//             )}
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { PiNotepadBold } from 'react-icons/pi';
import { FaBars, FaTimes } from 'react-icons/fa';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import toast from 'react-hot-toast';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated
    const checkAuth = () => {
      const client = localStorage.getItem('client');
      const manager = localStorage.getItem('manager');
      setIsAuthenticated(!!client || !!manager); // set true if either client or manager is present
    };

    checkAuth();

    // Listen for storage changes to update authentication status
    const handleStorageChange = () => {
      checkAuth();
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    toast.error('Logged out');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <nav className="w-full flex flex-wrap justify-between items-center p-7 top-0 bg-pink-950">
      <Tippy content="Register complaints here!">
        <Link to="/">
          <div className="flex">
            <PiNotepadBold className="text-white text-2xl" />
            <h2 className="text-white font-bold ml-2 tracking-wider">ComplaintMania</h2>
          </div>
        </Link>
      </Tippy>
      <button
        onClick={toggleNav}
        className="text-white md:hidden block focus:outline-none"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <div
        className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto`}
      >
        <ul className="text-white font-semibold md:flex flex-col md:flex-row gap-5 text-[18px] w-full md:w-auto">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? 'bg-pink-400 rounded p-2 text-black' : 'text-slate-300'} hover:text-white hover:border-white cursor-pointer`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? 'bg-pink-400 rounded p-2 text-black' : 'text-slate-300'} hover:text-white hover:border-white cursor-pointer`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/complaint"
              className={({ isActive }) =>
                `${isActive ? 'bg-pink-400 rounded p-2 text-black' : 'text-slate-300'} hover:text-white hover:border-white cursor-pointer`
              }
            >
              Register Complaint
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admindashboard"
              className={({ isActive }) =>
                `${isActive ? 'bg-pink-400 rounded p-2 text-black' : 'text-slate-300'} hover:text-white hover:border-white cursor-pointer`
              }
            >
              Admin Dashboard
            </NavLink>
          </li>
          <li>
            {!isAuthenticated ? (
              <NavLink to="/loginsignup" className="bg-pink-800 p-2 rounded-lg hover:bg-pink-500 hover:text-black">
                Signin/Signup
              </NavLink>
            ) : (
              <button onClick={handleLogout} className="bg-pink-800 p-2 rounded-lg hover:bg-pink-500 hover:text-black">
                Logout
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

