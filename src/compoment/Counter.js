import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../redux/action/counterAction";

const Counter = ({ counter, name, dispatch, increment, decrement }) => {
  /*   
  
  usando una funcion creada en este compomente
const increment = () => {            
    dispatch({
        type: "INCREMENT"
    });
  };
  usando el import { increment, decrement } from "../store"; donde las funciones en store son export y asi se agregan al metodo dispach OJO con que  no hallan funciones en este compomente con el mismo nmbre de las que llegaron por el import

const incre = () => {
    dispatch(increment());
  };

  const decre = () => {
    dispatch(decrement());
  }; */

  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <h1>{counter}</h1>
      <p>{name}</p>
    </div>
  );
};

// se extraen el objeto del estado que vamos a consumir  y lo podemos llamar de una nueva forma y esto ya que se esta generando un nuevo objeto con los  valores de vienen del store
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    name: state.user.name,
  };
};

// con esta funcion esta agregando props para que este compomente las pueda consumir  (con los metodos que fueron importados (import {} from ":/store"))  *(se saca el dispatch de las props)
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
