import React from 'react';
import './HomePage.scss';
import Person from '../assets/images/person-1.png'
import ArrowRight from "../assets/icons/next-arrow.svg";
import ArrowLeft from "../assets/icons/previous-arrow.svg";
import QuoteMark from "../assets/icons/quote-mark.svg";

const HomePage = () => {
    const handlePrevClick = () => {
        console.log('go back!')
    };

    const handleNextClick = () => {
        console.log('go next!')
    };

    return (
        <div className="container">
            <div className="logo"></div>
            <h5 className="sub-title">Testimonials</h5>
            <h2 className="title">What our clients say about us</h2>
            <div className="content">
                <div className="text">
                    <img src={QuoteMark} alt="quote mark image"/>
                    <p>
                        I have worked with a number of software developers before but none of them quite reached the
                        level of professionalism, diligence and enthusiasm that I experienced with Vitaliy and his team.
                        They are incredibly easy to work with and almost always find great programming solutions to our
                        requirements.
                    </p>
                    <p>
                        What I especially liked about the SoftFormance team is their passion and understanding for our
                        project. It’s like working with friends. Friends that deliver on their promises. I have nothing
                        but praise for the work of SoftFormance team and look forward to working with this agency in the
                        future.
                    </p>
                    <p className="author-name">Wolfgang Männel</p>
                    <p className="author-position">Founder and Managing Director, <span>Fotografen365</span></p>
                </div>
                <div className="slider">
                    <img
                        src={Person}
                        alt="slider-image"
                        className="slider-image"
                    />
                    <button
                        onClick={handlePrevClick}
                        className="slider-button prev"
                    >
                        <img
                            src={ArrowLeft}
                            alt="arrow back icon"
                        />
                    </button>
                    <button
                        onClick={handleNextClick}
                        className="slider-button next"
                    >
                        <img
                            src={ArrowRight}
                            alt="arrow next icon"
                        />
                    </button>
                </div>
            </div>

            <h2 className="feedback-title">Leave your feedback</h2>
            <p className="feedback-text">If you had a chance to work with us, please, leave your feedback and we’ll
                happily add it to our
                testimonials page. Thank you!</p>
            <button className="feedback-btn">Leave you feedback</button>
        </div>
    )
}

export default HomePage;