import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import View from "./pages/View";
import Edit from "./pages/Edit";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Add />} />
        <Route path="/view" element={<View />} />
        <Route path="/edit/:id" element={<Edit />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
