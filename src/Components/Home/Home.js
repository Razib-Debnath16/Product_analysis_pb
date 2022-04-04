import React from 'react';
import img from '../../Image/Apple-MacBook-Air-2020-Hero.jpg';
import './Home.css'

const Home = () => {
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


            </div>
        </div>
    );
};

export default Home;