import React from "react";
import Card from "./Card";
import { useState } from "react";

const Cards = ({courses, category}) =>{


    const [likedCourses, setLikedCourses] = useState([]);   //* starting me koi course liked nh hoga


/*  courses ke ander data key value ke form me pada h, to hme un saare courses ke values ko ek single array ke ander dalna hai 
 */
    const getCourses = ()=>{

        if(category === "All"){

            let allCourses = []
        Object.values(courses).forEach( (courseCategory)=> {
            courseCategory.forEach((course)=>{
                allCourses.push(course);
            })
        })
        return allCourses;

        }
        else {
            //* else we return only specific category card(array)

            return courses[category];
        }

        
    }


    return (
       <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses() .map( (course) => {
                   return <Card key={course.id}  course={course} likedCourses={likedCourses} setLikedCourses= {setLikedCourses} />
                })
            }
       </div> 
    )

}

export default Cards;