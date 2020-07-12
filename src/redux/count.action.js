import * as actions from "./action.types";

export const Increment = (payload) => (dispatch) => {
  return dispatch({
    type: actions.INCREMENT,
    payload: {
      ...payload,
    },
  });
};

export const Decrement = (payload) => (dispatch) => {
  return dispatch({
    type: actions.DECREMENT,
    payload: {
      ...payload,
    },
  });
};
