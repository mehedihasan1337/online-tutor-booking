import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import { MdEmail, MdOutlineFavoriteBorder, MdOutlinePriceChange } from 'react-icons/md';
import { IoLanguage } from 'react-icons/io5';
import { GoArrowLeft } from 'react-icons/go';

const TutorDetails = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const [tutor, setTutor] = useState({})

    useEffect(() => {
        fetchTutorData()
    }, [id])
    const fetchTutorData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/tutor/${id}`)

        setTutor(data)

    }
    const { _id, buyer, image, language, description, review, Price } = tutor || {}


    return (
        <div className=' lg:w-8/12 md:w-8/12 mx-auto '>
            <h2> Tutor Details   </h2>
            <div>
                <div className=' border hover:shadow-2xl '>
                    <div className='flex justify-between pt-3 lg:w-8/12 md:w-8/12 p-2  mx-auto '>
                        <div className='flex'>
                            <h3 className='font-semibold font-Oswald text-lg'>{buyer?.name}</h3>

                        </div>
                        <div className='flex  gap-2 md:gap-3 lg:gap-3'>
                            <h3 className='font-semibold font-Oswald flex items-center gap-1 text-sm '> <FaStar className='w-5 text-lg text-black' />
                                {review}</h3>
                          
                            <p><MdOutlineFavoriteBorder className='text-black hover:text-red-500' />
                            </p>
                        </div>

                    </div>
                    <hr className='w-8/12  mx-auto' />
                    <div className='size-5/12 mx-auto mt-4'>
                        <img className='w-full h-full' src={image} alt="" />
                    </div>
                    <div className=' pl-10 pr-2'>
                        <div className=" pr-2 py-2">

                            <p className='flex items-center gap-1 text-lg font-semibold'><IoLanguage className='text-black ' />
                           <span className='font-Oswald'> Language :</span> {language}</p>

                           
                                <p className='flex items-center gap-1 text-lg font-semibold'><MdEmail className='text-black ' />
                                <span className='font-Oswald'>  Tutor Email : </span> {buyer?.email}</p>
                                <p className='flex items-center gap-1 text-lg font-semibold'><MdEmail className='text-black ' />
                                <span className='font-Oswald'>  Your Email:</span> {user?.email}</p>
                           
                                <h3 className= 'flex items-center gap-1 font-semibold font-Oswald  text-lg '> <MdOutlinePriceChange />  Pirce : <span className='text-black '> {Price?.price}</span>  {Price?.category} </h3>
                                 <h2 className='font-Oswald font-bold text-xl text-green-500'>Description</h2>
                                <p className='text-lg font-semibold'>{description}</p>

                                       <button className='btn'>Book </button>
                               <div className='flex justify-end '>
                               <Link to={"/findTutors/language"} className=" flex border p-1 rounded-lg bg-green-500 font-Roboto text-black font-bold hover:bg-blue-600 hover:text-white hover:p-2  "> <GoArrowLeft className="text-2xl"/>Go to category</Link>
                            
                               </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TutorDetails;