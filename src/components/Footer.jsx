import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {

  const links = <>
  <NavLink className="font-Roboto font-semibold dark:text-white text-lg" to={"/"}>Home</NavLink>
  <NavLink className="font-Roboto font-semibold dark:text-white  text-lg" to={"/findTutors/language"}>Find tutors </NavLink>
  <NavLink className="font-Roboto font-semibold dark:text-white text-lg" to={"/addTutorials"}>Add Tutorials </NavLink>
  <NavLink className="font-Roboto font-semibold dark:text-white text-lg" to={"/myTutorials"}>My Tutorials </NavLink>
  <NavLink className="font-Roboto  font-semibold dark:text-white text-lg" to={"/MyBookedTutor"}>My Booked Tutor</NavLink>

</>
    return (
        <div className='mt-10 '>
         <footer className="footer footer-center bg-base-300 dark:bg-black  text-base-content rounded p-10">
  <nav className="grid lg:grid-flow-col md:grid-flow-col   gap-4">
  {links}
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
   <a href="https://x.com/MdMehediHaasan"><BsTwitterX className='text-2xl text-black dark:text-white'></BsTwitterX></a>
     <a href="https://www.instagram.com/mehedi__1337"><FaInstagram className='text-2xl text-black dark:text-white'></FaInstagram></a>
      <a href="https://www.facebook.com/md.mehedi.hasan.515962"><FaFacebook className='text-2xl text-black dark:text-white'></FaFacebook> </a>
    </div>
  </nav>
  <aside>
    <p className='dark:text-white text-black'>Copyright © {new Date().getFullYear()} - Online Tutor Booking Platform</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;