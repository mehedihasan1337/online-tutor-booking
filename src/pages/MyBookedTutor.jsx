import React from 'react';

const MyBookedTutor = () => {
    return (
        <div className="overflow-x-auto">
          <button className='border px-10 py-1 bg-blue-200 font-Oswald font-bold rounded-lg'></button>
        <table className="table table-xs">
          <thead>
            <tr>
              
              <th>Image</th>
              <th>Name</th>
              <th>Language </th>
              <th>Price</th>
              <th>Review</th> 
            </tr>
          </thead>
          <tbody>
             {/* {
              tutors.map(tutor=> <tr key={tutor._id}>
               
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
             } */}
       
          </tbody>
        
        </table>
      </div>
    );
};

export default MyBookedTutor;