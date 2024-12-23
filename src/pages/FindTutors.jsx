import React, { useEffect, useState } from 'react';
import { data } from 'react-router-dom';
import TutorCurd from '../components/TutorCurd';

const FindTutors = () => {
    const [tutors,setTutors]=useState([])

useEffect(()=>{
    fetch ('http://localhost:5000/tutors')
      .then(res=>res.json())
      .then(data=>{
        setTutors(data)
    })

},[])

    return (
        <div className='mt-10'>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                {
                    tutors.map(tutor=> <TutorCurd key={tutor._id} tutor={tutor}></TutorCurd>)
                }
            </div>
        </div>
    );
};

export default FindTutors;