import React from 'react';

import Banner from '../components/Banner';

import LanguageCategory from '../components/LanguageCategory';
import Stats from '../components/Stats';

const HomeLayouts = () => {
    return (
        <div>
              <Banner></Banner> 
              <Stats></Stats>   
              <LanguageCategory></LanguageCategory>
        </div>
    );
};

export default HomeLayouts;