import React from "react";

const TodoForm = ({ onSubmit }) => {
  return (
    <form action="" onSubmit={onSubmit}>
      <input type="text" />
      <button>agregar</button>
    </form>
  );
};

export default TodoForm;
