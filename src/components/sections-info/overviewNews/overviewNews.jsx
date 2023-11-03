import React from 'react'
import ArticleGrid from '../../utilities/articleGrid/articleGrid'

const overviewNews = () => {
    const shownArticles = 3 //null = all
    const maxArticles = 12

    return (
    <section className='overview-news'>
            <div className='container'>
                <ArticleGrid 
                    // shownArticles={shownArticles} maxArticles={maxArticles}
                />
            </div>
        </section>
  )
}

export default overviewNews