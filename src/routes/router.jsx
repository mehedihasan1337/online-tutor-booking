import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayouts from '../layouts/HomeLayouts';
import Banner from '../components/Banner';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Root from '../root/Root';

const router =createBrowserRouter([
 {
    path:"/",
    element:<Root></Root>,
    children:[
        {
            path:"/",
            element:<HomeLayouts></HomeLayouts>,
          
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        }
    ]
 }
])


export default router;