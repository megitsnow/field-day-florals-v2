import invertedLogo from '../images/logos/fieldDayLogoInverted.png'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className = "footer d-flex justify-content-center align-items-center">
            <div>
                <img src = {invertedLogo} className = "logoPicture"/>
            </div>
            <div>
                <Link to="about" className = "footerLink">About</Link>
                <Link to="services" className = "footerLink" >Services</Link>
                <Link to="portfolio" className = "footerLink">Portfolio</Link>
                <Link to="contact" className = "footerLink">Contact</Link>
            </div>
        </div> 
    )
}