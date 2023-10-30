import React from 'react'
import { Link } from 'react-router-dom'

import linkedinSalesSolutions from '../../../assets/img/linkedin-sales-solutions-Mis5fyJi7Q0-unsplash.jpg'
import emilianoVittoriosi from '../../../assets/img/emiliano-vittoriosi-vEN1bsdSjxM-unsplash.jpg'
import kobuAgency from '../../../assets/img/kobu-agency-ipARHaxETRk-unsplash.jpg'

const apiUrl = "https://win23-assignment.azurewebsites.net/api"

const articlesNews = () => {
    const maxArticles = 3
    const articlesX = getArticles()

    console.log(articlesX)

    return (
        <section className="articles-news">
            <div className="container">
                <div className="top d-flex">
                    <div className="text">
                        <p className="highlight">Articles & news</p>
                        <h2 className="display-3">Get every single article & news</h2>
                    </div>
                    <div className="btngroup">
                        <Link to="#" className="btn btn-w">"Browse articles"</Link>
                    </div>
                </div>
                <div className="cards d-flex">
                    <Link to="#" className="card d-flex flex-column">
                        <div className="image-wrapper">
                            <img src={linkedinSalesSolutions} alt="" loading="lazy" />
                            <div className="date-box">
                                <p className="date">25</p>
                                <p className="month">Mar</p>
                            </div>
                        </div>
                        <div className="text">
                            <p className="tag">Business</p>
                            <h3>How to use digitalization in the classroom</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                        </div>
                        <div className="line"></div>
                    </Link>
                    
                    <Link to="#" className="card d-flex flex-column">
                        <div className="image-wrapper">
                            <img src={emilianoVittoriosi} alt="" loading="lazy" />
                            <div className="date-box">
                                <p className="date">17</p>
                                <p className="month">Mar</p>
                            </div>
                        </div>
                        <div className="text">
                            <p className="tag">Business</p>
                            <h3>How to implement chat GPT in your projects</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                        </div>
                        <div className="line"></div>
                    </Link>

                    <Link to="#" className="card d-flex flex-column">
                        <div className="image-wrapper">
                            <img src={kobuAgency} alt="" loading="lazy" />
                            <div className="date-box">
                                <p className="date">13</p>
                                <p className="month">Mar</p>
                            </div>
                        </div>
                        <div className="text">
                            <p className="tag">Business</p>
                            <h3>The guide to support modern CSS design</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                        </div>
                        <div className="line"></div>
                    </Link>
                </div>
                <div className="dots d-flex justify-content-center">
                    <div className="dot active"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
        </section>
    )
}

export default articlesNews

const getArticles = async () => {
    try {
        const result = await fetch(`${apiUrl}/articles`)
        //const articles = await result
        
        return Promise.resolve(result)
    }
    catch(err) {
        console.warn(err)
    }
}
