import React from "react";
import {FcLike} from "react-icons/fc"

function Card(props){
    let course=props.course;
    return(
        <div className='bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden'>

            <div className='relative '>
                <img src={course.image.url}/>

                <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
                    <button>
                        <FcLike fontSize="1.75rem"></FcLike>
                    </button>
                </div>
            </div>
            
            <div className='p-4'>
                <p className='text-white text-lg font-semibold leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>{course.description}</p>
            </div>

        </div>
    )
}

export default Card