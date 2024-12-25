import React from 'react';
import { IoMdStar } from 'react-icons/io';

const Stats = () => {
    return (
        <div>
            <div className="lg:flex md:flex gap-10 justify-center mb-10  ">
  <div className="text-center">
    
    <div className="font-Oswald text-3xl  font-bold">32,000 +</div>
    <div className="font-Roboto text-xl ">Experienced tutors</div>
    
  </div>
  <div className="text-center">
    
    <div className="font-Oswald text-3xl  font-bold">30,000 +</div>
    <div className="font-Roboto text-xl ">5-ster tutor reviews</div>
    
  </div>
  <div className="text-center">
    
    <div className="font-Oswald text-3xl  font-bold">450 +</div>
    <div className="font-Roboto text-xl ">Subjects taught</div>
    
  </div>
  <div className="text-center">
    
    <div className="font-Oswald text-3xl  font-bold">220 +</div>
    <div className="font-Roboto text-xl ">Tutor nationalities</div>
    
  </div>
  <div className="text-center">
    
    <div className="font-Oswald text-3xl flex items-center justify-center font-bold">4.9 <IoMdStar /></div>
    <div className="font-Roboto text-xl ">On the App Store</div>
    
  </div>




</div>
        </div>
    );
};

export default Stats;