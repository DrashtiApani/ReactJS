import React from 'react';
import img from './img/19.jpg';
import img1 from './img/20.jpg';
import img2 from './img/21.jpg';
import { FaQuoteLeft, FaStar, FaRegStar } from "react-icons/fa";

const Reviews = () => {
    const reviews = [
        {
            img: img,
            role: "Co Founder",
            name: "Stephen Smith",
            stars: 5
        },
        {
            img: img1,
            role: "Manager",
            name: "Lorem Robinson",
            stars: 4
        },
        {
            img: img2,
            role: "Team Leader",
            name: "Saddika Alard",
            stars: 5
        }
    ];

    return (
        <section style={{ marginTop: '100px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text-center" style={{ margin: '0 auto' }}>
                        <h2 className='fw-bolder mb-3'>Great Words From People</h2>
                        <p className='text-secondary mb-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.
                        </p>
                    </div>
                    <div className="col-lg-12 mt-5 pt-3 px-0">
                        <div className="row">
                            {reviews.map((review, idx) => (
                                <div className="col-lg-4" key={idx}>
                                    <div className="review-card text-center border py-4 px-5 rounded position-relative" style={{ backgroundColor: '#f1f1f1' }}>
                                        <img
                                            src={review.img}
                                            alt={`reviewer-${idx + 1}`}
                                            width={'120'}
                                            className="reviewer rounded-circle border border-2 p-2 position-absolute"
                                            style={{
                                                left: '50%',
                                                top: '0',
                                                transform: 'translate(-50%,-50%)',
                                                backgroundColor: '#fff'
                                            }}
                                        />
                                        <FaQuoteLeft
                                            className="position-absolute text-muted"
                                            style={{ left: '30px', top: '25px', fontSize: '24px' }}
                                        />
                                        <FaQuoteLeft
                                            className="position-absolute text-muted"
                                            style={{ right: '30px', bottom: '25px', fontSize: '24px', transform: 'rotate(180deg)' }}
                                        />
                                        <p className='pt-5'>{review.role}</p>
                                        <h5 className='fw-bolder mb-3'>{review.name}</h5>
                                        <p className='text-secondary m-0 px-5'>
                                            “eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”
                                        </p>

                                        {/* Stars - rendered dynamically */}
                                        <div className="stars text-warning pt-2 d-flex justify-content-center">
                                            {[...Array(5)].map((_, i) =>
                                                i < review.stars ? (
                                                    <FaStar key={i} style={{ color: 'orange', marginRight: 4 }} />
                                                ) : (
                                                    <FaRegStar key={i} style={{ color: 'orange', marginRight: 4 }} />
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
