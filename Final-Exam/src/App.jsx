import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import ProductAdd from './Components/ProductAdd';
import ProductView from './Components/ProductView';
import ProductUpdate from './Components/ProductUpdate';
import LogInpage from './Components/LogInpage';
import Register from './Components/Register';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LogInpage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ProductAdd" element={<ProductAdd />} />
          <Route path="/products" element={<ProductView />} />
          <Route path="/productupdate/:id" element={<ProductUpdate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
