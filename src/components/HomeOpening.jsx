import flower from '../images/about-page/mainFlowerArrangement.jpg'

export default function HomeOpening() {
    return (
        <div>
        <div className = "mb-4">
            <img src = {flower} className = "w-100 h-50 img-responsive"/>
            <div class="center ">Field Day Florals</div>
            {/* <div class="offCenter">Florals</div> */}
        </div>
        </div>

    )
}