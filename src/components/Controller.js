import React from "react";
import { connect } from "react-redux";
import { incrementAsync } from "../redux/actions/counterActions";

const Controller = (props) => {
  console.log(props);

  const handler = () => {
    props.dispatch(incrementAsync);
  };

  return (
    <div>
      <button onClick={handler}>dispatch</button>
      <h1>{props.counter}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Controller);
