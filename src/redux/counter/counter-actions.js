import actionTypes from "./counter-types";
const initialCounterState = 0;
export const increment = (value) => ({
  type: actionTypes.INCREMENT,
  payload: value,
});
export const decrement = (value) => ({
  type: actionTypes.DECREMENT,
  payload: value,
});

export const reset = () => ({
  type: actionTypes.RESET,
  payload: initialCounterState,
});
