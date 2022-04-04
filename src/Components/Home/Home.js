import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import img from '../../Image/Apple-MacBook-Air-2020-Hero.jpg';
import Review from '../Review/Review';
import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews();
    let ThreeReviews = [];
    let rest;
    rest = reviews.filter(review => review.id % 2 === 0)
    // console.log(rest);
    ThreeReviews = [...rest];
    // console.log(ThreeReviews);
    let navigate = useNavigate();
    const GotoReviews = () => {
        navigate = `/reviews`;
    }

    return (
        <div>
            <div className='product-container'>
                <div className='product-details'>
                    <h2>Buy Your Next Laptop...</h2>
                    <h2><span className='product-name'>Apple MacBook Air-2020</span></h2>
                    <p>Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. An advanced Neural Engine for up to 9x faster machine learning.The longest battery life ever in a MacBook Air. And a silent, fanless design.This much power has never been this ready to go.</p>
                    <button className='All-btn'>Demo</button>
                </div>
                <div className='product-image'>
                    <img src={img} alt="" />
                </div>
            </div>
            <div className='reviews'>
                <h1 className='review'>Customer Review ({ThreeReviews.length})</h1>
                <div className='reviews-container'>
                    {
                        ThreeReviews.map(review2 => <Review key={review2.id} review={review2}></Review>)
                    }
                </div>
            </div>
            <div className='seeAllReview-btn'>
                <button className='All-btn' onClick={GotoReviews}><strong>See All Reviews</strong></button>
            </div>
        </div>
    );
};

export default Home;