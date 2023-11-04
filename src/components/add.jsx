import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../store/todoSlice'; 
function AddTodos() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos); // Retrieve the todos from the Redux store

  const handleAddTodo = () => {
    if (task.trim() !== '') {
      dispatch(addTodo(task)); // Dispatch the addTodo action
      setTask('');
    }
  }

  const handleDeleteTodo = (index) => {
    dispatch(deleteTodo(index)); // Dispatch the deleteTodo action with the index
  }

  return (
    <div className="container mt-4">
      <h3>Add Todos</h3>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)} // Update the task state
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleAddTodo}
          >
            Add
          </button>
        </div>
      </div>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li className="list-group-item d-flex justify-content-between" key={index}>
            {todo}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddTodos;
