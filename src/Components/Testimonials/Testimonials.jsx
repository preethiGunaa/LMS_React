import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';


const Testimonials = () => {

    const slideForward = () => {
        
    }

     const slideBackward = () => {
        
    }


    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='nxt-btn' onClick={slideForward}/>
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
            <div className="slider">
                <ul>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Lukisha Mandir</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Edusity has completely changed how I learn online. The video lectures and live sessions are super interactive,
                                and the mentors explain every concept clearly. It’s like having a classroom experience at home</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Jhon David</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>“I used to struggle with understanding core subjects, but Edusity made it easy with structured modules and short quizzes.
                                The best part is how it tracks my progress — it keeps me motivated to learn more!</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Mosh Diya</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>I love how Edusity provides both academic and skill-development courses. The interface is simple and distraction-free.
                                I’ve already completed two certifications that helped me in my internship</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>William Denil</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>The personalized learning paths in Edusity are amazing! I can learn at my own pace,
                                and the discussion forums help me clear doubts anytime. Truly a student-friendly platform.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials