import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductAdd from './Components/ProductAdd';
import ProductView from './Components/ProductView';
import ProductUpdate from './Components/ProductUpdate';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductAdd />} />
          <Route path="/products" element={<ProductView />} />
          <Route path="/productupdate/:id" element={<ProductUpdate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
