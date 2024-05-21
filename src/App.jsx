import { useEffect, useState } from 'react'
import {apiUrl,filterData} from './data'
import Navbar from "./component/Navbar"
import Cards from "./component/Cards"
import Filter from "./component/Filter"
import './App.css'
import { toast } from 'react-toastify'
import Spinner from './component/Spinner'

function App() {

  const [course,setCourse]=useState(null)
  const [loading,setLoading]=useState(true);


  async function fetchData(){
    setLoading(true);
    try{
      let responce=await fetch(apiUrl);
      let output=await responce.json();
      setCourse(output.data);
    }
    catch(error){
      toast.error("Network Error!!");
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className='min-h-screen flex flex-col'>
      <div>
      <Navbar></Navbar>
      </div>
      <div>
      <Filter filterData={filterData}></Filter>
      </div>
      <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
        {
          loading?(<Spinner></Spinner>):(<Cards course={course}></Cards>)
        }
      </div>
      
    </div>
  )
}

export default App
