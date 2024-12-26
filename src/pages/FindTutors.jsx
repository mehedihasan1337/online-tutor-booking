import React, { useEffect, useState } from 'react';
import { data } from 'react-router-dom';
import TutorCurd from '../components/TutorCurd';
import TabCategory from '../components/LanguageCategory';
import axios from 'axios';

const FindTutors = () => {
    const [tutors,setTutors]=useState([])
    const [filterTutor,setFilterTutor]=useState([])
    const [search,setSearch]=useState('')
    const [sort,setSort]=useState('')

    const [currentLanguage ,setCurrentLanguage]=useState('')
  
    useEffect(()=>{
      const fetchAllTutors= async()=>{
        const {data}=await axios.get(`${import.meta.env.VITE_API_URL}/findTutors?search=${search}&sort=${sort}`)
           
        setTutors(data)
        setFilterTutor(data)
    }
        fetchAllTutors()
    },[search,sort])
     
    const handleReset=()=>{
     
      setSearch('')
      setSort('')
    }
  
    const handleLanguages= (language)=>{
          setCurrentLanguage(language)
          const newData=tutors.filter(tutor =>tutor.language=== language)
          setFilterTutor(newData)
    }
    
    const languages = [
      "English",
      "Spanish",
      "French",
      "German",
      "Italian",
      "Chinese",
      "Arabic",
      "Japanese",
      "Portuguese"
    ];



    return (
        
        <div className='mt-10'>




<div className='flex font-Roboto flex-col md:flex-row justify-center items-center gap-5 '>
        
      <button onClick={handleReset} className='border p-2 rounded-lg hover:bg-red-400 font-Oswald'>
            Reset
          </button>
          <div className='flex p-1 font-Roboto overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
            <input
              className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
              type='text'
              name='search'
              onBlur={e => setSearch(e.target.value)}
              
              placeholder='Enter language '
              aria-label='Enter Job Title'
            />

            <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 bg-gray-700 rounded-md hover:bg-gray-600'>
              Search
            </button>
          </div>

          <div className="font-Roboto">
            <select
              name='category'
              id='category'
              onChange={e => setSort(e.target.value)}
              className='border font-Roboto p-4 rounded-md'
             
            >
              <option value=''>Sort By Price</option>
              <option value='dsc'>Descending Order</option>
              <option value='asc'>Ascending Order</option>
            </select>
          </div>
    
        </div>











<div className='grid grid-cols-1 mt-20 md:grid-cols-2 gap-2 w-8/12 mx-auto lg:grid-cols-3 items-center '>
           
           
           {languages.map((language, index) => (
  <button onClick={()=>{handleLanguages(language)}} key={index} className={`border ${language===currentLanguage ? "border-green-500":"border-gray-500"} hover:bg-green-300 font-Roboto text-xl w-7/12 p-3`}>
    {language}
  </button>
))}
              
              

            
          </div > 
               
            
        <div className="mt-20">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
              {filterTutor
                .map(tutor => (
                  <TutorCurd key={tutor._id} tutor={tutor}></TutorCurd>
                ))}
            </div>
        </div>
        </div>
    );
};

export default FindTutors;