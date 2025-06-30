import { BrowserRouter, Route, Routes } from "react-router-dom"
import View from "./pages/View.jsx"
import ADD from "./pages/ADD.JSX"
import Edit from "./pages/Edit.jsx"

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <View/>} />
          <Route path="/add" element={ <ADD/>} />
          <Route path="/edit" element={ <Edit/>} />
          
      </Routes>
    </BrowserRouter >
    </>
  )
}

export default App
