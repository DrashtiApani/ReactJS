import { useDispatch, useSelector } from "react-redux"
import { increment } from "./Redux/Action/CounterAction";

function App() {
  const no = useSelector(state => state.cnt);
  const dispatch = useDispatch();

  return (
    <div align="center">
      <h1>Counter App</h1>
      <h2>count :-{no}</h2>
      <button onClick={() => dispatch(increment())} > + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
    </div>
  )
}

export default App                   
