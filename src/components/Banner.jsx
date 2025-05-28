

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css"

const carousel = (slider) => {
  const z = 300
  function rotate() {
    const deg = 360 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
    rotate()
  })
  slider.on("detailsChanged", rotate)
}

import bgimg1 from '../assets/image/baner1.png'
import bgimg2 from '../assets/image/baner2.webp'
import bgimg3 from '../assets/image/baner3.jpg'
import bgimg4 from '../assets/image/baner4.png'
import { Link } from "react-router-dom"


const Banner = () => {
    const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  )
    return (
      <div className='pt-60 pb-40  mb-14 bg-sky-500 '>
 
      <div className="lg:flex justify-evenly w-10/12 mx-auto   ">
        <div  className="w-6/12 mr-32 ">
              <h4 className="mb-1 md:text-2xl lg:text-4xl text-xl font-semibold">Realise Your Potential</h4> 
              <h1 className=" mb-2 text-white dark:text-black lg:text-6xl md:text-3xl text-2xl font-bold font-Ancizar">Online Tutor Booking</h1>
              <p className="text-lg">Nunc eu hendrerit turpis. Fusce non lectus sem.
                 In pellentesque nunc non pellentesque ultricies.
                  Donec pretium gravida neque et
                 placerat. Aliquam erat volutpat Proin et risus arcu.</p>
                 <button className=" mt-2 bg-sky-500 hover:bg-sky-800 hover:text-white py-1 px-3 rounded-t-xl font-bold border-t-2 border-b-2 "> <Link to={"/findTutors/language"}>Find Tutors</Link></button>
        </div>
     
   <div className="ml-10 ">
                <div className="wrapper ">
      <div className="scene ">
        <div className="carousel keen-slider" ref={sliderRef}>
          <img className="carousel__cell number-slide1" src={bgimg1} alt="" />
          <img className="carousel__cell number-slide1" src={bgimg2} alt="" />
          <img className="carousel__cell number-slide1" src={bgimg3} alt="" />
          <img className="carousel__cell number-slide1" src={bgimg4} alt="" />
          <img className="carousel__cell number-slide1" src={bgimg1} alt="" />
          <img className="carousel__cell number-slide1" src={bgimg2} alt="" />
          <img className="carousel__cell number-slide1" src={bgimg3} alt="" />
          <img className="carousel__cell number-slide1" src={bgimg4} alt="" />
          
          
        </div>
      </div>
    </div>
  </div>
        
      </div>

     
    </div>
    );
};

export default Banner;