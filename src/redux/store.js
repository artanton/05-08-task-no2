import {configureStore } from '@reduxjs/toolkit';
import { taskReducer } from './TaskSlice';
// import { filterReducer } from './FilterSlice';



export const store = configureStore({
  reducer: {
    task: taskReducer,
    // filt: filterReducer,
  },
  
});




