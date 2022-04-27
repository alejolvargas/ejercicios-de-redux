import React from "react";
import { connect } from "react-redux";
import {
  addTodo,
  updateTodo,
  deleteTodo,
} from "../../redux/actions/todoAction";
import { getId } from "../../utils/utils";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todos = ({ toditos, addTodo, updateTodo, deleteTodo }) => {
  console.log(toditos);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;

    addTodo({
      text: text,
      checked: false,
      id: getId(),
    });
    e.target[0].value = "";
  };

  return (
    <div>
      <h1>todos</h1>
      <TodoForm onSubmit={handlerSubmit} />
      <TodoList
        todos={toditos.todos_prueba}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    toditos: state.todo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    updateTodo: (todo) => dispatch(updateTodo(todo)),
    deleteTodo: (todo) => dispatch(deleteTodo(todo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
