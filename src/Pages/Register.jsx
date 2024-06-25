import React from 'react';
import ofback from "../assets/ofbackg.png";
import oflogo from "../assets/oflogo.png";
import { FaGoogle, FaTwitter } from "react-icons/fa"
import { FiLock } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='flex flex-col md:flex-row w-full h-screen'>
            <div className='w-full md:w-1/2'>
                <img src={ofback} alt="background image" className='md:block hidden object-cover h-full' />
            </div>

            <div className='w-full md:w-1/2 flex items-center justify-center'>

                <div className='mx-auto w-full md:w-[75%] p-6 md:p-20'>
                    <div className='block md:hidden w-full flex-col justify-center mb-8'>
                        <img src={oflogo} alt="only fans logo" className='w-36' />
                        <h1 className='text-3xl text-gray-700 pt-4'>Sign up to support your favorite superhero</h1>
                    </div>
                    <form>
                        <h2 className='font-semibold mb-3'>Create your account</h2>

                        <div className='mb-5'>
                            <label htmlFor="name" className='sr-only'>Name</label>
                            <input
                                type="text"
                                name='name'
                                placeholder='Name'
                                className='appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md ' />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="email" className='sr-only'>Email</label>
                            <input
                                type="email"
                                name='email'
                                placeholder='Email'
                                className='appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md ' />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="password" className='sr-only'>Password</label>
                            <input
                                type="password"
                                name='password'
                                placeholder='Password'
                                className='appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md ' />
                        </div>

                        <div className='mb-5'>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                            >
                                SIGN UP
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-between">
                            <p className='text-sm'>By signing up you agree to our Terms of Service and Privacy Policy, and confirm that you are at least 18 years old.</p>
                            <div className='flex items-center gap-2 mt-4'>
                                <p className='text-md'>Already have an account ?</p>
                                <div className="text-sm">
                                    <Link to={"/"} className="font-medium text-blue-500 hover:text-blue-500">
                                        Log in
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">or continue with</span>
                                </div>
                            </div>
                        </div>


                        <div className='mt-6 grid grid-cols-1 gap-3'>
                            <div>
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-full shadow-sm bg-[#1da1f2] text-md font-medium transition-all duration-200 hover:bg-[#00aff0] text-white"
                                >
                                    <FaTwitter className="h-6 w-7" />
                                    <span className="ml-2">Sign in with X</span>
                                </button>
                            </div>

                            <div>
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-full shadow-sm bg-[#4285f4] text-md font-medium text-white transition-all duration-200 hover:bg-[#4389fa]"
                                >
                                    <FaGoogle className="h-6 w-7" />
                                    <span className="ml-2">Sign in with Google</span>
                                </button>
                            </div>


                            <div>
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm bg-[#00aff0] text-md font-medium text-white transition-all duration-200 hover:bg-[#21aff9] rounded-full"
                                >
                                    <FiLock className="h-6 w-7" />
                                    <span className="ml-2">Passwordless Sign in</span>
                                </button>
                            </div>


                        </div>


                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register