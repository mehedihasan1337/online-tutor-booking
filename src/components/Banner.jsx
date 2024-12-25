import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'


import bgimg1 from '../assets/image/baner1.avif'
import bgimg2 from '../assets/image/baner2.webp'
import bgimg3 from '../assets/image/baner3.jpg'
import bgimg4 from '../assets/image/baner4.png'





import Slide from './Slide';


const Banner = () => {
    return (
      <div className='container  px-6 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide

            image={bgimg1}
            
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
           
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            
          />
        </SwiperSlide>
     
        <SwiperSlide>
          <Slide
            image={bgimg4}
            
          />
        </SwiperSlide>
        </Swiper>

     
    </div>
    );
};

export default Banner;