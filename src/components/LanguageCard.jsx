import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TutorCurd from './TutorCurd';

const LanguageCard = ({ logo, title,language }) => {

    
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(`/findTutors/${language}`);
      };


    return (
        <div
      className="language-card dark:bg-slate-400  flex items-center p-4 bg-white shadow-md rounded-md cursor-pointer hover:shadow-lg transition"
      onClick={handleCardClick}
    >
      <img src={logo} alt={`${title} logo`} className="w-12 rounded-full h-12 mr-4" />
      <span className="flex-1 text-lg text-black font-medium">{title} tutors</span>
      <FiArrowRight className="text-gray-500 text-xl" />


{/*       
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {filterTutor
          .map(tutor => (
            <TutorCurd key={tutor._id} tutor={tutor}></TutorCurd>
          ))}
      </div> */}

    </div>

    
    );
};

export default LanguageCard;