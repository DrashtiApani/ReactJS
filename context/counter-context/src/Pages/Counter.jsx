import { useContext } from "react"
import { myCounterContext } from "../Context/CounterContext";

const Counter = () => {
    const { no, Increment, Decrement } = useContext(myCounterContext)


    // console.log(no);

    return (

        <div align="center">
            <h1>Counter App</h1>
            <div>Counter :- {no}</div>
            <button onClick={() => Increment()}>+</button>
            <button onClick={() => Decrement()}>-</button>
        </div>
    )
}

export default Counter