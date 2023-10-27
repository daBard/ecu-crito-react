import React from 'react'
import logoWhite from '../../assets/img/logotype-white.svg'
import bgLinesWhiteRight from '../../assets/img/background-lines-white-right.svg'
import './header-footer.css'

const footer = () => {
  return (
    <footer className="w-100">
        <section className="w-100 top">
            <div className="container">
                <div className="f f-1">
                    <img src={logoWhite} alt="Crito logo" className="logo" />
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas volutptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                </div>
                <div className="f f-2">
                    <h2>Company</h2>
                    <a href="#">About</a>
                    <a href="#">Features</a>
                    <a href="#">Works</a>
                    <a href="#">Career</a>                    
                </div>
                <div className="f f-3">
                    <h2>Help</h2>
                    <a href="#">Customer Support</a>
                    <a href="#">Delivery Details</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div className="f f-4">
                    <h2>Resources</h2>
                    <a href="#">Free eBooks</a>
                    <a href="#">Development Tutorial</a>
                    <a href="#">How to - Blog</a>
                    <a href="#">Youtube Playlist</a>
                </div>
                <div className="f f-5">
                    <h2>Link</h2>
                    <a href="#">Free eBooks</a>
                    <a href="#">Development Tutorial</a>
                    <a href="#">How to - Blog</a>
                    <a href="#">Youtube Playlist</a>
                </div>
            </div>
            <img src={bgLinesWhiteRight} alt="" className="lines" loading="lazy" />
        </section>
        <section className="w-100 bottom">
            <div className="container d-flex align-items-center justify-content-between">
                <div className="copyright">© 2023 Crito - Consulting Company Inc. All Rights Reserved.</div>
                <div className="social d-flex">
                    <a href="#"><i className="fa-brands fa-facebook fa-lg" aria-label="Facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-square-x-twitter fa-lg" aria-label="Twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram fa-lg" aria-label="Instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-linkedin fa-lg" aria-label="LinkedIn"></i></a>
                </div>
            </div>
        </section>
    </footer>
  )
}

export default footer