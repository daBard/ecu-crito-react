import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ArticleGrid from '../../utilities/articleGrid/ArticleGrid'
import HighlightHeading from '../../utilities/highlightHeading/HighlightHeading'

const feedNews = ({ _bgColor= '$bg-white' }) => {

    const highlight = 'Articles & news'
    const title = 'Get every single article & news'
    const shownArticles = 3
    const maxArticles = 12

    return (
        <section className="articles-news" style={{backgroundColor: `${_bgColor}`}}>
            <div className="container">
                <div className="top d-flex">
                    <div className="text">
                        <HighlightHeading
                            _highlight={highlight} _title={title}
                        />
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
