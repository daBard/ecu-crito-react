import React from 'react'
import { Link } from 'react-router-dom'

import dariaPimkina from '../../../assets/img/daria-pimkina-tYaccl19A3Q-unsplash.jpg'
import bgWavyLines from '../../../assets/img/background-wavy-lines2.svg'
// import './about.css'

const about = () => {
  return (
    <section className="about w-100">
        <div className="container">
            <div className="row">
                <div className="col-lg left">
                    <div className="image-wrapper">
                        <img src={dariaPimkina} alt="" className="image" loading="lazy" />
                        <img src={bgWavyLines} alt="" className="lines" loading="lazy" />
                    </div>
                    <div className="box">
                        <p>Samantha Brown,<span className="highlight"> Founder</span></p>
                        <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit."</p>
                    </div>
                </div>
                <div className="col-lg right d-flex flex-column justify-content-between">
                    <p className="highlight">About company</p>
                    <h2 className="display-3">We are business consulting & credit repair experts</h2>
                    <div className="text">
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quis incidunt adipisci accusantium libero provident voluptate amet.</p>
                    </div>
                    <div className="btngroup d-flex">
                        <Link className="btn btn-b">Learn more</Link>
                        <Link className="btn-round d-flex align-items-center">
                            <div className="play-arrow"><i className="fa-sharp fa-solid fa-play"></i></div>
                            <div>Intro Video</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default about