import { useState } from "react"



function App() {
  
  let [counter, setCounter] = useState(15)
  // let counter=5;

  const addvalue =()=>{
    if(counter < 20) {
    setCounter(counter+1);
  }
};
  const removeValue = () => {
    if(counter>10){
    setCounter(counter-1);
  }
}
  return (
   <>
   <h1>Sonu Gupta</h1>
   <h2>Number Display {counter}</h2>
  <button onClick={addvalue}>addValue {counter}</button>
  <br />
  <button onClick={removeValue}>removeValue {counter}</button>
   </>
  )
}

export default App
