import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ArticleGrid from '../../utilities/articleGrid/ArticleGrid'

const feedNews = ({ _bgColor= '$bg-white' }) => {

    const shownArticles = 3
    const maxArticles = 12

    return (
        <section className="articles-news" style={{backgroundColor: `${_bgColor}`}}>
            <div className="container">
                <div className="top d-flex">
                    <div className="text">
                        <p className="highlight">Articles & news</p>
                        <h2 className="display-3">Get every single article & news</h2>
                    </div>
                    <div className="btngroup">
                        <Link to="/news" className="btn btn-w">Browse articles</Link>
                    </div>
                </div>
                <ArticleGrid 
                    _shownArticles={shownArticles} _maxArticles={maxArticles}
                />
            </div>
        </section>
    )
}

export default feedNews

// const getArticles = async () => {
//     try {
//         const result = await fetch(`${apiUrl}/articles`)
//         //const articles = await result
        
//         return Promise.resolve(result)
//     }
//     catch(err) {
//         console.warn(err)
//     }
// }
