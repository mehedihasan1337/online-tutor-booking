import './Featured.css'
import featured from '../assets/image/featured.jpg'
const Featured = () => {
    return (
        <div className='featured-img bg-cover bg-fixed relative inset-0 dark:text-black bg-black bg-opacity-50 ' >
           <div className='inset-0 bg-black bg-opacity-30'>
               <div className= '   md:flex justify-center  items-center pb-20  pt-12 mx-36 gap-6'>
               <div>
               <img className='rounded-xl' src={featured} alt="" />
               </div>
                <div className=' font-bold'>
                    <h4>March 20, 2028</h4>
                    <h5 className='uppercase'>WHERE CAN I GET SOME?</h5>
                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Ratione ab neque atque
                        ea commodi inventore, reprehenderit nemo
                        reiciendis recusandae officia totam sit nulla
                        repudiandae, optio cupiditate vitae sequi
                        praesentium quasi expedita molestias alias
                        . Alias repudiandae fugit exercitationem ab quo
                        perspiciatis.</p>
                        <button className='btn btn-outline border-0 border-b-4 mt-3'>Order Now</button>
                </div>

            </div>
           </div>
        </div>
    );
};

export default Featured;