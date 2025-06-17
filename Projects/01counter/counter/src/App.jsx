import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  const AddValue = () => {
   if(counter<20){
    //  counter = counter + 1;
    //   setCounter(counter);  //here are going into the batch wise and updating same thing that why here increase by only one.  
    // setCounter(counter);
    // setCounter(counter);
    // setCounter(counter);

    setCounter(prevCounter => prevCounter +1);  // after executing the prev function then goes to the another one 
    setCounter(prevCounter => prevCounter +1);
    setCounter(prevCounter => prevCounter +1);
    setCounter(prevCounter => prevCounter +1);
   }

    //  console.log(counter);
  };

  const RemValue = () => {
    
    if(counter>0){
      counter = counter-1
    }

    setCounter(counter)
    
  };

  return (
    <>
      <h3>Count the value</h3>
      <h2>Counter : {counter}</h2>
      <button onClick={AddValue}>add Value</button>
      <button onClick={RemValue}>remove Value</button>
    </>
  );
}

export default App;
