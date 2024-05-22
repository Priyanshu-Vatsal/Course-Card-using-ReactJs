import React, { useState } from "react";
import Card from "./Card";

function Cards(props){

    let course=props.course;
    let category=props.category;
    const [likedCourses, setLikedCourses]=useState([]);

    function getCouses(){
        if(category==="All"){
            let allCourses=[];

            Object.values(course).forEach(array =>{
                array.forEach(courseData =>{
                allCourses.push(courseData);
            })
        })
        return allCourses;
        }
        else{
            return course[category];
        }  
    }

    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCouses().map((course) =>{
                    return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
                })
            }
        </div>
    )
}

export default Cards