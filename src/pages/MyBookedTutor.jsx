import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import axiosSecureUse from '../hooks/axiosSecureUse';






const MyBookedTutor = () => {
    const axiosSecure=axiosSecureUse()
    const [books,setBooks]=useState([])
    const {user} = useContext(AuthContext)

 
    useEffect(()=>{
        fetchAllBooks()
    },[user])
    const fetchAllBooks= async()=> {
        const {data}=await axiosSecure.get(`/books/${user?.email}`,{withCredentials:true})
           setBooks(data)
           
        }
        // console.log(books)

      
            


    return (
        <div className="overflow-x-auto pt-24 ">
         
          <button className='mx-2  px-10 py-2 bg-blue-600 font-Ancizar font-bold text-white rounded-lg'><span className='font-semibold'>My Booked Tutor :</span> {books.length}</button>
        <table className="table table-xs mx-auto w-11/12">
          <thead>
            <tr className='font-Ancizar text-blue-500 font-bold  text-sm'>
              
              <th>Image</th>
              <th>Name</th>
              <th>Language </th>
              <th>Price</th>
              <th>Review</th> 
            </tr>
          </thead>
          <tbody>
          {
              books.map(book=> <tr className='font-Ancizar dark:text-white text-black  font-semibold ' key={book._id}>
               
                <th><img referrerPolicy='no-referrer' className='w-11 rounded-full' src={book.image} alt="" /></th>
                <td>{book.name}</td>
                <td>{book.language}</td>
                <td>{book.Price} {book.PriceCategory}</td>
                
                <td>{book.review}
                </td>
                
                
              </tr>
              )} 
       
          </tbody>
        
        </table>
      </div>
    );
};

export default MyBookedTutor;