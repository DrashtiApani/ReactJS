import { FaLock, FaStar, FaStarHalfAlt, FaHeart, FaEye } from "react-icons/fa";
import "./products.css";
import img2 from "./img/1.jpg";
import img3 from "./img/9.jpg";
import img4 from "./img/2.jpg";
import img5 from "./img/33.jpg"; // Promo image

const productData = [
  {
    image: img2,
    category: "Vegetables",
    rating: 4.5,
    title: "Fresh organic villa farm lemon 500gm pack",
    price: 120.25,
    originalPrice: 123.25,
  },
  {
    image: img3,
    category: "Snacks",
    rating: 5,
    title: "Best snakes with hazel nut pack 200gm",
    price: 145,
    originalPrice: 150,
  },
  {
    image: img4,
    category: "Fruits",
    rating: 4.5,
    title: "Fresh organic apple 1kg simla marming",
    price: 120.25,
    originalPrice: 123.25,
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const half = rating - fullStars >= 0.5;
  return (
    <>
      {Array.from({ length: fullStars }, (_, i) => (
        <FaStar key={i} color="#FFA500" size={14} />
      ))}
      {half && <FaStarHalfAlt color="#FFA500" size={14} />}
    </>
  );
};

const Healthy = () => {
  return (
    <div style={{ padding: "50px 0", backgroundColor: "#f9f9f9" }}>
      <div className="container">
        <div className="row d-flex align-items-stretch">
          
          {/* Product Grid */}
          <div className="col-md-7">
            <div className="row">
              {productData.map((item, index) => (
                <div className="col-md-6 col-lg-4 mb-4" key={index}>
                  <div className="card product-card d-flex flex-column text-center p-3 h-100">
                    <div className="image-container">
                      <img
                        src={item.image}
                        alt="Product"
                        className="card-img-top"
                      />
                      <div className="lock-icon">
                        <FaLock />
                      </div>
                      <div className="hover-icons">
                        <span className="icon"><FaHeart /></span>
                        <span className="icon"><FaEye /></span>
                      </div>
                    </div>
                    <p className="product-category">{item.category}</p>
                    <div className="product-rating">
                      {renderStars(item.rating)} <span>({item.rating})</span>
                    </div>
                    <h6 className="product-title">{item.title}</h6>
                    <div className="product-price">
                      <span className="price">${item.price}</span>
                      <span className="original-price">${item.originalPrice}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Promo Banner */}
          <div className="col-md-5 d-flex">
            <div
              className="promo-banner"
              style={{
                backgroundImage: `url(${img5})`,
              }}
            >
              <div className="promo-content">
                <h4>Organic & Healthy</h4>
                <h3>Vegetables</h3>
                <p>25% <span>OFF</span></p>
                <button style={{color: "white", backgroundColor: "#64B496", border: "none",borderRadius: "5px", padding: "10px 20px"}}>Shop Now</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Healthy;
