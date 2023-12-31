import React from 'react'
import { Link } from 'react-router-dom'

import backgroundLinesRight from '../../../assets/img/background-lines-right.svg'
import HighlightHeading from '../../utilities/highlightHeading/HighlightHeading'

const service = () => {
    const highlight = 'Our Services'
    const title = 'We provide the best services for consulting'

  return (
    <section className="service w-100">
        <div className="container d-flex flex-column">
            <HighlightHeading
                _highlight={highlight} _title={title}
            />
            <div className="cards d-flex">
                <Link to="#" className="card d-flex flex-column">
                    <div className="line"></div>
                    <h3>Business advice</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div className="btn-round"><i className="fa-solid fa-arrow-right"></i></div>
                </Link>
                <Link to="#" className="card flipped d-flex flex-column">
                    <div className="line"></div>
                    <h3>Startup business</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div className="btn-round"><i className="fa-solid fa-arrow-right"></i></div>
                </Link>
                <Link to="#" className="card d-flex flex-column">
                    <div className="line"></div>
                    <h3>Financial advice</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div className="btn-round"><i className="fa-solid fa-arrow-right"></i></div>
                </Link>
                <Link to="#" className="card d-flex flex-column">
                    <div className="line"></div>
                    <h3>Risk management</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div className="btn-round"><i className="fa-solid fa-arrow-right"></i></div>
                </Link>
            </div>
            <div className="btngroup d-flex justify-content-center">
                <Link to="#" className="btn btn-bg">Browse services</Link>
            </div>
        </div>
        <img src={backgroundLinesRight} alt="" className="lines" loading="lazy" />
    </section>
  )
}

export default service