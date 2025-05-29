import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Blog from "./pages/Blog"


function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Home/>}>Home</Route>
          <Route path="/about" element ={<About/>}>About</Route>
          <Route path="/blog" element ={<Blog/>}>Blog</Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
