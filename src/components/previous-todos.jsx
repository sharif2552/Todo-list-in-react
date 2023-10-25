import React from 'react';

function PreviousTodo({ previousTodos }) {
  return (
    <div className="container mt-4">
      <h3>Previous Todos</h3>
      <ul className="list-group">
        {previousTodos.map((todo, index) => (
          <li className="list-group-item" key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PreviousTodo;
