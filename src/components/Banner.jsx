// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';


import bgimg1 from '../assets/image/baner1.avif'
import bgimg2 from '../assets/image/baner2.webp'
import bgimg3 from '../assets/image/baner3.jpg'
import bgimg4 from '../assets/image/baner4.png'





const Banner = () => {
    return (
      <div className=' mx-auto mb-14 '>
     <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='' src={bgimg1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={bgimg2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={bgimg3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={bgimg4} alt="" /></SwiperSlide>
    
      </Swiper>

     
    </div>
    );
};

export default Banner;