import React from "react";
import { connect } from "react-redux";

const info = ({ counter, name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    name: state.user.name,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(info);
