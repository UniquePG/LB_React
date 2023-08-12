import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner';

const Blogs = () => {

    //consume our context api 
    const { posts, loading } = useContext(AppContext);     // we can direct use anything from our context api

    console.log("posts inside blogs", posts);

  return (
    <div className='w-11/12 max-w-[670px] py-5 flex flex-col gap-y-7 mt-[65px] mb-[70px]'>
        {
            loading ? 
                ( <Spinner />) : 
                (
                    posts.length === 0 ? 
                    (<div>
                        <p>No posts available</p>    
                    </div>) : 
                    ( posts.map( (post) => ( 
                        <div key={post.id}>
                            <p className='font-bold'>{post.title}</p>
                            <p className='text-[11px]'>
                                By <span className='italic'>{post.author}</span> on <span className='underline font-bold'> {post.category} </span>
                            </p>

                            <p className='text-[13px] mt-[5px]'> Posted on {post.date} </p>

                            <p className='text-md mt-[14px]'> {post.content} </p>

                            <div className='flex gap-x-2 mt-2'>
                                {
                                    post.tags.map( (tag, index)=> {
                                        return <span key={index} className='text-blue-500 underline font-bold text-xs cursor-pointer' >{`#${tag}`}</span>
                                    })
                                }
                            </div>

                        </div>
                     )) )
                )
        }
    </div>
  )
}

export default Blogs