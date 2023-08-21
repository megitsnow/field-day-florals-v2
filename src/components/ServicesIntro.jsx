import FlowerImage from '../images/services-page/servicesBanner.jpg'

export default function ServicesIntro() {
    return(
        <div>
            <div className = "aboutImageDiv">
                <img src = {FlowerImage} className = "aboutPageImage"/>
                <div class="centerAbout">Get All The Deets</div>
            </div>
        </div>
    )
}