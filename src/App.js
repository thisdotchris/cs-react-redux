import React from "react";
import "./App.css";
import ChildComponent from "./components/Child";
import { connect } from "react-redux";
import * as CountActions from "./redux/count.action";

function App(props) {
  console.log("app component render...");
  return (
    <React.Fragment>
      <h4>Parent Component</h4>
      <h6>Count: {props.count}</h6>
      <button onClick={props.Increment}>+</button>
      <button onClick={props.Decrement}>-</button>
      <ChildComponent />
    </React.Fragment>
  );
}

const mapPropsToState = (state) => {
  return {
    count: state.CountReducer.count,
  };
};

export default connect(mapPropsToState, CountActions)(App);
