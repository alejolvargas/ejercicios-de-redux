import { add_fruit } from "../actions/fruitAction";

const inicialState = ["fresa", "manzana"];

function fruits(state = inicialState, action) {
  switch (action.type) {
    case add_fruit:
      //return state.concat(action.payload.fruit);
      return [...state, action.payload.fruit];
    // se puede afectar el orden cambiando la posiccionde de los elementos
    //return [action.payload.fruit,
    //...state ];
    default:
      return state;
  }
}

export default fruits;
