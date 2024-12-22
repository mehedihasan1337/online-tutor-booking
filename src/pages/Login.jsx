import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoKey } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginLottieJson from '../assets/lottie/login.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const{loginUser, setUser, loginWithGoogle }= useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [error, setError] = useState({})
      // google login   !


      const handleGoogleLogin = () => {

        loginWithGoogle()
            .then(result => {
                const user = result.user
                setUser(user)

                navigate(location?.state ? location.state : "/")
                Swal.fire({
                    title: "Login success",
                    text: "You clicked the button!",
                    icon: "success"
                });


            })
            .catch((err) => {

                setError({ ...error, login: err.code })



            });
        }

    const handleLogin=e=>{
        e.preventDefault()
        // form data
        const form = new FormData(e.target)
        const email = form.get("email")
        const password = form.get("password")
          

           loginUser(email,password)
        .then(result => {
            const user = result.user
            setUser(user)
            navigate(location?.state ? location.state : "/")
            Swal.fire({
                title: "Login success ",
                text: "You clicked the button!",
                icon: "success"
            });


        })
        .catch((err) => {
            setError({ ...error, login: err.code })
            Swal.fire({
                title: "Login Error",
                text: "You clicked the button!",
                icon: "error"
            });

        });
    
    }


    return (
        <div className="hero-content justify-between flex-col mt-28 lg:flex-row-reverse w-8/12 mx-auto">
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