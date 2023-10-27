import React from 'react'
import logo from '../../assets/img/logotype.svg'
import './header-footer.css'


const header = () => {
  return (
    <header>
        <div className="container w-max">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="./index.html">
                        <img src={logo} alt="Crito logo" className="" />
                    </a>
                
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <section className="nav align-items-center">
                                <div className="contact d-flex">
                                    <div className="d-flex">
                                        <div className="d-flex">
                                            <i className="fa-regular fa-phone-volume"></i>
                                            <span className="tel">+46 (8) 121 470 50</span>    
                                        </div>
                                        <div className="d-flex">
                                            <i className="fa fa-regular fa-envelope"></i>
                                            <span className="mail">info@crito.com</span>
                                        </div>
                                        <div className="d-flex">
                                            <i className="fa-regular fa-location-dot"></i>
                                            <span className="address"><span>Sveavägen 31,</span> <span>111 34 STOCKHOLM</span></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="social d-flex">
                                    <a href="#"><i className="fa-brands fa-facebook fa-lg" aria-label="Facebook"></i></a>
                                    <a href="#"><i className="fa-brands fa-square-x-twitter fa-lg" aria-label="Twitter"></i></a>
                                    <a href="#"><i className="fa-brands fa-instagram fa-lg" aria-label="Instagram"></i></a>
                                    <a href="#"><i className="fa-brands fa-linkedin fa-lg" aria-label="LinkedIn"></i></a>
                                </div>
                                
                            <div className="navi d-flex">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Service</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">News</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="contact.html">Contact</a>
                                        </li>
                                    </ul>
                            </div>
                            
                            <div className="login d-flex">
                                    <button type="button" id="login-btn" className="btn btn-c">Login</button>
                            </div>

                            <div className="line"></div>

                        </section>
                        
                    </div>
                </nav>
            </div>
    </header>
  )
}

export default header