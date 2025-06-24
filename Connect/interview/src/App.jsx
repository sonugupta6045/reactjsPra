import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(1)
let Added = value + 5;

 const AddValue = ()=>{
  setValue(value + 1);
}

  return (
    <>
      <h1>Interview prep</h1>
      <h1>Main value : {value}</h1>
      <button onClick={AddValue}>Click me to addition</button>
      <h2>After addition Vale : {Added}</h2>
    </>
  )
}

export default App
