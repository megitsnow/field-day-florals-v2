import TestimonialOne from '../images/testimonials/testimonial.png'

export default function Testimonial(image) {
    return(
        <div className='d-flex jusity-content-center align-items-center p-5 container'>
            <div className = 'row'>
                <div className = 'col-12 col-md-4 text-center'>
                    <img src = {TestimonialOne} className='testimonialImage'/>
                </div>
            
                <div className='p-4 col-12 col-md-8'>
                    <p className='testimonialFont'>"April was the florist for our wedding celebration held in the Redwood Grove of the San Francisco Botanical Gardens. Working with her was an absolute pleasure. <span className = "testimonialHighlights">April understood our vision for the flowers right away and was so skilled at making our day look and feel exactly how we hoped.</span> All of our guests commented on how beautiful and joyful the flowers were throughout the ceremony and reception. She set up the arch and flower arrangements for both the ceremony and our dinner following, making the day feel smooth and stress-free. I loved my bouquet so much I’m getting it dried and framed! We couldn’t recommend her highly enough!" - Megan</p>
                </div>
            </div>
        </div>
    )
}