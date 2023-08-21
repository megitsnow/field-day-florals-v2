import React from 'react'
import WelcomeImage from '../images/home-page/IMG_6845.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';
import '../index.css';

function WelcomeSection() {

    const navigate = useNavigate();
    const handleClick = () => navigate('/about');

    return (
        <div class="container mt-2 mb-4">
            <div class="row text-center">
            <div class="col-md-6"><img src = {WelcomeImage} className="aboutHomeImage center-block" alt = "April, arranging florals in San Francisco, CA"/></div>
            <div class="col-md-6 d-flex aligns-items-center justify-content-center flex-column"> 
            <div>
                <h1 className = "text-center aboutHomeHeading">Hi, I am April!</h1>
                <p><em>Owner of Field Day Florals</em></p>
                <p className="text-center text-paragraph">I founded Field Day Florals because I have a passion for celebrations, community, and of course, flowers! I love desigining florals for events because they bring nature, art, and beauty to already beautiful moments.</p>
                <p className="text-center text-paragraph">Can't wait to hear more about your wedding or special event!</p>
                <button className = "aboutButton" onClick = {handleClick}>Learn More</button>
            </div></div>
            </div>
        </div>
    )
}

export default WelcomeSection;