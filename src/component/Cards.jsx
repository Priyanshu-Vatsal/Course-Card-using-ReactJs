import React from "react";
import Card from "./Card";

function Cards(props){

    let course=props.course;

    function getCouses(){

        let allCourses=[];

        Object.values(course).forEach(array =>{
            array.forEach(courseData =>{
                allCourses.push(courseData);
            })
        })

        return allCourses;
    }

    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">

            {
                getCouses().map((course) =>{
                    return <Card key={course.id} course={course}></Card>
                })
            }
        </div>
    )
}

export default Cards