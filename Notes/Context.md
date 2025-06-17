# Context API
what is the Context API?
The Context API is a feature in React that allows developers to share state and other values across the component tree without having to pass props down manually at every level. It provides a way to create global variables that can be accessed by any component, making it easier to manage state that needs to be shared across multiple components.
It is particularly useful for managing themes, user authentication, and other global settings that need to be accessed by many components in an application.
# How to use the Context API
1. Create a Context object using `React.createContext()`.
2. Create a Provider component that uses the Context object to provide values to its children.
3. Wrap the components that need access to the context with the Provider component.
4. Use the `useContext` hook in the components that need to access the context values.
# Example of using the Context API
```javascript
import React, { createContext, useContext, useState } from 'react';
// Create a Context object
const MyContext = createContext();
// Create a Provider component
const MyProvider = ({ children }) => {
  const [value, setValue] = useState('Hello, World!');
  
  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};
# Context API and Redux and Zustand

```
const updateTodo = (id,todo) => {
  setTodos((prev)=>prev.map((prevTodo)=>{prevTodo,id === id ? todo : prevTodo})); // Update the todo with the given id
}
'''
# Local Storage of the browser
Local Storage is a web storage mechanism that allows developers to store key-value pairs in a web browser. It is part of the Web Storage API and provides a way to persist data across browser sessions. Local Storage is synchronous and has a larger storage capacity compared to cookies.
# How to use Local Storage  
1. Use `localStorage.setItem(key, value)` to store data.
`when we are storing data, it will be stored as a string, so we need to convert it to a string if we are storing objects or arrays.`
2. Use `localStorage.getItem(key)` to retrieve data.
`when we are retrieving data, it will return a string, so we need to parse it if we are storing objects or arrays.`
3. Use `localStorage.removeItem(key)` to remove data. 
4. Use `localStorage.clear()` to clear all data.

