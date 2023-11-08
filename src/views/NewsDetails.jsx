import React from 'react'

import Header from '../components/header-footer/header'
import Footer from '../components/header-footer/footer'
import Hero from '../components/sections-info/smallHero/smallHero'
import ArticleNews from '../components/sections-info/articleNews/articleNews'
import FeedNews from '../components/sections-info/feedNews/feedNews'

const NewsDetails = () => {

  const bgColor = '#f0efe9'

  return (

    <>
    <Header />
    <main className="w-100 news-details">
      <Hero 
        _link='news' _title='News & Articles'
      />
      <ArticleNews />
      <FeedNews 
        _bgColor={bgColor}
      />
    </main>
    <Footer />
    </>
  )
}

export default NewsDetails