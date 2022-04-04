import React, { useState } from 'react';
import useReviews from '../../Hooks/useReviews';
import img from '../../Image/Apple-MacBook-Air-2020-Hero.jpg';
import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div>
            <div className='product-container'>
                <div className='product-details'>
                    <h2>Buy Your Next Laptop...</h2>
                    <h2><span className='product-name'>Apple MacBook Air-2020</span></h2>
                    <p>Title</p>
                    <button>Demo</button>
                </div>
                <div className='product-image'>
                    <img src={img} alt="" />
                </div>
            </div>
            <div className='reviews-container'>
                <h1>Customer Review</h1>
                {/* {
                    reviews.map(review => <Reviews review={review}></Reviews>)
                } */}
            </div>
            <div>
                <button onClick={TopThreeReviews}>Click Me</button>
            </div>
        </div>
    );
};

export default Home;