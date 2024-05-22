import { useEffect, useState } from 'react'
import {apiUrl,filterData} from './data'
import Navbar from "./component/Navbar"
import Cards from "./component/Cards"
import Filter from "./component/Filter"
import './App.css'
import { toast } from 'react-toastify'
import Spinner from './component/Spinner'

function App() {

  const [course,setCourse]=useState([])
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title);


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
    <div className='min-h-screen flex flex-col bg-gray-600'>
      <div>
        <Navbar></Navbar>
      </div>

      <div className='bg-gray-600'>
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
        </div>
        <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
          {
            loading?(<Spinner></Spinner>):(<Cards course={course} category={category}></Cards>)
          }
        </div>
      </div>
      
    </div>
  )
}

export default App
