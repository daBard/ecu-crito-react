import React from 'react'
import { Link } from 'react-router-dom'

import amyHirshi from '../../../assets/img/amy-hirschi-K0c8ko3e6AA-unsplash.jpg'
//import './whyUs.css'

const whyUs = () => {
  return (
    <section className="why-us w-100 m-small">
        <div className="box"></div>
        <div className="container d-flex">
            <div className="left">
                <p className="highlight">Why choose us</p>
                <h2 className="display-3">Why we are the best business consulting agent</h2>
                <div className="objects">
                    <Link to="#" className="object d-flex">
                    <div className="icon"><i className="fa-light fa-thumbs-up fa-2xl"></i></div>
                    <div className="text">
                        <h3>Process excellence</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur</p>
                    </div>
                    </Link>
                    <Link to="#" className="object d-flex">
                        <div className="icon"><i className="fa-light fa-chess fa-2xl"></i></div>
                        <div className="text">
                            <h3>Strategic planning</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur</p>
                        </div>
                    </Link>
                    <Link to="#" className="object d-flex">
                        <div className="icon"><i className="fa-light fa-bezier-curve fa-2xl"></i></div>
                        <div className="text">
                            <h3>Experience design</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur</p>
                        </div>
                    </Link>
                    <Link to="#" className="object d-flex">
                        <div className="icon"><i className="fa-light fa-head-side-gear fa-2xl"></i></div>
                        <div className="text">
                            <h3>Artificial intelligence</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="right">
                <div className="image-wrapper">
                    <img src={amyHirshi} alt="Two people discussing over a pad" loading="lazy" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default whyUs