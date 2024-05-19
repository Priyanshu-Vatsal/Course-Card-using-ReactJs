import React from "react";
import Card from "./Card";

function Cards({course}){

    let allCourses=[];

    //it return a list of all courses received fromt the api
    const getCouses=()=>{
        Object.values(course).forEach((courseCategory)=>{
            courseCategory.forEach((course)=>{
                allCourses.push(course);
            })
        })
        return allCourses;
    }

    return(
        <div>
            
            {
                getCouses().map((course) =>{
                    return <Card key={course.key} course={course}></Card>
                })
            }
        </div>
    )
}

export default Cards