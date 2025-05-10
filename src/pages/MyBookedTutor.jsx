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
        <div className="overflow-x-auto  ">
          <div className='w-full h-[550px] overflow-hidden mb-10'>
            <img  className="w-full h-full object-cover" src="https://i.ibb.co.com/BKjdP9w6/My-Booked-Tutor.png" alt="" />
          </div>
          <button className='mx-2  px-10 py-2 bg-blue-200 dark:bg-blue-600 font-Oswald font-bold dark:text-black rounded-lg'><span className='font-semibold'>My Booked Tutor :</span> {books.length}</button>
        <table className="table table-xs mx-auto w-11/12">
          <thead>
            <tr className='font-Oswald text-blue-500 font-bold dark:text-yellow-500 text-sm'>
              
              <th>Image</th>
              <th>Name</th>
              <th>Language </th>
              <th>Price</th>
              <th>Review</th> 
            </tr>
          </thead>
          <tbody>
          {
              books.map(book=> <tr className='font-Roboto dark:text-white text-black font-semibold ' key={book._id}>
               
                <th><img referrerPolicy='no-referrer' className='w-11 rounded-full' src={book.image} alt="" /></th>
                <td>{book.name}</td>
                <td>{book.language}</td>
                <td>{book.Price} {book.PriceCategory}</td>
                
                <td>{book.review}
                    <span className='ml-2  p-1 bg-blue-500 text-white hover:bg-blue-700 rounded-xl '>Review</span>
                </td>
                
                
              </tr>
              )} 
       
          </tbody>
        
        </table>
      </div>
    );
};

export default MyBookedTutor;