import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header"
import Banner from "./components/Banner"
import Menu from "./components/Menu"
import Products from "./components/Products";
import Support from './components/Support';
import Organic from './components/Organic';
import Deal from './components/Deal';
import Reviews from './components/Reviews';
import News from './components/News';
import Footer from './components/Footer';
import Healthy from './components/Healthy';

function App() {

  return (
    <>
      <Header />
      <Banner />
      <Menu />
      <Products />
      <Organic />
      <Support />
      <Deal />
      <Healthy />
      <Reviews />
      <News />
      <Footer />
    </>
  )
}

export default App
