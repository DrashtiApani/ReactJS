import { useDispatch, useSelector } from "react-redux"
import { Decrement, Increment } from "./redux/action/counterAction";

function App() {

  const no = useSelector(state=> state.cnt);
  const dispatch = useDispatch();
  
  

  return (
    <>
        <h1>Counter App</h1>
        <h2>Count :- {no}</h2>
        <button onClick={ () => dispatch(Increment()) }>+</button>
        <button onClick={ () => dispatch(Decrement()) }>-</button>

    </>
  )
}

export default App
