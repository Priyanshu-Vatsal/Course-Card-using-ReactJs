import React from "react";

function Filter(props){
    let filterData=props.filterData;

    return(
        <div className="w-11/12 flex flex-wrap space-x-4 gap-y-4 max-auto py-4 justify-center ">
            {filterData.map((data)=>{
                return <button key={data.id}>{data.title}</button>
            })}
        </div>
    )
}

export default Filter