import React from 'react'
import { Link } from 'react-router-dom'

import HighlightHeading from '../../utilities/highlightHeading/HighlightHeading'

const highlight = 'Features'
const title = 'Our accounting is trusted by thousands of companies'
const display = 4

const features = () => {
  return (
    <section className="features w-100 m-none">
        <div className="container">
            <div className="box row">
                <div className="col">
                    <div className="left">
                        <HighlightHeading 
                            _highlight={highlight} _title={title} _display={display}
                        />
                        <Link to="#" className="btn btn-c">Learn more</Link>
                    </div>
                </div>
                <div className="col">
                    <div className="grid">
                        <div className="">
                            <i className="fa-light fa-handshake-simple fa-2xl"></i>
                            <h3 className="">Business Advice</h3>
                            <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="">
                            <i className="fa-light fa-lightbulb-on fa-2xl"></i>
                            <h3 className="">Startup Business</h3>
                            <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="">
                            <i className="fa-light fa-chart-mixed-up-circle-dollar fa-2xl"></i>
                            <h3 className="">Financial Advice</h3>
                            <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="">
                            <i className="fa-sharp fa-light fa-box-circle-check fa-2xl"></i>
                            <h3 className="">Risk management</h3>
                            <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default features