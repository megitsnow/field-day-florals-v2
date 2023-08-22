import ServicesInformation from '../components/ServicesInformation'
import TestimonialWorkshop from '../components/WorkshopTestimonial'
import GoToTop from "../components/GoToTop";
import { useNavigate } from 'react-router-dom';

export default function ServicesPage() {

    const navigate = useNavigate();
    const handleClick = () => navigate('/contact');

    return(
        <div>
            {/* <ServicesIntro/> */}
            <ServicesInformation/>
            <div className = "d-flex justify-content-center align-items-center">
                <button className = "aboutButton" onClick = {handleClick}>Contact Me!</button>  
            </div>
            <TestimonialWorkshop/>
            <GoToTop/>
        </div>
    )
}