import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';

const MyBookedTutor = () => {
    
    const [books,setBooks]=useState([])
    const {user} = useContext(AuthContext)

 
    useEffect(()=>{
        fetchAllBooks()
    },[user])
    const fetchAllBooks= async()=> {
        const {data}=await axios.get(`${import.meta.env.VITE_API_URL}/books/${user?.email}`)
           setBooks(data)
           
        }
        console.log(books)

      
            


    return (
        <div className="overflow-x-auto">
          <button className='border px-10 py-1 bg-blue-200 font-Oswald font-bold rounded-lg'><span className='font-semibold'>My Booked Tutor :</span> {books.length}</button>
        <table className="table table-xs">
          <thead>
            <tr className='font-Oswald font-bold text-sm'>
              
              <th>Image</th>
              <th>Name</th>
              <th>Language </th>
              <th>Price</th>
              <th>Review</th> 
            </tr>
          </thead>
          <tbody>
          {
              books.map(book=> <tr className='font-Roboto font-semibold ' key={book._id}>
               
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