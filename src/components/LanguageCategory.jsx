import axios from 'axios';
import { useEffect, useState } from 'react';

import TutorCurd from './TutorCurd';
import Category from './Category';

const LanguageCategory = () => {
  const [tutors,setTutors]=useState([])

  useEffect(()=>{
      fetchAllTutors()
  },[])
  const fetchAllTutors= async()=>{
      const {data}=await axios.get(`${import.meta.env.VITE_API_URL}/tutors`)
         
      setTutors(data)
  }
  
    return (
        
        <div className=' container px-6 py-10 mx-auto'>
             
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {/* {
                    tutors.map(tutor=><Category key={tutor._id} tutor={tutor}></Category>)
                } */}
            </div>

           <div className='grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3 items-center w-8/12 mx-auto  justify-center'>
           
           
              <button className='border w-7/12 p-3'> English</button>
              <button className='border w-7/12 p-3'>Spanish</button>
              <button className='border w-7/12 p-3'> French</button>
              <button className='border w-7/12 p-3'>German</button>
              <button className='border w-7/12 p-3'>Italian</button>
              <button className='border w-7/12 p-3'> Chinese</button>
              <button className='border w-7/12 p-3'>Arabic</button>
              <button className='border w-7/12 p-3'>Japanese</button>
              <button className='border w-7/12 p-3'>Portuguese</button>
              
              
              
            
          </div> 
          
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
              {tutors
                .filter(tutor => tutor.language === 'English')
                .map(tutor => (
                  <TutorCurd key={tutor._id} tutor={tutor}></TutorCurd>
                ))}
            </div>
         
         

        </div>
      
    );
};

export default LanguageCategory;