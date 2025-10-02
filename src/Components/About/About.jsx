import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
    return (
        <div className='about'>
            <div className='about-left'>
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' />
            </div>
            <div className='about-right'>
                <h3>About University</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Our university is committed to providing a world-class education
                    that goes beyond textbooks and lectures. We strive to create an
                    environment where students can explore their potential, and prepare for the challenges
                    of the modern world.</p>

                <p>Research, innovation, and practical experience form the core of our academic approach.
                    Students are encouraged to participate in real-world projects, internships,
                    and collaborative initiatives that enhance their understanding and build professional competence.
                </p>

                <p>At the heart of our university is a diverse and inclusive community
                    that values collaboration, respect, and personal growth. We believe that education is not
                    just about academics but also about shaping responsible and socially conscious individuals.
                </p>
            </div>
        </div>
    )
}

export default About