import React, { useEffect, useState } from 'react';
import Navber from '../components/Navber';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { MdDarkMode, MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

const Root = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
      document.documentElement.className = theme;
      localStorage.setItem('theme', theme);
    }, [theme]);
  
    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };
  
    return (
      <div className=' bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
          <div className='md:w-11/12 w-full mx-auto'>
              <header className="p-6 float-end  ">
        <div className='absolute md:mt-7 mt-6 mr-5'>
        <button
          className=" text-3xl text-black rounded dark:text-white"
          onClick={toggleTheme}
        >
           {theme === 'light' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />} 
        </button>
        </div>
      </header>
      <main className="p-4">
      <Navber></Navber> 
                 <Outlet></Outlet>
            <Footer></Footer> 
        
      </main>
             
        </div>
      </div>
    );
};

export default Root;