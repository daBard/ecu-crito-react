import React from 'react'
import ArticleGrid from '../../utilities/articleGrid/ArticleGrid'

const overviewNews = () => {
    const shownArticles = 9 
    const maxArticles = null //null = all

    return (
    <section className='overview-news'>
            <div className='container'>
                <h2>Our news & articles</h2>
                <ArticleGrid 
                    _shownArticles={shownArticles} _maxArticles={maxArticles}
                />
        </div>
    </section>
  )
}

export default overviewNews