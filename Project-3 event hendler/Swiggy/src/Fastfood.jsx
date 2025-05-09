import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = ({ fastFoodsData }) => {
    // console.log(foodsData);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div style={{ width: "75%", margin: "auto" }}>
            <h2>Simple Slider</h2>
            <Slider {...settings}>
                <div>
                    {
                        fastFoodsData.map((foods) => {
                            console.log(fastFoodsData);
                            return (
                                <>
                                    
                                    
                                    <img style={{ width: "100%" ,height:"100%" }} src={foods.pizza} alt="" />
                                </>
                            )
                        })
                    }
                </div>

            </Slider>
        </div>
    );
}

export default SliderComponent;
