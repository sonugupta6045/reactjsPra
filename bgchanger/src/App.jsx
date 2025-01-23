import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
 const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-3xl">
        <button onClick={()=>setColor("red")}
        className="outline-none px-2 py-1 text-white shadow-2xl rounded-full bg-red-700">Red</button>
        <button  onClick={()=>{setColor("green")}} className="outline-none px-2 py-1 text-white shadow-2xl rounded-full bg-green-700">Green</button>
        <button onClick={()=>{setColor("blue")}} className="outline-none px-2 py-1 text-white shadow-2xl rounded-full bg-blue-700">Blue</button>
        <button  onClick={()=>{setColor("yellow")}} className="outline-none px-2 py-1 text-white shadow-2xl rounded-full bg-yellow-700">Yellow</button>
        <button  onClick={()=>{setColor("orange")}} className="outline-none px-2 py-1 text-black shadow-2xl rounded-full bg-orange-700">Orange</button>
        <button  onClick={()=>{setColor("aqua")}} className="outline-none px-2 py-1 text-black shadow-2xl rounded-full bg-red-700">Aqua</button>
        </div>
      </div>
    </div>
      
  )
}

export default App
