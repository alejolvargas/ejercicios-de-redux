import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

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

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancers = composeWithDevTools({
  name: "redux",
  realtime: true,
  trace: true,
  traceLimit: 20,
});

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
  composeEnhancers(applyMiddleware(confirDeleteTodo, looger, thunk))
);

export default store;
