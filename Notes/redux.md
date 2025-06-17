#   redux toolkit
what is redux toolkit?
Redux Toolkit is the official, recommended way to write Redux logic. It provides a set of tools and best practices to simplify the process of writing Redux applications. Key features include:
- **Simplified Store Setup**: Redux Toolkit provides a `configureStore` function that simplifies the store setup process, including middleware and devtools configuration.
- **Create Reducers and Actions**: The `createSlice` function allows you to define reducers and actions in a single place, reducing boilerplate code.  

''' 
start from the store, they are update data with proper flow  and structure. reducers  are the key value pairs that update the state in a predictable way. Actions are dispatched to trigger these reducers, and selectors are used to access the state in a structured manner.

then silce make it 

dispatches actions and reducers, which are functions that take the current state and an action as arguments and return a new state.
to take the value use the useSelector hook, which allows you to access the state in a functional component.
to send the data or value are use the useDispatch hook, which allows you to dispatch actions to the store.

'''