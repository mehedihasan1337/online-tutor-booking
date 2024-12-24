import React, { useContext, useEffect, useState } from 'react';
import { GrDocumentUpdate } from 'react-icons/gr';
import { MdDeleteForever } from 'react-icons/md';
import  { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import { key } from 'localforage';

const MyTutorials = () => {

  const {user} = useContext(AuthContext)

  const [tutors,setTutors]=useState([])


  useEffect(()=>{
      fetchAllTutors()
  },[user])
  const fetchAllTutors= async()=>{
      const {data}=await axios.get(`${import.meta.env.VITE_API_URL}/tutors/${user?.email}`)
         
      setTutors(data)
      setFilterTutor(data)
  }

    return (
        <div className="overflow-x-auto">
          <button className='border px-10 py-1 bg-blue-200 font-Oswald font-bold rounded-lg'>{tutors.length}</button>
        <table className="table table-xs">
          <thead>
            <tr>
              
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
              tutors.map(tutor=> <tr key={key._id}>
               
                <th><img className='w-11 rounded-full' src={tutor.image} alt="" /></th>
                <td>{tutor.buyer.name}</td>
                <td>{tutor.language}</td>
                <td>{tutor.price.price} {tutor.price.category}</td>
                <td>{tutor.description.substring(0,15)}...</td>
                <td>{tutor.review}</td>
                
                <td>
                  <div className='flex gap-1'>
                      <button><MdDeleteForever className='hover:text-red-500 font-bold text-xl' /></button>
                      <button><GrDocumentUpdate className='hover:text-green-500 font-bold text-lg' /> </button>
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