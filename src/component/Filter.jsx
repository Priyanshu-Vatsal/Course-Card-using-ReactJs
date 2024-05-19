import React from "react";

function Filter({filterData}){
    return(
        <div>
            {filterData.map((data)=>{
                return <button key={data.key}>{data.title}</button>
            })}
        </div>
    )
}

export default Filter