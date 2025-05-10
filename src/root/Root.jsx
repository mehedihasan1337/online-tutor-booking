import React, { useEffect, useState } from 'react';
import Navber from '../components/Navber';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import {  MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

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
          <div className='md:w-12/12 w-full mx-auto'>

      <main className="">
      <Navber theme={theme} toggleTheme={toggleTheme} />
                 <Outlet></Outlet>
            <Footer></Footer> 
        
      </main>
             
        </div>
      </div>
    );
};

export default Root;