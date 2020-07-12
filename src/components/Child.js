import React from "react";
import { connect } from "react-redux";
import * as CountActions from "./../redux/count.action";

function Child(props) {
  console.log("child component render...");
  return (
    <React.Fragment>
      <h4>Child Component</h4>
      <h6>Count: {props.count}</h6>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return { count: state.CountReducer.count };
};

export default connect(mapStateToProps, CountActions)(Child);
