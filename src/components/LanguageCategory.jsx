import axios from 'axios';
import { useEffect, useState } from 'react';

import TutorCurd from './TutorCurd';
import Category from './Category';
import LanguageCard from './LanguageCard';

const LanguageCategory = () => {
  const [tutors, setTutors] = useState([])
  const [filterTutor, setFilterTutor] = useState([])
  const [currentLanguage, setCurrentLanguage] = useState('')

  useEffect(() => {
    fetchAllTutors()
  }, [])
  const fetchAllTutors = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/tutors`)

    setTutors(data)
    setFilterTutor(data)
  }

  const handleLanguages = (language) => {
    setCurrentLanguage(language)
    const newData = tutors.filter(tutor => tutor.language === language)
    setFilterTutor(newData)
  }

  const languages = [
    { logo: 'https://thumbs.dreamstime.com/z/language-english-translation-discipline-education-outline-icon-logo-illustration-222388082.jpg?ct=jpeg', title: "English", language: "English" },
    { logo: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Emblem_of_Spanish_Customs_Surveillance_Service.svg', title: "Spanish", language: "Spanish" },
    { logo: 'https://i.ibb.co.com/wdDRnYf/learning-french-language-class-logo-exchange-program-forum-speech-bubble-international-communication.webp', title: "French", language: "French" },
    { logo: 'https://i.ibb.co.com/gw4n0g3/learning-deutch-german-language-class-logo-vector-39861203.jpg', title: "German", language: "German" },
    { logo: 'https://i.ibb.co.com/52FCwVQ/learning-italian-language-class-logo-vector-39861211.jpg', title: "Italian", language: "Italian" },
    { logo: 'https://i.ibb.co.com/rf9YBPW/chinese-language-class-logo-the-exchange-vector-39861215.jpg', title: "Chinese", language: "Chinese" },
    { logo: 'https://i.ibb.co.com/DD3bJnT/organization-for-renaissance-of-arabic-language-logo-D20631-BAD9-seeklogo-com.png', title: "Arabic", language: "Arabic" },
    { logo: 'https://i.ibb.co.com/ts8fqCQ/learning-deutch-german-language-class-logo-vector-39861203.webp', title: "Japanese", language: "Japanese" },
    { logo: 'https://i.ibb.co.com/9WyHjGj/download.jpg', title: "Portuguese", language: "Portuguese" },
  ];

  return (

    <div className=' container px-6 py-10 mx-auto'>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
      
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3 items-center w-8/12 mx-auto  justify-center'>


        {languages.map((language, index) => (
          <LanguageCard key={index}
          logo={language.logo}
          title={language.title}
          category={language.language} onClick={() => { handleLanguages(language) }} >
            {language}
          </LanguageCard>
        ))}
      </div>
    </div>

  );
};

export default LanguageCategory;