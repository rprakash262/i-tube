import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../state/store";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from "../../state/counter/counterSlice";

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(3))}>
        Increment By 3
      </button>
      <button onClick={() => dispatch(incrementAsync(10))}>
        Increment Async
      </button>
    </div>
  );
};
