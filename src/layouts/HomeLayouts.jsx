import React from 'react';

import Banner from '../components/Banner';

import LanguageCategory from '../components/LanguageCategory';
import Stats from '../components/Stats';
import Featured from '../components/Featured';

const HomeLayouts = () => {
    return (
        <div>
              <Banner></Banner> 
              
              <LanguageCategory></LanguageCategory>
              <Featured></Featured>
              <Stats></Stats>   
        </div>
    );
};

export default HomeLayouts;