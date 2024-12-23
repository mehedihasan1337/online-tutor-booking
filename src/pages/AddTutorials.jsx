import React from 'react';
import useAuth from '../hooks/useAuth';

import informationLottieJson from '../assets/lottie/information.json'
import Lottie from 'lottie-react';
import { data } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddTutorials = () => {
    const { user } = useAuth()


    const handleAddTutor = e => {
        e.preventDefault()

        const formData = new FormData(e.target)
        //    console.log(formData.entries())
        const initialData = Object.fromEntries(formData.entries())
        console.log(initialData)
        const { price, category, ...newTutor } = initialData
        console.log(newTutor)
        newTutor.price = { price, category }
        console.log(newTutor)


        fetch(`http://localhost:5000/tutor`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTutor)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: " success!",
                        text: "success Add Tutorials",
                        icon: "success"
                    });
                }
            })

    }




    return (
        <div className='hero-content justify-between flex-col mt-28 lg:flex-row-reverse mx-auto' >

            <div className=''>
                <Lottie animationData={informationLottieJson}></Lottie>
            </div>

            <div>
                <h2 className="text-3xl font-bold mt-10 text-center font-Oswald text-gray-800">Post A Tutor Information</h2>
                <form onSubmit={handleAddTutor} className="card-body">

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



                    {/* review */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-xl"> review </span>
                        </label>
                        <select defaultValue="0" type="text" name=' review ' className="select select-ghost input input-bordered w-full">
                            <option disabled >0</option>
                            <option >01</option>
                            <option >02</option>
                            <option >03</option>
                            <option >04</option>
                            <option >05</option>


                        </select>
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