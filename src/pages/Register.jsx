import React from 'react';
import { IoKey } from 'react-icons/io5';
import { MdAddPhotoAlternate, MdDriveFileRenameOutline, MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import registerLottieJson from '../assets/lottie/Register.json'
import Lottie from 'lottie-react';

const Register = () => {
    return (
        <div className="hero-content justify-between flex-col lg:flex-row-reverse w-8/12 mx-auto">
        <div className='w-96'>
        <Lottie animationData={registerLottieJson}></Lottie>
        </div>
            <div className="min-h-screen  flex  font-Roboto justify-center items-center   ">
        <div className="card bg-base-100 mt-8 w-full max-w-sm shrink-0 shadow-2xl rounded-none">



            <form className="card-body   ">
                <h1 className='text-center  font-bold text-2xl pt-5 text-blue-700 '>Register your account</h1>
                <hr className=' w-64 mx-auto mt-3' />
                <div >
                    <label className="label">
                        <span className="label-text font-bold">Your Name</span>
                    </label>
                    <label className=" input input-bordered  flex items-center gap-2">
                        <MdDriveFileRenameOutline />
                        <input type="text"
                            name="name"
                            className="  w-full bg-gray-100"
                            placeholder="Enter your name" />
                    </label>
                </div>


                

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Email </span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <MdEmail />
                        <input type="email"
                            name="email"
                            placeholder="Enter your email address"
                            className=" w-full bg-gray-100"
                            required />
                    </label>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Password</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <IoKey />

                        <input type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full bg-gray-100"
                            required />
                    </label>

                    {/* {
                        error.password && (
                            <label className="label text-red-500">

                            </label>

                        )
                    } */}

                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Photo URL</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <MdAddPhotoAlternate />
                        <input type="text"
                            name="photo"
                            placeholder="Enter your photo url"
                            className="w-full bg-gray-100"
                        />
                    </label>
                </div>
                <div className="form-control mt-6 mb-5">
                    <button className="btn btn-primary ">Register</button>

                </div>
                <p className="text-center"> Allready Have An Account ?<span className="text-red-500"><Link to="/login"> Login</Link></span></p>




            </form>

        </div>

    </div>
    </div>
    );
};

export default Register;