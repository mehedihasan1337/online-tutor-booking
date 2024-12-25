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
import UpdatedTutor from '../pages/UpdatedTutor';
import MyBookedTutor from '../pages/MyBookedTutor';
import PrivateRoute from './PrivateRoute';

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
            element:<PrivateRoute>
                <AddTutorials></AddTutorials>
            </PrivateRoute>
        },
        {
            path:"/findTutors/:language",
            element:<FindTutors></FindTutors>
        },
        {
            path:"/myTutorials",
            element:<PrivateRoute>
                <MyTutorials></MyTutorials>
            </PrivateRoute>
        },
        {
            path:"/updatedTutor/:id",
            element:<UpdatedTutor></UpdatedTutor>
        },
        {
            path:"/tutors/:id",
            element:<PrivateRoute>
                <TutorDetails></TutorDetails>
            </PrivateRoute>,
           
        },
        {
            path:"/MyBookedTutor",
            element:<PrivateRoute>
                <MyBookedTutor></MyBookedTutor>
            </PrivateRoute>,
           
        },
    ]
 }
])  


export default router;