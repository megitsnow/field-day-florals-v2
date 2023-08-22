import ContactMe from '../components/ContactForm'
import DahliaBouquet from '../images/contact/dahlia.jpg'
import GoToTop from "../components/GoToTop";

export default function ContactPage() {
    return(
        <div className = "container p-5 contactPage">
            <div className ="row">
                <div className = "col-12 col-md-6 d-flex justify-content-center align-items-center pb-4">
                    <div>
                        <img src = {DahliaBouquet} class= "contactMeImage"/>
                    </div>
                </div>
                <div className = "col-12 col-md-6 d-flex justify-content-center align-items-center">
                    <ContactMe/>
                </div>
            </div>
            <GoToTop/>
        </div>
    ) 
}