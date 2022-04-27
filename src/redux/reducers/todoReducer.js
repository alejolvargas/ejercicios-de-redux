import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../actions/todoAction";

const inicialState = {
  todos_prueba: [
    {
      text: "crear compomente",
      id: "asas1212",
      checked: false,
    },
    {
      text: "cargar video",
      id: "ghghgh5757",
      checked: true,
    },
  ],
};

function todo(state = inicialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos_prueba: [...state.todos_prueba, action.payload],
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos_prueba: state.todos_prueba.map((todo) => {
          if (action.payload.id === todo.id) {
            return {
              ...todo,
              checked: !todo.checked,
            };
          }
          return todo;
        }),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos_prueba: state.todos_prueba.filter(
          (todo) => todo.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}

export default todo;
