import React, { useContext, useEffect, useState } from 'react';
import { GrDocumentUpdate } from 'react-icons/gr';
import { MdDeleteForever } from 'react-icons/md';
import  { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';


import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import axiosSecureUse from '../hooks/axiosSecureUse';

const MyTutorials = () => {
  const axiosSecure=axiosSecureUse()
  const {user} = useContext(AuthContext)

  const [tutors,setTutors]=useState([])


  useEffect(()=>{
      fetchAllTutors()
  },[user])
  const fetchAllTutors= async()=>{
      const {data}=await axiosSecure.get(`/tutors/${user?.email}`)
         
      setTutors(data)
      
  }
// delete
  const handleDelete=async id=>{
      try{
        const {data}=await axiosSecure.delete(`/tutor/${id}`)
      
        toast.success('Data Deleted Successfully!!!')
        fetchAllTutors()
      }
     
      catch(err){
      // console.log(err)
      toast.error(err.message)
      }

  }
  const handleModernDelete = id => {
    toast(t => (
      <div className='flex gap-3 items-center'>
        <div>
          <p>
            Are you <b>sure?</b>
          </p>
        </div>
        <div className='gap-2 flex'>
          <button
            className='bg-red-400 text-white px-3 py-1 rounded-md'
            onClick={() => {
              toast.dismiss(t.id)
              handleDelete(id)
            }}
          >
            Yes
          </button>
          <button
            className='bg-green-400 text-white px-3 py-1 rounded-md'
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ))
  }
  

    return (
        <div className="overflow-x-auto mb-20 pt-24 ">
         
          <button className='mx-2 px-10 py-2  bg-blue-600 text-white font-Ancizar font-bold rounded-lg'>My Tutor: {tutors.length}</button>
        <table className="table table-xs mx-auto w-11/12">
          <thead>
            <tr className='font-Ancizar  text-xl text-blue-600 font-bold '>
              
              <th>Image</th>
              <th>Name</th>
              <th>Language </th>
              <th>Price</th>
              <th >Description</th>
              <th>Review</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
             {
              tutors.map(tutor=> <tr className='font-Ancizar  dark:text-white text-black font-semibold ' key={tutor._id}>
               
                <th><img referrerPolicy='no-referrer' className='w-11 rounded-full' src={tutor.image} alt="" /></th>
                <td>{tutor.buyer.name}</td>
                <td>{tutor.language}</td>
                <td>{tutor.Price.price} {tutor.Price.category}</td>
                <td>{tutor.description.substring(0,15)}...</td>
                <td>{tutor.review}</td>
                
                <td>
                  <div className='flex gap-1'>
                      <button onClick={()=> handleModernDelete(tutor._id)} ><MdDeleteForever className='hover:text-red-500 font-bold text-xl' /></button>
                      <Link to={`/updatedTutor/${tutor._id}`}><GrDocumentUpdate className='hover:text-green-500 font-bold text-lg' /> </Link>
                  </div>
                </td>
              </tr>)
             }
       
          </tbody>
        
        </table>
      </div>
    );
};

export default MyTutorials;