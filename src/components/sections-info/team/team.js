import React from 'react'
import { Link } from 'react-router-dom'

import kristinePalmer from '../../../assets/img/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg'
import markAubri from '../../../assets/img/itay-verchik-6ZKGBzrDd3I-unsplash.jpg'
import kimberlyHansen from '../../../assets/img/christina-wocintechchat-com-Zpzf7TLj_gA-unsplash.jpg'
import justinWilloman from '../../../assets/img/the-connected-narrative-N8lRH2uxih4-unsplash.jpg'
//import './team.css'

const team = () => {
  return (
    <section className="team w-100">
        <div className="container d-flex flex-column">
            <div className="top d-flex justify-content-between align-items-center">
                <div className="text">
                    <p className="highlight">Meet our team</p>
                    <h2 className="display-3">Experience team members</h2>
                </div>
                <div className="btngroup">
                    <Link to="#" className="btn btn-c">Browse team</Link>
                </div>
            </div>
            <div className="cards d-flex">
                <div className="card d-flex flex-column">
                    <img src={kristinePalmer} alt="Kristine Palmer" loading="lazy" />
                    <div className="text">
                        <h3>Kristine Palmer</h3>
                        <p>Chief Operation Officer</p>
                    </div>
                </div>
                <div className="card d-flex flex-column">
                    <img src={markAubri} alt="Mark Aubri" loading="lazy" />
                    <div className="text">
                        <h3>Mark Aubri</h3>
                        <p>Senior Consultant</p>
                    </div>
                </div>
                <div className="card d-flex flex-column">
                    <img src={kimberlyHansen} alt="Kimberly Hansen" loading="lazy" />
                    <div className="text">
                        <h3>Kimberly Hansen</h3>
                        <p>Senior Consultant</p>
                    </div>
                </div>
                <div className="card d-flex flex-column">
                    <img src={justinWilloman} alt="Justin Willoman" loading="lazy" />
                    <div className="text">
                        <h3>Justin Willoman</h3>
                        <p>Senior Tech Consultant</p>
                    </div>
                </div>
            </div>
            <div className="dots d-flex justify-content-center">
                <div className="dot"></div>
                <div className="dot active"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    </section>
  )
}

export default team