import React from 'react'
import ArticleGrid from '../../utilities/articleGrid/articleGrid'

const overviewNews = () => {
    const shownArticles = 9 
    const maxArticles = null //null = all

    return (
    <section className='overview-news'>
            <div className='container'>
                <ArticleGrid 
                    _shownArticles={shownArticles} _maxArticles={maxArticles}
                />
            </div>
        </section>
  )
}

export default overviewNews