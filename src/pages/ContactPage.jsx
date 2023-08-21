import ContactMe from '../components/ContactForm'
import DahliaBouquet from '../images/contact/dahlia.jpg'
import GoToTop from "../components/GoToTop";

export default function ContactPage() {
    return(
        <div className = "container m-5">
            <div className ="row text-center">
                <div className = "col-md-6 mb-2">
                    <img src = {DahliaBouquet} class= "contactMeImage"/>
                </div>
                <div className = "col-md-6">
                    <ContactMe/>
                </div>
            </div>
            <GoToTop/>
        </div>
    ) 
}