import React, { useEffect, useState } from 'react';
import { data } from 'react-router-dom';
import TutorCurd from '../components/TutorCurd';
import TabCategory from '../components/LanguageCategory';
import axios from 'axios';

const FindTutors = () => {
    const [tutors,setTutors]=useState([])

useEffect(()=>{
    fetchAllTutors()
},[])
const fetchAllTutors= async()=>{
    const {data}=await axios.get(`${import.meta.env.VITE_API_URL}/tutors`)
       
    setTutors(data)
}


    return (
        
        <div className='mt-10'>
               
               <div className='container px-6 py-10 mx-auto flex flex-col justify-between'>
      <div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
        
          <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
            <input
              className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
              type='text'
              name='search'
            //   onChange={e => setSearch(e.target.value)}
            //   value={search}
              placeholder='Enter Job Title'
              aria-label='Enter Job Title'
            />

            <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
              Search
            </button>
          </div>

          <div>
            <select
              name='category'
              id='category'
            //   onChange={e => setSort(e.target.value)}
              className='border p-4 rounded-md'
            //   value={sort}
            >
              <option value=''>Sort By Deadline</option>
              <option value='dsc'>Descending Order</option>
              <option value='asc'>Ascending Order</option>
            </select>
          </div>
          {/* <button onClick={handleReset} className='btn'>
            Reset
          </button> */}
        </div>
        <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {/* {jobs.map(job => (
            <JobCard key={job._id} job={job} />
          ))} */}
        </div>
      </div>
    </div>




            
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                {
                    tutors.map(tutor=> <TutorCurd key={tutor._id} tutor={tutor}></TutorCurd>)
                }
            </div>
        </div>
    );
};

export default FindTutors;