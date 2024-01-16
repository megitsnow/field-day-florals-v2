import cityHallWedding from '../images/services-page/413A5816-1.jpg'
import arrangingFlowers from '../images/services-page/arrangingFlowersBlue.jpg'
import subscriptionImage from '../images/services-page/subscriptions.png'

export default function ServicesInformation() {
    return (
        <div className = "container p-5">
        <div className = "row">
            <div className = "col-12 col-md-4 gridBorderServices d-flex justify-content-start align-items-center p-4 flex-column">
                <div className = "text-center">
                    <img src = {cityHallWedding} className = 'servicesPhotos pb-4'/>
                </div>
                <div>
                <h1 className = "aboutHomeHeading text-center">Events & Weddings</h1>
                    <p>What’s a party without flowers?! No such thing. 
                    </p>
                    <p>Field Day Florals designs arrangements for
                        wedding ceremonies & receptions, rehearsal dinners, birthday parties, baby showers—if there's a party, 
                        there better be flowers! </p>
                    <p>
                    Floral arches, centerpieces, garlands, crowns, and more— I
                    can make your flower dreams come true.
                    </p>

                </div>
            </div>
            <div className = "col-12 col-md-4 gridBorderServices d-flex pb-4 w-30 justify-content-start align-items-center p-4 flex-column">
                <div className = "text-center">
                    <img src = {arrangingFlowers} className = "servicesPhotos pb-4"/>
                </div>
                <div>
                    <h1 className = "aboutHomeHeading text-center">Workshops</h1>
                    <p>
                    Are your events feeling the same old, same old? Ditch the board games, and let’s play with flowers! 
                    </p>
                    <p>
                    My workshops are social, engaging and fun—the perfect way to flex your creative muscles at your next party or corporate event. I provide everything you need to make a beautiful arrangement and go over topics like color theory, flower care, and simple tips to really up your floral game.
                    </p>
                    <p>
                    Workshops last around 2 hours and typically include 4-12 participants.  
                    </p>
                </div>
            </div>
            <div className = "col-12 col-md-4 gridBorderServices d-flex justify-content-start align-items-center p-4 flex-column">
                <div className = "text-center">
                    <img src = {subscriptionImage} className = "servicesPhotos pb-4"/>
                </div>
                <div>
                    <h1 className = "aboutHomeHeading text-center">Subscriptions</h1>
                    <p>Need flowers in your life all the time? 
                    I get it. Never be without flowers again by signing up for a subscription! 
                    </p>
                    <p>
                    I offer subscription services to businesses and residents of San Francisco.
                    </p>
                    <p>
                    You choose the duration (weekly, semi-weekly, monthly), 
                    and you can always pause if needed. 
                    </p>
                    <p>
                    Get the ball rolling by reaching out! 
                    </p>
                </div>
            </div>
        </div>
     </div>
    ) 
}