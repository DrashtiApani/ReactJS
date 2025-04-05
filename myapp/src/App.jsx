import { useState } from 'react'
import Home from './Home';


function App() {

  let a = 10;
  let color = ["lavender", "skyblue", "lightblue", "lightgreen", "lightpink"]

  return (
    <>
      <Home
        ab={a}
        col={color}

      />
    </>
  )
}

export default App
