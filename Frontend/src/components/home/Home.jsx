import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import ReactPlayer from 'react-player';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { MdEditNote } from "react-icons/md";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";
import Testimonial from '../testimonial/Testimonial';
import Explore from '../explore/Explore';

function Home() {
  const [text] = useTypewriter({
    words: ['GRIEVANCES', 'COMPLAINTS', 'ISSUES'],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <>
      <div className="bg-gradient-to-r from-red-300 to-red-50">
        <div className="flex flex-col md:flex-row h-[80vh] w-full">
          <div className="flex flex-1 items-center justify-center  md:p-0">
            <div className="text-center md:text-left md:ml-20">
              <h1 className="font-bold text-3xl md:text-4xl mb-5 text-pink-950 font-myFont1">
                FIX YOUR <br />
                <span className="font-bold text-4xl md:text-5xl mb-5 text-pink-800">{text}</span>
                <Cursor />
              </h1>
              <p className="font-semibold mb-5 text-lg md:text-xl">
                Effortlessly File, Track, and Resolve Complaints with Ease and Efficiency
              </p>
              <NavLink to="/explore">
                <button
                  type="button"
                  className="bg-gradient-to-r from-pink-950 to-pink-500 p-3 md:p-5 rounded-3xl text-white font-bold text-lg md:text-xl border-4"
                >
                  EXPLORE NOW!
                </button>
              </NavLink>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center p-4 md:p-0">
            <NavLink to="">
              <Tippy content="Register complaints seamlessly" >
              <img src="/complaint.png" className="object-cover w-full md:w-auto max-w-" alt="" /></Tippy>
            </NavLink>
          </div>
        </div>

<div className="h-[90vh] mt-20 "> 
<Explore/>
</div>




        <div className="h-[85vh] overflow-hidden">
        <h1 className="bg-pink-900 p-4 text-center text-white m-8 text-xl md:text-2xl rounded-lg font-bold mb-20">
                Value Proposition
              </h1>
          <div className="flex items-center justify-evenly flex-wrap">
            
          <div className='flex flex-col w-56 items-center justify-center'>
            <MdEditNote className='text-6xl text-pink-800' />
            <h2 className='mt-3 mb-3 font-semibold text-xl text-center'>Complaint <br />Submissions</h2>
            <p className='text-center'>Ensure that complaints are submitted seamlessly , maintaining user trust in the platform.</p>
            </div>
            
            <div className='flex flex-col w-56 items-center justify-center'>
            <MdOutlineConnectWithoutContact className='text-6xl text-pink-800' />
            <h2 className='mt-3 mb-3 font-semibold text-xl text-center'>Enhanced Communication</h2>
            <p className='text-center'> A complaint website facilitates direct and efficient communication between users and administrators</p>
            </div>
            <div className='flex flex-col w-56 items-center justify-center'>
            <IoDiamondOutline className='text-6xl text-pink-800' />
            <h2 className='text-center mt-3 mb-3 font-semibold text-xl'>Transparency and Accountability</h2>
            <p className='text-center'> promotes transparency and holds administrators accountable for addressing concerns</p>
            </div>
          </div>
        </div>
        <div className="h-[80vh] overflow-hidden ">
        <h1 className="bg-pink-900 p-4 text-center text-white m-8 text-xl md:text-2xl rounded-lg font-bold mb-20">
               Testimonials
              </h1>
        <Testimonial/>
        </div>
      </div>
    </>
  );
}

export default Home;

