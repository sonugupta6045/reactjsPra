'''
#UseState Hook
it's a Hook that lets you add state to functional components in React. It allows you to declare state variables and update them, triggering a re-render of the component when the state changes.
import React, { useState } from 'react';
# Example usage of useState Hook
function Counter() {
  const [count, setCount] = useState(0); // Declare a state variable 'count' with initial value 0

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button> {/* Update state on button click */}
    </div>
  );
}
export default Counter;

#UseEffect Hook    
it's a Hook that lets you perform side effects in functional components. It allows you to run code after the component has rendered, such as fetching data, subscribing to events, or manually changing the DOM. The useEffect Hook can also clean up resources when the component unmounts or when dependencies change.
import React, { useState, useEffect } from 'react'; 
# Example usage of useEffect Hook
function DataFetcher() {
  const [data, setData] = useState(null); // Declare a state variable 'data' with initial value null

  useEffect(() => {
    fetch('https://api.example.com/data') // Fetch data from an API
      .then(response => response.json())
      .then(data => setData(data)); // Update state with fetched data
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      {data ? <p>Data: {JSON.stringify(data)}</p> : <p>Loading...</p>} {/* Render fetched data or loading message */}
    </div>
  );
}
export default DataFetcher;

'''