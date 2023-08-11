import React from "react";
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from "react-toastify";

const Card = ({course, likedCourses, setLikedCourses})=> {


    function clickHandler(){

        if(likedCourses.includes(course.id)){
            //* it means bo card phle se liked hai to us like ko remove krna hai
            setLikedCourses( (prevLikedList) => prevLikedList.filter( (cid)=> (cid !== course.id) ) )
            toast.warning("Like Removed")

        }
        else{
            //* it means phle se like nahi hai
            //* to hme is course ko add karna h likedcourses me
            if(likedCourses.length === 0){
                setLikedCourses([course.id])
            } 
            else{
                //* age liked course ke ander phle se kuch course id dali h
                setLikedCourses( (prev) => [...prev, course.id])
            }

            toast.success("Liked Successfully")

        }
    }


    return (
       <div className="bg-[#92B4A7] w-[300px] bg-opacity-80 rounded-md overflow-hidden ">
            <div className="relative">
                <img src={course.image.url} />

                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 -bottom-3 grid place-items-center ">
                    <button onClick={clickHandler}> 
                        {
                            likedCourses.includes(course.id) ?  ( <FcLike fontSize='1.75rem' />) :( <FcLikePlaceholder fontSize='1.75rem' /> ) 
                        }
                     </button>
                </div>
            </div>

            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6"> {course.title}</p>
                <p className="mt-2 text-white">
                    {
                        course.description.length >100 ? 
                        (course.description.substr(0, 100)) + "..." :
                        (course.description)
                    }
                </p>
            </div>
       </div>
    )
}

export default Card
