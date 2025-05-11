import React from 'react';
import useAuth from '../hooks/useAuth';

import informationLottieJson from '../assets/lottie/information.json'
import Lottie from 'lottie-react';
import { data, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const AddTutorials = () => {
    const navigate = useNavigate()
    const { user } = useAuth()


    const handleAddTutor = async e => {
        e.preventDefault()

        const form = e.target

        const email = form.email.value
        const image = form.image.value
        const language = form.language.value
        const price = parseFloat(form.price.value)
        const category = form.category.value
        const description = form.description.value
        const review = form.review.value

        const newTutor = {

            buyer: {
                email,
                name: user?.displayName,
                photo: user?.photoURL

            },
            image,
            language,
            Price: {
                price,
                category,
            },
            description,
            review,
        }
        // console.log(newTutor)


        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/tutors`,
                newTutor

            )
            form.reset()
            Swal.fire({
                title: " success!",
                text: "success Add Tutorials",
                icon: "success"
            });
            navigate('/myTutorials')
        } catch (err) {
            Swal.fire({
                title: " Error!",
                text: "Something went Wrong!!",
                icon: "error"
            });
            // console.log(err)
        }



     

    }




    return (
        <div className='text-black' >
            <div className='w-full h-[550px] overflow-hidden mb-10  '>
            <img  className="w-full h-full object-cover" src="https://i.ibb.co.com/fddCxPdp/7dbbb1f84a5bb3dbf0ea3298ff0b1254.png" alt="" />
          </div>
           <div className='hero-content justify-between  flex-col lg:flex-row-reverse mx-auto' >
             <div className=''>
                <Lottie animationData={informationLottieJson}></Lottie>
            </div>

            <div className='dark:bg-gray-800 dark:text-white '>
                <h2 className="text-3xl font-bold mt-10 text-center font-Oswald px-2 text-gray-800 dark:text-white">Post A Tutor Information</h2>
                <form onSubmit={handleAddTutor} className="card-body">

                    {/* name */}
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text font-bold text-xl dark:text-white">Name</span>
                        </label>
                        <input defaultValue={user?.displayName} disabled={true} type="text" name='name' className="input text-black input-bordered " required />
                    </div>
                    {/* email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-xl dark:text-white">Email</span>
                        </label>
                        <input defaultValue={user?.email} disabled={true} type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>

                    {/* Image */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-xl dark:text-white"> Image</span>
                        </label>
                        <input type="text" name='image' placeholder="image" className="input input-bordered" required />
                    </div>




                    {/* language category */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-xl dark:text-white">language</span>
                        </label>
                        <select defaultValue="Select a language" type="text" name='language' className="select select-ghost input input-bordered w-full">
                            <option disabled >Select a language</option>
                            <option >English </option>
                            <option>Spanish  </option>
                            <option> French </option>
                            <option> German </option>
                            <option> Italian </option>
                            <option> Chinese </option>
                            <option> Arabic </option>
                            <option> Japanese </option>
                            <option> Portuguese </option>

                        </select>
                    </div>


                    {/* price */}
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-end'>
                        <div className="form-control">
                            <label className="label">

                                <span className="label-text font-bold text-xl dark:text-white">price</span>
                            </label>
                            <input type="text" name='price' placeholder="price" className="input input-bordered" required />
                        </div>

                        <div className="form-control">

                            <select defaultValue="Currency" type="text" name='category' className="select select-ghost w-full input input-bordered ">
                                <option disabled >Currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>INR</option>

                            </select>
                        </div>
                    </div>
                    {/*  description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-xl dark:text-white"> description</span>
                        </label>

                        <textarea
                            type="text" name='description' placeholder="Job description"
                            className="textarea textarea-bordered textarea-xs w-full"></textarea>

                    </div>



                     {/* review */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-xl dark:text-white"> review </span>
                        </label>
                        <select defaultValue="0" type="text" name='review' className="select select-ghost input input-bordered w-full">
                            <option disabled >0</option>
                            <option >1</option>
                            <option >2</option>
                            <option >3</option>
                            <option >4</option>
                            <option >5</option>


                        </select>
                    </div> 


                    {/* submit */}
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
           </div>
        </div>
    );
};

export default AddTutorials;