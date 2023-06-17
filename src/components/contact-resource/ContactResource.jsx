import React from 'react'
import ContactForm from './contact-form/ContactForm'
import OurResource from './resource/OurResource'

function ContactResource() {
  return (
    <div className='section-container'>
        <div className="resource-contact-section-container">
            <div className="reveal" id="contact-us">
                <div className="resource-contact-section">
                    <div className="resource-container">
                        <h1>Resources Center</h1>
                        <p>Some useful documents of BLOCKACE can be viewed and downloaded here:</p>
                        <OurResource />
                    </div>
                    <div className="contact-container">
                        <h1>Contact Us</h1>
                        <p>We are delighted to hear from you. Please leave a message and we will respond as soon as possible.</p>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactResource