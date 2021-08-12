import { connect } from "react-redux";
import {
  increment,
  decrement,
  reset,
} from "../../redux/counter/counter-actions";
function Counter({ value, step, onIncrement, onDecrement, onReset }) {
  return (
    <div>
      <p>{value}</p>
      <button onClick={() => onIncrement(step)}>add {step}</button>
      <button onClick={() => onDecrement(step)}>subtract {step}</button>
      <button onClick={() => onReset()}>reset</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log(increment(10));
  // дозволяє передати методи для
  return {
    onIncrement: (value) => dispatch(increment(value)),
    onDecrement: (value) => dispatch(decrement(value)),
    onReset: () => dispatch(reset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
