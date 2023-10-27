import React from 'react'
import backgroundWavyLines from '../../../assets/img/background-wavy-lines.svg'
import './newsletter.css'

const newsletter = () => {
  return (
    <section className="newsletter">
        <div className="container">
            <form method="post" action="" id="newsletter-form">
                <fieldset>
                    <legend><h2 className="display-3">Get news updates by signup</h2></legend>
                    <div className="group">
                        <label for="email">
                            <input type="email" id="email" name="email" placeholder="username@domain.com" required />
                            <i className="icon"></i>
                        </label>
                        <button type="submit" form="newsletter-form" value="Subscribe" className="btn btn-c">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </div>
        <img src={backgroundWavyLines} alt="" loading="lazy" />
    </section>
  )
}

export default newsletter