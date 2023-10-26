// Create a store.js file
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice'; // Import your slice

const store = configureStore({
  reducer: {
    todos: todoReducer, // Add the reducer to your store
  },
});

export default store;
