import React, { useState } from 'react';

function AddTodos() {
  const [task, setTask] = useState(''); // State for the current input value
  const [todos, setTodos] = useState([]); // State for the list of todos

  const handleAddTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]); // Adds the new task to the todos array
      setTask(''); // Resets the task input to be empty after adding to the list
    }
  }

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index); // Creates a new array without the deleted task
    setTodos(newTodos); // Sets the new todos array as the current state
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
          onChange={(e) => setTask(e.target.value)} // Updates the task state as the input changes
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleAddTodo} // Calls handleAddTodo when the button is clicked
          >
            Add
          </button>
        </div>
      </div>
      <ul className="list-group">
        {todos.map((todo, index) => ( // Maps over the todos array and renders each todo as a list item
          <li className="list-group-item d-flex justify-content-between" key={index}>
            {todo}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDeleteTodo(index)} // Calls handleDeleteTodo with the index of the todo to be deleted
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
