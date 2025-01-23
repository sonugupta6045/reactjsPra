import { useState, useCallback } from 'react'
import './index.css'
// import './App.css'

function App() {
 const [length, setLength]= useState(8);
 const [number, setNumber] = useState(false);
 const [charater, setCharater] = useState(false);
 const [password, setPassword] = useState("");

const PasswordGen = useCallback(()=>{
  let pass = ""
  let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
  if(number) {
    str += "0123456789"
  }
  if(charater) {
    str += "\!@#$%^&*()_+ = {}"
  }
  for (let index = 1; index <= array.length; index++) {
    let char = Math.floor(Math.random()*str.length +1)
    pass= str.charAt(char);
  }
  setPassword(pass)
}, [length,number,charater,setPassword])
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px=4 my-4 text-orange-500 bg-gray-800'>
      <div className=''></div>
     </div>
    </>
  )
}

export default App
