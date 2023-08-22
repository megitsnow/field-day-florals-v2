import invertedLogo from '../images/logos/fieldDayLogoInverted.png'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className = "footer">
            <div>
                <img src = {invertedLogo} className = "logoPicture"/>
            </div>
            <div className = "divSmallScreen">
                <div className = "m-0 pr-0">
                    <Link to="about" className = "footerLink">About</Link>
                    <Link to="services" className = "footerLink" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Services</Link>
                </div>
                <div className = "m-0 pr-0">
                    <Link to="portfolio" className = "footerLink">Portfolio</Link>
                    <Link to="contact" className = "footerLink">Contact</Link>
                </div>
            </div>
        </div> 
    )
}