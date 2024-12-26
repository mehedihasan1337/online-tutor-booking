import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoKey } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginLottieJson from '../assets/lottie/login.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {
    const{loginUser, loginWithGoogle }= useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state || '/'
    
    
    // Google Signin
  const handleGoogleLogin = async () => {
    try {
    await loginWithGoogle() 
      Swal.fire({
        title: "Login success ",
        text: "You clicked the button!",
        icon: "success"
    });
    navigate(from, { replace: true })
    } catch (err) {
    //   console.log(err)
      toast.error(err?.message)
      Swal.fire({
        title: "Login Error",
        text: "You clicked the button!",
        icon: "error"
    });
    }
  }

    // Email Password Signin
  const handleLogin = async e => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    // console.log({ email, password })
    try {
   
      await loginUser(email, password)
      Swal.fire({
        title: "Login success ",
        text: "You clicked the button!",
        icon: "success"
    });
    navigate(from, { replace: true }) 
    } catch (err) {
    //   console.log(err)
      Swal.fire({
        title: "Login Error",
        text: "You clicked the button!",
        icon: "error"
    });
    }
  }

  


    return (
        <div className="hero-content dark:text-black justify-between flex-col mt-28 lg:flex-row-reverse w-8/12 mx-auto">
<div className='w-96'>
<Lottie animationData={loginLottieJson}></Lottie>
</div>
            
            <div className=" flex  font-Roboto  ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl  rounded-none">
            <form onSubmit={handleLogin} className="card-body ">
                <h1 className='text-center  font-bold text-2xl pt-5 font-Oswald text-blue-700 '>Login your account</h1>
                <hr className=' w-64 mx-auto mt-3' />

    
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Email address</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <MdEmail />
                        <input
                            name="email"
                            type="email"
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
                        error.login && (
                            <label className="label text-red-500">
                                {error.login}
                            </label>

                        )
                    } */}

                    <label className="label">
                        <a href="#"
                            className="label-text-alt link link-hover"
                        >Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6 mb-5">
                    <button className="btn btn-primary ">Login</button>
                </div>
                <p className="text-center font-Roboto">Dont’t Have An Account ?<span className="text-red-500 font-Oswald"><Link to="/register"> Register</Link></span></p>
             <span className='divider'>or</span>
                <div className=' mx-auto '>

<button onClick={handleGoogleLogin} className='btn bg-neutral text-white font-Oswald'><FcGoogle />Login With Google </button>
</div>

            </form>


        </div>

    </div>
    
    </div>
    );
};

export default Login;