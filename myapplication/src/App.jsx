import Application from "./Counter"
import './App.css'
import { useState } from "react"
import TodoList from "./TodoList"



function App() {
  let [cnt, setcnt] = useState(0)
  let [todo, settodo] = useState([

    { id: 0, name: "writing" },
    { id: 1, name: "listing" },
    { id: 2, name: "music" },
    { id: 3, name: "playing" },
    
  ])


  const plus = () => {
    setcnt(cnt + 1)
  }
  const minus = () => {
    setcnt(cnt - 1)
  }

  const reset = () => {
    setcnt(0)
  }

  return (
    <>

      <Application
        plus={plus}
        cnt={cnt}
        minus={minus}
        reset={reset}
      />

      <TodoList
        todo={todo}
      />


    </>
  )
}

export default App
