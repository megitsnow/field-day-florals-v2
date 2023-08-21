import workshopTestimonial from "../images/testimonials/workshop.png"

export default function TestimonialWorkshop(image) {
    return(
        <div className='d-flex jusity-content-center align-items-center p-5 container'>
            <div className = 'row'>
                <div className = 'col-12 col-md-4 text-center'>
                    <img src = {workshopTestimonial} className='testimonialImage'/>
                </div>           
                <div className='p-4 col-12 col-md-8 d-flex align-items-center'>
                    <p className='testimonialFont'>"I wanted to spend my birthday doing something I’ve always wanted to learn — flower arranging! <span className = "testimonialHighlights">April is knowledgeable, accommodating and such a warm person to work with and be around. My friends and I loved her workshop. </span>She gave clear instructions, helpful tips and walked us through a stunning flower arrangement! Everyone had a blast and left feeling inspired with a new skill set under their belt." - Julianna</p>
                </div>
            </div>
        </div>
    )
}