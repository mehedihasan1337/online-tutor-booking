import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IoLanguage } from 'react-icons/io5';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { Link } from 'react-router-dom';

const TutorCurd = ({ tutor }) => {
    const { _id,buyer, email, image, language, description, review, Price } = tutor || {}
        
    return (
        <div >
            <div className='flex  shadow-lg dark:bg-gray800 dark:text-white  hover:shadow-2xl h-36'>
                <div className='w-4/12 '>
                       <img referrerPolicy='no-referrer' className='w-full h-full' src={image} alt="" />
                </div>
                <div className='w-8/12 pl-4 pr-2 '>
                <div className=" pr-2 py-2 ">
  <div className='flex justify-between border-b-2 border-black '> 
    <div className='flex'>
    <h3 className='font-semibold font-Oswald text-lg'>{buyer.name.slice(0,5)}..{""}</h3>
    
    </div>
    <div className='flex  gap-2 md:gap-3 lg:gap-3'>
    <h3 className='font-semibold font-Oswald flex items-center gap-1 text-sm '> <FaStar className='w-5 text-lg dark:text-white text-black' />
    {review}</h3>
    <h3 className='font-semibold  font-Oswald  text-sm '> <span className='text-black dark:text-white text-lg'>{Price.category}</span> {Price.price} </h3>
    <p><MdOutlineFavoriteBorder className='text-black dark:text-white hover:text-red-500' />
    </p>
    </div>
    
  </div>
  
  
    
    <p className='flex items-center gap-1 text-lg font-semibold'><IoLanguage className='text-black dark:text-white' />
    {language  }</p>

    <div className='flex '>
    <p>{description .slice(0,40)}..<Link 
    to={`/tutors/${_id}` } 
    className="  border-gray-700 font-Oswald text-blue-600 p-1 rounded-lg  hover:text-blue-700  "
    >Details</Link></p>
    
    </div>
    
  </div>
                </div>
            </div>
        </div>
    );
};

export default TutorCurd;