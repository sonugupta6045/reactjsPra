import {configureStore} from '@reduxjs/toolkit'; 
import { counterSlice } from './Slice/Counter'; // import the counter reducer


export const store = configureStore({
    reducer : {
        counter: counterSlice.reducer, // add the counter reducer to the store
    },
})

export type RootState = ReturnType<typeof store.getState>;  // only for typescript
export type AppDispatch = typeof store.dispatch; // only for typescript