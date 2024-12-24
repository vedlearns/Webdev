import {useState} from 'react';

import './App.css'

function App() {
  let [counter,setCounter]=useState(0)
  // let Counter=5;           Ye khi update hi nhi hoga to isko use hi nhi krna 

  const addValue=()=>{
    if(counter<20)
    setCounter(counter+=1);
  }
  function removeValue(){
    if(counter>0)
    setCounter(counter-=1);
   
  }

  return (
    <>
      <h2>Hello</h2>
      <h3>Counter value: {counter}</h3>

      <button
      onClick={addValue}
      >Add Value</button>
      <br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
