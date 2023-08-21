import React from 'react'
import WelcomeImage from '../images/about-page/IMG_7076.jpg'
import WeddingMegan from '../images/about-page/WithMegan.png'
import MakingArrangment from '../images/about-page/girlsOnTheRun.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';
import '../index.css';

export default function AboutApril() {

    const navigate = useNavigate();
    const handleClick = () => navigate('/contact');

    return (
        <div class="container mt-4 mb-5">
            <div class="row text-center mb-4">
            <div class="col-md-6 d-flex aligns-items-center justify-content-center flex-column mb-4"> 
            <div>
                <div><img src = {WelcomeImage} className="aboutHomeImageMain" alt = "April, arranging florals in San Francisco, CA"/>
                </div>
                <h1 className = "text-center aboutHomeHeading">Hi, I am April!</h1>
                <p><em>Owner of Field Day Florals</em></p>
                <p class="text-center text-paragraph">Field Day Florals is a beautiful fusion of my passions: flowers, celebrations, and community. As a lifelong flower enthusiast, I embraced this hobby during the pandemic when I had ample free time. Immersing myself in tutorials and exploring various styles, my love for floral design flourished.</p>
                <p>Balancing my blossoming hobby with my EdTech career, I gradually honed my business and design skills through collaborations with local florists. This journey eventually led me to follow my dream of working with flowers full time.</p>
                <p>In early 2023, I proudly launched Field Day Florals, embarking on an incredible adventure. Creating art with flowers, collaborating with local sellers, and fostering connections within my community have filled me with profound gratitude.</p>
                <button className = "aboutButton" onClick = {handleClick}>Contact Me!</button>
            </div>
            </div>
                <div className = "col-md-6">
                <div>
                    <img src = {WeddingMegan} className="aboutHomeImage center-block picOneAbout" alt = "April, arranging florals in San Francisco, CA"/>
                    <div className = "picTwoAbout"><img src = {MakingArrangment} className="aboutHomeImage center-block" alt = "April, arranging florals in San Francisco, CA"/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

