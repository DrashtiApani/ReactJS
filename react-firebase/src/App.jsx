import { BrowserRouter, Route, Routes } from "react-router-dom"
import View from "./pages/View.jsx"
import ADD from "./pages/ADD.JSX"

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <View/>} />
          <Route path="/add" element={ <ADD/>} />
      </Routes>
    </BrowserRouter >
    </>
  )
}

export default App
