import React from 'react';
import { NavLink } from 'react-router-dom';
import { GrUserAdmin } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";

function UserAdminPage() {
  return (
    <div>
      <div className="bg-gradient-to-r from-red-50 to-red-300 bg-cover bg-no-repeat p-10 flex items-center justify-center flex-col h-screen  ">
      <h1 className='text-4xl font-extrabold text-pink-950 mb-' >What best defines you ?</h1>
      <div className='flex flex-col md:flex-row p-2 items-center justify-center mt-20 '>
        
      <div className='flex gap-20 flex-wrap items-center justify-center'>
        <NavLink to='/admin'>
        <button type="button" className="bg-gradient-to-r h-64 w-64 from-pink-950 to-pink-500 p-20 rounded-full text-white font-bold text-[25px] border-4"><GrUserAdmin className='text-center h-20 w-20' />
            ADMIN
          </button>
        </NavLink>
        <NavLink to='/user'>
          <button type="button" className="bg-gradient-to-r h-64 w-64 from-pink-950 to-pink-500 p-20 rounded-full text-white font-bold text-[25px] border-4"><FaRegUser className='text-center h-20 w-20' />
            USER
          </button>
        </NavLink>
        </div>
      </div>
    </div>
    </div>
  );
}

export default UserAdminPage;
