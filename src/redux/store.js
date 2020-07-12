import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import CountReducer from "./count.reducer";

const initialState = {};

const reducers = combineReducers({ CountReducer });

export default createStore(
  reducers,
  initialState,
  compose(applyMiddleware(thunk))
);
