import React from 'react'

import Hero from '../components/sections-info/smallHero/smallHero'
import ArticleNews from '../components/sections-info/articleNews/articleNews'
import FeedNews from '../components/sections-info/feedNews/feedNews'

const NewsDetails = () => {

  const bgColor = '#f0efe9'

  return (
    <main className="w-100 news-details">
      <Hero 
        _link='news' _title='News & Articles'
      />
      <ArticleNews />
      <FeedNews 
        _bgColor={bgColor}
      />
    </main>
  )
}

export default NewsDetails