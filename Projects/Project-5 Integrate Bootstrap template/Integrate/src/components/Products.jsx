  import { FaArrowRight, FaLock, FaStar, FaStarHalfAlt, FaHeart, FaEye } from "react-icons/fa";
  import img from "./img/product-banner.jpg";
  import './products.css';
  import img2 from "./img/1.jpg";
  import img3 from "./img/9.jpg";
  import img4 from "./img/2.jpg";
  import img5 from "./img/17.jpg";
  import img6 from "./img/11.jpg";
  import img7 from "./img/5.jpg";
  import img8 from "./img/10.jpg";
  import img9 from "./img/17.jpg";

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
    {
      image: img5,
      category: "Bakery",
      rating: 5,
      title: "Delicious white baked fresh bread and toast",
      price: 20,
      originalPrice: 22.1,
    },
    {
      image: img6,
      category: "Vegetables",
      rating: 4.5,
      title: "Organic green chili 200gm packet",
      price: 30.5,
      originalPrice: 35,
    },
    {
      image: img7,
      category: "Snacks",
      rating: 5,
      title: "Crunchy peanut butter protein bar",
      price: 60,
      originalPrice: 70,
    },
    {
      image: img8,
      category: "Fruits",
      rating: 4,
      title: "Fresh watermelon slices 1kg pack",
      price: 90,
      originalPrice: 100,
    },
    {
      image: img9,
      category: "Bakery",
      rating: 4.8,
      title: "Multigrain energy bread loaf 400gm",
      price: 35,
      originalPrice: 40,
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

  const Products = () => {
    return (
      <div style={{ padding: "50px 0", backgroundColor: "#f9f9f9" }}>
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-12 text-center product-head">
              <h3>Popular Products</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
                incididunt ut labore lacus vel facilisis.
              </p>
            </div>
          </div>

          <div className="row">
            {/* Sidebar */}
            <div className="col-md-3">
              <button className="product-button">All <FaArrowRight /></button>
              <button className="product-button">Snacks <FaArrowRight /></button>
              <button className="product-button">Vegetable <FaArrowRight /></button>
              <button className="product-button">Fruit <FaArrowRight /></button>
              <button className="product-button">Bakery <FaArrowRight /></button>

              <div className="image-wrapper">
                <img src={img} alt="Promo" className="product-image" />
                <div className="image-overlay">
                  <h4>Juicy</h4>
                  <h5>Fruits</h5>
                  <span>100% Natural</span>
                  <button>Shop Now</button>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="col-md-9">
              <div className="row">
                {productData.map((item, index) => (
                  <div className="col-md-6 col-lg-3 mb-5" key={index}>
                    <div className="card product-card d-flex flex-column text-center p-3">
                      <div className="image-container">
                        <img src={item.image} alt="Product" className="card-img-top" />
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

          </div>
        </div>
      </div>
    );
  };

  export default Products;
