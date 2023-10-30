import React from 'react'

const contactInformation = () => {
  return (
    <section className="contact-information w-100">
        <div className="container">
            <div className="boxes">
                <div className="box">
                    <div className="icon">
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="text">
                        <h2>Visit us</h2>
                        <p>Sveavägen 31</p>
                        <p>111 34 STOCKHOLM</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <i className="fa-solid fa-phone-volume"></i>
                    </div>
                    <div className="text">
                        <h2>Call us</h2>
                        <p>+46 (8) 121 470 50</p>
                        <p>+46 (8) 121 470 51</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="text">
                        <h2>Email us</h2>
                        <p>info@crito.com</p>
                        <p>support@crito.com</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default contactInformation