import React from "react";
import { connect } from "react-redux";
import { addFruit } from "../redux/actions/fruitAction";

const Fruits = ({ fruits, addFruit }) => {
  console.log(fruits);

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    const fruit = e.target[0].value;
    e.target[0].value = "";
    addFruit(fruit);
  };

  return (
    <div>
      <h1>frutas</h1>
      <form action="" onSubmit={handlerSubmit}>
        <input type="text" placeholder="agregar fruta" />

        <button>agregar</button>
      </form>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={fruit + index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    fruits: state.fruits,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFruit: (fruit) => dispatch(addFruit(fruit)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Fruits);
