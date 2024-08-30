import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  
    const counterState = useSelector((state) => state.counter);
    const showCounterState = useSelector((state) => state.showCounter);


  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'})
  };
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleIncrease = () => {
    dispatch({ type: "increase", amount: 5 });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounterState && <div className={classes.value}>{counterState}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrease}>Increase by 5</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
