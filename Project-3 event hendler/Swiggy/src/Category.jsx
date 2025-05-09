import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Category = ({ categoryData, swiggyAppData }) => {
  
    const settings = {
        dots: false,
        infinite: true,
        speed: 3500,
        slidesToShow: 4,        // Adjust based on screen size
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2,       // 0 for continuous motion
        cssEase: "linear",
        rows: 2,                // 🔥 This creates 2 rows
        slidesPerRow: 1,        // Each row will have one slide from the batch
        arrows: false,
        pauseOnHover: false
    };

    return (
        <div >
            <div style={{padding:"20px"}}>
                <Slider {...settings}>
                    {
                        categoryData.map((category, index) => (
                            <div key={index}>
                                <img
                                    style={{ width: "68%", height: "300px", objectFit: "contain", borderRadius: "8px", padding: "20px" }}
                                    src={category.img}
                                    alt={`Category ${index}`}
                                />
                            </div>
                        ))
                    }
                </Slider>
            </div>


                    {/* swiggyapp poster */}
            <div>
                {
                    swiggyAppData.map((app, index) => (
                        <div key={index}>
                            <img
                                style={{ width: "100%", height: "380px", objectFit: "cover", borderRadius: "8px" }}
                                src={app.img}
                                alt={`Category ${index}`}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Category;
