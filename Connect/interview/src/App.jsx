import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    console.log('app rendered',Math.random())
  // const [value, setValue] = useState(1)
  const [value, setValue] = useState({
    value: 0
  },)

// let Added = value + 5;

//  const AddValue = ()=>{
//   setValue(value + 1);
// }
const clickMe = ()=>{

  setValue({
    value:0
  },)
  
}
// Here we are passing the same as it passed into the useState but app will be render beacuse the non-primitive data types are taken as new fresh vale.

  return (
    <>
      <h1>Interview prep</h1>
      <h1>Main value : {value.value}</h1>
      {/* <button onClick={AddValue}>Click me to addition</button> */}
      <button onClick={clickMe}>Click me</button>
      {/* <h2>After addition Vale : {Added}</h2> */}
    </>
  )
}

export default App
