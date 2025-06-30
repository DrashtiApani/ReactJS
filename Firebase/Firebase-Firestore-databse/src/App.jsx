import { BrowserRouter, Route, Routes } from "react-router-dom"
import View from "./Pages/View"
import Add from "./Pages/Add"


function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<View />}></Route>
          <Route path="/add" element={<Add />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
