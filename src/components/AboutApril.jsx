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
                <p class="text-center text-paragraph">Field Day Florals is a blend of things I love: flowers, celebrations & community. I’ve always been a flower lover, and when faced with lots of free time during the pandemic, I knew what hobby I wanted to pursue. I quickly found myself devouring tutorials and experimenting with different styles. </p>
                <p>Balancing my growing hobby with my EdTech career, I developed my business and design skills by collaborating with local florists. This journey eventually led me to follow my dream of working with flowers full time and I launched my small business—Field Day Florals</p>
                <p>I'm committed to sustainability and supporting local farmers. I feel grateful to create art with flowers, work with Bay Area businesses, and connect with folks in my community.</p>
                <p>When I’m not working with flowers, you can find me exploring new parts of San Francisco, visiting local cafes and fun cocktail spots. Some of my favorite things include chocolate old-fashion donuts, Mexican food, thrift shopping, beach vacations and singing along to musicals!</p>
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

