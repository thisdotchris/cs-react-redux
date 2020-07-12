import * as actions from "./action.types";
import produce from "immer";

const initialState = {
  count: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.INCREMENT:
      return produce(state, (draft) => {
        draft.count++;
        return draft;
      });
    case actions.DECREMENT:
      return produce(state, (draft) => {
        draft.count--;
        return draft;
      });
    default:
      return state;
  }
}
