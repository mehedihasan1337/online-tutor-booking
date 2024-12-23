import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayouts from '../layouts/HomeLayouts';
import Banner from '../components/Banner';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Root from '../root/Root';
import AddTutorials from '../pages/AddTutorials';
import FindTutors from '../pages/FindTutors';
import MyTutorials from '../pages/MyTutorials';
import TutorDetails from '../pages/TutorDetails';

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
        },
        {
            path:"/addTutorials",
            element:<AddTutorials></AddTutorials>
        },
        {
            path:"/findTutors",
            element:<FindTutors></FindTutors>
        },
        {
            path:"/myTutorials",
            element:<MyTutorials></MyTutorials>
        },
        {
            path:"/tutors/:id",
            element:<TutorDetails></TutorDetails>,
            loader:({params})=> fetch(`http://localhost:5000/tutors/${params.id}`)
        },
    ]
 }
])


export default router;