import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayouts from '../layouts/HomeLayouts';
import Banner from '../components/Banner';

const router =createBrowserRouter([
    {
        path:"/",
        element:<HomeLayouts></HomeLayouts>,
        children:[
            {
                path:"/",
                element:<Banner></Banner>
            }
        ]
    }
])


export default router;