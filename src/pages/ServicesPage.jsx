import ServicesIntro from '../components/ServicesIntro'
import ServicesInformation from '../components/ServicesInformation'
import TestimonialWorkshop from '../components/WorkshopTestimonial'
import GoToTop from "../components/GoToTop";

export default function ServicesPage() {
    return(
        <div>
            {/* <ServicesIntro/> */}
            <ServicesInformation/>
            <TestimonialWorkshop/>
            <GoToTop/>
        </div>
    )
}