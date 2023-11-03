import React from 'react'
import ArticleGrid from '../../utilities/articleGrid/articleGrid'

const overviewNews = () => {
    const shownArticles = null //null = all
    const maxArticles = null

    return (
    <section className='overview-news'>
            <div className='container'>
                <ArticleGrid 
                    shownArticles={shownArticles} maxArticles={maxArticles}
                />
            </div>
        </section>
  )
}

export default overviewNews