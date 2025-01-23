import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./component/Card";

function App() {
  const [count, setCount] = useState(0);
  
  const addValue = () => {
    if(count<20){
      setCount(count+1);
    }
  };

  const removeValue = () => {
    if(count>0){
      setCount(count-1);
    }
  }

  return (
    <>
    <div className="conter">
      <h1>SOnu Gupta</h1>
      <h1>Display the Number</h1>
      <button onClick={addValue}>AddValue {count}</button>
      <button onClick={removeValue}>RemoveValue {count}</button>
    </div>
     <h1 className="bg-green-400">Tailwind Css</h1>
     <Card username ="Sonu Gupta"/>
     <Card username = "Gupta" name=" Mouu"/>
    </>
  );
}

export default App;
