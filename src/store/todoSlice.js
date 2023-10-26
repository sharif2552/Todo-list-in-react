// Create a file, e.g., todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [], // Initial state for the todos
  reducers: {
    addTodo: (state, action) => {
      // Add a new todo to the state
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      // Implement your logic to delete a todo by its index
      const indexToDelete = action.payload;
      state.splice(indexToDelete, 1); // Removes the todo at the specified index
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
