import React, { useContext, useEffect, useState } from 'react';
import { GrDocumentUpdate } from 'react-icons/gr';
import { MdDeleteForever } from 'react-icons/md';
import  { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';


import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const MyTutorials = () => {

  const {user} = useContext(AuthContext)

  const [tutors,setTutors]=useState([])


  useEffect(()=>{
      fetchAllTutors()
  },[user])
  const fetchAllTutors= async()=>{
      const {data}=await axios.get(`${import.meta.env.VITE_API_URL}/tutors/${user?.email}`)
         
      setTutors(data)
      
  }
// delete
  const handleDelete=async id=>{
      try{
        const {data}=await axios.delete(`${import.meta.env.VITE_API_URL}/tutor/${id}`)
        console.log(data)
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success"
        // });
        toast.success('Data Deleted Successfully!!!')
        fetchAllTutors()
      }
     
      catch(err){
      console.log(err)
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
              tutors.map(tutor=> <tr key={tutor._id}>
               
                <th><img className='w-11 rounded-full' src={tutor.image} alt="" /></th>
                <td>{tutor.buyer.name}</td>
                <td>{tutor.language}</td>
                <td>{tutor.price.price} {tutor.price.category}</td>
                <td>{tutor.description.substring(0,15)}...</td>
                <td>{tutor.review}</td>
                
                <td>
                  <div className='flex gap-1'>
                      <button onClick={()=> handleModernDelete(tutor._id)} ><MdDeleteForever className='hover:text-red-500 font-bold text-xl' /></button>
                      <Link to={'/updatedTutor'}><GrDocumentUpdate className='hover:text-green-500 font-bold text-lg' /> </Link>
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