import PhotoAlbum from "react-photo-album";
import WelcomeSection from "../components/HomeAbout";
import HomeOpening from "../components/HomeOpening";
import InstagramFeed from "../components/InstagramFeed";
import GoToTop from "../components/GoToTop";
import { useNavigate } from 'react-router-dom';
import '../index.css';



export default function HomePage({photos}) {
    const navigate = useNavigate();
    const handleClick = () => navigate('/services');

    return (
        <div>
            <div>
            <HomeOpening/>
            <div className="d-flex flex-column justify-content-center align-items-center mb-4">
                <h2 className = "heading homePageText text-center">You Bring the Party, We Bring the Flowers</h2>
                <p className = "text-center text-paragraph homePageText">Field Day Florals is a San Francisco-based, woman-owned floral design company. From small events and corporate dinners to elopements and large weddings, we can do it all.</p>
            <button className = "servicesButton" onClick = {handleClick}>Services</button>
            </div>
            <div className = "photoCollage mb-4">
                <PhotoAlbum photos = {photos} layout = "masonry"/>
            </div>
            <WelcomeSection/>
            </div>
            <InstagramFeed/>
            <GoToTop/>
        </div>
    )
}