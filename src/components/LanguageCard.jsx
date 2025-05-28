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
      className="language-card   flex items-center p-4  shadow-md rounded-md cursor-pointer hover:shadow-lg transition"
      onClick={handleCardClick}
    >
      <img src={logo} alt={`${title} logo`} className="w-12 rounded-full h-12 mr-4" />
      <span className="flex-1 text-lg text-black dark:text-white font-medium">{title} tutors</span>
      <FiArrowRight className="text-gray-500 dark:text-white text-xl" />


    </div>

    
    );
};

export default LanguageCard;