import {useRef,React} from 'react'
import emailjs from '@emailjs/browser';

export default function ContactMe() {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_xcq0emi', 'template_i48aocp', form.current, 'ppS1byxsfNJIJPtoo')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (
        <div id="contact" className = "bt-5 formFont d-flex flex-column align-items-center justify-content-center contactForm">
            <h1 className = "text-center contactFormHeading">Let's Work Together!</h1>
            <p className = "text-center text-paragraph">Need flowers for an event, curious about a workshop, or just wanna chat flowers? Please fill out the form below, and we’ll get back to you in two business days. 
</p>
                <div className = "formDiv">
                <form ref = {form} onSubmit = {sendEmail} formWidth>
                    <div class = "form-group row">
                        <input type = "text" className = "mb-2 w-48 me-2"
                        placeholder = "Name"
                        name = "user_name" required/>
                        <input type = "email" className = "mb-2 w-48"
                        placeholder = "Email"
                        name = "user_email" required/>
                    </div>
                    <div class = "form-group row">
                        <input type = "text" className = "mb-2 w-48"
                        placeholder = "Subject"
                        name = "subject" required/>
                    </div>
                    <div class = "form-group row mb-2 w-48">
                        <textarea
                        name = "message"
                        placeholder = "Let me know all the deets!"
                        rows = "7" required/>
                    </div>
                    <div>
                        <button type ="submit" className = "btn btn-outline-secondary">Send Message</button>
                    </div>
                </form>
                </div>
        </div>
    )
}

