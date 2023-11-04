import React, { useState } from 'react';

function AddTodos() {
  const [task, setTask] = useState(''); // State for the current input value
  const [todos, setTodos] = useState([]); // State for the list of todos
  const [editIndex, setEditIndex] = useState(-1); // State to keep track of the current todo being edited

  const handleAddOrUpdateTodo = () => {
    if (task.trim() !== '') {
      if (editIndex >= 0) {
        // Update the todo at the editIndex
        const updatedTodos = todos.map((todo, index) => {
          if (index === editIndex) {
            return task;
          }
          return todo;
        });
        setTodos(updatedTodos);
        setEditIndex(-1); // Reset editIndex
      } else {
        // Add new todo
        setTodos([...todos, task]);
      }
      setTask(''); // Reset input field
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleEditTodo = (index) => {
    setTask(todos[index]); // Load the todo into the input field for editing
    setEditIndex(index); // Set the index of the todo being edited
  };

  return (
    <div className="container mt-4">
      <h3>Add/Update Todos</h3>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a task or edit selected"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleAddOrUpdateTodo}
          >
            {editIndex >= 0 ? 'Update' : 'Add'}
          </button>
        </div>
      </div>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            {todo}
            <div>
              <button
                className="btn btn-sm btn-info mr-2"
                onClick={() => handleEditTodo(index)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDeleteTodo(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddTodos;
