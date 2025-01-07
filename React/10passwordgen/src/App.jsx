import { useState, useCallback ,useEffect,useRef } from "react";
function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  // useRef hook
  const passwordRef=useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_-+=~`{}";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPassToClipboard=useCallback(()=>{window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed,passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 rounded-md px-3"
            placeholder="password"
            ref={passwordRef}
            readOnly
          />
          <button onClick={copyPassToClipboard} className="outline-none bg-blue-700 text-white px-4 py-2 mx-1 rounded-md shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" 
            min={8}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={numAllowed} 
            className="cursor-pointer"
            id="numberInput"
            onChange={()=>{setNumAllowed(prev=>!prev)}}
            />
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={charAllowed} 
            className="cursor-pointer"
            onChange={()=>{setCharAllowed(prev=>!prev)}}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
