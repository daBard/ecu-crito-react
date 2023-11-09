import React from 'react'
import Button from '../../utilities/button/Button'

const contactForm = () => {
  return (
    <section className="contact-form w-100 m-small">
        <div className="container">
            <form action="" id="contact-form">
                <fieldset>
                    <legend><h2>Leave us a message for any information.</h2></legend>
                    <label for="name">
                        <input type="text" id="name" name="name" placeholder="Name*" required />
                        <i className="icon"></i>
                    </label>
                    <label for="email">
                        <input type="email" id="email" name="email" placeholder="Email*" required />
                        <i className="icon"></i>
                    </label>
                    <label for="message">
                        <textarea id="message" name="message" placeholder="Your message*" rows="4" required></textarea>
                        <i className="icon top"></i>
                    </label>
                    <Button type="submit" form="contact-form" value="Send message" color="color" title="Send message" />
                </fieldset>
            </form>
        </div>
    </section>
  )
}

export default contactForm