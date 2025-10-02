import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
    return (
        <div className='hero container'>
            <div className='hero-txt'>
                <h1>We Ensure better education for a better world</h1>
                <p>Edusity is an intuitive online Learning Management System designed to streamline education
                    and unlock potential. Whether you’re an educator, student, or institution, Edusity provides a flexible,
                    engaging, and secure platform to deliver engaging courses, track progress, and foster collaboration.</p>
                <button className='btn'> Explore more <img src={dark_arrow} alt="" /></button>
            </div>
        </div>
    )
}

export default Hero