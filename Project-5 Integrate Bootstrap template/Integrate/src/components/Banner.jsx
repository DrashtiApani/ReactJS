import img from "./img/banner-2.jpg";
import img2 from "./img/banner.jpg";
import img3 from "./img/5.png";
import img4 from "./img/4.png";


const Banner = () => {
    return (
        <div>
            {/* Embedded style inside return block */}
            <style>
                {`
                    .custom-btn {
                        background-color: #64B496;
                        border: none;
                        color: white;
                        padding: 10px 20px;
                        cursor: pointer;
                        transition: background-color 0.3s, color 0.3s;
                    }

                    .custom-btn:hover {
                        background-color: #black;
                        color: white;
                    }
                `}
            </style>

            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                <div className="carousel-inner">

                    {/* First Slide */}
                    <div className="carousel-item active">
                        <div
                            style={{
                                backgroundImage: `url(${img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "550px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                paddingLeft: "200px"
                            }}
                        >
                            <div className="col-4">
                                <h5>
                                    <span style={{
                                        color: "#64B496",
                                        borderBottom: "2px solid #64B496",
                                        fontSize: "20px"
                                    }}>
                                        100%
                                    </span> Organic Fruit
                                </h5>
                                <h1 style={{
                                    fontSize: "55px",
                                    margin: "25px 0",
                                    fontWeight: "700"
                                }}>
                                    Explore Fresh & <br />Juice Fruits
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit <br />
                                    Consequatur consectetur adipisicing
                                </p>
                                <button className="custom-btn">
                                    Shop Now
                                </button>
                                <br /><br />
                                <img src={img3} alt="" />
                            </div>
                            <img src={img4} style={{ paddingBottom: "450px" }} alt="" />
                        </div>
                    </div>

                    {/* Second Slide */}
                    <div className="carousel-item active">
                        <div
                            style={{
                                backgroundImage: `url(${img2})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "550px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                paddingLeft: "200px"
                            }}
                        >
                            <div className="col-4">
                                <h5>
                                    <span style={{
                                        color: "#64B496",
                                        borderBottom: "2px solid #64B496",
                                        fontSize: "20px"
                                    }}>
                                        100%
                                    </span> Organic Fruit
                                </h5>
                                <h1 style={{
                                    fontSize: "55px",
                                    margin: "25px 0",
                                    fontWeight: "700"
                                }}>
                                    The best way to <br />stuff your wallet
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit <br />
                                    Consequatur consectetur adipisicing
                                </p>
                                <button className="custom-btn">
                                    Shop Now
                                </button>
                                <br /><br />
                                <img src={img3} alt="" />
                            </div>
                            <img src={img4} style={{ paddingBottom: "450px" }} alt="" />
                        </div>
                    </div>

                </div>

                {/* Controls */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>


                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;
