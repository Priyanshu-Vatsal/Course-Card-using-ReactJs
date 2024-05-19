import { useEffect, useState } from 'react'
import {apiUrl,filterData} from './data'
import Navbar from "./component/Navbar"
import Cards from "./component/Cards"
import Filter from "./component/Filter"
import './App.css'
import { toast } from 'react-toastify'

function App() {

  const [course,setCourse]=useState(null)

  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const res=await fetch(apiUrl);
        const output=await res.json();
        setCourse(output.data);
      }
      catch(e){
        toast.error("Someting went wrong!!");
      }
    }
    fetchData();
  },[])

  return (
    <div>
      <Navbar></Navbar>
      <Filter filterData={filterData}></Filter>
      <Cards course={course} ></Cards>
    </div>
  )
}

export default App
