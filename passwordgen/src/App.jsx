import { useState, useCallback,useEffect,useRef } from "react";
import "./index.css";

// import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [charater, setCharater] = useState(false);
  const [password, setPassword] = useState("");

  // useReff hook
  const passwordRef = useRef(null);

  const copyOnClickBoard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    // passwordRef.current.select();
    alert("Password Copied");
  },[password])



  const PasswordGen = useCallback(() => {
    let pass = "";
    let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    if (number) {
      str += "0123456789";
    }
    if (charater) {
      str += "!@#$%^&*()_+ = {}";
    }
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, charater, setPassword]);

useEffect(()=>{
  PasswordGen();
},
[length,number,charater,PasswordGen])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px=4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 m-5 bg-white align-middle">
          <input
           type="text" 
           value={password}
           className="outline-none w-full py-1 px-3 text-gray-700"
           placeholder="Password"
           readOnly 
           ref={passwordRef}
           />
           <button
           onClick={copyOnClickBoard}
           className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input 
          type="range" 
          min={0}
          max={16}
          value={length}
          className="cursor-pointer"
          onChange={(e) => setLength(e.target.value)}
          />
          <label >Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox"
          checked={number}
          className="cursor-pointer"
          onChange={() => setNumber((prev)=> !prev)}
          />
          <label>Number{number}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox" 
          checked={charater}
          onChange={() => setCharater((prev)=> !prev)} // (prev)=> !prev) is set for if value is true then it will be false and vice versa in short it store value and then chage it to opposite value
          className="cursor-pointer"
          
          />
          <label >Charater {charater}</label>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
