import React, { useContext, useState } from 'react';
import { IoKey } from 'react-icons/io5';
import { MdAddPhotoAlternate, MdDriveFileRenameOutline, MdEmail } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import registerLottieJson from '../assets/lottie/Register.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const {createNewUser,setUser, updateUserProfile}= useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [error, setError] = useState({})

    const handleRegister=e=>{
        e.preventDefault()
        // form data
        const form = new FormData(e.target)
        const name = form.get("name")
        const email = form.get("email")
        const photo = form.get("photo")
        const password = form.get("password")
        



        createNewUser(email,password)
  
        .then((result) => {
            const user = result.user
            const newUser = { name, email, photo }
            setUser(user)
            navigate(location?.state ? location.state : "/")

            fetch('https://online-tutor-booking-platform-server-liard.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser) 
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            title: "Register success",
                            text: "You clicked the button!",
                            icon: "success"
                        });
                    }
                })
                updateUserProfile({ displayName: name, photoURL: photo })
                .then(() => {
                    navigate("/")
                }).catch(err=>{
                    // console.log(err)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // console.log(errorCode, errorMessage)
                });
    
        })
    }
    return (
        <div className="hero-content dark:text-black font-Roboto justify-between flex-col lg:flex-row-reverse w-8/12 mx-auto">
        <div className='w-96'>
        <Lottie animationData={registerLottieJson}></Lottie>
        </div>
            <div className="min-h-screen  flex   justify-center items-center   ">
        <div className="card bg-base-100 dark:bg-gray-900 mt-8 w-full max-w-sm shrink-0 shadow-2xl rounded-none">



            <form onSubmit={handleRegister} className="card-body   ">
                <h1 className='text-center  font-bold text-2xl pt-5 font-Oswald text-blue-700 '>Register your account</h1>
                <hr className=' w-64 mx-auto mt-3' />
                <div >
                    <label className="label">
                        <span className="label-text font-bold dark:text-white">Your Name</span>
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
                        <span className="label-text font-bold dark:text-white">Email </span>
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
                        <span className="label-text font-bold dark:text-white">Password</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <IoKey />

                        <input type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full bg-gray-100"
                            required />
                    </label>

                    {
                        error.password && (
                            <label className="label text-red-500">

                            </label>

                        )
                    }

                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover dark:text-white">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold dark:text-white">Photo URL</span>
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
                    <button className="btn btn-primary dark:text-white ">Register</button>

                </div>
                <p className="text-center font-Roboto dark:text-white"> Allready Have An Account ?<span className="text-red-500 font-Oswald"><Link to="/login"> Login</Link></span></p>




            </form>

        </div>

    </div>
    </div>
    );
};

export default Register;