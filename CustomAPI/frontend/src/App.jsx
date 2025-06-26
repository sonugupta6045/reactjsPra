import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading,setloading] = useState(false)
  const [search, setSearch ] = useState('')

  useEffect(()=>{
    const controller = new AbortController()
    ;(async ()=>{
    try {
      setloading(true)
      setError(false)
        const respone = await axios.get('/api/products? search ='+search,{
          signal:controller.signal
        })
        console.log(respone.data);
        setProducts(respone.data)
        setloading(false)
    } catch (error) {
      if(axios.isCancel(error)){
        console.log('Request canncelled', error.message);
        return;
        
      }
      setError(true)
      setloading(false)
    }
      
    })()
    // to avoid some issue semi-colon used it. IFFR
// cleanup code
    return ()=>{
      controller.abort()
    }

  },[search])
  // if(error) {
  //   return  <h1>somthing went worgs</h1>
  
  // }

  // if(loading){
  //   return <h3>Loading...</h3>
  // }
   

  return (
    <>
     <h2>Custom api handler</h2>
     <input type="text" placeholder='search ' value={search} 
     onChange={(e)=>setSearch(e.target.value)}
     />
     {loading && <h2>Loading...</h2>}
     {error && <h1>Something went worng</h1>}
     <h2>Number of Products are: {products.length}</h2>
    </>
  )
}

export default App
