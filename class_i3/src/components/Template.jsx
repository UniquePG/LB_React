import React from 'react'
import frameImg from '../assets/frame.png'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { FcGoogle } from 'react-icons/fc'

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {


  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 justify-between text-richblack-100 '>
        
        <div className='w-11/12 max-w-[450px] flex flex-col' >
            <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'> {title}</h1>

            <p className='text-[1.125rem] leading-[1.625rem] mt-4 '>  
                <span className='text-richblack-100'>{desc1}</span> <br />
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>

            {/* Show login or signup form according to the form type */}
            {
                formtype === 'signup' ?
                ( <SignupForm setIsLoggedIn={setIsLoggedIn} /> ) :
                ( <LoginForm setIsLoggedIn={setIsLoggedIn} /> )
            }

            <div className='flex w-full items-center gap-x-2 my-4'>
                <div className='h-[1px] w-full bg-richblack-700 '></div>
                <p className='text-richblack-700 font-medium leading-[1.375rem]'>OR</p>
                <div className='h-[1px] w-full bg-richblack-700 '></div>
            </div>

            <button className='flex rounded-md items-center justify-center border border-richblack-700 font-medium text-richblack-100 px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle />
                <p >Singup with google</p>
            </button>

        </div>

        <div className='relative w-11/12 max-w-[450px] '>
            <img src={frameImg} alt='pattern' width={558} height={504} loading='lazy' />

            <img src={image} alt='student' width={558} height={504} loading='lazy' 
            className='absolute -top-4 right-4' />
        </div>

    </div>
  )
}

export default Template



/* w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 py-[8px] gap-x-2 mt-6 */