import "./menu.css";
import img from "./img/3.jpg";
import img2 from "./img/4.jpg";

const Menu = () => {
  return (
    <div style={{ padding: "50px 0" }}>
    

      <div className="container">
        <div className="row align-items-stretch" style={{ margin: "40px 0px" }}>
          {/* Column 1: Buttons */}
          <div className="col-md-4 d-flex">
            <div className="equal-height w-100">
              <button className="menu-button">Cake & Milk <br /><span>(65 items)</span></button>
              <button className="menu-button">Fresh Meat <br /><span>(30 items)</span></button>
              <button className="menu-button">Vegetable <br /><span>(25 items)</span></button>
              <button className="menu-button">Apple & Mango <br /><span>(45 items)</span></button>
              <button className="menu-button">Strawberry <br /><span>(68 items)</span></button>
              <button className="menu-button">View More</button>
            </div>
          </div>

          {/* Column 2: Image */}
          <div className="col-md-4 d-flex">
            <div className="image-box equal-height">
              <img src={img} alt="Promo 1" />
              <div className="badge-offer">50</div>
              <div className="badge-offerr">% <br /><span> OFF</span></div>
              <div className="C">Cake</div>
              <button className="shop-now-btn">Shop Now</button>
            </div>
          </div>

          {/* Column 3: Image */}
          <div className="col-md-4 d-flex">
            <div className="image-box equal-height">
              <img src={img2} alt="Promo 2" />
              <div className="badge-offer">50</div>
              <div className="badge-offerr">% <br /><span> OFF</span></div>
              <div className="C">Milk</div>
              <button className="shop-now-btn">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
