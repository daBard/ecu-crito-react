import React from 'react'
import './features.css'
import Button from '../../utilities/button/button'

const features = () => {
  return (
    <section className="features w-100 m-none">
        <div className="container">
            <div className="box row">
                <div className="col">
                    <div className="left">
                        <p className="highlight">Features</p>
                        <h2 className="heading display-4">Our Accounting is trusted by thousands of companies</h2>
                        <Button btn="false" color="color" id="" title="Learn more" />
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