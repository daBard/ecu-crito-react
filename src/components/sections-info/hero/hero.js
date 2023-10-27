import React from 'react'
import bgLines from '../../../assets/img/background-lines.svg'
import showcaseImg from '../../../assets/img/showcase-image.svg'
import './hero.css'

const hero = () => {
  return (
    <section className="hero w-100 m-none">
                <img src={bgLines} alt="" className="bg-lines" loading="lazy" />
                <div className="container d-flex">
                    <div className="left d-flex flex-column justify-content-center">
                        <div className="content">
                            <h1 className="display-1">We provide The Best business solutions</h1>
                            <p className="lead">Establish your vision and value proposition and turn them into testable prototypes.</p>
                        </div>
                        <div className="btngroup">
                            <button className="btn btn-c">Get Consulting</button>
                            <button className="btn btn-bg">Learn More</button>
                        </div>
                    </div>
                    <div className="right">
                        <img src={showcaseImg} alt="Man looking at pad" className="showcase-img img-fluid" loading="lazy" />
                    </div>
                </div>
            </section>
  )
}

export default hero