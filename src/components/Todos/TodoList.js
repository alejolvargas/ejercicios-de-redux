import React from "react";

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.checked}
            onChange={() => {
              updateTodo(todo);
            }}
          />
          <button
            onClick={() => {
              deleteTodo(todo);
            }}
          >
            x
          </button>
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
