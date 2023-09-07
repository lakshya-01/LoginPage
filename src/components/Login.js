import React from 'react'
import {FaArrowAltCircleLeft, FaArrowLeft, FaGoogle} from "react-icons/fa";

export default function Login() {
  return (
    <div className='h-screen'>
    <div className='flex items-center m-10'>
        <FaArrowLeft className='m-2'></FaArrowLeft>
        <a href=""> Back to Home</a>
    </div>    
    <div className=' flex justify-center items-center my-32'>
        <div className=' border-2 rounded-xl border-black h-80 w-80'>
            <h1 className=' font-semibold text-center text-2xl p-5'>Let's get started</h1>
            <div className=' rounded-full mx-12 my-3 w-52 border border-slate-300 text-center'>
                <a href=''>Sign Up with Google</a>
            </div>
            <div className=' px-12'>
                <h2 className='py-2'>Work Email</h2>
                <input className=' p-1 border rounded-md' type="email" name="email" placeholder="Enter your email address" />
            </div>
            <div className='p-4 text-center'>
                <button className=' py-1 text-white px-3 border rounded bg-red-400'>Try it Now</button>
            </div>
        </div>
    </div>
    </div>

  )
}
