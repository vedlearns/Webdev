import { useState } from "react";

function App() {
  const [color, setColor] = useState("purple");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    > 
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-20 px-2">
        
        <div  className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"
          style={{cursor:"pointer"}}>
          text
        </div>
        <button
        onClick={()=>{setColor("red")}}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{
            backgroundColor: "red",
          }
        }
        >
          Red
        </button>
        <button
         onClick={()=>{setColor("green")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{
            backgroundColor: "green",
          }}
        >
          Green
        </button>
        <button
         onClick={()=>{setColor("blue")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{
            backgroundColor: "blue",
          }}
        >
          Blue
        </button>
        <button
         onClick={()=>{setColor("pink")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{
            backgroundColor: "pink",
          }}
        >
          Pink
        </button>
        <button
         onClick={()=>{setColor("orange")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{
            backgroundColor: "Orange",
          }}
        >
          Orange
        </button>
        <button
         onClick={()=>{setColor("yellow")}}
          className="outline-none px-4 py-1 rounded-full text-red-300 shadow-lg"
          style={{
            backgroundColor: "yellow",
          }}
        >
          Yellow
        </button>
      </div>
    </div>
  );
}

export default App;
