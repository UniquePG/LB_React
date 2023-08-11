import React from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '', password: ""
    })

    const [showPassword, setShowPassword] = useState(false);

//! changeHandler of form input field
    function changeHandler(event) {

        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

//! submit handler-> what to do after submit
    function submitHandler(event) {
        event.preventDefault();

        setIsLoggedIn(true);
        toast.success("Logged in")
        navigate('/dashboard')
    }

  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6 '>
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'> Email Address <sup className='text-pink-200'>*</sup> </p>

            <input type='email' name='email' required placeholder='Enter Email id' onChange={changeHandler} value={formData.email} 
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  border-b-2 border-richblack-25' />
        </label>

        <label className='w-full relative' >
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'> Password <sup className='text-pink-200'>*</sup> </p>

            <input type={ showPassword ? ('text') : ('password') } name='password' required placeholder='Enter Password' onChange={changeHandler} value={formData.password} 
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-25' />

            <span onClick={ ()=> setShowPassword( (prev)=> !prev )} 
            className='absolute right-3 top-[38px] cursor-pointer'>
                {
                    showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye  fontSize={24} fill='#AFB2BF' />)
                }
            </span>

            <Link to='#'>
                <p className='text-xs mt-1 text-blue-100 w-full max-w-max ml-auto'>
                    Forgot password
                </p>
            </Link>
            
        </label>

        <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 py-2 mt-6'>
            Log in
        </button>

    </form>
  )
}

export default LoginForm