import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./Pages/Add";
import View from "./Pages/View";
import Edit from "./Pages/Edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;