import { BrowserRouter, Route, Routes } from "react-router-dom"
import View from "./Pages/View/View"
import AddUser from "./Pages/Add/Add"


function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<AddUser />} />
      <Route path="/View" element={<View />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
