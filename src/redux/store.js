import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

//midleware

const looger = (store) => (next) => (action) => {
  console.log("a ocurrido una accion");
  next(action);
};

const confirDeleteTodo = (store) => (next) => (action) => {
  if (action.type === "DELETE_TODO") {
    let confir = window.confirm("seguro lo quire eliminar");
    if (confir) {
      next(action);
    }
  } else {
    next(action);
  }
};

/* 
const logger = (store) => (next) => (action) => {
  console.log("ha ocurrido una nueva opcion", action);

    

  setTimeout(() => {
    next(action);
  }, 1000);

  if (action.type !== "ADD_TODO") {
    setTimeout(() => {
      store.dispatch({
        type: "ADD_TODO",
        payload: {
          text: "creado del midleware",
          checked: false,
          id: "asdf345",
        },
      });
    }, 4000);
  } */

// Store
// Almacenamiento de nuestro estado
const store = createStore(
  rootReducer,
  applyMiddleware(confirDeleteTodo, looger, thunk)
);

export default store;
