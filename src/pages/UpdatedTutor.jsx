import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { data, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const UpdatedTutor = () => {
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    const{id}=useParams()
    const [tutor,setTutor]=useState({})
    
  
    useEffect(()=>{
        fetchTutorData()
    },[id])
    const fetchTutorData= async()=>{
        const {data}=await axios.get(`${import.meta.env.VITE_API_URL}/tutor/${id}`)
           
        setTutor(data)
       
    }
    const handleUpdateTutor = async e => {
        e.preventDefault()

        const form = e.target

        const email = form.email.value
        const image = form.image.value
        const language = form.language.value
        const price = parseFloat(form.price.value)
        const category = form.category.value
        const description = form.description.value
        // const review = form.review.value

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
            review:tutor.review
        }
        console.log(newTutor)


        try {
            await axios.put(`${import.meta.env.VITE_API_URL}/update-tutor/${id}`,
                newTutor

            )
            form.reset()
            Swal.fire({
                title: " success!",
                text: "success Update Tutorials",
                icon: "success"
            });
            navigate('/myTutorials')
        } catch (err) {
            Swal.fire({
                title: " Error!",
                text: "Something went Wrong!!",
                icon: "error"
            });
            console.log(err)
        }   



    }





    return (
        <div className='hero-content font-Roboto  flex-col mt-28  mx-auto' >

       

        <div>
            <h2 className="text-3xl font-bold mt-10 text-center font-Oswald text-gray-800">Update A Tutor Information</h2>
            <form onSubmit={handleUpdateTutor} className="card-body">

                {/* name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-xl">Name</span>
                    </label>
                    <input defaultValue={user?.displayName} disabled={true} type="text" name='name' className="input text-black font-bold input-bordered" required />
                </div>
                {/* email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-xl">Email</span>
                    </label>
                    <input defaultValue={user?.email} disabled={true} type="email" name='email' placeholder="email" className="input font-bold input-bordered" required />
                </div>

                {/* Image */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-xl"> Image</span>
                    </label>
                    <input type="text" name='image' defaultValue={tutor.image} placeholder="image" className="input font-bold input-bordered" required />
                </div>




                {/* language category */}
       {
        tutor.language && (
            <div className="form-control">
            <label className="label">
                <span className="label-text font-bold text-xl">language</span>
            </label>
            <select defaultValue={tutor.language} type="text" name='language' className="select select-ghost input font-bold input-bordered w-full">
                <option value='English' > English </option>
                <option value='Spanish' > Spanish  </option>
                <option value='French' > French </option>
                <option value='German' > German </option>
                <option value='Italian' > Italian </option>
                <option value='Chinese' > Chinese </option>
                <option value='Arabic' > Arabic </option>
                <option value='Japanese' > Japanese </option>
                <option value='Portuguese' > Portuguese </option>

            </select>
        </div>
        )
       }        


                {/* price */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-end'>
                    <div className="form-control">
                        <label className="label">

                            <span className="label-text font-bold text-xl">price</span>
                        </label>
                        <input type="text"defaultValue={tutor.Price?.price} name='price' placeholder="price" className="input font-bold input-bordered" required />
                    </div>

                    {
                        tutor.Price?.category && (
                            <div className="form-control">

                        <select defaultValue={tutor.Price?.category}  type="text" name='category' className="select select-ghost font-bold w-full input input-bordered ">
                            <option disabled >Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>

                        </select>
                    </div>
                        )
                    }
                </div>
                {/*  description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-xl"> description</span>
                    </label>

                    <textarea
                        type="text" name='description' defaultValue={tutor.description} placeholder="Job description"
                        className="textarea font-bold textarea-bordered textarea-xs w-full"></textarea>

                </div>


        


                {/* submit */}
                <div className="form-control mt-6">
                    <button className="btn text-2xl text-white hover:text-black hover:bg-green-500 btn-primary">Update</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default UpdatedTutor;