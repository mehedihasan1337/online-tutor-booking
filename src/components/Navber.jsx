import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
const Navber = ({ theme, toggleTheme }) => {

  const { user, logOut } = useContext(AuthContext)

  const handleLogOut=()=>{
    logOut()
    .then(()=>{
      // console.log('successful logOut')
    })
    .catch(error=>{
      // console.log('failed to sign out. sty her. dont leave me alone')
    })
  }
    const links = <>
 {
  user ? <>
          <NavLink className="font-Oswald  font-semibold text-lg" to={"/"}>Home</NavLink>
    <NavLink className="font-Oswald  font-semibold text-lg" to={"/findTutors/language"}>Find tutors </NavLink>
    <NavLink className="font-Oswald  font-semibold text-lg" to={"/addTutorials"}>Add Tutor </NavLink>
    <NavLink className="font-Oswald  font-semibold text-lg" to={"/myTutorials"}>My Tutors </NavLink>
    <NavLink className="font-Oswald  font-semibold text-lg" to={"/MyBookedTutor"}>My Booked Tutors</NavLink>
  </>
  :
  <>
           <NavLink className="font-Oswald  font-semibold text-lg" to={"/"}>Home</NavLink>
           <NavLink className="font-Oswald  font-semibold text-lg" to={"/findTutors/language"}>Find tutors </NavLink>
  </>
 }

  </>

  return (
    <div className="navbar fixed z-10 opacity-80   bg-base-100 dark:bg-black shadow-xl  ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm   dark:text-black dropdown-content bg-base-100 rounded-box z-[1]  w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <div className='flex items-center'>
         
        <a className=" font-bold lg:text-3xl md:text-2xl text-sm text-blue-800 dark:text-yellow-400 font-Ga ">Online Tutor Booking </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-4  menu-horizontal px-1">
          {links}
        </ul>
      </div>

<div className='navbar-end'>
    {/* Theme toggle button */}
    <button
                    className="text-2xl text-black rounded dark:text-white"
                    onClick={toggleTheme}
                >
                    {theme === 'light' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
                </button>

{
        user && user?.email ?


          <div className=''>
            <div className="dropdown  dropdown-left dropdown- ">
              <div tabIndex={1} className=" ">
                <img referrerPolicy='no-referrer' className='rounded-full   w-12 h-12 '
                  src={user?.photoURL} alt="" />
              </div>
              <div
                tabIndex={1}
                className="dropdown-content card  lg:w-60 sm:w-60  bg-primary rounded-md text-primary-content">
                <div className=" card p-2  ">
                  <p className='font-bold text-white'> Name: {user?.displayName }</p>
                  <a className='mr-1 text-sm text-white font-bold' > {user && user.email}</a>
                  
                  {
                    user && user?.email ?
                      <button onClick={handleLogOut} className='text-xl font-bold text-white  mb-4 w-40 h-4 mx-auto  '> <hr className='mt-2'></hr>Log-Out</button>
                      :
                      <Link to="/login" className="btn  text-xl font-bold bg-blue-600 w-40 h-4 ">Login </Link>
                  }
                </div>
              </div>
            </div>
          </div>

          :
          <a className=" ">
            <FaUserCircle
              className='rounded-full  lg:mr-4 md:mr-3 w-12 h-10  btn-success ' /></a>

      }

      {
        user && user?.email ?
          <button onClick={logOut} className='btn hidden text-xl font-bold bg-blue-600 w-40 h-4'>Log-Out</button>
          :
          <Link to="/login" className="btn dark:text-white text-xl font-bold bg-blue-600 md:w-40 h-4">Login </Link>
      }
</div>


    </div>
  );
};

export default Navber;