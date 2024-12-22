import React from 'react';
import Navber from '../components/Navber';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
             <Navber></Navber> 
                 <Outlet></Outlet>
            <Footer></Footer>   
        </div>
    );
};

export default Root;