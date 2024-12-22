import React from 'react';
import useAuth from '../hooks/useAuth';

import informationLottieJson from '../assets/lottie/information.json'
import Lottie from 'lottie-react';

const AddTutorials = () => {
    const { user } = useAuth()
    return (
        <div className='hero-content justify-between flex-col mt-28 lg:flex-row-reverse mx-auto' >
           
           <div className=''>
           <Lottie animationData={informationLottieJson}></Lottie>
           </div>
           
            <div>
            <h2 className="text-3xl font-bold mt-10 text-center font-Oswald text-gray-800">Post A Tutor Information</h2>
                <form className="card-body">

                    {/* name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    {/* email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Email</span>
                        </label>
                        <input defaultValue={user?.email} type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>

                    {/* Image */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-xl"> Image</span>
                        </label>
                        <input type="text" name='image' placeholder="image" className="input input-bordered" required />
                    </div>




                    {/* language category */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-xl">language</span>
                        </label>
                        <select defaultValue="Select a language" type="text" name='language' className="select select-ghost input input-bordered w-full">
                            <option disabled >Select a language</option>
                            <option >English tutors</option>
                            <option>Spanish tutors </option>
                            <option> French tutors</option>
                            <option> German tutors</option>
                            <option> Italian tutors</option>
                            <option> Chinese tutors</option>
                            <option> Arabic tutors</option>
                            <option> Japanese tutors</option>
                            <option> Portuguese tutors</option>

                        </select>
                    </div>


                    {/* price */}
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-end'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-xl">price</span>
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
                            <span className="label-text font-bold text-xl"> description</span>
                        </label>

                        <textarea
                            type="text" name='description' placeholder="Job description"
                            className="textarea textarea-bordered textarea-xs w-full"></textarea>

                    </div>

                    {/* job requirements */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Job requirements</span>
                        </label>
                        <textarea
                            type="text" name='requirements' placeholder="Put each requirements in a new line"
                            className="textarea textarea-bordered textarea-xs w-full"></textarea>
                    </div>

                    {/* review */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-xl">review </span>
                        </label>
                        <input type="text" name='review ' placeholder="review " className="input input-bordered" required />
                    </div>



                    {/* submit */}
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTutorials;