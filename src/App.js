import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, sub, mul, div } from "./store/actions";
import "./styles.css";
function App() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  return (
    <div className="App">
      <h1>{state.count}</h1>
      <div>
        <input
          placeholder="Enter a value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => dispatch(add(Number(value)))}>Increment</button>
        <button onClick={() => dispatch(sub(Number(value)))}>Decrement</button>
        <button onClick={() => dispatch(mul(Number(value)))}>Multiply</button>
        <button onClick={() => dispatch(div(Number(value)))}>Divide</button>
      </div>
    </div>
  );
}
export default App;
