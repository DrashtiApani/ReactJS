import React, { useState } from 'react';
import './News.css';
import img1 from './img/22.jpg';
import img2 from './img/23.jpg';
import img3 from './img/24.jpg';

const News = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(prev => prev === index ? null : index);
    };

    const newsData = [
        { img: img1, date: '10', month: 'Oct' },
        { img: img2, date: '9', month: 'Sep' },
        { img: img3, date: '12', month: 'Oct' },
        { img: img1, date: '22', month: 'Jan' },
    ];

    return (
        <section className='news'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text-center mx-auto">
                        <h2 className='fw-bolder mb-3'>Latest News</h2>
                        <p className='text-secondary mb-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.
                        </p>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            {newsData.map((item, index) => (
                                <div className="news-card col-lg-3" key={index}>
                                    <div className="news-content">
                                        <p className='mb-2 text-secondary fw-semibold'>
                                            By Admin | <a href="#" className='text-secondary'>Snacks</a>
                                        </p>
                                        <h5 className='fw-bolder'>Urna pretium elit mauris cursus at elit Vestibulum.</h5>
                                        <a href="#" className='text-success fw-semibold'>
                                            Read More <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>
                                    <div className="news-img position-relative overflow-hidden">
                                        <img src={item.img} alt={`news-${index}`} />
                                        <i className="fa-solid fa-arrow-right hover-arrow"></i>
                                        <span>
                                            {item.date}
                                            <p className='m-0 fs-5 fw-normal'>{item.month}</p>
                                        </span>
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

export default News;
