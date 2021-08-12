import { combineReducers } from "redux";
import actionTypes from "./counter-types";
const initialState = {
  value: 10,
  step: 100,
};

const valueReducer = (state = initialState.value, { type, payload }) => {
  switch (type) {
    case actionTypes.INCREMENT:
      return state + payload;

    case actionTypes.DECREMENT:
      return state - payload;

    case actionTypes.RESET:
      return 0;

    default:
      return state;
  }
};

const stepReducer = (state = 5, action) => state;

export const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});
