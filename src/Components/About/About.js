import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <div className='about'>
                <h2> <strong>PROS</strong> <br />
                    Good value, especially for a MacBook
                    Much-improved performance, thanks to Apple’s new M1 processor
                    Exceptional battery life
                    Sleek, portable metal design
                    High-quality keyboard, touchpad, and display
                    Multiple color options </h2>
                <h2><strong>CONS</strong> <br />
                    Port selection limited to two USB Type-C connections
                    Still no touch-screen option</h2>
            </div>
            <div className='specification'>
                <h2>APPLE MACBOOK AIR (2020) SPECIFCATION</h2>
                <ul>
                    <li>Laptop Class</li>
                    <li>Ultraportable</li>
                    <li>Processor	Apple M1</li>
                    <li>Processor Speed	3.2 GHz</li>
                </ul>




            </div>
        </div>

    );
};

export default About;