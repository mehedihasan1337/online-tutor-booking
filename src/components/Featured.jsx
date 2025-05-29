import './Featured.css'
import featured from '../assets/image/featured.jpg'
import { Link } from 'react-router-dom';
const Featured = () => {
    return (
        <div className='featured-img bg-cover bg-fixed relative inset-0 dark:text-black bg-black bg-opacity-50 ' >
           <div className='inset-0 bg-black bg-opacity-30 py-20'>
               <div className= 'rounded-2xl  bg-black bg-opacity-20 w-8/12 mx-auto  md:flex justify-center  items-center p-10  gap-6'>
               <div>
               <img className='rounded-xl' src={featured} alt="" />
               </div>
                <div className='font-Ancizar font-bold'>
                    <h4 className='text-2xl'>Add a Tutor Easily</h4>
                    <h5 className='uppercase text-4xl text-blue-600 font-extrabold'>Connect Students with Tutors</h5>
                    <p>Tutors can be added quickly and efficiently
                         through our streamlined registration system.
                          With just a few steps, you can input tutor 
                          details, subjects, and availability. This 
                          feature ensures your platform stays updated with a
                         strong network of qualified educators.</p>
                         <button className=" mt-2 text-blue-600 hover:bg-sky-600 hover:text-white py-1 px-3 rounded-t-xl font-bold border-t-2 border-b-2 "> <Link to={"/addTutorials"}>Add Tutor</Link></button>
                </div>

            </div>
           </div>
        </div>
    );
};

export default Featured;