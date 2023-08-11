import React from 'react'
import logo from '../assets/Logo.svg'
import {Link} from 'react-router-dom'
import { toast } from 'react-hot-toast';

const Navbar = (props) => {

    let isLoggesin = props.isLoggedin;
    let setIsLoggedin = props.setIsLoggedIn

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto '>

        <Link to='/' >
            <img src={logo} alt='logo' width={160} height={32} loading='lazy' />
        </Link>

        <nav className=''>
            <ul className='flex gap-x-6 text-white  '>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/'>About</Link>
                </li>
                <li>
                    <Link to='/'>Contact</Link>
                </li>
            </ul>
        </nav>

        <div className='flex gap-x-3 items-center '>
            {   !isLoggesin &&            /* jav user login nahi hoga tab ye show hoga */
                <Link to='/login'>
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 '>
                        Login
                    </button>
                </Link>
            }
            {   !isLoggesin &&            /* jav user login nahi hoga tab ye show hoga */
                <Link to='/signup'>
                    <button className='bg-richblack-800 text-richblack-100  py-[8px] px-[12px] rounded-[8px] border border-richblack-700 '> 
                        Sing up
                    </button>
                </Link>
            }
            {   isLoggesin &&            /* jav user login  hoga tab ye show hoga */
                <Link to='/logout' onClick={ ()=>{
                    setIsLoggedin(false)
                    toast.success("Logged out")
                }}>
                    <button className='bg-richblack-800 text-richblack-100  py-[8px] px-[12px] rounded-[8px] border border-richblack-700 '> 
                        Logout    
                    </button>

                </Link>
            }
            {   isLoggesin &&            /* jav user login  hoga tab ye show hoga */
                <Link to='/dashboard'>
                    <button className='bg-richblack-800 text-richblack-100  py-[8px] px-[12px] rounded-[8px] border border-richblack-700 '>
                        Dashboard
                    </button>
                </Link>
            }
        </div>

    </div>
  )
}

export default Navbar