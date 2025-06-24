import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{setJokes(response.data)})
    .catch((err)=>{console.log(err)})
  },[])

  return (
    <>
      <h2>Hello, My name is Sonu Gupta</h2>
      <h3>Jokes: {jokes.length}</h3>

      {
        jokes.map((joke)=>(
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            <p>{joke.desc}</p>
          </div>
        ))
      }


    </>
  )
}

export default App
