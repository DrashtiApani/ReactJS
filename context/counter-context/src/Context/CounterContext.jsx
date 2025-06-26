import { createContext, useState } from 'react'
export const myCounterContext = createContext()


const CounterContext = ({children}) => {
    const [no , setNo] = useState(0);

    const Increment = () => {
        setNo(no + 1)
    }

    const Decrement = () => {
        setNo(no - 1)
    }

  return (
    <myCounterContext.Provider value={{no , Increment , Decrement}}>
        {children}
    </myCounterContext.Provider>  )
}

export default CounterContext