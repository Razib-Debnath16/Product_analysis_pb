import React from 'react';
import img from '../../Image/404.jpeg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='notFound'>
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;