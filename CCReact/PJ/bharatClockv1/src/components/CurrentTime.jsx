import { useState,useEffect } from "react"

function CurrentTime(){
  let [currentTime,setCurrentTime]=useState(new Date());
  useEffect(()=>{
    const interval=setInterval(()=>{
      setCurrentTime(new Date());
    },1000)
  },[])
return <>
  <h1 className="text-lg
   text-black ">This is the current time : {currentTime.toLocaleDateString()} - {currentTime.toLocaleTimeString()}</h1>
</>
}
export default CurrentTime