import './App.css'
import Card from './Components/Card'

function App() {
let myobj={
  firstname:"Vedank",
  lastname:"singh"
}
let myArray=[1,2,6,9,8];
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind Bhaiyaa</h1>
      <Card username="Ved" object={myobj} array={myArray}/>
      <Card username="Sheru " />
      <Card username='Susu' />
    </>
  )
}

export default App
 