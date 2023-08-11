import React from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

function SignupForm({setIsLoggedIn}) {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstname: '', 
        lastname: '', 
        email: '', 
        password: '', 
        confirmPassword: ''
    })

    function changeHandler(event) {

        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    const [showPassword, setShowPassword] = useState(false);

    const [accountType, setAccountType ] = useState('student')


    function submitHandler(event){
        event.preventDefault();

        if(formData.password !== formData.confirmPassword){
          return  toast.error("Password and confirm password not matched")
        }

        setIsLoggedIn(true);
        toast.success("Account created");

        navigate('/dashboard')
    }

  return (
    <div className=''>
        {/* Student and instructor button */}
        <div className='flex bg-richblack-800 p-1 my-6  max-w-max rounded-full'>
            <button
            className={` ${accountType === 'student' ? ("bg-richblack-900 text-richblack-5" ): ("bg-transparent text-richblack-200")} py-2 px-5 rounded-full transition-all duration-200 `}
            onClick={ ()=> setAccountType('student')} >
                Student
            </button>

            <button
            className={` ${accountType === 'instructor' ? ("bg-richblack-900 text-richblack-5" ): ("bg-transparent text-richblack-200")} py-2 px-5 rounded-full transition-all duration-200 `} 
            onClick={ ()=> setAccountType('instructor')}>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler}>
            {/* firstname and lastname */}
            <div className='flex gap-x-4 mt-[20px]'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>FirstName <sup className='text-pink-200'>*</sup></p>

                    <input
                        type='text'
                        required
                        onChange={changeHandler}
                        placeholder='Enter first name'
                        name='firstname'
                        value={formData.firstname}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  border-b-2 border-richblack-25'
                    />
                </label>
                
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>LastName <sup className='text-pink-200'>*</sup></p>

                    <input
                        type='text'
                        required
                        onChange={changeHandler}
                        placeholder='Enter last name'
                        name='lastname'
                        value={formData.lastname}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  border-b-2 border-richblack-25'
                    />
                </label>
            </div>

            {/* email fields */}
            <div className='w-full mt-[20px]'>
                <label className='w-full mt-[20px]'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup></p>

                    <input
                        type='email'
                        required
                        onChange={changeHandler}
                        placeholder='Enter email id'
                        name='email'
                        value={formData.email}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  border-b-2 border-richblack-25'
                    />
                </label>
            </div>
            

            {/* password and confirm password */}
           <div className='flex gap-x-4  mt-[20px]'>
            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create password <sup className='text-pink-200'>*</sup></p>

                    <input
                       type={ showPassword ? ('text') : ('password') }
                        required
                        onChange={changeHandler}
                        placeholder='Create Password'
                        name='password'
                        value={formData.password}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  border-b-2 border-richblack-25'
                    />

                    <span onClick={ ()=> setShowPassword( (prev)=> !prev )} 
                     className='absolute right-3 top-[38px] cursor-pointer'>
                    {
                        showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'  />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'  />)
                    }
                    </span>

                </label>

                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password <sup className='text-pink-200'>*</sup></p>

                    <input
                        type={ showPassword ? ('text') : ('password') }
                        required
                        onChange={changeHandler}
                        placeholder='confirm password'
                        name='confirmPassword'
                        value={formData.confirmPassword}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  border-b-2 border-richblack-25'
                    />

                    <span onClick={ ()=> setShowPassword( (prev)=> !prev )}  
                     className='absolute right-3 top-[38px] cursor-pointer'>
                        {
                            showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'  />) : (<AiOutlineEye  fontSize={24} fill='#AFB2BF' />)
                        }
                    </span>

                </label>
           </div>

           <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 py-2 mt-6'>
                Create Account
           </button>

        </form>


    </div>
  )
}

export default SignupForm