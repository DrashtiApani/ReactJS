import { useState, useEffect } from "react";
import Banner from "./Banner";
import Header from "./Header";
import Category from "./Category";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Foodsdetail from "./Foodsdetail";
import Footer from "./Footer";

function App() {
  const [swiggyApp, setSwiggyApp] = useState([]);
  const [bannerImg, setBannerImg] = useState([]);
  const [category, setCategory] = useState([]);
  const [foods, setFoods] = useState([]);


  const getswiggy = () => {
    fetch("https://mocki.io/v1/7061eaad-bf38-4957-9811-2c448a9c47f2")
      .then((res) => res.json())
      .then((data) => {
        
        setBannerImg(data.banner);
        setCategory(data.category);
        setSwiggyApp(data.siggyApp);
        setFoods(data.foods);
       
        
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };

  
  useEffect(() => {
    getswiggy();
  }, []);

  return (
    <div>
      <title>Order Food & Groceries. Discover the best restaurants. Swiggy it!</title>

      <div style={{ backgroundColor: "#FF5200" }}>
        <Header />
        <Banner bannerData={bannerImg} />
      </div>

      <Category categoryData={category} swiggyAppData={swiggyApp} />
      <Foodsdetail foodsData = {foods}/>
      <Footer />
    </div>
  );
}

export default App;